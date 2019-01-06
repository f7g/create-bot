import { BotFrameworkAdapter } from 'botbuilder';
import * as express from 'express';

const PORT = 3978;
const server = express();

const adapter = new BotFrameworkAdapter({
  appId: process.env.BOT_APP_ID,
  appPassword: process.env.BOT_APP_PASSWORD,
});

server.post('/api/messages', (req, res) => {
  adapter.processActivity(req, res, async (turnContext) => {
    if (turnContext.activity.type === 'message') 
      await turnContext.sendActivity(`Echo: "${turnContext.activity.text}".`);
    else
      await turnContext.sendActivity(`${turnContext.activity.type} detected.`);
  });
});

server.listen(process.env.port || process.env.PORT || PORT, () => {
  console.log(`${server.name} listening on port: ${PORT}`);
});