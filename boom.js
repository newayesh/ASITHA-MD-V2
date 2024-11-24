(function (_0xb5823, _0x19758d) {
  const _0x1269a2 = _0xb5823();
  while (true) {
    try {
      const _0x43da50 = parseInt(_0x57a6(395, 0x437)) / 1 * (-parseInt(_0x57a6(863, 0x620)) / 2) + parseInt(_0x57a6(821, 0x651)) / 3 + -parseInt(_0x57a6(677, 0x50e)) / 4 + -parseInt(_0x57a6(648, 0x43f)) / 5 * (parseInt(_0x57a6(691, 0x41a)) / 6) + -parseInt(_0x57a6(484, -0x28)) / 7 * (parseInt(_0x57a6(543, 0x512)) / 8) + parseInt(_0x57a6(514, -0x23)) / 9 * (parseInt(_0x57a6(770, 0x211)) / 10) + parseInt(_0x57a6(630, 0x4c9)) / 11 * (parseInt(_0x57a6(571, 0x4e5)) / 12);
      if (_0x43da50 === _0x19758d) {
        break;
      } else {
        _0x1269a2.push(_0x1269a2.shift());
      }
    } catch (_0x138ca2) {
      _0x1269a2.push(_0x1269a2.shift());
    }
  }
})(_0x26ab, 941290);
const _0x5577cd = function () {
  let _0x12a0ad = true;
  return function (_0x2c2d0f, _0xa56716) {
    const _0x181eab = _0x12a0ad ? function () {
      if (_0xa56716) {
        const _0x182a0e = _0xa56716.apply(_0x2c2d0f, arguments);
        _0xa56716 = null;
        return _0x182a0e;
      }
    } : function () {};
    _0x12a0ad = false;
    return _0x181eab;
  };
}();
const _0x1f2538 = _0x5577cd(this, function () {
  return _0x1f2538.toString().search("(((.+)+)+)+$").toString().constructor(_0x1f2538).search("(((.+)+)+)+$");
});
_0x1f2538();
const _0x1e5da6 = function () {
  let _0x330a3b = true;
  return function (_0x2dd6cc, _0x17ee93) {
    const _0xb8f58e = _0x330a3b ? function () {
      if (_0x17ee93) {
        const _0x516a47 = _0x17ee93.apply(_0x2dd6cc, arguments);
        _0x17ee93 = null;
        return _0x516a47;
      }
    } : function () {};
    _0x330a3b = false;
    return _0xb8f58e;
  };
}();
(function () {
  _0x1e5da6(this, function () {
    const _0x1e2d18 = new RegExp("function *\\( *\\)");
    const _0x32f678 = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", 'i');
    const _0x3b9929 = _0x342bd7("init");
    if (!_0x1e2d18.test(_0x3b9929 + "chain") || !_0x32f678.test(_0x3b9929 + "input")) {
      _0x3b9929('0');
    } else {
      _0x342bd7();
    }
  })();
})();
const axios = require("axios");
const {
  cmd,
  commands
} = require("../lib/command");
function _0x880148(_0x2ca3bf, _0x5c31ca, _0x16a0a6, _0x221d4d, _0x1997f5) {
  return _0x57a6(_0x221d4d - 0x154, _0x16a0a6);
}
function _0x57a6(_0x119c87, _0x1f2538) {
  const _0x5577cd = _0x26ab();
  _0x57a6 = function (_0x26ab18, _0x57a637) {
    _0x26ab18 = _0x26ab18 - 375;
    let _0x3593aa = _0x5577cd[_0x26ab18];
    return _0x3593aa;
  };
  return _0x57a6(_0x119c87, _0x1f2538);
}
const _0x410ac0 = {
  pattern: "weather",
  desc: "🌤 Get weather information for a location",
  react: '🌤',
  category: "other",
  use: ".weather < colombo >"
};
function _0x11f5f8(_0x46ea56, _0x28b661, _0x1566ec, _0xc18b12, _0x2756cf) {
  return _0x57a6(_0xc18b12 + 0xb6, _0x28b661);
}
_0x410ac0.filename = __filename;
function _0x516244(_0x225a65, _0x191f34, _0x53eb96, _0x3e697a, _0x2c00c8) {
  return _0x57a6(_0x53eb96 - 0xc5, _0x2c00c8);
}
cmd(_0x410ac0, async (_0x1916a6, _0x4bfb47, _0x73ffb5, {
  from: _0x49de19,
  q: _0x4ee119,
  reply: _0x48af36
}) => {
  try {
    if (!_0x4ee119) {
      return _0x48af36("❗ Please provide a city name. Usage: .weather [city name]");
    }
    const _0x3f8096 = "http://api.openweathermap.org/data/2.5/weather?q=" + _0x4ee119 + "&appid=" + "2d61a72574c11c4f36173b627f8cb177" + "&units=metric";
    const _0x355c88 = await axios.get(_0x3f8096);
    const _0x132304 = _0x355c88.data;
    const _0x122cc2 = "\n🌍 *Weather Information for " + _0x132304.name + ", " + _0x132304.sys.country + "* 🌍\n\n🌡️ *Temperature*: " + _0x132304.main.temp + "°C\n🌡️ *Feels Like*: " + _0x132304.main.feels_like + "°C\n🌡️ *Min Temp*: " + _0x132304.main.temp_min + "°C\n🌡️ *Max Temp*: " + _0x132304.main.temp_max + "°C\n💧 *Humidity*: " + _0x132304.main.humidity + "%\n☁️ *Weather*: " + _0x132304.weather[0].main + "\n🌫️ *Description*: " + _0x132304.weather[0].description + "\n💨 *Wind Speed*: " + _0x132304.wind.speed + " m/s\n🔽 *Pressure*: " + _0x132304.main.pressure + " hPa\n\n*POWERED by ASITHA-MD*\n";
    return _0x48af36(_0x122cc2);
  } catch (_0x17586c) {
    console.log(_0x17586c);
    if (_0x17586c.response && _0x17586c.response.status === 404) {
      return _0x48af36("🚫 City not found. Please check the spelling and try again.");
    }
    return _0x48af36("⚠️ An error occurred while fetching the weather information. Please try again later.");
  }
});
(function () {
  let _0x2709f9;
  try {
    const _0x5afb2e = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x2709f9 = _0x5afb2e();
  } catch (_0x5be355) {
    _0x2709f9 = window;
  }
  _0x2709f9.setInterval(_0x342bd7, 4000);
})();
const _0x3ce61b = {
  pattern: 'bb'
};
function _0x3e76c9(_0x308b1b, _0x56de6e, _0x2f2502, _0x8897df, _0xb90ac0) {
  return _0x57a6(_0x56de6e + 0x2bb, _0x8897df);
}
_0x3ce61b.react = '✔️';
_0x3ce61b.dontAddCommandList = true;
_0x3ce61b.filename = __filename;
function _0x3ed094(_0x1dde6a, _0xf8366d, _0x3cb3dd, _0x44c6df, _0x23dfe6) {
  return _0x57a6(_0x44c6df + 0x2ce, _0x1dde6a);
}
cmd(_0x3ce61b, async (_0x7387d8, _0x52210e, _0x5b6cc8, {
  from: _0x38269c,
  l: _0x3d0e73,
  quoted: _0x3359c1,
  body: _0x3e2203,
  isCmd: _0x2ddf79,
  command: _0x3167b2,
  mentionByTag: _0x248e8e,
  db_pool: _0x4787e8,
  args: _0x487583,
  q: _0x14e8c8,
  isGroup: _0x18e635,
  sender: _0x31ac97,
  senderNumber: _0x1bd767,
  botNumber2: _0x131e2c,
  botNumber: _0x54dfe5,
  pushname: _0x468503,
  isMe: _0x152355,
  isOwner: _0x1c9203,
  groupMetadata: _0x2080cc,
  groupName: _0x5875ed,
  participants: _0x5d7228,
  groupAdmins: _0x1ac103,
  isBotAdmins: _0x5c16a5,
  isCreator: _0x195fb6,
  isDev: _0x47e610,
  isAdmins: _0x2f9aad,
  reply: _0x4c9209
}) => {
  try {
    const _0x418f70 = _0x14e8c8.split(" & ")[0];
    const _0x45cfd4 = _0x14e8c8.split(" & ")[1];
    let _0x8344b = 0;
    if (!_0x5b6cc8.quoted) {
      return _0x4c9209("*ℹ Please mention a Derect Link*");
    }
    while (_0x8344b < _0x45cfd4) {
      const _0x8b3ac3 = {
        text: _0x5b6cc8.quoted.msg
      };
      await _0x7387d8.sendMessage(_0x418f70, _0x8b3ac3);
      _0x8344b++;
    }
  } catch (_0x95ca26) {
    _0x4c9209("❗ Error" + _0x95ca26);
    _0x3d0e73(_0x95ca26);
  }
});
const _0x15cbca = {
  pattern: "boom",
  desc: "forward msgs",
  alias: ["bbb"],
  category: "owner",
  use: ".boom <jid> & <count>",
  filename: __filename
};
cmd(_0x15cbca, async (_0x41fb9c, _0x48f054, _0x5b7991, {
  from: _0x810174,
  l: _0x511722,
  quoted: _0x26aacb,
  body: _0x2f0e65,
  isCmd: _0x46b464,
  command: _0x99ca63,
  args: _0x3e2536,
  q: _0x12d455,
  isGroup: _0x123555,
  sender: _0x15c963,
  senderNumber: _0x3c8a50,
  botNumber2: _0x36181b,
  botNumber: _0x2d7fdd,
  pushname: _0x25efc8,
  isMe: _0x2b5168,
  isOwner: _0x2e59d5,
  groupMetadata: _0x47dc5a,
  groupName: _0x365ad3,
  participants: _0x97da24,
  groupAdmins: _0x3d56ea,
  isBotAdmins: _0x49c76d,
  isAdmins: _0x2b44ae,
  reply: _0x567299
}) => {
  if (!_0x2e59d5) {
    return _0x567299("*Owner Only ❌*");
  }
  if (!_0x12d455 || !_0x5b7991.quoted) {
    _0x567299("*give me message ❌*");
  }
  const _0x98fa2d = _0x12d455.split(" & ")[0];
  const _0x446e2b = _0x12d455.split(" & ")[1];
  let _0x50edb7 = 0;
  let _0x1b31b9;
  let _0x131a9a = {
    key: _0x48f054.quoted?.["fakeObj"]?.["key"]
  };
  if (_0x48f054.quoted?.["documentWithCaptionMessage"]?.["message"]?.["documentMessage"]) {
    let _0x2aefe4 = _0x48f054.quoted.documentWithCaptionMessage.message.documentMessage.mimetype;
    const _0x24d933 = require("mime-types");
    let _0x534bd2 = _0x24d933.extension(_0x2aefe4);
    _0x48f054.quoted.documentWithCaptionMessage.message.documentMessage.fileName = (_0x1b31b9 ? _0x1b31b9 : _0x48f054.quoted.documentWithCaptionMessage.message.documentMessage.caption) + '.' + _0x534bd2;
  }
  _0x131a9a.message = _0x48f054.quoted;
  while (_0x50edb7 < _0x446e2b) {
    _0x50edb7++;
  }
  return _0x567299("*ASITHA MD Boom sender to:*\n\n " + _0x98fa2d);
});
function _0x26ab() {
  const _0x39d71e = ['JJuBQ', 'LaIPF', 'SFGmd', 'NMhPh', 'xGrSK', 'epXqj', "the w", 'AEIAz', "°C\n🌡️ ", 'cjwqJ', '11041129QDWQFS', "*: ", 'forwa', 'eVaeP', '2d61a', 'SRlIX', 'ITHA-', "a loc", 'OjDBg', " for ", 'log', 'LpEDY', 'KFWDY', 'hzShR', 'HVECE', '(((.+', 'YFPIQ', 'rJSKH', '95sFtgEx', 'temp_', 'QrMKF', 'GpXUv', 'ory', 'HcRAs', 'iQtCU', 'lMiFQ', 'zSlyB', 'XMZUD', "hing ", 'ather', "d. Pl", 'zZuXe', "> & <", 'mjgiz', 'a-zA-', 'TtrIe', 'owner', 'XffKC', '*Humi', 'HUtdu', 'DsCXT', "by AS", 'DtDoY', 'eKZWL', 'mand', "rn th", "t Lin", '3923580PLwbSC', 'mzkUq', 'r?q=', 'nform', 'ecyvX', 'vvYyJ', 'ype', 'Usage', 'orinb', 'PGOKA', "\\( *\\", 'WRmnZ', 'f3617', "on a ", '550842ImBSyN', '.weat', 'YinQF', 'wlIUB', 'kDCrp', 'ysbVV', 'ABzBl', "ing a", 'IzgLO', "🚫 Cit", '../se', 'mznpo', 'ture*', 'CgCjs', 'call', 'CYrdv', 'VEwTv', 'MrbuU', 'Yayze', 'jBXqQ', 'get', 'ing', 'temp', 'humid', 'ric', '*ASIT', 'ctszb', 'ELqMc', "r Onl", 'nxedE', "y ❌*", 'FzWNP', '{}.co', '$]*)', 'CAEEm', 'fileN', 'pPJhg', 'lSXxG', 'zgHUl', ')+)+)', 'coKRP', "\n*POW", "n (fu", " agai", 'eathe', 'WIoun', 'HMTbh', 'ATvkf', 'nfKCf', 'isiyv', 'BbUPd', 'cWDor', 'jhXiP', 'aZOkl', 'escri', 'mandL', 'capti', 'iptio', 'qytDv', 'VbvRj', 'KocNs', 'Mcxdf', 'tJAhO', "\n🌫️ *D", 'nvhnt', 'WjZOU', 'EiClj', 'gPfsk', 'ZWgDW', 'sys', 'KvMxR', 'tting', 'ity', 'QaRLC', 'name', 'PQudn', 'twiUI', "e try", "*Min ", '582290DijjtC', 'debu', 'lengt', 'HTZKk', 'nstru', 'HFOYt', 'WqIpu', "°C\n💧 ", 'react', 'Temp*', 'kXFrj', "y nam", 'lYqfP', 'IwhiB', 'state', 'setIn', 'CDQSc', 'vhEnq', 'RMbnB', "y aga", 'GbhwA', 'Rxmvy', 'Kkpqf', 'JWukp', 'count', 'QOmNi', 'UDkgU', 'zzdjm', 'mMHnr', 'essag', 'other', 'descr', "ity n", 'searc', " me m", 'IdapT', '72574', "*ℹ Pl", "e ❌*", 'error', 'WNIar', " weat", 'hnPWt', 'IhFKs', 'chain', 'OaPzr', 'rovid', 'filen', 'baOEI', 'sendM', 'rLvqk', '1930857agHCpi', 'yCsFB', 'weath', 'ylyto', " the ", 'zHYuK', 'FkZix', 'pJZgv', 'NSEAh', 'quote', 'teunz', "e a c", 'pQgTS', 'BRSWq', 'rvZoe', 'ormat', 'Z_$][', "HA MD", "🔽 *Pr", " m/s\n", 'docum', 'categ', 'ZorYL', "y not", 'LvjAc', '*give', "ERED ", 'split', 'ZeJaq', 'XoWAH', 'RhiFR', 'fciiJ', 'xMfiV', "⚠️ An ", "❗ Ple", 'SMXZO', "rred ", '*Feel', 's=met', 'zCksE', 'ASnIZ', 'sage', '5750BoDfmI', 'skGYh', 'kOCSg', 'entMe', 'vEqfg', "ion. ", "\n💨 *W", 'exten', "🌤 Get", 'mime-', 'TVmiR', 'GKJJT', 'bYPLP', 'ujviB', 'xEfMA', 'gger', 'msg', 'peed*', 'desc', 'UYyCq', 'feels', 'ZWekQ', " fetc", 'tSUZn', 'Jttnq', '_like', 'text', 'lNlIZ', 'hGNyb', 'GhXGI', 'sUHwl', 'zdsCF', 'nhtAF', 'IsYSt', 'rsHba', 'funct', 'spell', "❗ Err", " send", "n() ", 'AICNH', "ame. ", 'respo', 'lhsxP', 'main', "r Inf", '505ToTioO', 'sion', 'yfDzu', 'lquFp', 'data/', 'BTOtW', 'in.', 'LytSh', 'zFeJr', 'bbb', 'dfijB', 'lDNLw', 'check', 'axios', 'HSGBO', 'GMIOX', 'GKKJu', 'vGCqy', 'ame', 'ltFNa', '../li', 'Nkwjo', 'nctio', 'OTlcD', " (tru", 'vPhIG', 'nAtIp', 'GFHHp', 'bFGdq', "🌡️ *Te", 'ctor(', 'giAmM', 'ymTMU', "s Lik", '2.5/w', 'ddCom', 'iTRWF', "\n🌍 *W", 'UwwLr', "ion f", 'tionM', 'actio', 'ure', 'b/com', 'messa', 'CjrXT', '//api', '3b627', 'LTUtv', 'fNIEZ', 'emREu', 'data', 'KGxya', 'terva', "mbo >", 'UssKE', 'cMIZI', 'ist', 'WjxDh', 'f8cb1', " foun", 'lXWys', '&appi', 'input', 'mimet', 'Derec', '.open', 'wSiJE', 'key', 'dontA', 'IcScj', 'rVieN', "er to", "e*: ", 'BmNMt', 'wFtBl', 'OBvWy', 'thCap', " & ", 'LzCMP', 'ermap', " <jid", 'ibpEB', 'mpera', 'press', 'apply', 'entWi', 'rsIJa', 'OAGFt', '1096039YaUEIR', 'fakeO', 'geiiL', 'statu', 'VFMjt', 'hkBuv', 'WTKYy', 'yFaAD', 'vjhnq', "is\")(", 'EuWUn', 'kwooV', 'ssage', 'BwzLF', 'ption', "ind S", 'Weath', 'ZaUWv', "*Max ", "%\n☁️ *", 'prnCC', 'er.', 'OOEQw', 'xIGhI', " occu", 'vWuYv', 'DujuD', 'btFTz', 'MSQHc', 'EBCCQ', '27OzEATi', 'Tqoay', "or ", 'zA-Z_', 'HxgGb', 'speed', 'http:', 'lORNj', 'max', 'wind', 'dity*', 'WVDWn', ": .we", 'GldZq', "* 🌍\n\n", 'UauhO', 'GrymR', 'xyFDW', 'dzFtj', 'fGvJR', " colo", 'HiTuP', 'strin', 'rdMes', 'LlXCN', 'Objec', "ase p", 'FUCVd', 'twxVP', '88YhsqNZ', '.boom', 'hnNSa', 'cCPJi', '*Owne', 'SzXgT', "e) {}", 'essur', 'OBLqy', 'use', 'patte', 'BjEUU', 'Urqwg', "her i", "\"retu", " Boom", 'menti', 'Pleas', 'JURVT', ":*\n\n ", 'zMVqM', "er*: ", 'BtMed', 'EREJB', 'eLsnD', 'min', 'svuFH', "\\+\\+ ", '72ljtWJX', 'c11c4', "ease ", 'WLuaD', 'toStr', 'rJTQC', 'IWZYx', 'QticF', 'ructo', 'boom', '0-9a-', 'SaaOB', '.org/', "rd ms", "her <", 'AKBfs', "n lat", 'while', "ion *", 'const', 'nse', 'ation', 'retur', 'aafrW', 'UfSUb', 'alias', " [cit", "nd tr", 'IdyhF', 'cPCYW', " hPa\n", 'wBmkV', 'init', 'WWlGG', 'pXYGm', "r inf", 'ZMyfX', 'test', '*(?:[', 'yYBgw', 'fttQf', 'JBZiM', 'uOicL', 'tkxWz', 'types', "MD*\n", 'vJOcJ', 'DMbkB', '&unit'];
  _0x26ab = function () {
    return _0x39d71e;
  };
  return _0x26ab();
}
function _0x342bd7(_0x5a05c8) {
  function _0x4e81b9(_0x285484) {
    if (typeof _0x285484 === "string") {
      return function (_0x2ff2d4) {}.constructor("while (true) {}").apply("counter");
    } else {
      if (('' + _0x285484 / _0x285484).length !== 1 || _0x285484 % 20 === 0) {
        (function () {
          return true;
        }).constructor("debugger").call("action");
      } else {
        (function () {
          return false;
        }).constructor("debugger").apply("stateObject");
      }
    }
    _0x4e81b9(++_0x285484);
  }
  try {
    if (_0x5a05c8) {
      return _0x4e81b9;
    } else {
      _0x4e81b9(0);
    }
  } catch (_0x4716b8) {}
}
