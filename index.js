function _0x20166e(_0x34f095, _0x4aff07, _0x2295a1, _0x47c7c2, _0x5b5e71) {
  return _0x138c(_0x34f095 - 0x237, _0x5b5e71);
}
(function (_0x5581fe, _0x1bcc30) {
  const _0x1c07e3 = _0x5581fe();
  while (true) {
    try {
      const _0x53532e = parseInt(_0x138c(819, "jb7@")) / 1 * (parseInt(_0x138c(733, "Y2IS")) / 2) + parseInt(_0x138c(1005, "v8n)")) / 3 + -parseInt(_0x138c(1126, "@JwA")) / 4 * (-parseInt(_0x138c(1579, "cEKH")) / 5) + -parseInt(_0x138c(745, "9^w#")) / 6 * (parseInt(_0x138c(1066, "hYzK")) / 7) + parseInt(_0x138c(348, "q8WB")) / 8 * (-parseInt(_0x138c(1208, "7^pO")) / 9) + -parseInt(_0x138c(1408, "vDWg")) / 10 * (-parseInt(_0x138c(614, "3r%X")) / 11) + -parseInt(_0x138c(1047, "pTi$")) / 12;
      if (_0x53532e === _0x1bcc30) {
        break;
      } else {
        _0x1c07e3.push(_0x1c07e3.shift());
      }
    } catch (_0x51ac31) {
      _0x1c07e3.push(_0x1c07e3.shift());
    }
  }
})(_0x545f, 927501);
const express = require(_0x138c(1616, "JQVw") + "ss");
const path = require(_0x138c(462, "RHDI"));
const {
  execSync,
  fork
} = require(_0x138c(512, "IKX(") + _0x138c(1687, "7^pO") + _0x138c(701, "pfHX"));
const fs = require("fs");
console[_0x138c(741, "cEKH")]();
const app = express();
const PORT = process.env.PORT || 5000;
const REPO_URL = _0x138c(523, "8)%p") + _0x138c(1296, "p)po") + _0x138c(1398, "oBwa") + _0x138c(773, "ZdAM") + _0x138c(1187, "7^pO") + _0x138c(1599, "3r%X") + _0x138c(1484, "fnjG") + _0x138c(347, "IKX(");
const NPM_DIR = path[_0x138c(1097, "fBL^")](__dirname, _0x138c(1054, "!CBh"));
const BOT_DIR = path[_0x138c(580, "!vo*")](NPM_DIR, _0x138c(809, "cEKH"), _0x138c(425, "@JwA"), _0x138c(862, "%gym"), _0x138c(1424, "yLPD"), _0x138c(553, "8)%p"), _0x138c(1196, "!vo*"), _0x138c(739, "pfHX"), _0x138c(1350, "oBwa"), _0x138c(844, "Q#rY"), _0x138c(1436, "yLPD"), _0x138c(1033, "I#OK"), _0x138c(792, "FU7#"), _0x138c(1351, "dqbj"), _0x138c(1180, "jb7@"), _0x138c(370, "CMir"), _0x138c(1426, "hYzK"), _0x138c(1587, "vDWg"), _0x138c(955, "Vbfc"), _0x138c(1185, "7^pO"), _0x138c(576, "hYzK"), _0x138c(1198, "!CBh"), _0x138c(1210, "Vbfc"), _0x138c(869, "pfHX"), _0x138c(1299, "pTi$"), _0x138c(469, "HJY["), _0x138c(1781, "q8WB"), _0x138c(617, "pfHX"), _0x138c(1452, "8)%p"), _0x138c(1563, "XBYf"), _0x138c(1146, "9^w#"));
let botProcess = null;
let botStatus = _0x138c(1347, "pfHX") + "ed";
let dbWatchers = [];
const DB_BACKUP_DIR = path[_0x138c(1548, "@JwA")](__dirname, _0x138c(634, "dqbj") + _0x138c(527, "oBwa"));
function _0x21b9ff(_0x3cb0d1, _0x1916ec, _0x340dfa, _0x1da06c, _0x4b79f4) {
  return _0x138c(_0x1da06c - 0x4, _0x340dfa);
}
const DB_FILES = [_0x138c(817, "Y2IS") + _0x138c(573, "3r%X") + _0x138c(964, "pTi$") + _0x138c(856, "@[f9"), _0x138c(1057, "hYzK") + _0x138c(1006, "nS5n") + _0x138c(1229, "dqbj") + _0x138c(423, "Q#rY") + "hm", _0x138c(1143, "x48W") + _0x138c(1684, "*b9l") + _0x138c(1293, "*b9l") + _0x138c(1734, "RHDI") + "al", _0x138c(1433, "RHDI") + _0x138c(1034, "yLPD") + _0x138c(442, "Vbfc") + _0x138c(1165, "fnjG"), _0x138c(443, "nS5n") + _0x138c(1386, "hYzK") + _0x138c(725, "Vbfc") + _0x138c(995, "yLPD") + _0x138c(1485, "!vo*"), _0x138c(1648, "cEKH") + _0x138c(1078, "oBwa") + _0x138c(1394, "3r%X") + _0x138c(1403, "fBL^") + _0x138c(1544, "&kPW")];
function backupDbFiles() {
  const _0x2c7643 = {
    "KSvPq": function (_0x267372) {
      return _0x267372();
    },
    "KdzWm": _0x138c(1147, "x48W") + _0x138c(1116, "I#OK") + "d",
    "YyWfa": function (_0x3e9f34, _0x410146) {
      return _0x3e9f34 === _0x410146;
    },
    "tFJrv": _0x138c(1628, "9h41"),
    "phVsK": function (_0xe858a0, _0x264ad8) {
      return _0xe858a0 === _0x264ad8;
    },
    "bbOhE": _0x138c(915, "@[f9"),
    "uPGsG": _0x138c(1606, "q8WB"),
    "IrlZF": function (_0x4aa511, _0x1dfdd7) {
      return _0x4aa511 !== _0x1dfdd7;
    },
    "MPBiz": _0x138c(699, "ZdAM"),
    "uyKoZ": _0x138c(1773, "p)po"),
    "pxTbc": _0x138c(1074, "@JwA"),
    "UWxEN": _0x138c(815, "@[f9")
  };
  if (!fs[_0x138c(1316, "ZdAM") + _0x138c(455, "%gym")](DB_BACKUP_DIR)) {
    if (_0x2c7643[_0x138c(960, "h0IA")](_0x2c7643[_0x138c(1145, "3r%X")], _0x2c7643[_0x138c(454, "pfHX")])) {
      const _0x2c2944 = {
        [_0x138c(1268, "CMir") + _0x138c(1602, "JQVw")]: true
      };
      fs[_0x138c(976, "v8n)") + _0x138c(1223, "XJX]")](DB_BACKUP_DIR, _0x2c2944);
    } else {
      _0x188b5e[_0x138c(1462, "siFI") + _0x138c(1605, "8)%p") + "nc"](_0xbdce27, _0x5b3850);
    }
  }
  for (const _0x12a944 of DB_FILES) {
    if (_0x2c7643[_0x138c(881, "IKX(")](_0x2c7643[_0x138c(1098, "!vo*")], _0x2c7643[_0x138c(1329, "siFI")])) {
      _0x37f87c[_0x138c(1594, "0d^I") + "r"][_0x138c(1416, "JQVw")](_0x1aded5[_0x138c(1672, "9^w#") + _0x138c(904, "h0IA")]());
    } else {
      const _0x35ab4c = path[_0x138c(683, "*b9l")](BOT_DIR, _0x12a944);
      const _0x37f657 = path[_0x138c(1289, "fnjG")](DB_BACKUP_DIR, path[_0x138c(735, "HJY[") + _0x138c(1749, "cEKH")](_0x12a944));
      if (fs[_0x138c(921, "*b9l") + _0x138c(751, "*b9l")](_0x35ab4c)) {
        if (_0x2c7643[_0x138c(754, "LEa@")](_0x2c7643[_0x138c(1207, "Vbfc")], _0x2c7643[_0x138c(799, "FU7#")])) {
          try {
            if (_0x2c7643[_0x138c(687, "vDWg")](_0x2c7643[_0x138c(1719, "%gym")], _0x2c7643[_0x138c(986, "Vbfc")])) {
              fs[_0x138c(653, "eg!9") + _0x138c(371, "Q#rY") + "nc"](_0x35ab4c, _0x37f657);
            } else {
              try {
                _0x178ade[_0x138c(868, "XBYf")]();
              } catch (_0x1cf43c) {}
              _0x33f8d3 = null;
            }
          } catch (_0x427b15) {}
        } else {
          _0x2c7643[_0x138c(823, "Q#rY")](_0x4d7a6f);
          const _0x18bd76 = {
            [_0x138c(1311, "0d^I") + "ss"]: true,
            [_0x138c(379, "dqbj") + "ge"]: _0x2c7643[_0x138c(902, "FU7#")]
          };
          _0x120a22[_0x138c(1572, "vDWg")](_0x18bd76);
        }
      }
    }
  }
}
function restoreDbFiles() {
  const _0x10eb46 = {
    [_0x138c(859, "!vo*")]: _0x138c(375, "@JwA") + _0x138c(406, "0d^I") + _0x138c(616, "Vbfc") + _0x138c(410, "joQz") + _0x138c(1476, "&kPW"),
    [_0x138c(884, "oBwa")]: _0x138c(618, "YC&1") + _0x138c(382, "dqbj") + "on",
    [_0x138c(1117, "XBYf")]: _0x138c(349, "nS5n"),
    [_0x138c(871, "p)po")]: _0x138c(1399, "9h41") + _0x138c(441, "@JwA") + _0x138c(1626, "vDWg"),
    [_0x138c(812, "RHDI")]: _0x138c(1457, "0d^I"),
    [_0x138c(987, "@JwA")]: _0x138c(748, "siFI") + _0x138c(478, "!vo*"),
    [_0x138c(1765, "RHDI")]: function (_0xc46af0, _0x2942ef) {
      return _0xc46af0 !== _0x2942ef;
    },
    [_0x138c(790, "pfHX")]: _0x138c(1407, "XBYf"),
    [_0x138c(503, "h0IA")]: function (_0x5a9069, _0xe1be42) {
      return _0x5a9069 === _0xe1be42;
    },
    [_0x138c(1202, "vDWg")]: _0x138c(1015, "yLPD"),
    [_0x138c(1746, "Y2IS")]: _0x138c(1552, "0d^I"),
    [_0x138c(1177, "jb7@")]: _0x138c(874, "hYzK")
  };
  if (!fs[_0x138c(661, "JQVw") + _0x138c(1486, "nS5n")](DB_BACKUP_DIR)) {
    return;
  }
  const _0x58de4e = path[_0x138c(681, "pTi$")](BOT_DIR, _0x10eb46[_0x138c(1209, "x48W")]);
  const _0x1373d1 = {
    [_0x138c(1669, "YC&1") + _0x138c(905, "^tOR")]: true
  };
  if (!fs[_0x138c(1378, "9h41") + _0x138c(461, "@JwA")](_0x58de4e)) {
    fs[_0x138c(899, "FU7#") + _0x138c(1201, "jb7@")](_0x58de4e, _0x1373d1);
  }
  for (const _0x2ba041 of DB_FILES) {
    if (_0x10eb46[_0x138c(457, "h0IA")](_0x10eb46[_0x138c(1607, "^tOR")], _0x10eb46[_0x138c(833, "LEa@")])) {
      const _0x402831 = _0x30b0b5[_0x138c(354, "v8n)")](_0x223c72, _0xdc1364[_0x138c(1359, "yLPD") + _0x138c(1312, "I#OK")](_0x12e9ef));
      const _0x5d6e8c = _0x1d31fe[_0x138c(1345, "vDWg")](_0x3fd2b9, _0x3c28b4);
      if (_0x438d95[_0x138c(1464, "siFI") + _0x138c(1791, "IKX(")](_0x402831)) {
        try {
          _0xa276ca[_0x138c(1523, "Q#rY") + _0x138c(709, "HJY[") + "nc"](_0x402831, _0x5d6e8c);
        } catch (_0x4010dd) {}
      }
    } else {
      const _0x1109ed = path[_0x138c(1345, "vDWg")](DB_BACKUP_DIR, path[_0x138c(1324, "&kPW") + _0x138c(1073, "&kPW")](_0x2ba041));
      const _0x2097dd = path[_0x138c(1379, "yLPD")](BOT_DIR, _0x2ba041);
      if (fs[_0x138c(356, "&kPW") + _0x138c(1353, "0d^I")](_0x1109ed)) {
        if (_0x10eb46[_0x138c(1325, "pTi$")](_0x10eb46[_0x138c(984, "&kPW")], _0x10eb46[_0x138c(984, "&kPW")])) {
          try {
            if (_0x10eb46[_0x138c(1249, "HJY[")](_0x10eb46[_0x138c(1281, "XJX]")], _0x10eb46[_0x138c(1291, "RHDI")])) {
              fs[_0x138c(669, "fBL^") + _0x138c(1195, "IKX(") + "nc"](_0x1109ed, _0x2097dd);
            } else {
              const _0x1ec4e6 = {
                [_0x138c(691, "oBwa") + "ss"]: false,
                [_0x138c(1481, "IKX(") + "ge"]: _0x10eb46[_0x138c(836, "nS5n")]
              };
              return _0x59c4e0[_0x138c(1568, "x48W")](_0x1ec4e6);
            }
          } catch (_0x34de44) {}
        } else {
          try {
            const _0x1f59e7 = _0x592d47[_0x138c(838, "JQVw")](_0x1283aa[_0x138c(1176, "@[f9") + _0x138c(1549, "cEKH") + "nc"](_0xd97991[_0x138c(1349, "YC&1")](_0x57ddf2, _0x10eb46[_0x138c(1023, "cEKH")]), _0x10eb46[_0x138c(1317, "HJY[")]));
            const _0x6863d9 = {
              [_0x138c(1590, "LEa@")]: _0x1f59e7[_0x138c(1519, "Y2IS")] || _0x10eb46[_0x138c(1233, "IKX(")],
              [_0x138c(1153, "!vo*") + "on"]: _0x1f59e7[_0x138c(1216, "eg!9") + "on"] || _0x10eb46[_0x138c(1451, "cEKH")]
            };
            return _0x6863d9;
          } catch (_0x1d1ec6) {
            const _0x21c0ad = {
              [_0x138c(590, "h0IA")]: _0x10eb46[_0x138c(1569, "fnjG")],
              [_0x138c(447, "LEa@") + "on"]: _0x10eb46[_0x138c(719, "!vo*")]
            };
            return _0x21c0ad;
          }
        }
      }
    }
  }
}
function startDbWatchers() {
  const _0x3c0486 = {
    "FOkmC": function (_0x5d43f9) {
      return _0x5d43f9();
    },
    "SOZGc": _0x138c(1738, "pfHX") + _0x138c(1174, "@[f9") + _0x138c(1459, "7^pO"),
    "beQDT": _0x138c(1744, "v8n)"),
    "URajr": function (_0x1cd5b9, _0x2880d3) {
      return _0x1cd5b9 !== _0x2880d3;
    },
    "zmLLu": _0x138c(609, "pfHX"),
    "ILPFZ": function (_0x548dd9) {
      return _0x548dd9();
    },
    "nCfap": function (_0x387ff6) {
      return _0x387ff6();
    },
    "SWypg": function (_0x444a73) {
      return _0x444a73();
    },
    "YUaWA": _0x138c(829, "8)%p"),
    "XvmJT": _0x138c(1418, "x48W"),
    "ObOBj": function (_0x3450ae, _0x496f5c) {
      return _0x3450ae !== _0x496f5c;
    },
    "PsqvL": _0x138c(449, "joQz"),
    "yidEd": _0x138c(1206, "*b9l"),
    "XIWLv": function (_0x772c40) {
      return _0x772c40();
    },
    "xTdIN": _0x138c(1709, "fBL^"),
    "zATvu": function (_0x38997b, _0x351677) {
      return _0x38997b + _0x351677;
    },
    "iCWBm": function (_0x557efd, _0x82475a, _0x1dc2f3) {
      return _0x557efd(_0x82475a, _0x1dc2f3);
    },
    "EkTjd": function (_0xc7b654, _0x2e68e7, _0x136561) {
      return _0xc7b654(_0x2e68e7, _0x136561);
    },
    "VOQsp": _0x138c(1492, "q8WB") + "e",
    "RzsLk": function (_0x2b7ed9) {
      return _0x2b7ed9();
    },
    "qTbiZ": function (_0x59bbdd, _0x1012e) {
      return _0x59bbdd === _0x1012e;
    },
    "AMtPe": _0x138c(1344, "vDWg"),
    "Eognk": _0x138c(789, "I#OK"),
    "xTkPN": _0x138c(695, "HJY["),
    "yshza": function (_0x39462b, _0x4281e8) {
      return _0x39462b !== _0x4281e8;
    },
    "yZJma": _0x138c(386, "Y2IS"),
    "ajBWV": _0x138c(1304, "^tOR"),
    "FfHHd": _0x138c(1336, "JQVw"),
    "hnQlt": _0x138c(1169, "Vbfc")
  };
  _0x3c0486[_0x138c(1322, "7^pO")](stopDbWatchers);
  for (const _0x44ccd2 of DB_FILES) {
    if (_0x3c0486[_0x138c(357, "FU7#")](_0x3c0486[_0x138c(1240, "&kPW")], _0x3c0486[_0x138c(422, "pTi$")])) {
      const _0x10ad83 = path[_0x138c(599, "XBYf")](BOT_DIR, _0x44ccd2);
      try {
        if (_0x3c0486[_0x138c(1768, "RHDI")](_0x3c0486[_0x138c(1123, "ZdAM")], _0x3c0486[_0x138c(797, "p)po")])) {
          const _0x548923 = {
            "pcWUz": function (_0x7c705d) {
              return _0x3c0486[_0x138c(1471, "nS5n")](_0x7c705d);
            }
          };
          const _0x597e73 = {
            [_0x138c(610, "cEKH") + _0x138c(1513, "x48W")]: false
          };
          const _0xed9da7 = _0x225328[_0x138c(1511, "v7!N")](_0x242620, _0x597e73, () => {
            _0x548923[_0x138c(1423, "v8n)")](_0x11c524);
          });
          _0x15cb1e[_0x138c(1680, "7^pO")](_0xed9da7);
        } else {
          if (fs[_0x138c(718, "Y2IS") + _0x138c(1333, "joQz")](_0x10ad83)) {
            if (_0x3c0486[_0x138c(1427, "p)po")](_0x3c0486[_0x138c(1391, "Vbfc")], _0x3c0486[_0x138c(1737, "CMir")])) {
              const _0x3bb0e1 = {
                [_0x138c(1796, "!vo*") + _0x138c(530, "XBYf")]: false
              };
              const _0x11fbd3 = fs[_0x138c(1080, "Q#rY")](_0x10ad83, _0x3bb0e1, () => {
                if (_0x3c0486[_0x138c(1657, "fnjG")](_0x3c0486[_0x138c(1100, "7^pO")], _0x3c0486[_0x138c(1235, "0d^I")])) {
                  const _0x3d0a2d = {
                    [_0x138c(1707, "cEKH")]: _0x3c0486[_0x138c(1204, "LEa@")],
                    [_0x138c(529, "7^pO") + "on"]: _0x3c0486[_0x138c(438, "ZdAM")]
                  };
                  return _0x3d0a2d;
                } else {
                  _0x3c0486[_0x138c(432, "7^pO")](backupDbFiles);
                }
              });
              dbWatchers[_0x138c(728, "siFI")](_0x11fbd3);
            } else if (_0x442f0e && _0x1cd9d2[_0x138c(1164, "siFI")](_0x3e60a5 => _0x21f6ba[_0x138c(1189, "h0IA") + _0x138c(777, "JQVw")](_0x3e60a5) === _0x1e4f10)) {
              _0x3c0486[_0x138c(1642, "fnjG")](_0x3bc026);
              _0x3c0486[_0x138c(972, "Y2IS")](_0xd14188);
            }
          } else {
            if (_0x3c0486[_0x138c(473, "fnjG")](_0x3c0486[_0x138c(1238, "3r%X")], _0x3c0486[_0x138c(785, "^tOR")])) {
              const _0x2bd806 = path[_0x138c(1562, "LEa@") + "me"](_0x10ad83);
              if (fs[_0x138c(1464, "siFI") + _0x138c(1440, "3r%X")](_0x2bd806)) {
                if (_0x3c0486[_0x138c(750, "x48W")](_0x3c0486[_0x138c(1280, "pTi$")], _0x3c0486[_0x138c(875, "joQz")])) {
                  const _0x39d4f1 = {
                    [_0x138c(766, "fnjG") + _0x138c(1468, "RHDI")]: false
                  };
                  const _0x4df215 = fs[_0x138c(546, "dqbj")](_0x2bd806, _0x39d4f1, (_0x3adf31, _0x2c1533) => {
                    const _0x3b098d = {
                      "IryNq": function (_0x127880) {
                        return _0x3c0486[_0x138c(431, "pfHX")](_0x127880);
                      }
                    };
                    if (_0x3c0486[_0x138c(1215, "YC&1")](_0x3c0486[_0x138c(1081, "joQz")], _0x3c0486[_0x138c(774, "*b9l")])) {
                      if (_0x2c1533 && DB_FILES[_0x138c(708, "IKX(")](_0x439af6 => path[_0x138c(639, "@[f9") + _0x138c(1312, "I#OK")](_0x439af6) === _0x2c1533)) {
                        if (_0x3c0486[_0x138c(1612, "CMir")](_0x3c0486[_0x138c(655, "ZdAM")], _0x3c0486[_0x138c(1308, "LEa@")])) {
                          _0x3c0486[_0x138c(369, "!CBh")](backupDbFiles);
                          _0x3c0486[_0x138c(1506, "fBL^")](startDbWatchers);
                        } else {
                          _0x22b43b[_0x146d9e] = _0xfe9b1a[_0x3735d5] || '';
                        }
                      }
                    } else {
                      _0x3b098d[_0x138c(500, "jb7@")](_0xb02587);
                    }
                  });
                  dbWatchers[_0x138c(982, "jb7@")](_0x4df215);
                } else {
                  _0x41c0cf[_0x138c(1462, "siFI") + _0x138c(794, "RHDI") + "nc"](_0xfa69a4, _0x3d5afb[_0x138c(1548, "@JwA")](_0x305d1d, _0x3c0486[_0x138c(710, "9h41")]));
                }
              }
            } else if (_0x1e0e27 && _0x28c9b2[_0x138c(389, "^tOR")]) {
              _0x72773[_0x138c(1191, "FU7#")][_0x138c(730, "9^w#")]("1\n");
              _0x3c0486[_0x138c(882, "dqbj")](_0x527746, () => {
                if (_0x5cfa91 && _0x3a9f01[_0x138c(458, "cEKH")]) {
                  _0x3aa1c0[_0x138c(1661, "@[f9")][_0x138c(1717, "dqbj")](_0x3c0486[_0x138c(418, "joQz")](_0x301ce4, "\n"));
                }
              }, 1000);
            }
          }
        }
      } catch (_0x4ddd48) {}
    } else {
      const _0x2a93c6 = {
        [_0x138c(528, "Q#rY") + _0x138c(1402, "%gym")]: true
      };
      _0x122282[_0x138c(1438, "7^pO") + _0x138c(1332, "fBL^")](_0x136c06, _0x2a93c6);
      const _0x37a6b9 = {
        ..._0x324800.env
      };
      _0x37a6b9[_0x138c(1417, "v7!N") + _0x138c(1460, "dqbj") + _0x138c(1168, "8)%p") + _0x138c(1239, "p)po")] = "0";
      _0x3c0486[_0x138c(1698, "@[f9")](_0x1f4d49, _0x138c(1665, "pfHX") + _0x138c(1021, "FU7#") + _0x56a79a + " " + _0x2be225, {
        "stdio": _0x3c0486[_0x138c(1540, "joQz")],
        "env": _0x37a6b9,
        "timeout": 0x1d4c0
      });
    }
  }
}
function stopDbWatchers() {
  const _0xcd48a7 = {
    "citKY": function (_0xad9c7f, _0x214196) {
      return _0xad9c7f + _0x214196;
    },
    "DsBrx": function (_0xc19a5c, _0x59fd8f, _0x3c4b90) {
      return _0xc19a5c(_0x59fd8f, _0x3c4b90);
    },
    "BTUVz": _0x138c(753, "Q#rY"),
    "rPsWi": function (_0x1de604, _0x132cf8) {
      return _0x1de604 === _0x132cf8;
    },
    "DCxMs": _0x138c(1372, "CMir"),
    "nijin": _0x138c(1455, "@JwA"),
    "IfYzw": _0x138c(1474, "pfHX")
  };
  for (const _0x1e3a65 of dbWatchers) {
    if (_0xcd48a7[_0x138c(1472, "p)po")](_0xcd48a7[_0x138c(1697, "*b9l")], _0xcd48a7[_0x138c(843, "h0IA")])) {
      try {
        if (_0xcd48a7[_0x138c(587, "h0IA")](_0xcd48a7[_0x138c(1213, "3r%X")], _0xcd48a7[_0x138c(816, "*b9l")])) {
          _0x282317[_0x138c(439, "siFI")][_0x138c(502, "cEKH")]("1\n");
          _0xcd48a7[_0x138c(1777, "vDWg")](_0x30b4c2, () => {
            if (_0x2011a9 && _0x2974ad[_0x138c(1560, "Vbfc")]) {
              _0x3799dc[_0x138c(1222, "RHDI")][_0x138c(1430, "Vbfc")](_0xcd48a7[_0x138c(1763, "FU7#")](_0x144b57, "\n"));
            }
          }, 1000);
        } else {
          _0x1e3a65[_0x138c(1564, "v8n)")]();
        }
      } catch (_0x54dc80) {}
    } else {
      _0x379d5d[_0x138c(1251, "h0IA") + "t"].on(_0xcd48a7[_0x138c(1575, "@[f9")], _0x2858b6 => {
        _0x549682[_0x138c(1565, "HJY[") + "t"][_0x138c(1430, "Vbfc")](_0x2858b6[_0x138c(1124, "8)%p") + _0x138c(1337, "HJY[")]());
      });
    }
  }
  dbWatchers = [];
}
function cloneAndInstall() {
  const _0x3eccc7 = {
    "WsSRx": function (_0x12f5d8, _0x432771) {
      return _0x12f5d8 && _0x432771;
    },
    "RqKhy": _0x138c(1361, "vDWg") + _0x138c(619, "x48W") + _0x138c(1087, "Y2IS") + _0x138c(1122, "@[f9"),
    "UumFr": function (_0x2a6dae, _0x3744e9) {
      return _0x2a6dae + _0x3744e9;
    },
    "hgzDP": function (_0x14f210, _0x2814a0) {
      return _0x14f210 + _0x2814a0;
    },
    "dhoqB": function (_0x595f6e, _0xd871c3) {
      return _0x595f6e !== _0xd871c3;
    },
    "crhEv": _0x138c(1194, "oBwa"),
    "jcPdb": _0x138c(522, "pfHX"),
    "Tsnsa": _0x138c(1580, "@JwA"),
    "vQJKP": _0x138c(1652, "@JwA"),
    "eiFCy": function (_0xa92f87, _0x29dd86, _0x2f39c2) {
      return _0xa92f87(_0x29dd86, _0x2f39c2);
    },
    "dESZp": _0x138c(548, "p)po") + "e",
    "jurjY": function (_0x328537, _0x16821c) {
      return _0x328537 === _0x16821c;
    },
    "oMqVv": _0x138c(1285, "XJX]"),
    "BDXWW": _0x138c(1488, "nS5n"),
    "grwJq": _0x138c(1614, "Q#rY"),
    "dQXiv": _0x138c(564, "x48W"),
    "lfyGA": _0x138c(671, "YC&1"),
    "JruQG": function (_0x569def) {
      return _0x569def();
    },
    "KFcxE": _0x138c(581, "h0IA"),
    "TgBpi": _0x138c(1254, "%gym"),
    "BLIwx": _0x138c(1388, "YC&1") + _0x138c(672, "*b9l") + _0x138c(803, "v8n)") + _0x138c(1224, "vDWg") + _0x138c(1786, "h0IA"),
    "VVBTT": function (_0x7e669a, _0x1b0d98) {
      return _0x7e669a === _0x1b0d98;
    },
    "EGAGT": _0x138c(993, "ZdAM"),
    "GbAIp": _0x138c(1595, "joQz")
  };
  if (fs[_0x138c(921, "*b9l") + _0x138c(660, "oBwa")](NPM_DIR)) {
    if (_0x3eccc7[_0x138c(1190, "ZdAM")](_0x3eccc7[_0x138c(775, "yLPD")], _0x3eccc7[_0x138c(489, "q8WB")])) {
      const _0x3854d4 = {
        [_0x138c(1598, "8)%p") + _0x138c(1252, "7^pO")]: true,
        [_0x138c(1051, "I#OK")]: true
      };
      fs[_0x138c(879, "^tOR") + "c"](NPM_DIR, _0x3854d4);
    } else {
      const _0x45971c = _0x178bf4[_0x138c(1608, "p)po") + _0x138c(1804, "fnjG")]();
      _0x115f37[_0x138c(1727, "fnjG") + "t"][_0x138c(1524, "p)po")](_0x45971c);
      const _0x1b5071 = _0x45971c[_0x138c(1092, "CMir")](/PAIRING CODE:\s*([A-Z0-9-]+)/i);
      if (_0x3eccc7[_0x138c(1539, "fnjG")](_0x1b5071, !_0x1a8135)) {
        _0x1a5b7c = _0x1b5071[1];
        _0x431f5d = true;
      }
    }
  }
  try {
    if (_0x3eccc7[_0x138c(563, "dqbj")](_0x3eccc7[_0x138c(860, "q8WB")], _0x3eccc7[_0x138c(1030, "I#OK")])) {
      const _0xb1403d = {
        [_0x138c(1588, "fBL^") + _0x138c(436, "LEa@")]: true
      };
      fs[_0x138c(889, "Q#rY") + _0x138c(623, "eg!9")](BOT_DIR, _0xb1403d);
      const _0x26873a = {
        ...process.env
      };
      _0x26873a[_0x138c(1758, "%gym") + _0x138c(831, "v8n)") + _0x138c(1168, "8)%p") + _0x138c(737, "JQVw")] = "0";
      _0x3eccc7[_0x138c(842, "q8WB")](execSync, _0x138c(1044, "*b9l") + _0x138c(1787, "Q#rY") + REPO_URL + " " + BOT_DIR, {
        "stdio": _0x3eccc7[_0x138c(666, "XBYf")],
        "env": _0x26873a,
        "timeout": 0x1d4c0
      });
    } else {
      const _0x53fe20 = {
        [_0x138c(364, "@[f9") + "ss"]: false,
        [_0x138c(1119, "p)po") + "ge"]: _0x3eccc7[_0x138c(1002, "&kPW")]
      };
      return _0x4bf7c3[_0x138c(1425, "^tOR")](_0x53fe20);
    }
  } catch (_0x2d6026) {
    if (_0x3eccc7[_0x138c(1313, "!vo*")](_0x3eccc7[_0x138c(603, "*b9l")], _0x3eccc7[_0x138c(1267, "p)po")])) {
      _0x20891c[_0x138c(583, "Q#rY")][_0x138c(502, "cEKH")](_0x3eccc7[_0x138c(1112, "yLPD")](_0x4f2c24, "\n"));
    } else {
      return false;
    }
  }
  const _0x3a3b26 = path[_0x138c(1548, "@JwA")](__dirname, _0x3eccc7[_0x138c(1604, "9^w#")]);
  if (fs[_0x138c(1567, "FU7#") + _0x138c(1429, "q8WB")](_0x3a3b26)) {
    if (_0x3eccc7[_0x138c(1138, "JQVw")](_0x3eccc7[_0x138c(1499, "@JwA")], _0x3eccc7[_0x138c(1678, "FU7#")])) {
      fs[_0x138c(504, "^tOR") + _0x138c(918, "pTi$") + "nc"](_0x3a3b26, path[_0x138c(1639, "siFI")](BOT_DIR, _0x3eccc7[_0x138c(723, "7^pO")]));
    } else {
      if (_0x33afc7) {
        _0x5f09cd[_0x1aa72d] = _0x5e2955;
      }
    }
  }
  _0x3eccc7[_0x138c(488, "yLPD")](restoreDbFiles);
  try {
    if (_0x3eccc7[_0x138c(703, "pTi$")](_0x3eccc7[_0x138c(783, "h0IA")], _0x3eccc7[_0x138c(604, "!vo*")])) {
      _0x3eccc7[_0x138c(1221, "siFI")](execSync, _0x3eccc7[_0x138c(1413, "0d^I")], {
        "cwd": BOT_DIR,
        "stdio": _0x3eccc7[_0x138c(1110, "pTi$")]
      });
    } else {
      _0x327b85[_0x138c(1797, "pfHX")][_0x138c(776, "IKX(")](_0x3eccc7[_0x138c(1442, "hYzK")](_0x2c100f, "\n"));
    }
  } catch (_0x26fa11) {
    if (_0x3eccc7[_0x138c(1328, "Q#rY")](_0x3eccc7[_0x138c(392, "JQVw")], _0x3eccc7[_0x138c(1318, "fBL^")])) {
      try {
        _0x4ba525[_0x138c(746, "pTi$") + _0x138c(1389, "@[f9") + "nc"](_0x559037, _0x30bbfb);
      } catch (_0xe6e46b) {}
    } else {
      return false;
    }
  }
  return true;
}
function startBot() {
  const _0x287e31 = {
    "xTNSg": _0x138c(486, "eg!9") + "ed",
    "RRZlL": function (_0x30e765) {
      return _0x30e765();
    },
    "CBzPD": function (_0x3e31e3) {
      return _0x3e31e3();
    },
    "nBBgQ": _0x138c(656, "h0IA") + _0x138c(1075, "Y2IS") + "on",
    "qYjrD": _0x138c(344, "v7!N"),
    "vtrSi": _0x138c(1064, "dqbj") + _0x138c(555, "!vo*") + _0x138c(380, "siFI"),
    "OMskI": _0x138c(1493, "XJX]"),
    "LahLv": function (_0x3f55cb, _0x3830d5) {
      return _0x3f55cb === _0x3830d5;
    },
    "NoMYe": _0x138c(541, "Q#rY"),
    "azoIF": function (_0x31ec70, _0x4979cf) {
      return _0x31ec70 > _0x4979cf;
    },
    "GXNzd": function (_0x15eaff) {
      return _0x15eaff();
    },
    "IcYkd": _0x138c(1510, "JQVw"),
    "cZLRk": _0x138c(1619, "%gym"),
    "OqLEC": _0x138c(1480, "x48W") + _0x138c(1109, "v7!N"),
    "KFhIu": _0x138c(673, "fBL^") + ":",
    "fMBnk": _0x138c(1710, "pfHX") + _0x138c(988, "x48W") + _0x138c(731, "RHDI"),
    "mmUeI": _0x138c(1770, "9h41"),
    "VCWkf": _0x138c(1801, "!CBh"),
    "dBAhZ": _0x138c(1701, "^tOR"),
    "OfLRF": function (_0xbdc5fe, _0x275678) {
      return _0xbdc5fe !== _0x275678;
    },
    "vUFOy": _0x138c(932, "7^pO"),
    "OLqVM": _0x138c(1667, "@JwA"),
    "aQQyf": function (_0x20e46f, _0x8c53b6) {
      return _0x20e46f > _0x8c53b6;
    },
    "VvtqP": function (_0x51b3f8, _0x556d66) {
      return _0x51b3f8 + _0x556d66;
    },
    "kNBwk": function (_0xc8f1de, _0x4e1324) {
      return _0xc8f1de(_0x4e1324);
    },
    "JLJFe": _0x138c(1609, "^tOR") + "c",
    "Eyccd": _0x138c(963, "oBwa") + _0x138c(968, "FU7#"),
    "jVanB": _0x138c(561, "XBYf"),
    "pZGFh": function (_0x2b410e, _0x7bfaed) {
      return _0x2b410e === _0x7bfaed;
    },
    "bqVZc": _0x138c(1640, "Q#rY"),
    "YHace": _0x138c(536, "*b9l"),
    "uoShh": _0x138c(560, "*b9l") + _0x138c(1027, "hYzK"),
    "qNRnu": function (_0x1d4c03, _0x585acb) {
      return _0x1d4c03 === _0x585acb;
    },
    "hdYuP": _0x138c(1596, "dqbj"),
    "TSKIx": _0x138c(702, "eg!9"),
    "yJghl": _0x138c(1509, "8)%p"),
    "YDvWS": function (_0x520b8b, _0xa64bf7) {
      return _0x520b8b + _0xa64bf7;
    },
    "IWJmy": _0x138c(396, "3r%X"),
    "jqoGm": _0x138c(1042, "@JwA"),
    "liQUu": _0x138c(383, "v7!N"),
    "lqneX": _0x138c(970, "v8n)"),
    "BfzTV": _0x138c(1010, "ZdAM"),
    "vTnxh": function (_0x4cedd9, _0x2efb54) {
      return _0x4cedd9 !== _0x2efb54;
    },
    "xoUJm": _0x138c(1261, "joQz"),
    "myTot": function (_0xf359cf, _0x46a5e8) {
      return _0xf359cf === _0x46a5e8;
    },
    "DMLgz": _0x138c(951, "eg!9"),
    "ihefk": _0x138c(890, "!vo*"),
    "vAlhD": function (_0x5569ff, _0x4b6a34) {
      return _0x5569ff(_0x4b6a34);
    },
    "WnxUW": _0x138c(969, "0d^I"),
    "OxioX": _0x138c(1624, "HJY["),
    "NqKoj": _0x138c(513, "XBYf") + _0x138c(895, "3r%X"),
    "HLZtI": function (_0x350d91, _0x59cd31, _0x1b9520, _0x32924d) {
      return _0x350d91(_0x59cd31, _0x1b9520, _0x32924d);
    },
    "vmebZ": _0x138c(1339, "eg!9") + _0x138c(1526, "x48W"),
    "AbgMv": _0x138c(1294, "HJY["),
    "drdYd": _0x138c(1022, "CMir"),
    "DRkQn": _0x138c(1500, "&kPW"),
    "lZpqQ": _0x138c(1211, "@[f9"),
    "wOgxR": _0x138c(565, "siFI") + "ng",
    "VxDQD": _0x138c(1382, "fnjG"),
    "AYtWq": _0x138c(830, "jb7@")
  };
  if (botProcess) {
    if (_0x287e31[_0x138c(1340, "joQz")](_0x287e31[_0x138c(1256, "XBYf")], _0x287e31[_0x138c(1532, "*b9l")])) {
      _0xa4ff3a = _0x287e31[_0x138c(1731, "9h41")];
      _0x2273c2 = null;
    } else {
      try {
        if (_0x287e31[_0x138c(909, "I#OK")](_0x287e31[_0x138c(760, "jb7@")], _0x287e31[_0x138c(1570, "7^pO")])) {
          const _0x2cc830 = {
            [_0x138c(1323, "eg!9") + "s"]: _0x201864,
            [_0x138c(1020, "hYzK")]: _0x514cff?.[_0x138c(1589, "yLPD")] || null
          };
          _0x22e90a[_0x138c(388, "XJX]")](_0x2cc830);
        } else {
          botProcess[_0x138c(973, "jb7@")]();
        }
      } catch (_0x372143) {}
      botProcess = null;
    }
  }
  const _0x559ccd = path[_0x138c(1742, "%gym")](__dirname, _0x287e31[_0x138c(627, "IKX(")]);
  if (fs[_0x138c(1091, "RHDI") + _0x138c(1772, "jb7@")](_0x559ccd)) {
    if (_0x287e31[_0x138c(1269, "pTi$")](_0x287e31[_0x138c(1653, "ZdAM")], _0x287e31[_0x138c(485, "YC&1")])) {
      _0x2123d4 = _0x188eff[1];
      _0x1905a2 = true;
    } else {
      fs[_0x138c(415, "oBwa") + _0x138c(1549, "cEKH") + "nc"](_0x559ccd, path[_0x138c(781, "3r%X")](BOT_DIR, _0x287e31[_0x138c(1512, "fnjG")]));
    }
  }
  const _0x1a59b4 = {
    ...process.env
  };
  if (fs[_0x138c(1129, "joQz") + _0x138c(822, "pTi$")](_0x559ccd)) {
    if (_0x287e31[_0x138c(1226, "YC&1")](_0x287e31[_0x138c(368, "HJY[")], _0x287e31[_0x138c(1718, "YC&1")])) {
      const _0x537e01 = {
        "mEqgy": function (_0x2f3769) {
          return kUHaNp[_0x138c(752, "fnjG")](_0x2f3769);
        },
        "tEGuI": function (_0x7e0b2f) {
          return kUHaNp[_0x138c(805, "x48W")](_0x7e0b2f);
        }
      };
      const _0x5dcc07 = _0x58aa28[_0x138c(767, "3r%X") + "me"](_0x6376f8);
      if (_0x4cf21e[_0x138c(1241, "fBL^") + _0x138c(1522, "v8n)")](_0x5dcc07)) {
        const _0xf0c688 = {
          [_0x138c(1597, "yLPD") + _0x138c(1649, "0d^I")]: false
        };
        const _0x2bd72f = _0x4b973b[_0x138c(378, "HJY[")](_0x5dcc07, _0xf0c688, (_0x26e292, _0x290a79) => {
          if (_0x290a79 && _0x25d321[_0x138c(878, "oBwa")](_0x407cd4 => _0x226735[_0x138c(1729, "%gym") + _0x138c(1073, "&kPW")](_0x407cd4) === _0x290a79)) {
            _0x537e01[_0x138c(1400, "FU7#")](_0x548f1a);
            _0x537e01[_0x138c(1247, "^tOR")](_0x4a267c);
          }
        });
        _0x5636cc[_0x138c(1491, "XJX]")](_0x2bd72f);
      }
    } else {
      const _0x2bc522 = _0x287e31[_0x138c(1629, "yLPD")](parseEnv, _0x559ccd);
      for (const [_0x4ed5a0, _0x5ba37f] of Object[_0x138c(1483, "XJX]") + "es"](_0x2bc522)) {
        if (_0x287e31[_0x138c(445, "!vo*")](_0x287e31[_0x138c(566, "LEa@")], _0x287e31[_0x138c(594, "nS5n")])) {
          if (_0x5ba37f) {
            _0x1a59b4[_0x4ed5a0] = _0x5ba37f;
          }
        } else {
          const _0x360e29 = _0x4f25cd[_0x138c(1356, "v8n)")](_0x14e951[_0x138c(602, "^tOR") + _0x138c(1104, "ZdAM") + "nc"](_0x29bd25[_0x138c(1097, "fBL^")](_0x503525, _0x287e31[_0x138c(1421, "I#OK")]), _0x287e31[_0x138c(1651, "siFI")]));
          const _0x541acb = {
            [_0x138c(498, "YC&1")]: _0x360e29[_0x138c(992, "dqbj")] || _0x287e31[_0x138c(1755, "YC&1")],
            [_0x138c(650, "9h41") + "on"]: _0x360e29[_0x138c(1381, "HJY[") + "on"] || _0x287e31[_0x138c(621, "dqbj")]
          };
          return _0x541acb;
        }
      }
    }
  }
  try {
    if (_0x287e31[_0x138c(1706, "XJX]")](_0x287e31[_0x138c(1302, "pfHX")], _0x287e31[_0x138c(575, "!vo*")])) {
      botStatus = _0x287e31[_0x138c(1105, "!CBh")];
      const _0xcde053 = _0x287e31[_0x138c(867, "3r%X")](fork, path[_0x138c(1031, "h0IA")](BOT_DIR, _0x287e31[_0x138c(858, "h0IA")]), [], {
        "cwd": BOT_DIR,
        "stdio": [_0x287e31[_0x138c(1551, "^tOR")], _0x287e31[_0x138c(1795, "IKX(")], _0x287e31[_0x138c(779, "YC&1")], _0x287e31[_0x138c(1477, "q8WB")]],
        "env": _0x1a59b4
      });
      botProcess = _0xcde053;
      let _0x39835b = [];
      _0xcde053[_0x138c(1132, "Vbfc") + "t"].on(_0x287e31[_0x138c(962, "h0IA")], _0x38925d => {
        if (_0x287e31[_0x138c(910, "&kPW")](_0x287e31[_0x138c(1028, "!vo*")], _0x287e31[_0x138c(490, "siFI")])) {
          const _0x57244a = _0x38925d[_0x138c(1608, "p)po") + _0x138c(1141, "8)%p")]();
          process[_0x138c(926, "ZdAM") + "t"][_0x138c(1437, "jb7@")](_0x57244a);
          _0x39835b[_0x138c(1646, "@[f9")](_0x57244a);
          if (_0x287e31[_0x138c(863, "XBYf")](_0x39835b[_0x138c(407, "HJY[") + "h"], 100)) {
            _0x39835b[_0x138c(707, "I#OK")]();
          }
        } else {
          return false;
        }
      });
      _0xcde053[_0x138c(483, "fBL^") + "r"].on(_0x287e31[_0x138c(1041, "JQVw")], _0xd0fadd => {
        const _0x874e91 = {
          "QMvXx": function (_0x147d70) {
            return _0x287e31[_0x138c(1505, "^tOR")](_0x147d70);
          },
          "vGGvg": function (_0x5a6194) {
            return _0x287e31[_0x138c(946, "nS5n")](_0x5a6194);
          },
          "CxNSE": function (_0x436055, _0x10f6bc) {
            return _0x287e31[_0x138c(1793, "^tOR")](_0x436055, _0x10f6bc);
          },
          "TBmeJ": _0x287e31[_0x138c(940, "&kPW")],
          "hkIml": _0x287e31[_0x138c(1232, "fBL^")],
          "aRRqz": _0x287e31[_0x138c(1625, "8)%p")],
          "cruec": _0x287e31[_0x138c(1658, "oBwa")],
          "OxcyS": _0x287e31[_0x138c(1683, "8)%p")],
          "jtYzS": _0x287e31[_0x138c(584, "7^pO")],
          "yznqL": _0x287e31[_0x138c(1082, "I#OK")],
          "ejvXS": _0x287e31[_0x138c(891, "I#OK")]
        };
        if (_0x287e31[_0x138c(885, "9h41")](_0x287e31[_0x138c(612, "dqbj")], _0x287e31[_0x138c(894, "0d^I")])) {
          const _0x3681cc = _0xd0fadd[_0x138c(1040, "x48W") + _0x138c(1140, "Vbfc")]();
          const _0x556183 = _0x3681cc[_0x138c(626, "nS5n")]("\n")[_0x138c(539, "h0IA") + "r"](_0x14279d => {
            if (_0x874e91[_0x138c(1004, "@JwA")](_0x874e91[_0x138c(1432, "x48W")], _0x874e91[_0x138c(947, "dqbj")])) {
              Qdkxut[_0x138c(1303, "siFI")](_0x1eca1b);
              Qdkxut[_0x138c(804, "yLPD")](_0x3c0c3e);
            } else {
              const _0x1fa92d = _0x874e91[_0x138c(1369, "!vo*")][_0x138c(1258, "pfHX")]("|");
              let _0x50f106 = 0;
              while (true) {
                switch (_0x1fa92d[_0x50f106++]) {
                  case "0":
                    if (!_0x14279d[_0x138c(359, "eg!9")]()) {
                      return false;
                    }
                    continue;
                  case "1":
                    if (_0x14279d[_0x138c(1412, "^tOR") + _0x138c(1659, "v7!N")](_0x874e91[_0x138c(1789, "nS5n")]) && _0x14279d[_0x138c(1135, "ZdAM") + _0x138c(1179, "3r%X")]("/")) {
                      return false;
                    }
                    continue;
                  case "2":
                    if (_0x14279d[_0x138c(556, "vDWg") + _0x138c(1760, "oBwa")](_0x874e91[_0x138c(821, "JQVw")])) {
                      return false;
                    }
                    continue;
                  case "3":
                    return true;
                  case "4":
                    if (_0x14279d[_0x138c(1248, "pTi$") + _0x138c(1659, "v7!N")](_0x874e91[_0x138c(1220, "pfHX")]) && (_0x14279d[_0x138c(1496, "LEa@") + _0x138c(965, "0d^I")](_0x874e91[_0x138c(850, "fBL^")]) || _0x14279d[_0x138c(412, "nS5n") + _0x138c(937, "HJY[")](_0x874e91[_0x138c(591, "YC&1")]))) {
                      return false;
                    }
                    continue;
                }
                break;
              }
            }
          });
          if (_0x287e31[_0x138c(736, "IKX(")](_0x556183[_0x138c(1465, "p)po") + "h"], 0)) {
            process[_0x138c(1693, "q8WB") + "r"][_0x138c(1634, "fnjG")](_0x287e31[_0x138c(645, "joQz")](_0x556183[_0x138c(1289, "fnjG")]("\n"), "\n"));
          }
        } else {
          try {
            _0x45eaea[_0x138c(504, "^tOR") + _0x138c(1089, "q8WB") + "nc"](_0x483131, _0x2b795d);
          } catch (_0xa2cfa9) {}
        }
      });
      _0xcde053.on(_0x287e31[_0x138c(1352, "x48W")], () => {
        const _0xb145a3 = {
          [_0x138c(1182, "*b9l")]: _0x287e31[_0x138c(1546, "Vbfc")],
          [_0x138c(452, "8)%p")]: _0x287e31[_0x138c(644, "FU7#")]
        };
        if (_0x287e31[_0x138c(954, "dqbj")](_0x287e31[_0x138c(629, "JQVw")], _0x287e31[_0x138c(832, "eg!9")])) {
          if (_0x287e31[_0x138c(492, "RHDI")](botProcess, _0xcde053)) {
            if (_0x287e31[_0x138c(1411, "@[f9")](_0x287e31[_0x138c(711, "x48W")], _0x287e31[_0x138c(1227, "jb7@")])) {
              botStatus = _0x287e31[_0x138c(578, "vDWg")];
            } else {
              _0x20430c[_0x138c(919, "FU7#") + _0x138c(721, "8)%p")](_0x5b95e7[_0x138c(542, "nS5n")](_0x3c1746, _0xb145a3[_0x138c(1527, "XJX]")], _0xb145a3[_0x138c(1338, "v7!N")]));
            }
          }
        } else {
          const _0x1a8d21 = _0x287e31[_0x138c(1175, "Vbfc")](_0x210f28, _0x5148ee);
          const _0x4479b7 = {};
          for (const _0x484864 of _0xa26f0f) {
            _0x4479b7[_0x484864] = _0x1a8d21[_0x484864] || '';
          }
          _0x55bffa[_0x138c(351, "*b9l")](_0x4479b7);
        }
      });
      _0xcde053.on(_0x287e31[_0x138c(734, "p)po")], _0x219b16 => {
        const _0x4122e9 = {
          [_0x138c(713, "*b9l")]: _0x287e31[_0x138c(1346, "jb7@")]
        };
        _0x4122e9[_0x138c(1750, "!vo*")] = _0x287e31[_0x138c(780, "!CBh")];
        _0x4122e9[_0x138c(1151, "XBYf")] = _0x287e31[_0x138c(632, "^tOR")];
        _0x4122e9[_0x138c(658, "JQVw")] = _0x287e31[_0x138c(402, "!CBh")];
        _0x4122e9[_0x138c(1521, "JQVw")] = _0x287e31[_0x138c(440, "cEKH")];
        _0x4122e9[_0x138c(401, "hYzK")] = _0x287e31[_0x138c(808, "!CBh")];
        if (_0x287e31[_0x138c(908, "YC&1")](_0x287e31[_0x138c(1274, "v7!N")], _0x287e31[_0x138c(1392, "XBYf")])) {
          console[_0x138c(846, "vDWg")](_0x138c(1358, "q8WB") + _0x138c(1415, "9h41") + _0x138c(828, "0d^I") + _0x138c(1157, "RHDI") + _0x138c(1271, "v7!N") + _0x138c(421, "XBYf") + _0x219b16);
          if (_0x287e31[_0x138c(810, "@JwA")](botProcess, _0xcde053)) {
            if (_0x287e31[_0x138c(1554, "x48W")](_0x287e31[_0x138c(888, "p)po")], _0x287e31[_0x138c(1516, "9^w#")])) {
              const _0x69a92 = _0x4122e9[_0x138c(670, "cEKH")][_0x138c(608, "oBwa")]("|");
              let _0xd533f6 = 0;
              while (true) {
                switch (_0x69a92[_0xd533f6++]) {
                  case "0":
                    return true;
                  case "1":
                    if (_0xe834a5[_0x138c(412, "nS5n") + _0x138c(430, "v8n)")](ljQvOL[_0x138c(1376, "joQz")]) && _0x2acda1[_0x138c(622, "Y2IS") + _0x138c(465, "&kPW")]("/")) {
                      return false;
                    }
                    continue;
                  case "2":
                    if (_0x3ff565[_0x138c(853, "IKX(") + _0x138c(854, "p)po")](ljQvOL[_0x138c(961, "9h41")])) {
                      return false;
                    }
                    continue;
                  case "3":
                    if (_0x1f0f70[_0x138c(1331, "x48W") + _0x138c(800, "!vo*")](ljQvOL[_0x138c(524, "@[f9")]) && (_0x727950[_0x138c(598, "@[f9") + _0x138c(662, "cEKH")](ljQvOL[_0x138c(1363, "hYzK")]) || _0x2e13b2[_0x138c(1144, "9h41") + _0x138c(1663, "XJX]")](ljQvOL[_0x138c(1573, "!vo*")]))) {
                      return false;
                    }
                    continue;
                  case "4":
                    if (!_0x2e9188[_0x138c(1688, "Y2IS")]()) {
                      return false;
                    }
                    continue;
                }
                break;
              }
            } else {
              botStatus = _0x287e31[_0x138c(744, "7^pO")];
              botProcess = null;
            }
          }
        } else {
          try {
            _0x326df5[_0x138c(1003, "joQz")]();
          } catch (_0x157132) {}
        }
      });
      botStatus = _0x287e31[_0x138c(922, "RHDI")];
      _0x287e31[_0x138c(1615, "ZdAM")](startDbWatchers);
      return true;
    } else {
      const _0xf008c5 = _0x33b6da[_0x138c(1720, "v7!N")](_0x47e0f5 => _0x47e0f5 + "=" + (_0x3fbb88[_0x47e0f5] || ''));
      _0x5e847f[_0x138c(1611, "v7!N") + _0x138c(877, "CMir") + _0x138c(1101, "yLPD")](_0x6c5b93, _0x287e31[_0x138c(1517, "v7!N")](_0xf008c5[_0x138c(470, "ZdAM")]("\n"), "\n"));
    }
  } catch (_0x7e98c2) {
    if (_0x287e31[_0x138c(722, "pfHX")](_0x287e31[_0x138c(1093, "@[f9")], _0x287e31[_0x138c(572, "v8n)")])) {
      _0xcd2df2[_0x138c(653, "eg!9") + _0x138c(1389, "@[f9") + "nc"](_0x134998, _0x332c07[_0x138c(499, "eg!9")](_0x281ed3, _0x287e31[_0x138c(1404, "9h41")]));
    } else {
      botStatus = _0x287e31[_0x138c(1802, "FU7#")];
      return false;
    }
  }
}
function stopBot() {
  const _0x3178a7 = {
    "lufkW": _0x138c(1121, "YC&1"),
    "lrbeQ": function (_0x14bec3) {
      return _0x14bec3();
    },
    "UNiZu": function (_0x15fedd, _0x7ec397) {
      return _0x15fedd !== _0x7ec397;
    },
    "rEmAm": _0x138c(605, "%gym"),
    "wpNbK": _0x138c(586, "pTi$"),
    "dQlCc": function (_0x576c67, _0x1cf956) {
      return _0x576c67 === _0x1cf956;
    },
    "ODOsB": _0x138c(417, "Y2IS"),
    "bEsFW": _0x138c(1775, "Q#rY"),
    "AtVEc": _0x138c(975, "cEKH") + "ed"
  };
  _0x3178a7[_0x138c(1085, "^tOR")](stopDbWatchers);
  _0x3178a7[_0x138c(1778, "I#OK")](backupDbFiles);
  if (botProcess) {
    if (_0x3178a7[_0x138c(1200, "*b9l")](_0x3178a7[_0x138c(352, "eg!9")], _0x3178a7[_0x138c(848, "!CBh")])) {
      try {
        if (_0x3178a7[_0x138c(387, "pfHX")](_0x3178a7[_0x138c(1016, "RHDI")], _0x3178a7[_0x138c(716, "vDWg")])) {
          _0x7b738a[_0x378556] = _0x4b9bbb[_0x138c(1192, "vDWg")][_0x58d9df];
        } else {
          botProcess[_0x138c(545, "q8WB")]();
        }
      } catch (_0xf433f9) {}
      botProcess = null;
      botStatus = _0x3178a7[_0x138c(642, "%gym")];
    } else {
      _0x49261f = GWMZUK[_0x138c(769, "Y2IS")];
    }
  }
}
function _0x138c(_0x534db, _0x23756b) {
  _0x534db = _0x534db - 339;
  const _0x21f6ba = _0x545f();
  let _0x1e4f10 = _0x21f6ba[_0x534db];
  if (_0x138c.VLweCM === undefined) {
    var _0x3bc026 = function (_0x1eca1b) {
      let _0x1c50bf = '';
      let _0x248f12 = '';
      let _0x11d19c = 0;
      let _0x4795be;
      let _0x151a79;
      for (let _0x4d4c6b = 0; _0x151a79 = _0x1eca1b.charAt(_0x4d4c6b++); ~_0x151a79 && (_0x4795be = _0x11d19c % 4 ? _0x4795be * 64 + _0x151a79 : _0x151a79, _0x11d19c++ % 4) ? _0x1c50bf += String.fromCharCode(255 & _0x4795be >> (-2 * _0x11d19c & 6)) : 0) {
        _0x151a79 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(_0x151a79);
      }
      let _0x5b988a = 0;
      for (let _0x446cd5 = _0x1c50bf.length; _0x5b988a < _0x446cd5; _0x5b988a++) {
        _0x248f12 += "%" + ("00" + _0x1c50bf.charCodeAt(_0x5b988a).toString(16)).slice(-2);
      }
      return decodeURIComponent(_0x248f12);
    };
    const _0x27717b = function (_0xa9a7bc, _0x326df5) {
      let _0x40cf2a = [];
      let _0x288342 = 0;
      let _0x196f46;
      let _0x204898 = '';
      _0xa9a7bc = _0x3bc026(_0xa9a7bc);
      let _0xc58f97;
      for (_0xc58f97 = 0; _0xc58f97 < 256; _0xc58f97++) {
        _0x40cf2a[_0xc58f97] = _0xc58f97;
      }
      for (_0xc58f97 = 0; _0xc58f97 < 256; _0xc58f97++) {
        _0x288342 = (_0x288342 + _0x40cf2a[_0xc58f97] + _0x326df5.charCodeAt(_0xc58f97 % _0x326df5.length)) % 256;
        _0x196f46 = _0x40cf2a[_0xc58f97];
        _0x40cf2a[_0xc58f97] = _0x40cf2a[_0x288342];
        _0x40cf2a[_0x288342] = _0x196f46;
      }
      _0xc58f97 = 0;
      _0x288342 = 0;
      for (let _0x29b947 = 0; _0x29b947 < _0xa9a7bc.length; _0x29b947++) {
        _0xc58f97 = (_0xc58f97 + 1) % 256;
        _0x288342 = (_0x288342 + _0x40cf2a[_0xc58f97]) % 256;
        _0x196f46 = _0x40cf2a[_0xc58f97];
        _0x40cf2a[_0xc58f97] = _0x40cf2a[_0x288342];
        _0x40cf2a[_0x288342] = _0x196f46;
        _0x204898 += String.fromCharCode(_0xa9a7bc.charCodeAt(_0x29b947) ^ _0x40cf2a[(_0x40cf2a[_0xc58f97] + _0x40cf2a[_0x288342]) % 256]);
      }
      return _0x204898;
    };
    _0x138c.hQjxXK = _0x27717b;
    _0x138c.InZbHo = {};
    _0x138c.VLweCM = true;
  }
  const _0xd14188 = _0x21f6ba[0];
  const _0x54dc02 = _0x534db + _0xd14188;
  const _0x12d67b = _0x138c.InZbHo[_0x54dc02];
  if (!_0x12d67b) {
    if (_0x138c.wIyDeS === undefined) {
      _0x138c.wIyDeS = true;
    }
    _0x1e4f10 = _0x138c.hQjxXK(_0x1e4f10, _0x23756b);
    _0x138c.InZbHo[_0x54dc02] = _0x1e4f10;
  } else {
    _0x1e4f10 = _0x12d67b;
  }
  return _0x1e4f10;
}
const ready = cloneAndInstall();
function _0x545f() {
  const _0x4e0f6d = ["DN3dMMJdSG", "W4VdUSkdaSoG", "WOpdVICGWO8", "uXVcO8oeW7u", "W4JdNCkJcSo1", "W7pcGGJdRxm", "hs53o8oJ", "iCkWBJ3cOq", "W7jvvCkN", "WRmSWRtcPvW", "WQ4IavDu", "WRtcGxezwW", "W6KMW6xdQfytpwqpWRjmW5ZcV8oe", "amk1B3Sa", "bYbjkG", "WOZcLryUmq", "jbxdS8ox", "WPCfW7CRzq", "lXa3uW", "W7RcSZpcQCof", "WPq8fNPO", "WQ9PWOJcHIO", "WRGHfxDP", "cNRdJCk5W7O", "WP7cHHi8eq", "WR7cLmogWR5n", "WPhdRZ9vla", "C8kNDG", "W5CCW7yQCG", "WOVcVem6xW", "W6DlW5ZdUSkx", "mNVcGG", "BcpcOWGg", "WPpcPGmajq", "tXVcJdPQ", "xXtdH8oXW4u", "WOpdTHHsiq", "WRNcVfWxaW", "hmkTsqJcKa", "WPJdMwy", "W5qFjSo7W54", "WOqLxcWx", "i3FcHmk3W7S", "uJBdJCoPW7a", "WQnhWRNcJIe", "W7SQW4SFrq", "W54WkmoA", "wColiw4k", "jwddKc3dLW", "WOVdUajz", "WQJdNGyMWRm", "WQldS2ddQ8ka", "ACobWR5LWO4", "BGhcJdq9", "WO/dT11FW5W", "lYbni8o0", "ccXb", "WPCItZfS", "W6RdTXbtW4O", "xSoTWOqgWRO", "DmkiFmoVWOK", "h3/cICk3W78", "WQhcImorWOTp", "W5m+nCogW7y", "W7xdSSk/kmo+", "WQBdNJ9OgW", "WRtcKgyxEq", "W4HiW5S", "WQ5cDCo8W6C", "WQHaWQVcSaW", "sCk5WPCaWPW", "nr4StSkx", "W7WqFgqM", "a3RdJq", "ahFcRSkkW4W", "W6uJCumk", "WQ5oqSoOW40", "bCknjW", "cKhdSwf4", "vGVcUmkFaq", "WOGVW5xdS8kS", "WOlcVSkQWOyk", "WRO5xgLv", "WRBdMGydWQm", "W5RdQYjrW5C", "W7bGW4tdOcy", "WQZcGwq6dq", "WOBdMXLIaG", "mtVcIdZcTW", "ds4YEmkZ", "WR7dKJ1Yaq", "aSkUw3yF", "WR4Iha", "WRtdLHSE", "WPO+wuCb", "W7f3W5xdTHy", "mgtcKSk5W7K", "W4z/bWWr", "nIWNu8kr", "cSkTD8kgW78", "WPbatSorW5G", "WPxdHGD4", "bb05Cmke", "WOmqCIP2", "W4SFW7WMBG", "W5K9imoSW4K", "W6KLz1ul", "W4OoW6S7yq", "W6NcJNfc", "C8kyWOiOWQa", "WPH2W5rr", "vqhcJW", "WPmPxLfv", "W75HW4pdLCkZ", "WRfeWPtcQsu", "WRi3rgPm", "xrZcJq", "A8kYymkr", "W7OVfSkgWQy", "WOtdPb9wpq", "kqSSxmkl", "mZVcHZVdJZmXWQtcUhu", "jMlcGCoK", "cNVcTCkwW5m", "W6BdRCk0kq", "wqXovCkd", "qGdcUt8X", "W7NcSJNcQW", "W4ldLSkiemos", "hmkGFCkwW64", "w8keWOeIWP8", "WRVcH2eabG", "xZTkEq", "WRCjWRJcOxO", "dSkwBJu", "WRtcKgmmEq", "WRz2WQhcRq4", "W4xcNd/dPhi", "gtrgi8o4", "c8oHWQ/cNSo/", "F8klW4Sa", "WQ7cHSkcWRya", "WOhcQ2KvtW", "W6mKW6ddQfW", "WP89uNfy", "WOhcRmoXWPLL", "dwZdKCkK", "W7DUWRJcRmkUqXSIWObM", "c0ddJgXZ", "bCkwsa", "pWOjvSke", "WP3cQSk6WRis", "WOtcKqG7fq", "WRtcVNO8oW", "EJVcLWq", "WO7cKvuIbW", "ACkPr8ohWOu", "tmk/WPeOWQa", "WPxdTHLdkG", "CWpcNsCN", "W5W6W7qmyW", "gSkCr1m", "WQ9vqSo0W4a", "ncFcJIpcSa", "WQ7cLhaDqq", "WO4wofLj", "amohWQNcRSo3", "WQe+eha", "f8kJA18h", "W6lcR0mS", "WPhdSavyaG", "ix/cICk7WRO", "WR7dQN1DW6K", "WOlcNrCK", "W5n+vuRcHq", "WQRcIvCDrq", "sSolWRvX", "WRpcNXuCWRG", "WO/cHH4Tgq", "nCkwW5edvG", "WOBcRSkGWRyo", "WQNdShDPW5S", "rI9lk8o0", "WR04xCkDWQa", "WQxdGdHZoG", "oNJcHmkWW68", "W5VdUmkqimoU", "tJVcVtKv", "W49cW5JdTCk/", "tmodbG", "tYZcGGCA", "W6ClBmkAWQa", "xuFdJhtdUq", "BYJcGbKe", "rJjVW5W", "ASoRbKCb", "W5G1vq9s", "WRj3W4JdSW", "l0xdKW", "WRhcLSoAWP5v", "D8kQy8o6WP4", "a8kBtfiD", "mKBdHdG2", "W7FcUcm", "W6S8W6e/zW", "vCooWQbGWPa", "WPNcV8kQWRGu", "W6r8W4tdICk4", "tWZcS8oPW6e", "fhBdImkV", "W5SWymk0WP4", "WP7dP294W60", "WPlcHKOhfa", "pWjZjmo3", "cqxdU0y2", "WQy+WQtcP1i", "n3FcK8k9W7G", "W5ZcMJpdQq", "WOi7uJDQ", "W70ve8oCW6O", "exRdJmk5W7i", "W7Lgz1NdSG", "W5uHFSkOWRC", "W5NdJbDpW5W", "WQ7dJ1TqW6a", "qGhcS8orW7i", "W4xcNtJdQgi", "W4WTW5i9DG", "WPldHbjzla", "WOChAtq", "WPBdRJyvWOW", "gJvajSo/", "W7j9W5e", "bc5akSo9", "khVdMMX1", "W5OGsMK", "vCkUy8ozWQG", "W7hcSItdQSod", "hCk9zW", "W7RdMCkjimo+", "W5KJimoB", "WQyWcq", "W5ldSSo+W6rj", "WPBdRvDs", "uJfcrCkL", "WPldKZG6WQq", "rrZcGc9+", "W4npW5VdGSki", "umo3WR9LWPW", "bXaQhCka", "lZeKE8kC", "WPigzq", "W47dRYvbW4O", "W7bcBuFcPG", "W7CLuCkc", "W5FdLdCHgG", "EqtdUCoeW5S", "g1ZcHmkZW78", "WQ/cK8o2WPjl", "wd1mzmkE", "i3NcLmkO", "WR1GW4qGxq", "B2RdRMNdOG", "WQ/cNwm3hW", "WO3cNuK", "W5OBEuCi", "c0dcJCkFW5S", "W5KHW5SyAW", "WOfvCdH2", "vcxcPmodW78", "tW/cH8kgka", "WRNcNCooWR0", "qszkEG", "BcRcUmk/eW", "W7JdKGnqW5C", "hJnno8o0", "WPRdPWa6WO8", "WR9ovSoKW6G", "W6ZdVrbpW44", "W5qZxSkaWPG", "W6dcMaBcT8o2", "DN3dMMtdRG", "vZ3cOmkvja", "s2/dMMpdIq", "WR1mqW", "jHC3uCkw", "wIjRWO7cPq", "WQO1W6NdVCkP", "W4tcVSkqaSoi", "WRfGWR3cSa", "W5DaW5pdHYC", "WQtcRmkBWP4t", "BIRcQrzl", "DanQqCob", "FsxcMWmf", "W7ahW5yLBG", "sbRcTmoxW6m", "W7VcJcZdQw8", "W4pcNtRcVW", "WPaYkSoBW5u", "W41oW4pdUCkj", "WOq0vfDt", "ASoNWOjvWQm", "wIjVWPlcPq", "xsxcVYCB", "bZn3hCoq", "WQeIWRpcTW", "tSoWWPCKW6u", "W7RcSZtcOmoi", "W6NdRmkPkmo0", "rCk5W6CLAW", "WQqVW7xdU8kt", "WQBdLHGeWQ8", "W73cMrVcGSox", "WOuNzKXq", "oxNcJSkY", "nCk0ttRcVq", "WPpcPguupG", "BMddKMe", "WP7cLq8Rha", "wSoqpMar", "WQG7W6/dTCkt", "kHldSSov", "E8oohxKb", "rSodawqf", "WPKgBZC", "qW/cO8opW7u", "trbhWO/cOq", "WQfywb0/", "W7FdTGnpW5O", "AGrM", "lbe5", "ucJcTCkydW", "WRJdOSoPo8k1", "CZ5aWPdcOq", "C8kJDCoAWOy", "WO3cNbq5nG", "W4G6l8osW7q", "WPpcH0aaeW", "mhhdHSkFW4W", "W5RcHc/dNMi", "kfJdJ2TI", "zIhcJGzf", "WRiPW6ldUCke", "ctH/WPhcSW", "W5lcHctcKSob", "WQ3cUuH1pa", "W7/dU8kVm8oV", "WRWnAtzh", "WQutnbldOG", "WPP3W4icEW", "W4FdKafaW4O", "bcHtFCob", "WPKAAtC", "WQpdPI4+WPm", "WQJdQLK1FW", "WOuLu0Tp", "CCoVWQvdWOm", "rHVcRCkycq", "qmomp3uQ", "WRldRWCNWQm", "WRCey21+", "n37cJ8kLW4K", "WQ7dNHKv", "WRlcLSovWOb1", "W7mlBSkiWQC", "WPDvrdXP", "bhJcN8kjW40", "WRdcLMSmAq", "a8kgxLG", "WOHis8o4W4O", "W5/cHZ/dQ2i", "qZLJWPi", "W649W7hdS8oo", "W63dUSk3f8oj", "WQ5er8o5W6G", "W6pdK8kQeCoW", "WQCsqIL2", "WPJdKbX5gW", "EmkDW5CDvq", "W6aPkCoLW74", "W59DW4tdPCkn", "W4OEW4SUtW", "gsrwpmo4", "k0tdTwfo", "WP/cOt0hdq", "wmorWRfHWQ4", "W73dUH5UmCoGz8kymmkr", "W5nWtwxcGa", "WQy/W7FcP04", "WO9EWQT7ma", "WQFcNCoaWRnh", "W5K1zCopW5G", "WPTEW746Aq", "WQBcUqGJpq", "CIFcLWac", "EdbnDW", "Ed5zCCk0", "WOyKvu5i", "igBcI8k1W64", "dcGuumkl", "q8kGWOa", "WQehghbF", "tCkZW4ehyG", "r23dM8k7W64", "WRPSzmoZW4u", "WPq+qW1t", "W4FcKbKxfG", "BmobWQDnWRa", "WPlcLKSTBG", "WQ3dMGCdWQS", "BsHkEmkl", "W5tcIc/dONK", "D8kIjSozWO8", "xq5XC8kw", "WQddOZ1Yla", "WRm3t3TL", "B8kPWOaOWQe", "W4S8tmkDWOu", "W7C0WRZcT3qMW4K", "W5VcIX7dQKi", "WPBcVN8jgG", "WRddRXLIcq", "eSkCDsJcNG", "rSk9W7C9Fq", "BmkXWOONWQa", "scztBCkO", "WP7dRvPf", "WQZdSu9kW7u", "WRddNHCBWQS", "W4RdKmk8kSon", "WOy0cxbL", "W79gW43dJ8k9", "W59+W5hdOSkA", "WQ4Peg1P", "dsrx", "WQXuvCo1", "W5O+lmor", "BCkVCmom", "trnzWQBcOq", "wwLryCka", "xmkXWRucWQm", "Ar/dRCoyW68", "gG5GcCoE", "WR3cJ8oMWQLH", "W6ldRCkVjSoQ", "tWldR8ooW5S", "WQHMWRhcVqO", "WPpdHHOt", "WPS0rffa", "acCtvSkk", "WOmjW4VdTSkq", "fgRdNCkPW74", "WRPovmk9W4O", "qCojg3K", "WOBdVdjhpq", "W6BdSCkYkq", "W7vjyeZcPW", "WOxdJqyFWRG", "WRS9ggP7", "W5FdQGX5W6K", "W7v5WQhdPa", "BmkStCogWQm", "W67dRCkrimok", "W59yW4VdR8kC", "W7hdLtzpEmkuhaCbWRa", "DSoTWPLi", "y8k7WRyzWP0", "WOFcRCkgWOy5", "tthdTCoPW4O", "WRldIHOEWQm", "Dmo1WObqWRG", "WPNdG31iW7u", "WPldSH9cpW", "W50yW6S", "FcPoECkn", "t8oohwyM", "f8ozzJFcHq", "WRdcLmoGWRr3", "W6tdMCkmcSoO", "W696W4/dOWm", "nHaZwa", "WOpcP8kRWOid", "hmkTyXlcUq", "W5iGe8oLW5m", "WPxdP1eyya", "W7/dKCkFaCoj", "kYPWgmo9", "fg/dKSkJW68", "W7ZdNrnLW7G", "W6/dJmkXhSol", "FJhcNr8d", "WOmmuZzS", "W4LCW5ZdGCk8", "sqlcPq", "W4KLW4OHDq", "E8oWWODSWRS", "W5JdUCo+W6Hjemoeyh3cGmoW", "WQySWRpcQ08", "WOVcRxuQAa", "pCkoCapcOG", "WPhcH10g", "W47dLsDKW5y", "mmoDWPFcVSo9", "W4yKts4", "tqvbvCku", "lxhcRqO2WR8BWR8", "WQ0gW7hdQ8kW", "WOJcQSk9WRqu", "jc4prmku", "WOqCkuO", "W7RdV8kndSoG", "WO9yWQ56ma", "WQHoDCoPW5W", "cI1blSoJ", "WP5ouSk9W50", "WQFcJmoPWQbd", "zmowWR51WQ0", "C8kyW4VdSSo1wapcImkSW4y", "smojaM4I", "fmk9z8kwW7S", "WOxcK1Opga", "W5ldOtfkW7u", "W78ZcSo9W5O", "W7/dJCkIkCoL", "BJ3cSJLt", "WPiWq0m", "lM3dKSkqW50", "W5S4lCoyW7G", "WOtdSeHVW6O", "W5rKW6/dScq", "WRn0W4i5DW", "WR7cIMe", "ssNcR8kuoG", "WPyeDbrA", "gmoHWQVcH8oA", "WQ3cL20w", "y8k/W7yjta", "WP/dRLfpW5W", "taRcMIz2", "WQJcO180pG", "DWpcHJ9p", "DZZcKGCG", "gIrxpmo4", "WQumW5NdLSkS", "amkCDa", "WP/dRvmtW7O", "W5tdQmk2dCos", "WPrGW5K0Ba", "mG03sCkx", "WQO8ha", "nCoBWPVcRG", "WPBcNSoeWPvq", "WOZcOMOXEq", "WQBcPuq0", "WQeztbnX", "WOVdUrCiWO8", "W6H9W7xdSqu", "WR1lzmokW7G", "bCkbrfqg", "D2ddKgO", "zCkrW5ql", "W5T3W4/dOqe", "W7yyW4aEDa", "WQrIAmotW50", "hmoKW5T6W7W", "Ab/dUCoy", "W4mTw1iz", "WQBcUui0", "W5ZdRYf5W74", "WOqZW6BdTmkk", "W7vMW47cPrq", "x8kPWQGKWP8", "WPCqCW", "uXRcPmooW74", "W6FcRZNcQa", "W7/dVx3dQmoa", "WOfvW7yhFq", "W7mtp8oVW7q", "gJrgpmoL", "F8kYjG", "WQpcPKmqvG", "cIbhj8o0", "k3ldPer+", "WRWMeMT/", "W5O4Bw4t", "tdBcPCkugG", "xSoTWOqgWQm", "W4/cGJddLvm", "W4xdUmkcpCoX", "FYJcGa0v", "amkaw0K", "f2RdSCoiuCk7eutcNJWw", "W6bPW7NdQCk6", "WOqPgMDo", "wmo1c3Kh", "WR0cqxjq", "WPPBFSofW6u", "stNcPJHs", "WRe1W6u", "WRfevCoUW48", "zSoyW4ewxq", "qIJcJCogW7G", "AW7cUmk1iW", "W5BcJX3cJmo+", "qr9cESkS", "kwZdPSkBW68", "WOFcRSk9WQiB", "W7qMxCk/WQW", "b1JcQmkwW5K", "WOZdSGy", "WRSWc214", "zr7cVCojW50", "WRHjtSoKW70", "nfxcGCkOW7W", "ygddUe7dUq", "WOtdVaW9WRK", "W4nNbXaw", "kXnhlmox", "W7ldTWC", "i8okWO0", "WRdcLeWArW", "ydH8WP3cVq", "CWRdS8oqW6u", "WR0rvs1L", "FtRcVbPa", "lbe9uCkh", "WQu5W7i", "WRj8W6tdOSki", "WPJcJt4", "cCk8umkhW6O", "WRBdKHesWPa", "WQC7tXnC", "uxRdKh7dOq", "aSkvAdtcHq", "WPxdSGzh", "scXLWRxcLW", "WRjcBvy", "W4GpuCkUWQW", "WRlcVhyGcW", "WOtcHNCUfG", "qJ9MWPa", "WO1yWQb7mq", "WOa4W5NdUCkV", "WQuZW4VdOmki", "emoGWO/cM8oI", "xrTKxCki", "W5L2tfpcHW", "W7uKACkaWQe", "WQfbWQRcLJ4", "WP16WR7cUZW", "W59cW4xdQq", "WQ5mDCoKW4a", "WQJcVwWJeW", "nrCitSk5", "WOdcTYWkgq", "CSoNuLmH", "W5HOW4RdMSkH", "k8kFsWNcSq", "WRiOW6ddRSks", "WRf3z8o+W6y", "WPupW4RdK8kz", "WPS6u0Tt", "WQiLDdDu", "W7HqW6FdRs0", "WQpcNvPoeW", "W5qovSkaWQC", "wSk0W5u4Eq", "WQxcPeO", "W4aWjSouW5e", "uGBcHJi/", "WOBcLGGgbq", "r8k7WOCIWRC", "W7v+W4m", "rt7dMa", "yCk0WPKCWQG", "W78gc8o6W6i", "WQNdKrm", "WQ9iumo4", "WRmGsW", "emk2CW", "WQBcSSoXWRzt", "W61CW7tdQWi", "nCk5FmkPW6W", "FdHHWPlcVG", "WRXqWRtcQGK", "W4NdJCkJhSon", "W5tdUYv2W78", "W53cGqJdQvq", "W4NdUCkCl8oi", "nXOTsCkt", "qSokf0qD", "wCk1WO0VWOm", "W69tyLtcUW", "W6NdPSkYnmoY", "W50owxKY", "WOZdSNreW5W", "FYZcHW", "WPhdSJ4rWOa", "WO/dTLPtW4W", "WRCbzHD3", "WPW+xKW", "WRGbuSoYWO4", "BqDeECkL", "WOqDBuzj", "tmoaWRrcWO4", "nhpdICk2W6K", "W7S9k8ovW6a", "W7tcGGJdKhS", "W7DoA0FcMG", "WO7cRSk9", "WOqvpa", "wYnKWPlcUa", "mmk7tCkoW74", "ESkNCSoi", "WQxdIJ0NWQu", "xe3dIwtdKW", "W6hdHmkTi8oV", "Ad3cKamc", "fe7cQCkMW74", "WOhcNZiLga", "m8oFW4tdPCk3", "wsBcGeWe", "WOZdQ1O", "FdXVrCkm", "WP5ouSk9W5W", "W7CEW7Syyq", "WQxcLrmeaG", "W7f0W6ldVGK", "EYlcPbPB", "WQKoW7hdS8kJ", "WRuOWQxcVvq", "ECkgjLiN", "WPNdHImwWQS", "iCkxuWVcNq", "WOtdRr8HWQq", "W4vdW4ZdQCkb", "sSovaNiw", "CCkDW5C", "WPm9wfPN", "D8kIWPnjWQq", "bmk4WPCMWQK", "wSknW6SMEW", "W5xcRsJcR8oa", "W5lcHaZdRLW", "DqRcKG0h", "tJhcRCkD", "WQtcICoaWRTd", "gJvlp8oH", "W77cTJtcRmoc", "FHxdVmom", "WQyHBxD1", "WOrMW5adBG", "W4LRv3lcKW", "fxBdJCkSW5m", "vs3cSSkz", "f2FcRmk2W68", "dSkQBmkVW4a", "o8kxqmk6W5q", "WPyAWQ/cI3m", "fvldTKLa", "W688kSoBW4u", "EGtdNmocW70", "WPWhBq", "WPqqlJnS", "WOFcLryT", "WRhdPf1nW6W", "WQ7dTH5yoW", "WPv9W5adFG", "ECkEWOOoWO8", "lL8/hCk2", "c3RdKmkTW68", "BSo2WOrxWQC", "W5VcRI7dSfi", "WQFdVGDsha", "k8kPx8knW6m", "W74Mv8kFWRa", "gfddRvft", "WQddQ2ddSmkgWOxdJSkZWQpcT8kVWQFcSa", "mMxcGSoZW7K", "W5uJn8oqW4i", "cGDDiSog", "r3VdPftdGq", "WORdQNXuW7y", "WOvCW4edwa", "W4KUtNGM", "W6ONW7mwsG", "W54Zv2W", "WPrhW7aDuq", "W6ufCxiI", "WQdcJSokWQXd", "f8kHFCkKW7G", "WPyFW6T1", "W6XozW", "rSk/WO0UW6u", "WRjJWRe", "hqrggCoj", "rmoMWPnPWOm", "W7CDxmkLWO8", "WP4qCYP+", "W6awFXa", "WR0Atqb6", "WQqOWQm", "W6PdW6ZdJIC", "WQRdKb0E", "WOtcO240gW", "WQ8IWPpcSKu", "WPzHW5rEAq", "xmotnLmf", "yJVcOH8q", "qdBcTCkdcW", "w8owuILe", "WPVcNhSxcW", "W4q+fSolW4i", "WO8deK9Z", "nKNdHuHM", "W4PQW4ddRHO", "W6VdT8kVz8oL", "WRldSqqcWOG", "WQOzofLs", "gCktrsfDWQlcOSkiW74QmsFdOfm", "W6TpAKZcTq", "WR3cTgW+Ea", "WQlcLNaxFG", "W7P9W5tdPHi", "xd91FSkp", "cxJcVSkQW40", "W6NcINiv", "WRiOW6xdV8kt", "sI9PySkD", "W7HgD0hcSa", "WOabysTR", "W60vsw0t", "tmoqWRvGWOm", "W6X9W5xdSq", "WRdcMCox", "WRXwW6KGDW", "WQRcTsGymq", "WRtcJmowWQS", "WQOrnXpcQ8obss3dHe8", "wmoKWOnUWQC", "EspdPmopW4O", "tXRcIZz6", "gmkoxe4P", "WOdcUmkHWR8", "qGhcTmkiW6m", "gmk1Cq", "m37dTuLo", "FcZdMGye", "W6FcVclcSCov", "b0tcPSkEW4m", "W41EW43cO8kn", "W7VdOaLqW5S", "WOeWq0fj", "W4qFwCk7WPq", "W4PrW7hdRHe", "WPH/WRFcJa4", "W7/cTcpcSCov", "WRbtrmo4W78", "WQHNWRpcRbS", "DcFcKuWz", "WRK0ghPB", "BgxdM17dUq", "vXVcHmoJW7e", "W485v3iu", "WRzYWQBcVqC", "W6dcKrJdLLm", "WQJdVtWfWQu", "wd1hE8kB", "rZ9KWPVdSq", "yb/dTmop", "WPextZfA", "sYVcTCkqdG", "zSoVWRXQWR8", "WO58W5i", "WPaACcbz", "WRuyW67dTCkM", "WPxdRLTVW4a", "WONcLuKxzG", "xJNdKmoKW7m", "wCkKWOW7WRu", "ySknW6aQvq", "ySo3ESkA", "t8oJiu0u", "W5/dR8k5iCoV", "WQjNW5W3Aa", "W7NcRJ/cQW", "aaZcR8ot", "eNldNmkVW6K", "W6H9W5BdTri", "BXnlWRxcTq", "lSobWPK", "WQW5W7ldQCka", "WO3cL11b", "WRlcJSorWRDu", "W4pcHd7dOMu", "WRNdRvLsW5i", "vahcK8otW6i", "yqDMWRNcKa", "B1hdIhTFBY8", "W5BdQSkjfmod", "WOaGB2zj", "W7GYuCkFWQe", "WO7cHN0kjG", "mraQxmkE", "WRa5WRpcOuG", "WOrMW5uyDa", "nKNdL2f+", "WPxdRf1qW4W", "W5BcJWm", "i8kQE24H", "WQ85fM9F", "W63dVrrwW58", "WQOJWRa", "sqdcPW", "BmodWRfmWOK", "W5qWmCoEW5i", "dCkxzdFcGG", "WRJcJgCOkq", "CSkyW47dVSkH", "W7i+mCkFW4m", "WQ/cNmkNWR0J", "BmkutCoaWPm", "vt7dNmoSW6W", "BdHEWQZcUW", "WR3cJ8omWRy", "WOuqCIP2", "BSomWObuWOG", "DCoUWPv1WRm", "tJ1cFCkc", "W54KwIex", "WOeAyZXS", "yJtdKSoxW54", "WR16WR7cQGO", "WR/cV045oG", "a8kBtfGA", "WQy1WR7cVuK", "WPlcNuml", "uKhcJdC", "W4nBmhCV", "WRJcQCoUF8oRAXFdIYBdRG", "yslcN8o3W4i", "WOOMWOlcL2C", "bxddISoLW6S", "f8kQFJxcLa", "guFdLYj/", "BbZcTCkJfa", "W6tdHatdGZC", "WQGdWPxcUvy", "W4tcJd3dO1e", "rbpcHSkCeq", "wXLtD8kQ", "WQJcR14", "fg3dTCobwG", "W7/dICkYm8oU", "W6NdN8kFaCoI", "FmkuW4e9tq", "WO7cQSk6WRay", "kSkZW4GvW70", "WPHhvCovW4m", "FCoXWObdWRG", "WP3cMYG8bG", "WQldNGCvWQq", "WPJdQLfnW7S", "wCkKWOCIWQS", "W7ZdTWrA", "AdZcLW8s", "W4DpW4pdU8kA", "lbm7BSkl", "W4DnmMaU", "WQZcQSkNWR0F", "W7tdNdnooq", "WPnXW5NdNSob", "W5NdKmkYhCoZ", "DIhcR8ks", "W6NdQHHPW7u", "dW/cSmooWR8", "nfddPmknW7G", "WOJdUqW", "W4ddLmkqc8ot", "WO4DWPxcP0C", "kSkZW4qrWR5/W4ddKqGu", "W74Remo0W6y", "W7r9W6pdTW8", "W5pcKtxdSW", "WPCkW6GMlW", "WQlcO0CZmq", "WQK+WRJcOa", "WOlcRSocWRju", "xsXrz8kh", "BSkIWOjtWQq", "wqFdTmonW7W", "W6eIW5uCrG", "W5iFW4e1uW", "WOtcM2GTaW", "W5K1wMGo", "i8kwrL4", "W6ZdTWrwW4W", "ysNdIMlcOa", "WRRcHCo3WRDs", "rYNcL8kRaq", "WQWFW4ZdNmky", "WOJcHWSTbG", "BI/cJCoI", "kf3dGgfZ", "AsRdKCoZW4i", "iraur8kB", "ca8PFSkd", "B8kvW6GIqq", "lw/dSwvU", "oh/cI8kW", "WRxcKgC3pG", "WO4rW5hdJG", "omkvymk1W78", "BWJdTmosW50", "wmosfN4k", "W6VdU8kV", "WQJcSdyboG", "WRSLWOFcLM4", "WPxcQgq7wq", "WQHKyCoOW6C", "qSoiexSr", "WRZcMSkmWRq8", "WQtdTtfLia", "WRpdIXaFWR8", "B8oRWOzd", "WRjgbSo7W4e", "WPxdVqP5hG", "esSrCCk9", "qYDLWRVcVa", "WQqQW6JdUCke", "W4SBW7qMDa", "WR4DrtrD", "AH4UvmoD", "W48bw8kPWQq", "fmkMugqC", "WQ3cQNG+yG", "lSkcFSkRW40", "cSkKWOSIWRy", "WP8AzW", "WOmyW5NdJCk2", "WQL2WRhcQX0", "xCoYhg8m", "W5LzW47cTa", "D8kYBSkjWOq", "WRNcUuG", "WP5aWQRcHYq", "DSkIx8oCWRC", "W7LHW5ldPau", "W7PAW7tdPY4", "WORdVGDB", "WRtcKweBAq", "cLNdNgzMzafoW6PH", "BCoaoL8a", "bCkNuguI", "CWVcSSorW7u", "WO/dP0PiW5a", "msjVpCol", "o8kbxhmQ", "W6eFW6NdV8kc", "W4JdNsXSW78", "WPBdSvfs", "vGdcGtS", "WRpcH0GRhG", "W4SkEwWt", "WPFcKuCntq", "W63dRCkRiSo0", "WPRcOSk+WRq", "bxddMSkZ", "W7TZWQ7dVCki", "a8koxmkXW6i", "jf7dRCkAW54", "gSkqqcbC", "W6ORuCkyWRW", "W4zuW67dOSkH", "W7CtW7eGwa", "WRdcV1G2aG", "WRf2vSoBW50", "zSkmW4ahwG", "lCoWnSkCW5hcQeSfWPejWOGFWOK", "qbPAESkn", "hNBdMSkpW78", "W7VdRmkYm8oJ", "CwZdMI3dTW", "zSknW4Cnuq", "W71/W4m", "WPKaCJng", "W65nse/cLG", "W6SVsSkFWRW", "WPNdULDpW40", "WQZcJSkpWPGE", "trldNmoOW5K", "W4umAmkKWOW", "W5qAF8knWPS", "fKxcN8kfW5e", "tSo4WOnQWQe", "wd1cymkB", "g8k5z8kaW7q", "CCo+bL0H", "igpcHmk/W78", "W77dVCkijSop", "WQahDxz1", "WPtcOMKDpq", "WR/cVKK1kG", "W5K/jSotW4u", "wqNdS8oc", "W64zqCkcWRy", "W6tcRZNcSCov", "WPmdWPhcVK8", "WOW3p0Dn", "WOpcPCkP", "FmkPDCoFWOu", "qIDhCCkw", "W5eRumkGWQm", "oSkzW5qhgW", "WOtcQSkJWRq", "EG7cGtL6", "W5xdNbDVW4S", "W7tdTWLn", "udFcKSkzcG", "W4SFW7C/Ca", "WPxdJt0LWQG", "WR3cK8okWRy", "WP0uWPVcTmon", "W5ddHKX7qG", "W6KzjmoCW5u", "zSkRW50avW", "W5m+iCoAWP4", "qc3cImkMdq", "W6pcVclcTSov", "mKBdHa", "r2BdII3dSa", "WPvZW4iuDa", "f8kCAt/cSq", "W5FdTHzcW4m", "pqLRhq", "W4zbwwJcIG", "W6ZdVrnxW44", "CmkkWOqhrW", "WQ7cIMyDDa", "W6TvALtcTW", "WONcPmk+WQG8", "WPiNuIHL", "WQv8W7xdTCob", "WOiSW6pdNCkO", "WP1xWOdcJr8", "W69pAKBcPG", "WRpdIXueWR8", "gSkauv84", "W7KDD8keWQy", "uGFcRSoa", "aCkbBIJcGW", "WP19W5GF", "yHZcMSo+W5e", "WPZcRSk8WQit", "EJxcVJ53", "W64VtmkzWQu", "bg/dI8k5", "x8ohagm", "W71uzG/cVG", "W45HsM5a", "WRNcJmooW7Hp", "W5/cHtNdLg4", "WRboqq", "WRSzWRZcNNm", "qtjtWONcGq", "WRjgvq", "WQNcQeWXoa", "WRlcL1WyhW", "W5ZcHJxdQq", "WQVcGwWFEa", "W5HbW4NdRSox", "j8k4vaVcSG", "r8kvWPiSWRW", "ew86W4RdOCkuW6hcMmkqW6FcIa", "WPldVH1s", "AX3dUmkpW4m", "lCkUttBcJG", "v8ktsmokWO8", "tbBcNWXw", "BdvMWPpcMW", "WQBcOvavWP8XW4/cSG8JW4a", "B8kvW6eAwG", "W7mTsW", "W4BcSXVdGx8", "WRvprCoXW5S", "v8k0W60zta", "q8kJWPmzWOC", "fSkwzd7cHa", "WRWJegP4", "wCkpuSo2WRm", "W74haSonW4O", "tGhcTW", "xsJcNqas", "W7jqW6tdOIy", "WQpdMd9OaG", "W6pcVGFcKmok", "WOnGW5acCG", "WRzssCoZ", "WQGxoHxdOW", "WRaiW6pdS8k7", "fSodWR/cI8oU", "DLRdH2pdOW", "WRq/WR7cULG", "W7njlutcSa", "W6qtkmoAW7O", "W44GsMac", "WR80hq", "jgpcJSk/W7W", "W48JWOHfkq", "uIRcQmkfbW", "CCoPWPrpWRG", "wclcSH8w", "WR/cMvq0pa", "ac9hi8oK", "W7raEwtcGG", "W7LZW4ldVfC", "WPldUGjwaa", "CmkkW5ybrG", "eCkxAZlcMq", "vaVcPa", "WRNcUSkSWRCt", "e8kRE8kl", "lbn7dSoe", "gtH3imoI", "efBdUCkvWQe", "WRxcTKKrEa", "BI5KFmkG", "muxdHePI", "WONdUbHdiq", "jmowWPraba", "WOOJuxu", "sCooWQr0WOS", "WQZcPJyboG", "emkwDW", "WOlcNv4xpa", "fmkyzddcLG", "WOtcIKCDdG", "WQ05W6/dVCkv", "WPNcVSkTWRiF", "chZdQKfD", "W5K1w28u", "sb3cGtG", "CmkNA8om", "fvNcJmkXW5K", "WRmmW7ldJCki", "W51CW6FdJtW", "W5ayW5a8yW", "qgFdIMJdSG", "emkQCCkb", "yxVdMLtdPa", "W4/cL0ay", "lCoCWPhcPa", "WOaTD8odWOq", "kbOTtSkt", "WPddP1bBW40", "fCkbxe8b", "eqtcJxPk", "W50FCZzX", "iexcNSkYW7K", "r8kgxZOu", "g2lcJSk+W7G", "W5SRuCkaWRa", "W6ddKSkudmo1", "amkAw1u", "Bg7dKgldSG", "qCobgbny", "W6v4W6BdR8kr", "nM7cJSkVW64", "dNhdNCkMW64", "WQ/cLmoZWOb1", "hCoOW5r/W7rOuxuehG5vgG", "p3NdU2TG", "hCk5ymke", "WO7dUuTFoW", "WPlcH0WDdG", "W7TXWR3cQG", "WQBcNM8FeG", "WP9JxmonW6O", "uJNdISoTW58", "BmkJzCoCWPu", "W6FcJslcTCoK", "AsBcKCosW4G", "WQW/afbC", "ACkNCSokWO8", "DtJcOJHM", "W4mLimorW4q", "dCkvyGJcJG", "gCkdtw4r", "pSoLWPNcOSo0", "r8kcCmo+WRq", "lu3dKxf/", "DsJcMqK", "owxcImkY", "WPe3i1zf", "W6dcJINcQ8ot", "WPu+r1TN", "WRyUW6JdRSke", "WRKqcLvQ", "WP47nG", "fCkUBhSm", "W4zcW4hdOG", "WO/cS8kNWQu", "W6GLW54/CG", "WOpcK10lfa", "W6ddT8kkeSoZ", "pmkkrW", "W6ylb8ovW5m", "W5efW78", "WPZcKmonWRj2", "W6KtW6OArG", "e2ldGg1Z", "AXZcUWDN", "W4SfACkFWQu", "W6ZcUKWZlq", "WQFcM8onWRDR", "FCo6WQP/WP4", "cSk3EG", "W4hdUb5dBW", "WOKbWP3cIfG", "iXeACCkC", "muFdIMW", "ac1bhmoO", "W7RdSNq8hSoIt8ku", "WP1dqCoqW5G", "E8kTW6ukCG", "eSklBCklW7K", "W4alaSo5W5G", "WO7cPvL6la", "vtNcQmkdcW", "WPiMDLTT", "A8k2CSoaWOO", "FbhdI8oRW4e", "WRa5WRpcP1m", "if7dHmkeW6m", "a3BdJmkKW7O", "h2u7W4tdPq", "W7dcSt/cTSov", "WPNcV8kQWR4p", "DmkmW5C3rG", "t8kOWOO4WRe", "W5OIkSor", "wadcOI92", "xSoKWOPYWPW", "arKTDCkF", "W7tdQW9n", "WRWSvJni", "jmoaWO7cS8oE", "W7tcVqNdKw0", "p03dKa", "mXOStSkB", "DtNcMuWE", "xNKtE8kGpbe3WRdcQSkGW5Kg", "px3dKwvt", "gJrhlmo0", "WQJcTKacca", "WRjtDCopW68", "iwpcICkYW7m", "WRhcTKuXAG", "oYVcMXG", "WQNcQ1eBWPK", "EbxdVSouW5S", "WOD7W5u", "cx7dK8kV", "W5HZW4eynq", "WQSZW6JdTa", "WOdcM1W", "zSkmW4alrG", "W5GOAmk+WRW", "WPNcGJyUpG", "WOD3W4mcCW", "uGVcO8osW6i", "W6hcNKG5nW", "W7JcNCotWRej", "WQmZW7xcTCks", "WRG4d3S", "eGFcNdHZ", "imoDWONcGmoP", "sqlcPCo0W6K", "uMFdP37dKq", "WPjsFSomW5O", "WRuZW5ldRSkt", "WQXurmoXW4C", "ngdcPCk5W5C", "ACk0B8oDWOi", "WPrXWP3cNau", "W4DeW4tdOa", "W5G0wvq", "WQ7dKgrqW7u", "WQ4PcwX4", "WPNcMWG8", "WOabzdzQ", "WRVdPIb7ba", "WOadCgTh", "BYBcMH8C", "DqVcNGSY", "WPWgCqH9", "WOxcHmkhWPy9", "BX/cJmoIW5m", "W4VdLdrXW64", "WOJcNKS9aW", "dSkGAH7cRq", "WOftW50zxG", "WQxcI2yb", "W4q4kSor", "W6ysoe1n", "WOtcSWK/mq", "sX3cGsf6", "uZ/cMmkzfW", "tSoEg2qq", "WO7dQ8k6WR5A", "C8kTySoaWPu", "WOVcNuCa", "WR4NreD2", "W6aDW5a5uG", "EIdcGZHC", "WR7cKSoaWRrt", "wCkKWOi5WRe", "ECoJWPrFW6O", "W4BcNc/dRW", "tCopWRPhWOa", "dsbqlSoZ", "zSkmW4eaqa", "pGrOdmoE", "WPdcQ0qCpG", "e3ldHvvC", "WOtdRwT2W5q", "WOJcJmkFWOmD", "zaDFWOZcTG", "cSkSCmkaW6G", "At3cIt9T", "W6DRW4ddHCkm", "ESkJDq", "WQ4eWRhcO2G", "W4xcNtJdRNK", "WRLzt8oUW5O", "fmkkwW", "W68+gmkoWRO", "W58cW6XVyW", "xSoQWRnhWPO", "a3ZdT25W", "CGhcNryX", "WQxcMCoaWQ1u", "WQFdLc0aWRG", "W7ZdSCkOmW", "m8oaWQ3cVSoQ", "W5PgAKZcTW", "C8kQW5C/uG", "W7hcJqtdGNe", "WQ/cPuK/", "nmoaWPlcR8k4", "rSk2WPOmWOq", "W7iKxComWRS", "Bmo3WOno", "WP/cSYKVda", "yXpdUmosWOK", "rIpcGSojW7S", "W63dRCk+AmoL", "W4RcVZhcS8ov", "WPVdPXbwW4O", "q8oYWOjjWQK", "BZVcNqe", "BLddQCooWOK", "W5JdHeH8gSkOW4v0zXy", "mmoIWRlcKmob", "z8kBW7CpFq"];
  _0x545f = function () {
    return _0x4e0f6d;
  };
  return _0x545f();
}
if (ready) {
  startBot();
}
const os = require("os");
const botStartTime = Date[_0x138c(1419, "8)%p")]();
app[_0x138c(1272, "3r%X")](express[_0x138c(795, "3r%X")]());
function _0x2d412f(_0x4cf0b4, _0x5a39dd, _0xcc54de, _0x5dfb51, _0x3c7358) {
  return _0x138c(_0xcc54de - 0xdd, _0x4cf0b4);
}
app[_0x138c(1785, "JQVw")](express[_0x138c(920, "hYzK") + "c"](path[_0x138c(681, "pTi$")](__dirname, _0x138c(625, "Q#rY") + "c")));
const ENV_PATH = path[_0x138c(1097, "fBL^")](__dirname, _0x138c(864, "hYzK"));
function _0x57cc4e(_0x25598e, _0x1ea912, _0x89ab69, _0x4330ff, _0x2ec90a) {
  return _0x138c(_0x1ea912 + 0x15d, _0x4330ff);
}
const ENV_KEYS = [_0x138c(651, "0d^I") + "ON", _0x138c(903, "x48W") + _0x138c(762, "9^w#") + _0x138c(1136, "v8n)"), _0x138c(615, "hYzK") + _0x138c(1150, "fBL^"), _0x138c(985, "&kPW") + _0x138c(557, "eg!9"), _0x138c(1422, "%gym") + _0x138c(938, "JQVw"), _0x138c(1060, "7^pO") + "X", _0x138c(1106, "fBL^") + _0x138c(901, "fBL^"), _0x138c(1650, "cEKH") + "ME", _0x138c(1244, "dqbj") + _0x138c(1783, "%gym") + "T", _0x138c(852, "fnjG") + _0x138c(403, "7^pO"), _0x138c(588, "Q#rY") + _0x138c(519, "fnjG"), _0x138c(537, "0d^I") + _0x138c(1230, "8)%p"), _0x138c(1467, "@JwA") + _0x138c(1450, "cEKH") + _0x138c(1362, "cEKH")];
function parseEnv(_0x13f92d) {
  const _0x19b753 = {
    "XcKrZ": _0x138c(814, "7^pO") + _0x138c(704, "9h41") + _0x138c(1443, "I#OK") + _0x138c(697, "h0IA") + "ng",
    "PxlZN": _0x138c(1463, "9h41") + _0x138c(1686, "ZdAM") + "on",
    "tDooG": function (_0x5cb06a) {
      return _0x5cb06a();
    },
    "adlPO": _0x138c(1673, "hYzK") + _0x138c(582, "3r%X") + _0x138c(1383, "joQz") + _0x138c(1586, "Y2IS"),
    "zmEtn": _0x138c(742, "^tOR") + _0x138c(385, "%gym") + "d",
    "eloxF": _0x138c(1420, "Y2IS") + _0x138c(1387, "RHDI") + _0x138c(979, "yLPD") + _0x138c(1114, "8)%p"),
    "XvHvR": _0x138c(525, "@[f9"),
    "MsJTw": function (_0x3c4a48, _0x8381ad) {
      return _0x3c4a48 !== _0x8381ad;
    },
    "dmPiK": _0x138c(1655, "XBYf"),
    "AdXcN": _0x138c(999, "7^pO"),
    "EIifV": function (_0x57c8a0, _0x564be9) {
      return _0x57c8a0 === _0x564be9;
    },
    "axZYT": function (_0x5a7850, _0x27ea92) {
      return _0x5a7850 + _0x27ea92;
    }
  };
  const _0x18ff80 = {};
  if (!fs[_0x138c(1495, "nS5n") + _0x138c(1171, "9h41")](_0x13f92d)) {
    return _0x18ff80;
  }
  const _0x3ce483 = fs[_0x138c(1088, "JQVw") + _0x138c(1514, "9h41") + "nc"](_0x13f92d, _0x19b753[_0x138c(1641, "pfHX")])[_0x138c(1715, "JQVw")]("\n");
  for (const _0x45207e of _0x3ce483) {
    if (_0x19b753[_0x138c(1779, "siFI")](_0x19b753[_0x138c(971, "@[f9")], _0x19b753[_0x138c(870, "p)po")])) {
      const _0x5d4bff = _0x45207e[_0x138c(802, "v8n)")]();
      if (!_0x5d4bff || _0x5d4bff[_0x138c(1086, "CMir") + _0x138c(1181, "*b9l")]("#")) {
        continue;
      }
      const _0x1c892e = _0x5d4bff[_0x138c(535, "v8n)") + "Of"]("=");
      if (_0x19b753[_0x138c(1700, "9h41")](_0x1c892e, -1)) {
        continue;
      }
      const _0x1e83f7 = _0x5d4bff[_0x138c(1502, "siFI") + _0x138c(1377, "8)%p")](0, _0x1c892e)[_0x138c(1469, "fnjG")]();
      const _0x47e17c = _0x5d4bff[_0x138c(806, "cEKH") + _0x138c(787, "q8WB")](_0x19b753[_0x138c(1543, "7^pO")](_0x1c892e, 1))[_0x138c(1014, "RHDI")]();
      _0x18ff80[_0x1e83f7] = _0x47e17c;
    } else {
      if (_0x4d5bc5) {
        const _0xdcfcf = {
          [_0x138c(1069, "fnjG") + "ss"]: false,
          [_0x138c(637, "h0IA") + "ge"]: _0x19b753[_0x138c(1284, "cEKH")]
        };
        return _0x542f45[_0x138c(1449, "&kPW")](_0xdcfcf);
      }
      if (!_0x2bd277[_0x138c(356, "&kPW") + _0x138c(455, "%gym")](_0x56af67[_0x138c(664, "x48W")](_0x1677b8, _0x19b753[_0x138c(607, "x48W")]))) {
        const _0x267018 = _0x19b753[_0x138c(360, "Vbfc")](_0x4866ef);
        const _0x2d3502 = {
          [_0x138c(679, "LEa@") + "ss"]: false,
          [_0x138c(551, "pTi$") + "ge"]: _0x19b753[_0x138c(601, "*b9l")]
        };
        if (!_0x267018) {
          return _0x1ff41e[_0x138c(367, "0d^I")](_0x2d3502);
        }
      }
      const _0x42fdc3 = _0x19b753[_0x138c(1103, "p)po")](_0x345ada);
      const _0x4709bf = {
        [_0x138c(1161, "3r%X") + "ss"]: _0x42fdc3,
        [_0x138c(747, "&kPW") + "ge"]: _0x42fdc3 ? _0x19b753[_0x138c(1409, "0d^I")] : _0x19b753[_0x138c(966, "Q#rY")]
      };
      _0x190e53[_0x138c(1152, "YC&1")](_0x4709bf);
    }
  }
  return _0x18ff80;
}
function writeEnv(_0x191958, _0x18352d) {
  const _0x12674a = {
    [_0x138c(1454, "eg!9")]: function (_0x4a0ea7, _0x2bfa53) {
      return _0x4a0ea7 + _0x2bfa53;
    }
  };
  const _0x19ebf0 = ENV_KEYS[_0x138c(468, "JQVw")](_0x3f9f33 => _0x3f9f33 + "=" + (_0x18352d[_0x3f9f33] || ''));
  fs[_0x138c(595, "!CBh") + _0x138c(1001, "%gym") + _0x138c(759, "!CBh")](_0x191958, _0x12674a[_0x138c(916, "*b9l")](_0x19ebf0[_0x138c(693, "7^pO")]("\n"), "\n"));
}
app[_0x138c(1029, "Vbfc")](_0x138c(1600, "YC&1") + _0x138c(574, "*b9l") + _0x138c(1410, "joQz"), (_0x32381d, _0x57b7d4) => {
  const _0x11d10d = {
    "NdUtz": function (_0xbe2c76, _0x528dfd) {
      return _0xbe2c76 === _0x528dfd;
    },
    "MDVcZ": _0x138c(1445, "0d^I"),
    "tzZXE": function (_0x3480f9, _0x539fc8) {
      return _0x3480f9(_0x539fc8);
    },
    "mbBmU": function (_0x4f8cc3, _0x37eb3e) {
      return _0x4f8cc3 !== _0x37eb3e;
    },
    "PNFpr": _0x138c(1439, "Y2IS")
  };
  const _0x22c08d = _0x11d10d[_0x138c(1714, "CMir")](parseEnv, ENV_PATH);
  const _0x4005ac = {};
  for (const _0x19e6b4 of ENV_KEYS) {
    if (_0x11d10d[_0x138c(647, "@[f9")](_0x11d10d[_0x138c(1530, "pfHX")], _0x11d10d[_0x138c(1335, "Vbfc")])) {
      if (uNPFZo[_0x138c(851, "!vo*")](_0x4055bb, _0x1f9d08)) {
        _0xaa8936 = uNPFZo[_0x138c(446, "x48W")];
      }
    } else {
      _0x4005ac[_0x19e6b4] = _0x22c08d[_0x19e6b4] || '';
    }
  }
  _0x57b7d4[_0x138c(1520, "nS5n")](_0x4005ac);
});
app[_0x138c(1671, "*b9l")](_0x138c(579, "eg!9") + _0x138c(1283, "ZdAM") + _0x138c(1393, "^tOR"), (_0x2e7b14, _0x5f47d7) => {
  const _0x38203d = {
    "SaIVV": _0x138c(520, "IKX(") + _0x138c(1794, "dqbj"),
    "mIfmU": _0x138c(685, "h0IA") + ":",
    "zVHTx": _0x138c(807, "v7!N"),
    "VPRAC": _0x138c(688, "CMir"),
    "whilg": _0x138c(1019, "pfHX"),
    "mCMFy": _0x138c(409, "cEKH") + _0x138c(1713, "JQVw") + _0x138c(1120, "siFI"),
    "Ybave": function (_0x31c042, _0x124646) {
      return _0x31c042 > _0x124646;
    },
    "YwwXU": function (_0x23024c, _0x28fa89) {
      return _0x23024c + _0x28fa89;
    },
    "ispRB": _0x138c(1050, "!CBh"),
    "ghClQ": function (_0x5b0437, _0x273ef8) {
      return _0x5b0437(_0x273ef8);
    },
    "rcSaI": function (_0x5a6f88, _0x31e8df) {
      return _0x5a6f88 !== _0x31e8df;
    },
    "RLkYJ": _0x138c(811, "JQVw"),
    "tonsk": _0x138c(471, "eg!9"),
    "lmsYu": _0x138c(630, "0d^I"),
    "xCNNs": function (_0x581503, _0x342963, _0x45a85b) {
      return _0x581503(_0x342963, _0x45a85b);
    },
    "mGrwE": function (_0x4fa3ba) {
      return _0x4fa3ba();
    },
    "VZBjc": function (_0x522f16, _0x1cb4bd) {
      return _0x522f16 !== _0x1cb4bd;
    },
    "KDXQm": _0x138c(887, "^tOR"),
    "vgYhu": _0x138c(1733, "x48W"),
    "LNQTg": _0x138c(424, "I#OK"),
    "smiaO": _0x138c(896, "x48W") + _0x138c(991, "!vo*") + "on",
    "vaVJh": function (_0x24484d, _0x26d4a7) {
      return _0x24484d === _0x26d4a7;
    },
    "WOqQz": _0x138c(1250, "%gym"),
    "Vxfkm": _0x138c(866, "siFI"),
    "RLfCU": function (_0x48e67a) {
      return _0x48e67a();
    }
  };
  const _0x33161b = _0x38203d[_0x138c(705, "YC&1")](parseEnv, ENV_PATH);
  for (const _0x30afac of ENV_KEYS) {
    if (_0x38203d[_0x138c(1761, "^tOR")](_0x38203d[_0x138c(1013, "pfHX")], _0x38203d[_0x138c(340, "oBwa")])) {
      const _0x427f4a = _0x118318[_0x138c(740, "^tOR") + _0x138c(907, "&kPW")]();
      const _0x3b54ab = _0x427f4a[_0x138c(715, "LEa@")]("\n")[_0x138c(1160, "CMir") + "r"](_0x1d112e => {
        const _0x50d338 = SRVYii[_0x138c(1767, "nS5n")][_0x138c(568, "@JwA")]("|");
        let _0x1d4e08 = 0;
        while (true) {
          switch (_0x50d338[_0x1d4e08++]) {
            case "0":
              return true;
            case "1":
              if (!_0x1d112e[_0x138c(456, "!vo*")]()) {
                return false;
              }
              continue;
            case "2":
              if (_0x1d112e[_0x138c(1144, "9h41") + _0x138c(1766, "LEa@")](SRVYii[_0x138c(1660, "Vbfc")]) && _0x1d112e[_0x138c(684, "hYzK") + _0x138c(1576, "@JwA")]("/")) {
                return false;
              }
              continue;
            case "3":
              if (_0x1d112e[_0x138c(1712, "v8n)") + _0x138c(847, "9^w#")](SRVYii[_0x138c(1297, "&kPW")]) && (_0x1d112e[_0x138c(1331, "x48W") + _0x138c(924, "Y2IS")](SRVYii[_0x138c(372, "YC&1")]) || _0x1d112e[_0x138c(1643, "YC&1") + _0x138c(772, "9h41")](SRVYii[_0x138c(1048, "hYzK")]))) {
                return false;
              }
              continue;
            case "4":
              if (_0x1d112e[_0x138c(1441, "cEKH") + _0x138c(662, "cEKH")](SRVYii[_0x138c(1228, "p)po")])) {
                return false;
              }
              continue;
          }
          break;
        }
      });
      if (SRVYii[_0x138c(1685, "v8n)")](_0x3b54ab[_0x138c(1397, "!CBh") + "h"], 0)) {
        _0x7348cf[_0x138c(1162, "XJX]") + "r"][_0x138c(1717, "dqbj")](SRVYii[_0x138c(727, "9h41")](_0x3b54ab[_0x138c(1528, "oBwa")]("\n"), "\n"));
      }
    } else {
      if (_0x38203d[_0x138c(1692, "0d^I")](_0x2e7b14[_0x138c(1630, "!CBh")][_0x30afac], undefined)) {
        if (_0x38203d[_0x138c(1327, "*b9l")](_0x38203d[_0x138c(1621, "Y2IS")], _0x38203d[_0x138c(567, "@[f9")])) {
          _0x33161b[_0x30afac] = _0x2e7b14[_0x138c(533, "Vbfc")][_0x30afac];
        } else {
          return false;
        }
      }
    }
  }
  _0x38203d[_0x138c(791, "^tOR")](writeEnv, ENV_PATH, _0x33161b);
  _0x38203d[_0x138c(1633, "dqbj")](stopBot);
  if (fs[_0x138c(339, "Q#rY") + _0x138c(1440, "3r%X")](ENV_PATH)) {
    if (_0x38203d[_0x138c(1534, "x48W")](_0x38203d[_0x138c(1063, "yLPD")], _0x38203d[_0x138c(1635, "jb7@")])) {
      fs[_0x138c(1102, "!vo*") + _0x138c(1798, "x48W") + "nc"](ENV_PATH, path[_0x138c(928, "Q#rY")](BOT_DIR, _0x38203d[_0x138c(366, "9^w#")]));
    } else {
      _0x1c9589[_0x138c(1277, "%gym")]();
    }
  }
  if (!fs[_0x138c(1079, "vDWg") + _0x138c(1440, "3r%X")](path[_0x138c(361, "9h41")](BOT_DIR, _0x38203d[_0x138c(1444, "%gym")]))) {
    if (_0x38203d[_0x138c(1559, "fBL^")](_0x38203d[_0x138c(872, "9^w#")], _0x38203d[_0x138c(1043, "I#OK")])) {
      _0x1f67cf = _0x38203d[_0x138c(1414, "FU7#")];
    } else {
      _0x38203d[_0x138c(1246, "!CBh")](cloneAndInstall);
    }
  }
  const _0x26621e = _0x38203d[_0x138c(1000, "@[f9")](startBot);
  const _0x4590ae = {
    [_0x138c(570, "p)po") + "ss"]: true,
    [_0x138c(1800, "pfHX") + _0x138c(778, "9^w#")]: _0x26621e
  };
  _0x5f47d7[_0x138c(516, "CMir")](_0x4590ae);
});
function _0x18fa3d(_0x2caab9, _0x564060, _0xc7c983, _0x2b6957, _0x4606d2) {
  return _0x138c(_0x2caab9 + 0x31c, _0x4606d2);
}
app[_0x138c(1243, "*b9l")](_0x138c(1341, "0d^I") + _0x138c(464, "v8n)") + _0x138c(420, "Y2IS"), (_0x46813e, _0x22944d) => {
  const _0x1181d9 = {
    [_0x138c(1374, "h0IA") + "s"]: botStatus,
    [_0x138c(826, "p)po")]: botProcess?.[_0x138c(950, "ZdAM")] || null
  };
  _0x22944d[_0x138c(552, "!vo*")](_0x1181d9);
});
app[_0x138c(818, "XJX]")](_0x138c(1260, "IKX(") + _0x138c(1601, "p)po") + _0x138c(1385, "pTi$"), (_0xdc0385, _0x714857) => {
  const _0x579942 = {
    "IkURX": function (_0x4f6def, _0x2df43c) {
      return _0x4f6def(_0x2df43c);
    },
    "BhCaP": function (_0x55cc04, _0xcecfa2) {
      return _0x55cc04 !== _0xcecfa2;
    },
    "osqQb": _0x138c(643, "Q#rY"),
    "CleRa": _0x138c(1728, "fBL^"),
    "pdDbp": _0x138c(1172, "@JwA") + _0x138c(404, "h0IA") + _0x138c(448, "hYzK") + _0x138c(939, "XBYf") + "ng",
    "XVjCA": _0x138c(1735, "nS5n") + _0x138c(933, "nS5n") + "on",
    "NHSWT": _0x138c(690, "*b9l"),
    "aJCWk": _0x138c(1561, "LEa@"),
    "vaVIf": function (_0x5108d3) {
      return _0x5108d3();
    },
    "BwAZQ": _0x138c(1748, "cEKH") + _0x138c(1225, "q8WB") + _0x138c(700, "%gym") + _0x138c(1458, "RHDI"),
    "WVVMT": _0x138c(1555, "3r%X") + _0x138c(1076, "v8n)") + "d",
    "QlAAv": _0x138c(638, "eg!9") + _0x138c(929, "^tOR") + _0x138c(1058, "!vo*") + _0x138c(549, "fBL^")
  };
  if (botProcess) {
    if (_0x579942[_0x138c(1666, "7^pO")](_0x579942[_0x138c(1623, "!vo*")], _0x579942[_0x138c(1083, "CMir")])) {
      const _0x5a1ddd = {
        [_0x138c(1193, "Y2IS") + "ss"]: false,
        [_0x138c(834, "HJY[") + "ge"]: _0x579942[_0x138c(857, "&kPW")]
      };
      return _0x714857[_0x138c(763, "!CBh")](_0x5a1ddd);
    } else {
      for (const _0x8c5112 of _0x151a79) {
        try {
          _0x8c5112[_0x138c(765, "ZdAM")]();
        } catch (_0x2d10fc) {}
      }
      _0x4795be = [];
    }
  }
  if (!fs[_0x138c(1662, "^tOR") + _0x138c(1068, "fBL^")](path[_0x138c(394, "JQVw")](BOT_DIR, _0x579942[_0x138c(493, "nS5n")]))) {
    if (_0x579942[_0x138c(399, "ZdAM")](_0x579942[_0x138c(355, "*b9l")], _0x579942[_0x138c(494, "pfHX")])) {
      const _0x30f0a8 = _0x579942[_0x138c(668, "FU7#")](cloneAndInstall);
      const _0x186f3b = {
        [_0x138c(1747, "ZdAM") + "ss"]: false,
        [_0x138c(562, "v7!N") + "ge"]: _0x579942[_0x138c(796, "vDWg")]
      };
      if (!_0x30f0a8) {
        return _0x714857[_0x138c(1214, "Vbfc")](_0x186f3b);
      }
    } else {
      _0x579942[_0x138c(694, "FU7#")](_0x3e5972, _0x5cf2ed);
    }
  }
  const _0x434445 = _0x579942[_0x138c(738, "*b9l")](startBot);
  const _0x3246e5 = {
    [_0x138c(1466, "HJY[") + "ss"]: _0x434445
  };
  _0x3246e5[_0x138c(827, "^tOR") + "ge"] = _0x434445 ? _0x579942[_0x138c(1039, "3r%X")] : _0x579942[_0x138c(1428, "9^w#")];
  _0x714857[_0x138c(1071, "HJY[")](_0x3246e5);
});
app[_0x138c(1061, "I#OK")](_0x138c(1591, "yLPD") + _0x138c(1072, "8)%p") + _0x138c(1461, "9h41"), (_0x397f98, _0xd823ae) => {
  const _0xfe94cb = {
    "QiRcn": function (_0x2c50c1) {
      return _0x2c50c1();
    },
    "JcEUP": _0x138c(949, "Y2IS") + _0x138c(1751, "vDWg") + "d"
  };
  _0xfe94cb[_0x138c(1771, "@JwA")](stopBot);
  const _0x4596fb = {
    [_0x138c(974, "YC&1") + "ss"]: true,
    [_0x138c(1788, "I#OK") + "ge"]: _0xfe94cb[_0x138c(914, "vDWg")]
  };
  _0xd823ae[_0x138c(1479, "9^w#")](_0x4596fb);
});
app[_0x138c(1617, "dqbj")](_0x138c(1212, "pfHX") + _0x138c(633, "Q#rY") + _0x138c(1275, "I#OK") + "t", (_0x49bd45, _0x499a0a) => {
  const _0x277d91 = {
    "LDQeC": function (_0x12640f, _0xe1282c) {
      return _0x12640f || _0xe1282c;
    },
    "OucWa": function (_0x2eec47, _0x96c79b) {
      return _0x2eec47(_0x96c79b);
    },
    "dwAyL": function (_0x4bbbbc) {
      return _0x4bbbbc();
    },
    "eqtME": _0x138c(1478, "siFI"),
    "IDtRv": function (_0x2e9524, _0x3cc477) {
      return _0x2e9524 === _0x3cc477;
    },
    "gkYpr": _0x138c(677, "IKX("),
    "ptAcT": _0x138c(952, "^tOR") + _0x138c(538, "p)po") + _0x138c(1434, "JQVw"),
    "yldox": _0x138c(1197, "HJY[") + _0x138c(534, "FU7#") + _0x138c(917, "IKX(") + _0x138c(1664, "joQz") + "t"
  };
  _0x277d91[_0x138c(1557, "Q#rY")](stopBot);
  const _0x4f8cce = path[_0x138c(1711, "IKX(")](__dirname, _0x277d91[_0x138c(720, "oBwa")]);
  if (fs[_0x138c(1636, "pTi$") + _0x138c(455, "%gym")](_0x4f8cce)) {
    if (_0x277d91[_0x138c(1173, "jb7@")](_0x277d91[_0x138c(682, "%gym")], _0x277d91[_0x138c(1670, "h0IA")])) {
      fs[_0x138c(1756, "x48W") + _0x138c(1515, "XJX]") + "nc"](_0x4f8cce, path[_0x138c(1097, "fBL^")](BOT_DIR, _0x277d91[_0x138c(761, "!vo*")]));
    } else if (_0x277d91[_0x138c(820, "oBwa")](_0x5b61ef, _0x32490e)) {
      _0x277d91[_0x138c(953, "pfHX")](_0x407049, _0x522184);
    }
  }
  const _0x169b92 = _0x277d91[_0x138c(880, "3r%X")](startBot);
  const _0x3aff09 = {
    [_0x138c(1278, "!CBh") + "ss"]: _0x169b92,
    [_0x138c(1716, "LEa@") + "ge"]: _0x169b92 ? _0x277d91[_0x138c(989, "fBL^")] : _0x277d91[_0x138c(1757, "*b9l")]
  };
  _0x499a0a[_0x138c(444, "@[f9")](_0x3aff09);
});
app[_0x138c(487, "nS5n")](_0x138c(600, "p)po") + _0x138c(1170, "LEa@") + _0x138c(1593, "siFI"), (_0xd70517, _0x3d8c54) => {
  const _0x5e0fcd = {
    "vRGIf": function (_0x3ed9cf, _0x2a2e57) {
      return _0x3ed9cf === _0x2a2e57;
    },
    "DfsHm": _0x138c(1107, "FU7#") + "ed",
    "rNprB": function (_0x283827, _0x1dcd8a, _0x4effa8) {
      return _0x283827(_0x1dcd8a, _0x4effa8);
    },
    "gvBeM": _0x138c(1578, "Y2IS") + _0x138c(1099, "jb7@") + _0x138c(1487, "pTi$") + _0x138c(1769, "^tOR") + _0x138c(1631, "x48W"),
    "NfdnI": _0x138c(548, "p)po") + "e",
    "kihgH": _0x138c(396, "3r%X"),
    "vGRgx": function (_0x5af2f2, _0x3ef100) {
      return _0x5af2f2 !== _0x3ef100;
    },
    "nrSRA": _0x138c(611, "@JwA"),
    "hudWp": function (_0x597af7, _0x1b69e4) {
      return _0x597af7 && _0x1b69e4;
    },
    "CpbGI": _0x138c(1130, "3r%X"),
    "LXABS": _0x138c(1148, "HJY["),
    "QMJaJ": function (_0x3fc08d, _0x3d9a8b) {
      return _0x3fc08d === _0x3d9a8b;
    },
    "RufEd": _0x138c(377, "IKX("),
    "fRsQf": _0x138c(1654, "HJY["),
    "UrIUb": function (_0x4b1ac9, _0x509073) {
      return _0x4b1ac9(_0x509073);
    },
    "YIMSF": _0x138c(350, "nS5n"),
    "wMLZY": _0x138c(463, "v7!N"),
    "BrZYA": function (_0x4c5fc7, _0x14201b) {
      return _0x4c5fc7 + _0x14201b;
    },
    "euIWo": function (_0x284df8) {
      return _0x284df8();
    },
    "DqKju": _0x138c(476, "IKX(") + _0x138c(346, "%gym") + _0x138c(1447, "8)%p"),
    "uCNCD": _0x138c(652, "FU7#") + _0x138c(1689, "fBL^") + _0x138c(1364, "vDWg") + _0x138c(1664, "joQz") + "t",
    "pgnoM": function (_0x5c3add) {
      return _0x5c3add();
    },
    "sEVrF": _0x138c(1343, "fnjG") + _0x138c(1637, "HJY[") + _0x138c(1139, "vDWg") + _0x138c(1503, "CMir"),
    "jWFwJ": function (_0x28ad26, _0x2c6f9a) {
      return _0x28ad26 !== _0x2c6f9a;
    },
    "GhWdo": _0x138c(696, "fBL^"),
    "pPpcD": _0x138c(1780, "%gym"),
    "HJcoe": function (_0xf6f5a1, _0x38c785) {
      return _0xf6f5a1 === _0x38c785;
    },
    "ZNfSZ": _0x138c(943, "q8WB"),
    "KRuBP": _0x138c(749, "vDWg"),
    "hBHuo": function (_0x925b2f, _0x2ff91a) {
      return _0x925b2f === _0x2ff91a;
    },
    "TTOLO": _0x138c(1025, "joQz"),
    "IPGaN": _0x138c(1435, "nS5n"),
    "Oauot": function (_0x1aa087, _0x4a844b) {
      return _0x1aa087 || _0x4a844b;
    },
    "XNryy": _0x138c(1218, "fBL^"),
    "pAAjC": function (_0x328016, _0x1394c7) {
      return _0x328016 > _0x1394c7;
    },
    "fJcsx": _0x138c(732, "eg!9"),
    "wjWdq": _0x138c(413, "*b9l"),
    "ipreM": _0x138c(865, "joQz"),
    "PpZUT": _0x138c(931, "Q#rY"),
    "tKddo": _0x138c(540, "v8n)"),
    "dPXLM": _0x138c(939, "XBYf") + "ng",
    "xhPXS": _0x138c(845, "cEKH"),
    "wuDDa": _0x138c(941, "v7!N"),
    "LuOCV": function (_0x297532) {
      return _0x297532();
    },
    "RMelY": _0x138c(1475, "q8WB") + _0x138c(1265, "FU7#") + _0x138c(526, "x48W") + _0x138c(1741, "q8WB") + _0x138c(1070, "XJX]") + _0x138c(1038, "pTi$") + _0x138c(1754, "nS5n") + _0x138c(593, "!vo*") + _0x138c(1682, "fBL^") + _0x138c(482, "dqbj") + _0x138c(997, "IKX(") + _0x138c(1257, "p)po"),
    "harVy": _0x138c(518, "HJY["),
    "hRpiB": _0x138c(1032, "3r%X"),
    "uVNmM": _0x138c(597, "^tOR") + _0x138c(1545, "%gym") + _0x138c(1300, "joQz") + _0x138c(1253, "^tOR") + _0x138c(495, "!vo*") + _0x138c(398, "nS5n") + _0x138c(1354, "x48W") + _0x138c(1286, "p)po") + _0x138c(967, "7^pO") + _0x138c(1677, "9^w#") + _0x138c(680, "^tOR") + _0x138c(1156, "eg!9") + "s.",
    "BUJlq": _0x138c(892, "siFI") + _0x138c(404, "h0IA") + _0x138c(1645, "7^pO") + _0x138c(1584, "nS5n") + "ng",
    "ZnYvW": function (_0x15955a, _0x59c406) {
      return _0x15955a === _0x59c406;
    },
    "GTwls": _0x138c(1052, "eg!9"),
    "IUNch": _0x138c(536, "*b9l"),
    "LIwRd": function (_0x104249, _0x2c52a7) {
      return _0x104249 !== _0x2c52a7;
    },
    "IDnlr": _0x138c(756, "ZdAM"),
    "DSAGd": function (_0x25ee73, _0x256e37) {
      return _0x25ee73 + _0x256e37;
    },
    "dhhyS": _0x138c(1489, "joQz") + _0x138c(1370, "p)po") + _0x138c(1644, "FU7#") + _0x138c(1541, "3r%X") + _0x138c(429, "@JwA"),
    "sesaW": function (_0x2b9bd3) {
      return _0x2b9bd3();
    },
    "SkeCD": function (_0x3e4cf1, _0x323910) {
      return _0x3e4cf1 !== _0x323910;
    },
    "cClik": _0x138c(1668, "Y2IS"),
    "WZjNW": _0x138c(624, "eg!9"),
    "hGWMn": _0x138c(550, "pTi$") + _0x138c(571, "XBYf") + _0x138c(1365, "0d^I") + _0x138c(631, "LEa@") + _0x138c(467, "x48W"),
    "dIxYt": function (_0x1f2a07, _0x103a6c) {
      return _0x1f2a07 < _0x103a6c;
    },
    "esxII": function (_0x2bb85a, _0x568d83) {
      return _0x2bb85a !== _0x568d83;
    },
    "XFPHY": _0x138c(729, "vDWg"),
    "atsYr": _0x138c(849, "XBYf") + _0x138c(640, "v7!N") + _0x138c(1679, "joQz") + _0x138c(1115, "LEa@"),
    "FlKKl": _0x138c(1184, "HJY[") + _0x138c(343, "fnjG"),
    "XdcOI": _0x138c(770, "cEKH") + _0x138c(1431, "hYzK"),
    "ppJxe": function (_0x1e360c, _0x1bd827) {
      return _0x1e360c !== _0x1bd827;
    },
    "Kftvn": _0x138c(1056, "eg!9"),
    "PwEbe": _0x138c(1018, "&kPW"),
    "MpwCq": function (_0x172ac3, _0x30223b) {
      return _0x172ac3 !== _0x30223b;
    },
    "pCWkz": _0x138c(544, "siFI"),
    "MhEmB": _0x138c(1799, "RHDI"),
    "IyflM": _0x138c(1556, "jb7@") + "ng",
    "cFymW": function (_0xefc95, _0x37bf52, _0x330813, _0x1fb5a9) {
      return _0xefc95(_0x37bf52, _0x330813, _0x1fb5a9);
    },
    "dFMsp": _0x138c(1366, "!CBh") + _0x138c(906, "joQz"),
    "obsNq": _0x138c(788, "0d^I"),
    "PuEuA": _0x138c(628, "FU7#"),
    "risfH": function (_0x187167, _0x1fdaef) {
      return _0x187167 === _0x1fdaef;
    },
    "lLOKs": _0x138c(395, "XJX]"),
    "jTBEM": function (_0x46bf55, _0x43d737) {
      return _0x46bf55 + _0x43d737;
    },
    "DtfNh": function (_0x5bc3a8, _0x5708b1, _0x2e9db3) {
      return _0x5bc3a8(_0x5708b1, _0x2e9db3);
    },
    "nBjgE": function (_0x392748, _0x127be3, _0x4e8f01) {
      return _0x392748(_0x127be3, _0x4e8f01);
    },
    "GMLOD": function (_0x14bed7, _0x3679f8, _0x3924fc) {
      return _0x14bed7(_0x3679f8, _0x3924fc);
    },
    "jyFnX": _0x138c(1529, "HJY["),
    "tPrpT": _0x138c(1708, "dqbj"),
    "joybP": _0x138c(592, "joQz"),
    "yrVsg": function (_0x59e6bc, _0x1fe98f) {
      return _0x59e6bc + _0x1fe98f;
    }
  };
  const {
    phoneNumber: _0x28826c
  } = _0xd70517[_0x138c(793, "fBL^")];
  if (!_0x28826c) {
    if (_0x5e0fcd[_0x138c(659, "oBwa")](_0x5e0fcd[_0x138c(585, "jb7@")], _0x5e0fcd[_0x138c(1264, "&kPW")])) {
      const _0x56dd74 = {
        [_0x138c(974, "YC&1") + "ss"]: false,
        [_0x138c(606, "0d^I") + "ge"]: _0x5e0fcd[_0x138c(706, "*b9l")]
      };
      return _0x3d8c54[_0x138c(1568, "x48W")](_0x56dd74);
    } else {
      _0x585917[_0x138c(1266, "!vo*")](_0x138c(1752, "7^pO") + _0x138c(1158, "!vo*") + _0x138c(855, "p)po") + _0x138c(1310, "q8WB") + _0x138c(798, "I#OK") + _0x138c(1803, "yLPD") + _0x5abcdf);
      if (WNgZCX[_0x138c(873, "eg!9")](_0x18be48, _0x39380c)) {
        _0x469889 = WNgZCX[_0x138c(758, "yLPD")];
        _0x5bb677 = null;
      }
    }
  }
  const _0x59e613 = _0x28826c[_0x138c(505, "vDWg") + "ce"](/[^0-9]/g, '');
  if (_0x5e0fcd[_0x138c(1262, "XJX]")](_0x59e613[_0x138c(1482, "ZdAM") + "h"], 10)) {
    if (_0x5e0fcd[_0x138c(1703, "JQVw")](_0x5e0fcd[_0x138c(1319, "joQz")], _0x5e0fcd[_0x138c(1736, "fBL^")])) {
      _0x24024a[_0x138c(1446, "9h41") + _0x138c(1553, "&kPW")](_0x4f951f);
    } else {
      const _0x1bf60e = {
        [_0x138c(674, "CMir") + "ss"]: false,
        [_0x138c(1026, "!vo*") + "ge"]: _0x5e0fcd[_0x138c(1566, "0d^I")]
      };
      return _0x3d8c54[_0x138c(1572, "vDWg")](_0x1bf60e);
    }
  }
  _0x5e0fcd[_0x138c(942, "h0IA")](stopBot);
  const _0x356f95 = _0x5e0fcd[_0x138c(1348, "h0IA")](parseEnv, ENV_PATH);
  _0x356f95[_0x138c(1137, "XJX]") + "ON"] = '';
  _0x5e0fcd[_0x138c(1045, "h0IA")](writeEnv, ENV_PATH, _0x356f95);
  fs[_0x138c(669, "fBL^") + _0x138c(1627, "siFI") + "nc"](ENV_PATH, path[_0x138c(1349, "YC&1")](BOT_DIR, _0x5e0fcd[_0x138c(755, "x48W")]));
  const _0x4cc3be = path[_0x138c(1345, "vDWg")](BOT_DIR, _0x5e0fcd[_0x138c(531, "Y2IS")], _0x5e0fcd[_0x138c(1024, "7^pO")]);
  if (fs[_0x138c(1163, "Vbfc") + _0x138c(1791, "IKX(")](_0x4cc3be)) {
    if (_0x5e0fcd[_0x138c(743, "YC&1")](_0x5e0fcd[_0x138c(1723, "oBwa")], _0x5e0fcd[_0x138c(479, "vDWg")])) {
      fs[_0x138c(786, "XJX]") + _0x138c(1307, "eg!9")](_0x4cc3be);
    } else {
      WNgZCX[_0x138c(1011, "yLPD")](_0xae7fa, WNgZCX[_0x138c(1610, "nS5n")], {
        "cwd": _0x561261,
        "stdio": WNgZCX[_0x138c(510, "q8WB")]
      });
    }
  }
  try {
    if (_0x5e0fcd[_0x138c(1234, "IKX(")](_0x5e0fcd[_0x138c(635, "7^pO")], _0x5e0fcd[_0x138c(1259, "!vo*")])) {
      botStatus = _0x5e0fcd[_0x138c(506, "joQz")];
      const _0x400742 = {
        ...process.env
      };
      botProcess = _0x5e0fcd[_0x138c(1008, "cEKH")](fork, path[_0x138c(1592, "p)po")](BOT_DIR, _0x5e0fcd[_0x138c(554, "XBYf")]), [], {
        "cwd": BOT_DIR,
        "stdio": [_0x5e0fcd[_0x138c(435, "8)%p")], _0x5e0fcd[_0x138c(898, "dqbj")], _0x5e0fcd[_0x138c(474, "oBwa")], _0x5e0fcd[_0x138c(1292, "!CBh")]],
        "env": _0x400742
      });
      let _0x2f1e72 = null;
      let _0x43572d = false;
      botProcess[_0x138c(1330, "3r%X") + "t"].on(_0x5e0fcd[_0x138c(1090, "8)%p")], _0x1dbec3 => {
        if (_0x5e0fcd[_0x138c(1681, "dqbj")](_0x5e0fcd[_0x138c(532, "cEKH")], _0x5e0fcd[_0x138c(1583, "^tOR")])) {
          _0x74510d[_0x138c(1390, "^tOR")](_0x138c(1282, "8)%p") + _0x138c(667, "eg!9") + _0x138c(1096, "XBYf") + _0x138c(839, "fBL^") + _0x138c(712, "%gym") + _0x138c(1166, "!vo*") + _0x138c(376, "pTi$") + _0x465733);
        } else {
          const _0x433240 = _0x1dbec3[_0x138c(1040, "x48W") + _0x138c(558, "IKX(")]();
          process[_0x138c(1095, "eg!9") + "t"][_0x138c(1334, "v8n)")](_0x433240);
          const _0x589f80 = _0x433240[_0x138c(1134, "@JwA")](/PAIRING CODE:\s*([A-Z0-9-]+)/i);
          if (_0x5e0fcd[_0x138c(1774, "HJY[")](_0x589f80, !_0x43572d)) {
            if (_0x5e0fcd[_0x138c(764, "0d^I")](_0x5e0fcd[_0x138c(1371, "p)po")], _0x5e0fcd[_0x138c(1722, "!CBh")])) {
              _0x2f1e72 = _0x589f80[1];
              _0x43572d = true;
            } else {
              _0x13f4b0[_0x138c(504, "^tOR") + _0x138c(835, "joQz") + "nc"](_0x355642, _0x2cb063[_0x138c(683, "*b9l")](_0x2b6ff2, bfaYPY[_0x138c(648, "3r%X")]));
            }
          }
        }
      });
      botProcess[_0x138c(1055, "p)po") + "r"].on(_0x5e0fcd[_0x138c(1035, "pTi$")], _0x2b1e3c => {
        if (_0x5e0fcd[_0x138c(543, "9h41")](_0x5e0fcd[_0x138c(1290, "siFI")], _0x5e0fcd[_0x138c(1674, "0d^I")])) {
          _0x309688 = WNgZCX[_0x138c(1571, "IKX(")];
          _0xad3813 = null;
        } else {
          process[_0x138c(1656, "&kPW") + "r"][_0x138c(1717, "dqbj")](_0x2b1e3c[_0x138c(1040, "x48W") + _0x138c(1535, "pfHX")]());
        }
      });
      if (botProcess && botProcess[_0x138c(508, "q8WB")]) {
        if (_0x5e0fcd[_0x138c(981, "LEa@")](_0x5e0fcd[_0x138c(1490, "*b9l")], _0x5e0fcd[_0x138c(620, "yLPD")])) {
          botProcess[_0x138c(439, "siFI")][_0x138c(1309, "*b9l")](_0x5e0fcd[_0x138c(1504, "3r%X")](_0x59e613, "\n"));
        } else {
          const _0x422688 = WNgZCX[_0x138c(408, "ZdAM")](_0x4265ac, _0x3f19b4);
          for (const [_0x233897, _0xc7834c] of _0x44f4c4[_0x138c(1037, "jb7@") + "es"](_0x422688)) {
            if (_0xc7834c) {
              _0x16b29e[_0x233897] = _0xc7834c;
            }
          }
        }
      }
      _0x5e0fcd[_0x138c(927, "!vo*")](setTimeout, () => {
        if (_0x5e0fcd[_0x138c(497, "jb7@")](_0x5e0fcd[_0x138c(393, "9^w#")], _0x5e0fcd[_0x138c(1178, "eg!9")])) {
          if (botProcess && botProcess[_0x138c(801, "8)%p")]) {
            if (_0x5e0fcd[_0x138c(1538, "@JwA")](_0x5e0fcd[_0x138c(569, "fnjG")], _0x5e0fcd[_0x138c(517, "I#OK")])) {
              hjcPkg[_0x138c(930, "eg!9")](_0x1ed38a);
              const _0xff04d1 = _0x4e80ce[_0x138c(1345, "vDWg")](_0x2a6216, hjcPkg[_0x138c(1125, "XBYf")]);
              if (_0x4b8f7e[_0x138c(1316, "ZdAM") + _0x138c(1762, "CMir")](_0xff04d1)) {
                _0x20c627[_0x138c(1368, "HJY[") + _0x138c(1183, "0d^I") + "nc"](_0xff04d1, _0x559614[_0x138c(1639, "siFI")](_0x24ae1a, hjcPkg[_0x138c(1782, "IKX(")]));
              }
              const _0x179173 = hjcPkg[_0x138c(657, "*b9l")](_0x6b6b8a);
              const _0x917c0a = {
                [_0x138c(1792, "&kPW") + "ss"]: _0x179173,
                [_0x138c(562, "v7!N") + "ge"]: _0x179173 ? hjcPkg[_0x138c(1128, "Q#rY")] : hjcPkg[_0x138c(411, "%gym")]
              };
              _0x499d8c[_0x138c(516, "CMir")](_0x917c0a);
            } else {
              botProcess[_0x138c(389, "^tOR")][_0x138c(1017, "YC&1")]("1\n");
              _0x5e0fcd[_0x138c(1154, "7^pO")](setTimeout, () => {
                if (_0x5e0fcd[_0x138c(1236, "@JwA")](_0x5e0fcd[_0x138c(353, "Y2IS")], _0x5e0fcd[_0x138c(1219, "pfHX")])) {
                  const _0x416124 = hjcPkg[_0x138c(1159, "fBL^")](_0x4bc7be);
                  const _0x2fdce6 = {
                    [_0x138c(1696, "8)%p") + "ss"]: false,
                    [_0x138c(1788, "I#OK") + "ge"]: hjcPkg[_0x138c(1406, "fnjG")]
                  };
                  if (!_0x416124) {
                    return _0x5b178f[_0x138c(1520, "nS5n")](_0x2fdce6);
                  }
                } else if (botProcess && botProcess[_0x138c(1242, "pTi$")]) {
                  if (_0x5e0fcd[_0x138c(925, "h0IA")](_0x5e0fcd[_0x138c(358, "3r%X")], _0x5e0fcd[_0x138c(1691, "9^w#")])) {
                    botProcess[_0x138c(1305, "0d^I")][_0x138c(1437, "jb7@")](_0x5e0fcd[_0x138c(1380, "8)%p")](_0x59e613, "\n"));
                  } else {
                    _0x7d3a1b[_0x138c(1613, "oBwa")]();
                  }
                }
              }, 1000);
            }
          }
        } else {
          _0x2fbde3[_0x138c(653, "eg!9") + _0x138c(709, "HJY[") + "nc"](_0x2d8500, _0xbeb204[_0x138c(1396, "@[f9")](_0x4da625, hjcPkg[_0x138c(434, "oBwa")]));
        }
      }, 500);
      const _0x5059a3 = _0x5e0fcd[_0x138c(1622, "Y2IS")](setInterval, () => {
        if (_0x5e0fcd[_0x138c(1094, "h0IA")](_0x5e0fcd[_0x138c(1255, "IKX(")], _0x5e0fcd[_0x138c(1320, "joQz")])) {
          _0x34392b[_0x138c(1759, "!CBh") + "t"][_0x138c(1367, "hYzK")](_0x19e5d6[_0x138c(1188, "dqbj") + _0x138c(1118, "9^w#")]());
        } else {
          if (_0x5e0fcd[_0x138c(994, "%gym")](_0x2f1e72, _0x43572d)) {
            if (_0x5e0fcd[_0x138c(341, "CMir")](_0x5e0fcd[_0x138c(419, "q8WB")], _0x5e0fcd[_0x138c(1730, "siFI")])) {
              try {
                _0x545653[_0x138c(400, "dqbj")]();
              } catch (_0x4f75f7) {}
              _0x2ba881 = null;
              _0x459219 = BJEoWd[_0x138c(1149, "v7!N")];
            } else {
              _0x5e0fcd[_0x138c(636, "!CBh")](clearInterval, _0x5059a3);
            }
          }
        }
      }, 500);
      _0x5e0fcd[_0x138c(956, "fnjG")](setTimeout, () => {
        const _0x2babfa = {
          "aHAGO": function (_0xf8a78, _0x49ee7a) {
            return _0x5e0fcd[_0x138c(1142, "7^pO")](_0xf8a78, _0x49ee7a);
          },
          "ANAHK": function (_0x263730, _0xcb09f5) {
            return _0x5e0fcd[_0x138c(1009, "q8WB")](_0x263730, _0xcb09f5);
          },
          "SNiEJ": function (_0x2b3dec, _0x33caa7) {
            return _0x5e0fcd[_0x138c(484, "nS5n")](_0x2b3dec, _0x33caa7);
          },
          "zRxHQ": _0x5e0fcd[_0x138c(501, "vDWg")]
        };
        if (_0x5e0fcd[_0x138c(1647, "7^pO")](_0x5e0fcd[_0x138c(1725, "Y2IS")], _0x5e0fcd[_0x138c(391, "!CBh")])) {
          const _0xb7d962 = _0x2a9b2b[_0x138c(1699, "cEKH") + _0x138c(1357, "@JwA")]();
          _0x4077ef[_0x138c(945, "Y2IS") + "t"][_0x138c(1309, "*b9l")](_0xb7d962);
          _0xf96e0[_0x138c(663, "^tOR")](_0xb7d962);
          if (mthRFA[_0x138c(1046, "JQVw")](_0x4fa18f[_0x138c(998, "LEa@") + "h"], 100)) {
            _0x285d1c[_0x138c(1373, "hYzK")]();
          }
        } else {
          _0x5e0fcd[_0x138c(414, "Y2IS")](clearInterval, _0x5059a3);
          if (_0x2f1e72) {
            if (_0x5e0fcd[_0x138c(1620, "Q#rY")](_0x5e0fcd[_0x138c(978, "Q#rY")], _0x5e0fcd[_0x138c(496, "8)%p")])) {
              if (_0x5a0051 && _0x519782[_0x138c(1133, "yLPD")]) {
                _0x3554cb[_0x138c(433, "HJY[")][_0x138c(1309, "*b9l")](mthRFA[_0x138c(1473, "I#OK")](_0x17e998, "\n"));
              }
            } else {
              botStatus = _0x5e0fcd[_0x138c(771, "p)po")];
              if (botProcess && botProcess[_0x138c(453, "@[f9") + "t"]) {
                if (_0x5e0fcd[_0x138c(1585, "!CBh")](_0x5e0fcd[_0x138c(1497, "YC&1")], _0x5e0fcd[_0x138c(1245, "Vbfc")])) {
                  botProcess[_0x138c(1618, "!vo*") + "t"].on(_0x5e0fcd[_0x138c(1108, "0d^I")], _0x21810b => {
                    if (_0x2babfa[_0x138c(996, "FU7#")](_0x2babfa[_0x138c(1726, "dqbj")], _0x2babfa[_0x138c(876, "CMir")])) {
                      process[_0x138c(428, "XJX]") + "t"][_0x138c(502, "cEKH")](_0x21810b[_0x138c(784, "I#OK") + _0x138c(1205, "%gym")]());
                    } else {
                      const _0x309414 = _0x52d3af[_0x138c(693, "7^pO")](_0x44257e, _0xafe339);
                      const _0x1fc356 = _0x17d52f[_0x138c(481, "joQz")](_0xdf8a1c, _0x7452c8[_0x138c(1531, "siFI") + _0x138c(1724, "nS5n")](_0x426ac2));
                      if (_0x21f3e8[_0x138c(1464, "siFI") + _0x138c(660, "oBwa")](_0x309414)) {
                        try {
                          _0x46f12d[_0x138c(1012, "RHDI") + _0x138c(835, "joQz") + "nc"](_0x309414, _0x1fc356);
                        } catch (_0x4509aa) {}
                      }
                    }
                  });
                } else {
                  _0xdf6a8b[_0x138c(1574, "9^w#") + _0x138c(1155, "7^pO") + "nc"](_0x4df49a, _0x55dd71);
                }
              }
              _0x5e0fcd[_0x138c(475, "7^pO")](startDbWatchers);
              const _0xba4ccf = {
                [_0x138c(1326, "nS5n") + "ss"]: true,
                [_0x138c(1676, "3r%X")]: _0x2f1e72,
                [_0x138c(1026, "!vo*") + "ge"]: _0x5e0fcd[_0x138c(451, "ZdAM")]
              };
              _0x3d8c54[_0x138c(516, "CMir")](_0xba4ccf);
            }
          } else {
            if (_0x5e0fcd[_0x138c(641, "eg!9")](_0x5e0fcd[_0x138c(1743, "h0IA")], _0x5e0fcd[_0x138c(957, "p)po")])) {
              const _0x4ea333 = {
                [_0x138c(1581, "cEKH") + "ss"]: false,
                [_0x138c(1481, "IKX(") + "ge"]: _0x5e0fcd[_0x138c(825, "fnjG")]
              };
              _0x3d8c54[_0x138c(763, "!CBh")](_0x4ea333);
            } else if (WNgZCX[_0x138c(466, "*b9l")](_0x3986f0[_0x138c(654, "ZdAM")][_0x55d9a4], _0x4a76c8)) {
              _0x5c20d0[_0xb5f765] = _0x3c6c6a[_0x138c(1295, "LEa@")][_0x10bff5];
            }
          }
        }
      }, 25000);
      botProcess.on(_0x5e0fcd[_0x138c(1494, "oBwa")], () => {
        if (_0x5e0fcd[_0x138c(1053, "nS5n")](_0x5e0fcd[_0x138c(450, "vDWg")], _0x5e0fcd[_0x138c(1059, "RHDI")])) {
          botStatus = _0x5e0fcd[_0x138c(1405, "v7!N")];
        } else {
          const _0x5c257d = {
            [_0x138c(1231, "@JwA") + "ss"]: false,
            [_0x138c(577, "yLPD") + "ge"]: WNgZCX[_0x138c(678, "p)po")]
          };
          return _0x4dff45[_0x138c(1479, "9^w#")](_0x5c257d);
        }
      });
      botProcess.on(_0x5e0fcd[_0x138c(1301, "oBwa")], _0x29e2fe => {
        if (_0x5e0fcd[_0x138c(726, "!CBh")](_0x5e0fcd[_0x138c(893, "joQz")], _0x5e0fcd[_0x138c(1582, "siFI")])) {
          const _0x303257 = {
            [_0x138c(1598, "8)%p") + _0x138c(665, "v7!N")]: true
          };
          _0x224df1[_0x138c(1638, "v7!N") + _0x138c(675, "h0IA")](_0x4d6a85, _0x303257);
        } else {
          botStatus = _0x5e0fcd[_0x138c(1067, "7^pO")];
          botProcess = null;
        }
      });
    } else {
      _0x4aeb2b[_0x138c(373, "LEa@")]({
        "success": false,
        "message": _0x5e0fcd[_0x138c(613, "7^pO")](_0x5e0fcd[_0x138c(840, "^tOR")], _0x4d87b5[_0x138c(676, "Q#rY") + "ge"])
      });
    }
  } catch (_0x5dba8d) {
    if (_0x5e0fcd[_0x138c(923, "ZdAM")](_0x5e0fcd[_0x138c(1508, "v8n)")], _0x5e0fcd[_0x138c(1375, "XJX]")])) {
      _0x3d8c54[_0x138c(1113, "v8n)")]({
        "success": false,
        "message": _0x5e0fcd[_0x138c(1036, "Y2IS")](_0x5e0fcd[_0x138c(589, "nS5n")], _0x5dba8d[_0x138c(363, "CMir") + "ge"])
      });
    } else {
      WNgZCX[_0x138c(397, "%gym")](_0x25d33f);
      WNgZCX[_0x138c(1704, "!CBh")](_0x416646);
      if (_0x23f4eb) {
        try {
          _0x131fd6[_0x138c(1237, "nS5n")]();
        } catch (_0x3336be) {}
        _0x18e59b = null;
        _0xd63161 = WNgZCX[_0x138c(342, "Q#rY")];
      }
    }
  }
});
function getBotPackageInfo() {
  const _0x1906fe = {
    [_0x138c(1537, "pfHX")]: _0x138c(1007, "x48W"),
    [_0x138c(824, "^tOR")]: function (_0xda1628, _0x24812a) {
      return _0xda1628 === _0x24812a;
    },
    [_0x138c(768, "fnjG")]: _0x138c(426, "YC&1"),
    [_0x138c(1314, "hYzK")]: _0x138c(1702, "Vbfc") + _0x138c(345, "joQz") + "on",
    [_0x138c(1784, "XJX]")]: _0x138c(1270, "oBwa"),
    [_0x138c(1273, "CMir")]: _0x138c(1298, "LEa@") + _0x138c(1199, "p)po") + _0x138c(980, "hYzK"),
    [_0x138c(1753, "v7!N")]: _0x138c(390, "q8WB"),
    [_0x138c(1448, "HJY[")]: function (_0x376ede, _0x2fd789) {
      return _0x376ede !== _0x2fd789;
    },
    [_0x138c(912, "CMir")]: _0x138c(1049, "!CBh"),
    [_0x138c(782, "!vo*")]: _0x138c(1547, "IKX(")
  };
  try {
    if (_0x1906fe[_0x138c(437, "joQz")](_0x1906fe[_0x138c(934, "x48W")], _0x1906fe[_0x138c(1536, "YC&1")])) {
      const _0x3aeaf9 = JSON[_0x138c(1764, "IKX(")](fs[_0x138c(509, "jb7@") + _0x138c(427, "v7!N") + "nc"](path[_0x138c(928, "Q#rY")](BOT_DIR, _0x1906fe[_0x138c(689, "v7!N")]), _0x1906fe[_0x138c(1525, "JQVw")]));
      const _0x18b172 = {
        [_0x138c(992, "dqbj")]: _0x3aeaf9[_0x138c(590, "h0IA")] || _0x1906fe[_0x138c(913, "*b9l")],
        [_0x138c(1315, "joQz") + "on"]: _0x3aeaf9[_0x138c(1518, "@JwA") + "on"] || _0x1906fe[_0x138c(477, "IKX(")]
      };
      return _0x18b172;
    } else {
      _0x2fcd67 = yCspyd[_0x138c(649, "%gym")];
      return false;
    }
  } catch (_0x4de275) {
    if (_0x1906fe[_0x138c(1111, "*b9l")](_0x1906fe[_0x138c(841, "nS5n")], _0x1906fe[_0x138c(472, "h0IA")])) {
      const _0x42e9b5 = {
        [_0x138c(1342, "HJY[")]: _0x1906fe[_0x138c(1321, "nS5n")],
        [_0x138c(1577, "IKX(") + "on"]: _0x1906fe[_0x138c(1263, "!CBh")]
      };
      return _0x42e9b5;
    } else {
      const _0x1fbe4d = {
        [_0x138c(1507, "v7!N") + _0x138c(596, "XJX]")]: true,
        [_0x138c(384, "FU7#")]: true
      };
      _0x29b947[_0x138c(1740, "pTi$") + "c"](_0x38ee4c, _0x1fbe4d);
    }
  }
}
app[_0x138c(1062, "YC&1")](_0x138c(1203, "8)%p") + _0x138c(886, "p)po"), (_0x1c70d0, _0x18d2e3) => {
  const _0x5354af = {
    "hwpvr": function (_0x2c1712, _0x10c08a) {
      return _0x2c1712 / _0x10c08a;
    },
    "fHRbY": function (_0x454b0a, _0x1a0622) {
      return _0x454b0a - _0x1a0622;
    },
    "mZvdi": function (_0x3cc65d) {
      return _0x3cc65d();
    },
    "HvIuS": _0x138c(1077, "nS5n") + _0x138c(1632, "JQVw") + "ER",
    "qvLwu": _0x138c(1695, "h0IA") + _0x138c(959, "pTi$") + _0x138c(515, "*b9l") + _0x138c(883, "pTi$") + _0x138c(1287, "vDWg") + _0x138c(1533, "&kPW"),
    "cRjYM": _0x138c(911, "XBYf") + "wn"
  };
  const _0x5052f1 = Math[_0x138c(521, "Y2IS")](_0x5354af[_0x138c(698, "7^pO")](_0x5354af[_0x138c(1276, "I#OK")](Date[_0x138c(459, "I#OK")](), botStartTime), 1000));
  const _0x2a2583 = Math[_0x138c(861, "9h41")](os[_0x138c(1558, "v7!N") + "e"]());
  const _0x2c3d4e = _0x5354af[_0x138c(944, "*b9l")](getBotPackageInfo);
  const _0x331e93 = {
    [_0x138c(1470, "v7!N")]: _0x2c3d4e[_0x138c(1739, "x48W")],
    [_0x138c(958, "Vbfc") + "on"]: _0x2c3d4e[_0x138c(958, "Vbfc") + "on"],
    [_0x138c(1721, "pfHX")]: _0x5354af[_0x138c(757, "I#OK")],
    [_0x138c(977, "fBL^")]: _0x5354af[_0x138c(547, "pTi$")],
    [_0x138c(559, "jb7@") + "e"]: _0x5052f1,
    [_0x138c(362, "!CBh") + "s"]: botStatus
  };
  _0x18d2e3[_0x138c(1288, "ZdAM")]({
    "bot": _0x331e93,
    "system": {
      "platform": os[_0x138c(686, "JQVw") + _0x138c(990, "!vo*")](),
      "arch": os[_0x138c(381, "Y2IS")](),
      "hostname": os[_0x138c(1456, "%gym") + _0x138c(511, "^tOR")](),
      "cpus": os[_0x138c(1065, "YC&1")]()[_0x138c(480, "hYzK") + "h"],
      "cpuModel": os[_0x138c(1384, "LEa@")]()[0]?.[_0x138c(460, "cEKH")] || _0x5354af[_0x138c(717, "*b9l")],
      "totalMemory": os[_0x138c(1131, "IKX(") + _0x138c(837, "%gym")](),
      "freeMemory": os[_0x138c(405, "dqbj") + "em"](),
      "uptime": _0x2a2583,
      "nodeVersion": process[_0x138c(1776, "h0IA") + "on"]
    }
  });
});
app[_0x138c(416, "pTi$")]("/", (_0x340383, _0x376bde) => {
  const _0x25fe29 = {
    [_0x138c(1675, "@[f9")]: _0x138c(365, "cEKH") + "c",
    [_0x138c(714, "cEKH")]: _0x138c(813, "jb7@") + _0x138c(1603, "fnjG")
  };
  _0x376bde[_0x138c(1360, "9h41") + _0x138c(900, "I#OK")](path[_0x138c(1639, "siFI")](__dirname, _0x25fe29[_0x138c(1694, "*b9l")], _0x25fe29[_0x138c(935, "@[f9")]));
});
app[_0x138c(1084, "v8n)") + "n"](PORT, _0x138c(1790, "Q#rY") + ".0", () => {
  console[_0x138c(491, "siFI")](_0x138c(1395, "siFI") + _0x138c(1217, "7^pO") + _0x138c(897, "fnjG") + _0x138c(1501, "%gym") + _0x138c(948, "9^w#") + _0x138c(1166, "!vo*") + _0x138c(1732, "@[f9") + PORT);
});
