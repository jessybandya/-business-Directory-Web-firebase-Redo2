import { createChatBotMessage } from "react-chatbot-kit";
import Overview from "../chatBot/widgets/Overview";

import GlobalStatistics from "../chatBot/widgets/GlobalSatistics";
import LocalStatistics from "../chatBot/widgets/LocatStatistics";
import Contact from "../chatBot/widgets/Contact";
import MedicineDelivery from "../chatBot/widgets/MedicineDelivery";
import CoBotAvatar from "./CoBotAvatar";

const config = {
  lang: "no",
  botName: "Daredream Cobot",
  customStyles: {
    botMessageBox: {
      backgroundColor: "#00BFFF"
    },
    chatButton: {
      backgroundColor: "#00BFFF"
    }
  },
  initialMessages: [
    createChatBotMessage(
      `Hi, I'm here to provide you with latest COVID 19 data to keep you safe!`
    ),
    createChatBotMessage(
      "Here's a quick overview of what I can help you with. You can also type in.",
      {
        withAvatar: false,
        delay: 400,
        widget: "overview"
      }
    )
  ],
  state: {},
  customComponents: { botAvatar: (props) => <CoBotAvatar {...props} /> },
  widgets: [
    {
      widgetName: "overview",
      widgetFunc: (props) => <Overview {...props} />,
      mapStateToProps: ["messages"]
    },
    {
      widgetName: "globalStatistics",
      widgetFunc: (props) => <GlobalStatistics />
    },
    {
      widgetName: "localStatistics",
      widgetFunc: (props) => <LocalStatistics />
    },
    {
      widgetName: "emergencyContact",
      widgetFunc: (props) => <Contact />
    },
    {
      widgetName: "medicineDelivery",
      widgetFunc: (props) => <MedicineDelivery />
    }
  ]
};

export default config;
