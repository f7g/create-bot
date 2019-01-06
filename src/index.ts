import { BotFrameworkAdapter } from 'botbuilder';
import * as express from 'express';
import EchoBot from './bots/Echo';

const PORT = 3978;
const server = express();
const echoBot = new EchoBot();
const adapter = new BotFrameworkAdapter({
  appId: process.env.BOT_APP_ID,
  appPassword: process.env.BOT_APP_PASSWORD,
});

server.post('/api/messages', (req, res) => {
  adapter.processActivity(req, res, async (turnContext) => await echoBot.onTurn(turnContext));
});

server.listen(process.env.port || process.env.PORT || PORT, () => {
  console.log(`${server.name} listening on port: ${PORT}`);
});