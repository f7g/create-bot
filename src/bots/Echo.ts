import { TurnContext } from 'botbuilder';

class EchoBot {
  async onTurn(turnContext: TurnContext) {
    if (turnContext.activity.type === 'message') 
      await turnContext.sendActivity(`Echo: "${turnContext.activity.text}".`);
    else
      await turnContext.sendActivity(`${turnContext.activity.type} detected.`);
  }
}

export default EchoBot;