(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // ../ptk/cli/colors.cjs
  var require_colors = __commonJS({
    "../ptk/cli/colors.cjs"(exports) {
      var FORCE_COLOR;
      var NODE_DISABLE_COLORS;
      var NO_COLOR;
      var TERM;
      var isTTY = true;
      if (typeof process !== "undefined") {
        ({ FORCE_COLOR, NODE_DISABLE_COLORS, NO_COLOR, TERM } = process.env || {});
        isTTY = process.stdout && process.stdout.isTTY;
      }
      var $ = exports.$ = {
        enabled: !NODE_DISABLE_COLORS && NO_COLOR == null && TERM !== "dumb" && (FORCE_COLOR != null && FORCE_COLOR !== "0" || isTTY)
      };
      function init2(x, y) {
        let rgx = new RegExp(`\\x1b\\[${y}m`, "g");
        let open = `\x1B[${x}m`, close = `\x1B[${y}m`;
        return function(txt) {
          if (!$.enabled || txt == null)
            return txt;
          return open + (!!~("" + txt).indexOf(close) ? txt.replace(rgx, close + open) : txt) + close;
        };
      }
      exports.reset = init2(0, 0);
      exports.bold = init2(1, 22);
      exports.dim = init2(2, 22);
      exports.italic = init2(3, 23);
      exports.underline = init2(4, 24);
      exports.inverse = init2(7, 27);
      exports.hidden = init2(8, 28);
      exports.strikethrough = init2(9, 29);
      exports.black = init2(30, 39);
      exports.red = init2(31, 39);
      exports.green = init2(32, 39);
      exports.yellow = init2(33, 39);
      exports.blue = init2(34, 39);
      exports.magenta = init2(35, 39);
      exports.cyan = init2(36, 39);
      exports.white = init2(37, 39);
      exports.gray = init2(90, 39);
      exports.grey = init2(90, 39);
      exports.bgBlack = init2(40, 49);
      exports.bgRed = init2(41, 49);
      exports.bgGreen = init2(42, 49);
      exports.bgYellow = init2(43, 49);
      exports.bgBlue = init2(44, 49);
      exports.bgMagenta = init2(45, 49);
      exports.bgCyan = init2(46, 49);
      exports.bgWhite = init2(47, 49);
    }
  });

  // node_modules/qrcode/lib/can-promise.js
  var require_can_promise = __commonJS({
    "node_modules/qrcode/lib/can-promise.js"(exports, module) {
      module.exports = function() {
        return typeof Promise === "function" && Promise.prototype && Promise.prototype.then;
      };
    }
  });

  // node_modules/qrcode/lib/core/utils.js
  var require_utils = __commonJS({
    "node_modules/qrcode/lib/core/utils.js"(exports) {
      var toSJISFunction;
      var CODEWORDS_COUNT = [
        0,
        // Not used
        26,
        44,
        70,
        100,
        134,
        172,
        196,
        242,
        292,
        346,
        404,
        466,
        532,
        581,
        655,
        733,
        815,
        901,
        991,
        1085,
        1156,
        1258,
        1364,
        1474,
        1588,
        1706,
        1828,
        1921,
        2051,
        2185,
        2323,
        2465,
        2611,
        2761,
        2876,
        3034,
        3196,
        3362,
        3532,
        3706
      ];
      exports.getSymbolSize = function getSymbolSize(version) {
        if (!version)
          throw new Error('"version" cannot be null or undefined');
        if (version < 1 || version > 40)
          throw new Error('"version" should be in range from 1 to 40');
        return version * 4 + 17;
      };
      exports.getSymbolTotalCodewords = function getSymbolTotalCodewords(version) {
        return CODEWORDS_COUNT[version];
      };
      exports.getBCHDigit = function(data) {
        let digit = 0;
        while (data !== 0) {
          digit++;
          data >>>= 1;
        }
        return digit;
      };
      exports.setToSJISFunction = function setToSJISFunction(f) {
        if (typeof f !== "function") {
          throw new Error('"toSJISFunc" is not a valid function.');
        }
        toSJISFunction = f;
      };
      exports.isKanjiModeEnabled = function() {
        return typeof toSJISFunction !== "undefined";
      };
      exports.toSJIS = function toSJIS(kanji) {
        return toSJISFunction(kanji);
      };
    }
  });

  // node_modules/qrcode/lib/core/error-correction-level.js
  var require_error_correction_level = __commonJS({
    "node_modules/qrcode/lib/core/error-correction-level.js"(exports) {
      exports.L = { bit: 1 };
      exports.M = { bit: 0 };
      exports.Q = { bit: 3 };
      exports.H = { bit: 2 };
      function fromString(string) {
        if (typeof string !== "string") {
          throw new Error("Param is not a string");
        }
        const lcStr = string.toLowerCase();
        switch (lcStr) {
          case "l":
          case "low":
            return exports.L;
          case "m":
          case "medium":
            return exports.M;
          case "q":
          case "quartile":
            return exports.Q;
          case "h":
          case "high":
            return exports.H;
          default:
            throw new Error("Unknown EC Level: " + string);
        }
      }
      exports.isValid = function isValid(level) {
        return level && typeof level.bit !== "undefined" && level.bit >= 0 && level.bit < 4;
      };
      exports.from = function from(value, defaultValue) {
        if (exports.isValid(value)) {
          return value;
        }
        try {
          return fromString(value);
        } catch (e) {
          return defaultValue;
        }
      };
    }
  });

  // node_modules/qrcode/lib/core/bit-buffer.js
  var require_bit_buffer = __commonJS({
    "node_modules/qrcode/lib/core/bit-buffer.js"(exports, module) {
      function BitBuffer() {
        this.buffer = [];
        this.length = 0;
      }
      BitBuffer.prototype = {
        get: function(index) {
          const bufIndex = Math.floor(index / 8);
          return (this.buffer[bufIndex] >>> 7 - index % 8 & 1) === 1;
        },
        put: function(num, length) {
          for (let i = 0; i < length; i++) {
            this.putBit((num >>> length - i - 1 & 1) === 1);
          }
        },
        getLengthInBits: function() {
          return this.length;
        },
        putBit: function(bit) {
          const bufIndex = Math.floor(this.length / 8);
          if (this.buffer.length <= bufIndex) {
            this.buffer.push(0);
          }
          if (bit) {
            this.buffer[bufIndex] |= 128 >>> this.length % 8;
          }
          this.length++;
        }
      };
      module.exports = BitBuffer;
    }
  });

  // node_modules/qrcode/lib/core/bit-matrix.js
  var require_bit_matrix = __commonJS({
    "node_modules/qrcode/lib/core/bit-matrix.js"(exports, module) {
      function BitMatrix(size) {
        if (!size || size < 1) {
          throw new Error("BitMatrix size must be defined and greater than 0");
        }
        this.size = size;
        this.data = new Uint8Array(size * size);
        this.reservedBit = new Uint8Array(size * size);
      }
      BitMatrix.prototype.set = function(row, col, value, reserved) {
        const index = row * this.size + col;
        this.data[index] = value;
        if (reserved)
          this.reservedBit[index] = true;
      };
      BitMatrix.prototype.get = function(row, col) {
        return this.data[row * this.size + col];
      };
      BitMatrix.prototype.xor = function(row, col, value) {
        this.data[row * this.size + col] ^= value;
      };
      BitMatrix.prototype.isReserved = function(row, col) {
        return this.reservedBit[row * this.size + col];
      };
      module.exports = BitMatrix;
    }
  });

  // node_modules/qrcode/lib/core/alignment-pattern.js
  var require_alignment_pattern = __commonJS({
    "node_modules/qrcode/lib/core/alignment-pattern.js"(exports) {
      var getSymbolSize = require_utils().getSymbolSize;
      exports.getRowColCoords = function getRowColCoords(version) {
        if (version === 1)
          return [];
        const posCount = Math.floor(version / 7) + 2;
        const size = getSymbolSize(version);
        const intervals = size === 145 ? 26 : Math.ceil((size - 13) / (2 * posCount - 2)) * 2;
        const positions = [size - 7];
        for (let i = 1; i < posCount - 1; i++) {
          positions[i] = positions[i - 1] - intervals;
        }
        positions.push(6);
        return positions.reverse();
      };
      exports.getPositions = function getPositions(version) {
        const coords = [];
        const pos = exports.getRowColCoords(version);
        const posLength = pos.length;
        for (let i = 0; i < posLength; i++) {
          for (let j2 = 0; j2 < posLength; j2++) {
            if (i === 0 && j2 === 0 || // top-left
            i === 0 && j2 === posLength - 1 || // bottom-left
            i === posLength - 1 && j2 === 0) {
              continue;
            }
            coords.push([pos[i], pos[j2]]);
          }
        }
        return coords;
      };
    }
  });

  // node_modules/qrcode/lib/core/finder-pattern.js
  var require_finder_pattern = __commonJS({
    "node_modules/qrcode/lib/core/finder-pattern.js"(exports) {
      var getSymbolSize = require_utils().getSymbolSize;
      var FINDER_PATTERN_SIZE = 7;
      exports.getPositions = function getPositions(version) {
        const size = getSymbolSize(version);
        return [
          // top-left
          [0, 0],
          // top-right
          [size - FINDER_PATTERN_SIZE, 0],
          // bottom-left
          [0, size - FINDER_PATTERN_SIZE]
        ];
      };
    }
  });

  // node_modules/qrcode/lib/core/mask-pattern.js
  var require_mask_pattern = __commonJS({
    "node_modules/qrcode/lib/core/mask-pattern.js"(exports) {
      exports.Patterns = {
        PATTERN000: 0,
        PATTERN001: 1,
        PATTERN010: 2,
        PATTERN011: 3,
        PATTERN100: 4,
        PATTERN101: 5,
        PATTERN110: 6,
        PATTERN111: 7
      };
      var PenaltyScores = {
        N1: 3,
        N2: 3,
        N3: 40,
        N4: 10
      };
      exports.isValid = function isValid(mask) {
        return mask != null && mask !== "" && !isNaN(mask) && mask >= 0 && mask <= 7;
      };
      exports.from = function from(value) {
        return exports.isValid(value) ? parseInt(value, 10) : void 0;
      };
      exports.getPenaltyN1 = function getPenaltyN1(data) {
        const size = data.size;
        let points = 0;
        let sameCountCol = 0;
        let sameCountRow = 0;
        let lastCol = null;
        let lastRow = null;
        for (let row = 0; row < size; row++) {
          sameCountCol = sameCountRow = 0;
          lastCol = lastRow = null;
          for (let col = 0; col < size; col++) {
            let module2 = data.get(row, col);
            if (module2 === lastCol) {
              sameCountCol++;
            } else {
              if (sameCountCol >= 5)
                points += PenaltyScores.N1 + (sameCountCol - 5);
              lastCol = module2;
              sameCountCol = 1;
            }
            module2 = data.get(col, row);
            if (module2 === lastRow) {
              sameCountRow++;
            } else {
              if (sameCountRow >= 5)
                points += PenaltyScores.N1 + (sameCountRow - 5);
              lastRow = module2;
              sameCountRow = 1;
            }
          }
          if (sameCountCol >= 5)
            points += PenaltyScores.N1 + (sameCountCol - 5);
          if (sameCountRow >= 5)
            points += PenaltyScores.N1 + (sameCountRow - 5);
        }
        return points;
      };
      exports.getPenaltyN2 = function getPenaltyN2(data) {
        const size = data.size;
        let points = 0;
        for (let row = 0; row < size - 1; row++) {
          for (let col = 0; col < size - 1; col++) {
            const last = data.get(row, col) + data.get(row, col + 1) + data.get(row + 1, col) + data.get(row + 1, col + 1);
            if (last === 4 || last === 0)
              points++;
          }
        }
        return points * PenaltyScores.N2;
      };
      exports.getPenaltyN3 = function getPenaltyN3(data) {
        const size = data.size;
        let points = 0;
        let bitsCol = 0;
        let bitsRow = 0;
        for (let row = 0; row < size; row++) {
          bitsCol = bitsRow = 0;
          for (let col = 0; col < size; col++) {
            bitsCol = bitsCol << 1 & 2047 | data.get(row, col);
            if (col >= 10 && (bitsCol === 1488 || bitsCol === 93))
              points++;
            bitsRow = bitsRow << 1 & 2047 | data.get(col, row);
            if (col >= 10 && (bitsRow === 1488 || bitsRow === 93))
              points++;
          }
        }
        return points * PenaltyScores.N3;
      };
      exports.getPenaltyN4 = function getPenaltyN4(data) {
        let darkCount = 0;
        const modulesCount = data.data.length;
        for (let i = 0; i < modulesCount; i++)
          darkCount += data.data[i];
        const k = Math.abs(Math.ceil(darkCount * 100 / modulesCount / 5) - 10);
        return k * PenaltyScores.N4;
      };
      function getMaskAt(maskPattern, i, j2) {
        switch (maskPattern) {
          case exports.Patterns.PATTERN000:
            return (i + j2) % 2 === 0;
          case exports.Patterns.PATTERN001:
            return i % 2 === 0;
          case exports.Patterns.PATTERN010:
            return j2 % 3 === 0;
          case exports.Patterns.PATTERN011:
            return (i + j2) % 3 === 0;
          case exports.Patterns.PATTERN100:
            return (Math.floor(i / 2) + Math.floor(j2 / 3)) % 2 === 0;
          case exports.Patterns.PATTERN101:
            return i * j2 % 2 + i * j2 % 3 === 0;
          case exports.Patterns.PATTERN110:
            return (i * j2 % 2 + i * j2 % 3) % 2 === 0;
          case exports.Patterns.PATTERN111:
            return (i * j2 % 3 + (i + j2) % 2) % 2 === 0;
          default:
            throw new Error("bad maskPattern:" + maskPattern);
        }
      }
      exports.applyMask = function applyMask(pattern, data) {
        const size = data.size;
        for (let col = 0; col < size; col++) {
          for (let row = 0; row < size; row++) {
            if (data.isReserved(row, col))
              continue;
            data.xor(row, col, getMaskAt(pattern, row, col));
          }
        }
      };
      exports.getBestMask = function getBestMask(data, setupFormatFunc) {
        const numPatterns = Object.keys(exports.Patterns).length;
        let bestPattern = 0;
        let lowerPenalty = Infinity;
        for (let p = 0; p < numPatterns; p++) {
          setupFormatFunc(p);
          exports.applyMask(p, data);
          const penalty = exports.getPenaltyN1(data) + exports.getPenaltyN2(data) + exports.getPenaltyN3(data) + exports.getPenaltyN4(data);
          exports.applyMask(p, data);
          if (penalty < lowerPenalty) {
            lowerPenalty = penalty;
            bestPattern = p;
          }
        }
        return bestPattern;
      };
    }
  });

  // node_modules/qrcode/lib/core/error-correction-code.js
  var require_error_correction_code = __commonJS({
    "node_modules/qrcode/lib/core/error-correction-code.js"(exports) {
      var ECLevel = require_error_correction_level();
      var EC_BLOCKS_TABLE = [
        // L  M  Q  H
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        2,
        2,
        1,
        2,
        2,
        4,
        1,
        2,
        4,
        4,
        2,
        4,
        4,
        4,
        2,
        4,
        6,
        5,
        2,
        4,
        6,
        6,
        2,
        5,
        8,
        8,
        4,
        5,
        8,
        8,
        4,
        5,
        8,
        11,
        4,
        8,
        10,
        11,
        4,
        9,
        12,
        16,
        4,
        9,
        16,
        16,
        6,
        10,
        12,
        18,
        6,
        10,
        17,
        16,
        6,
        11,
        16,
        19,
        6,
        13,
        18,
        21,
        7,
        14,
        21,
        25,
        8,
        16,
        20,
        25,
        8,
        17,
        23,
        25,
        9,
        17,
        23,
        34,
        9,
        18,
        25,
        30,
        10,
        20,
        27,
        32,
        12,
        21,
        29,
        35,
        12,
        23,
        34,
        37,
        12,
        25,
        34,
        40,
        13,
        26,
        35,
        42,
        14,
        28,
        38,
        45,
        15,
        29,
        40,
        48,
        16,
        31,
        43,
        51,
        17,
        33,
        45,
        54,
        18,
        35,
        48,
        57,
        19,
        37,
        51,
        60,
        19,
        38,
        53,
        63,
        20,
        40,
        56,
        66,
        21,
        43,
        59,
        70,
        22,
        45,
        62,
        74,
        24,
        47,
        65,
        77,
        25,
        49,
        68,
        81
      ];
      var EC_CODEWORDS_TABLE = [
        // L  M  Q  H
        7,
        10,
        13,
        17,
        10,
        16,
        22,
        28,
        15,
        26,
        36,
        44,
        20,
        36,
        52,
        64,
        26,
        48,
        72,
        88,
        36,
        64,
        96,
        112,
        40,
        72,
        108,
        130,
        48,
        88,
        132,
        156,
        60,
        110,
        160,
        192,
        72,
        130,
        192,
        224,
        80,
        150,
        224,
        264,
        96,
        176,
        260,
        308,
        104,
        198,
        288,
        352,
        120,
        216,
        320,
        384,
        132,
        240,
        360,
        432,
        144,
        280,
        408,
        480,
        168,
        308,
        448,
        532,
        180,
        338,
        504,
        588,
        196,
        364,
        546,
        650,
        224,
        416,
        600,
        700,
        224,
        442,
        644,
        750,
        252,
        476,
        690,
        816,
        270,
        504,
        750,
        900,
        300,
        560,
        810,
        960,
        312,
        588,
        870,
        1050,
        336,
        644,
        952,
        1110,
        360,
        700,
        1020,
        1200,
        390,
        728,
        1050,
        1260,
        420,
        784,
        1140,
        1350,
        450,
        812,
        1200,
        1440,
        480,
        868,
        1290,
        1530,
        510,
        924,
        1350,
        1620,
        540,
        980,
        1440,
        1710,
        570,
        1036,
        1530,
        1800,
        570,
        1064,
        1590,
        1890,
        600,
        1120,
        1680,
        1980,
        630,
        1204,
        1770,
        2100,
        660,
        1260,
        1860,
        2220,
        720,
        1316,
        1950,
        2310,
        750,
        1372,
        2040,
        2430
      ];
      exports.getBlocksCount = function getBlocksCount(version, errorCorrectionLevel) {
        switch (errorCorrectionLevel) {
          case ECLevel.L:
            return EC_BLOCKS_TABLE[(version - 1) * 4 + 0];
          case ECLevel.M:
            return EC_BLOCKS_TABLE[(version - 1) * 4 + 1];
          case ECLevel.Q:
            return EC_BLOCKS_TABLE[(version - 1) * 4 + 2];
          case ECLevel.H:
            return EC_BLOCKS_TABLE[(version - 1) * 4 + 3];
          default:
            return void 0;
        }
      };
      exports.getTotalCodewordsCount = function getTotalCodewordsCount(version, errorCorrectionLevel) {
        switch (errorCorrectionLevel) {
          case ECLevel.L:
            return EC_CODEWORDS_TABLE[(version - 1) * 4 + 0];
          case ECLevel.M:
            return EC_CODEWORDS_TABLE[(version - 1) * 4 + 1];
          case ECLevel.Q:
            return EC_CODEWORDS_TABLE[(version - 1) * 4 + 2];
          case ECLevel.H:
            return EC_CODEWORDS_TABLE[(version - 1) * 4 + 3];
          default:
            return void 0;
        }
      };
    }
  });

  // node_modules/qrcode/lib/core/galois-field.js
  var require_galois_field = __commonJS({
    "node_modules/qrcode/lib/core/galois-field.js"(exports) {
      var EXP_TABLE = new Uint8Array(512);
      var LOG_TABLE = new Uint8Array(256);
      (function initTables() {
        let x = 1;
        for (let i = 0; i < 255; i++) {
          EXP_TABLE[i] = x;
          LOG_TABLE[x] = i;
          x <<= 1;
          if (x & 256) {
            x ^= 285;
          }
        }
        for (let i = 255; i < 512; i++) {
          EXP_TABLE[i] = EXP_TABLE[i - 255];
        }
      })();
      exports.log = function log(n) {
        if (n < 1)
          throw new Error("log(" + n + ")");
        return LOG_TABLE[n];
      };
      exports.exp = function exp(n) {
        return EXP_TABLE[n];
      };
      exports.mul = function mul(x, y) {
        if (x === 0 || y === 0)
          return 0;
        return EXP_TABLE[LOG_TABLE[x] + LOG_TABLE[y]];
      };
    }
  });

  // node_modules/qrcode/lib/core/polynomial.js
  var require_polynomial = __commonJS({
    "node_modules/qrcode/lib/core/polynomial.js"(exports) {
      var GF = require_galois_field();
      exports.mul = function mul(p1, p2) {
        const coeff = new Uint8Array(p1.length + p2.length - 1);
        for (let i = 0; i < p1.length; i++) {
          for (let j2 = 0; j2 < p2.length; j2++) {
            coeff[i + j2] ^= GF.mul(p1[i], p2[j2]);
          }
        }
        return coeff;
      };
      exports.mod = function mod(divident, divisor) {
        let result = new Uint8Array(divident);
        while (result.length - divisor.length >= 0) {
          const coeff = result[0];
          for (let i = 0; i < divisor.length; i++) {
            result[i] ^= GF.mul(divisor[i], coeff);
          }
          let offset = 0;
          while (offset < result.length && result[offset] === 0)
            offset++;
          result = result.slice(offset);
        }
        return result;
      };
      exports.generateECPolynomial = function generateECPolynomial(degree) {
        let poly = new Uint8Array([1]);
        for (let i = 0; i < degree; i++) {
          poly = exports.mul(poly, new Uint8Array([1, GF.exp(i)]));
        }
        return poly;
      };
    }
  });

  // node_modules/qrcode/lib/core/reed-solomon-encoder.js
  var require_reed_solomon_encoder = __commonJS({
    "node_modules/qrcode/lib/core/reed-solomon-encoder.js"(exports, module) {
      var Polynomial = require_polynomial();
      function ReedSolomonEncoder(degree) {
        this.genPoly = void 0;
        this.degree = degree;
        if (this.degree)
          this.initialize(this.degree);
      }
      ReedSolomonEncoder.prototype.initialize = function initialize(degree) {
        this.degree = degree;
        this.genPoly = Polynomial.generateECPolynomial(this.degree);
      };
      ReedSolomonEncoder.prototype.encode = function encode(data) {
        if (!this.genPoly) {
          throw new Error("Encoder not initialized");
        }
        const paddedData = new Uint8Array(data.length + this.degree);
        paddedData.set(data);
        const remainder = Polynomial.mod(paddedData, this.genPoly);
        const start = this.degree - remainder.length;
        if (start > 0) {
          const buff = new Uint8Array(this.degree);
          buff.set(remainder, start);
          return buff;
        }
        return remainder;
      };
      module.exports = ReedSolomonEncoder;
    }
  });

  // node_modules/qrcode/lib/core/version-check.js
  var require_version_check = __commonJS({
    "node_modules/qrcode/lib/core/version-check.js"(exports) {
      exports.isValid = function isValid(version) {
        return !isNaN(version) && version >= 1 && version <= 40;
      };
    }
  });

  // node_modules/qrcode/lib/core/regex.js
  var require_regex = __commonJS({
    "node_modules/qrcode/lib/core/regex.js"(exports) {
      var numeric = "[0-9]+";
      var alphanumeric = "[A-Z $%*+\\-./:]+";
      var kanji = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
      kanji = kanji.replace(/u/g, "\\u");
      var byte = "(?:(?![A-Z0-9 $%*+\\-./:]|" + kanji + ")(?:.|[\r\n]))+";
      exports.KANJI = new RegExp(kanji, "g");
      exports.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
      exports.BYTE = new RegExp(byte, "g");
      exports.NUMERIC = new RegExp(numeric, "g");
      exports.ALPHANUMERIC = new RegExp(alphanumeric, "g");
      var TEST_KANJI = new RegExp("^" + kanji + "$");
      var TEST_NUMERIC = new RegExp("^" + numeric + "$");
      var TEST_ALPHANUMERIC = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
      exports.testKanji = function testKanji(str) {
        return TEST_KANJI.test(str);
      };
      exports.testNumeric = function testNumeric(str) {
        return TEST_NUMERIC.test(str);
      };
      exports.testAlphanumeric = function testAlphanumeric(str) {
        return TEST_ALPHANUMERIC.test(str);
      };
    }
  });

  // node_modules/qrcode/lib/core/mode.js
  var require_mode = __commonJS({
    "node_modules/qrcode/lib/core/mode.js"(exports) {
      var VersionCheck = require_version_check();
      var Regex = require_regex();
      exports.NUMERIC = {
        id: "Numeric",
        bit: 1 << 0,
        ccBits: [10, 12, 14]
      };
      exports.ALPHANUMERIC = {
        id: "Alphanumeric",
        bit: 1 << 1,
        ccBits: [9, 11, 13]
      };
      exports.BYTE = {
        id: "Byte",
        bit: 1 << 2,
        ccBits: [8, 16, 16]
      };
      exports.KANJI = {
        id: "Kanji",
        bit: 1 << 3,
        ccBits: [8, 10, 12]
      };
      exports.MIXED = {
        bit: -1
      };
      exports.getCharCountIndicator = function getCharCountIndicator(mode, version) {
        if (!mode.ccBits)
          throw new Error("Invalid mode: " + mode);
        if (!VersionCheck.isValid(version)) {
          throw new Error("Invalid version: " + version);
        }
        if (version >= 1 && version < 10)
          return mode.ccBits[0];
        else if (version < 27)
          return mode.ccBits[1];
        return mode.ccBits[2];
      };
      exports.getBestModeForData = function getBestModeForData(dataStr) {
        if (Regex.testNumeric(dataStr))
          return exports.NUMERIC;
        else if (Regex.testAlphanumeric(dataStr))
          return exports.ALPHANUMERIC;
        else if (Regex.testKanji(dataStr))
          return exports.KANJI;
        else
          return exports.BYTE;
      };
      exports.toString = function toString(mode) {
        if (mode && mode.id)
          return mode.id;
        throw new Error("Invalid mode");
      };
      exports.isValid = function isValid(mode) {
        return mode && mode.bit && mode.ccBits;
      };
      function fromString(string) {
        if (typeof string !== "string") {
          throw new Error("Param is not a string");
        }
        const lcStr = string.toLowerCase();
        switch (lcStr) {
          case "numeric":
            return exports.NUMERIC;
          case "alphanumeric":
            return exports.ALPHANUMERIC;
          case "kanji":
            return exports.KANJI;
          case "byte":
            return exports.BYTE;
          default:
            throw new Error("Unknown mode: " + string);
        }
      }
      exports.from = function from(value, defaultValue) {
        if (exports.isValid(value)) {
          return value;
        }
        try {
          return fromString(value);
        } catch (e) {
          return defaultValue;
        }
      };
    }
  });

  // node_modules/qrcode/lib/core/version.js
  var require_version = __commonJS({
    "node_modules/qrcode/lib/core/version.js"(exports) {
      var Utils = require_utils();
      var ECCode = require_error_correction_code();
      var ECLevel = require_error_correction_level();
      var Mode = require_mode();
      var VersionCheck = require_version_check();
      var G18 = 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0;
      var G18_BCH = Utils.getBCHDigit(G18);
      function getBestVersionForDataLength(mode, length, errorCorrectionLevel) {
        for (let currentVersion = 1; currentVersion <= 40; currentVersion++) {
          if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, mode)) {
            return currentVersion;
          }
        }
        return void 0;
      }
      function getReservedBitsCount(mode, version) {
        return Mode.getCharCountIndicator(mode, version) + 4;
      }
      function getTotalBitsFromDataArray(segments, version) {
        let totalBits = 0;
        segments.forEach(function(data) {
          const reservedBits = getReservedBitsCount(data.mode, version);
          totalBits += reservedBits + data.getBitsLength();
        });
        return totalBits;
      }
      function getBestVersionForMixedData(segments, errorCorrectionLevel) {
        for (let currentVersion = 1; currentVersion <= 40; currentVersion++) {
          const length = getTotalBitsFromDataArray(segments, currentVersion);
          if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, Mode.MIXED)) {
            return currentVersion;
          }
        }
        return void 0;
      }
      exports.from = function from(value, defaultValue) {
        if (VersionCheck.isValid(value)) {
          return parseInt(value, 10);
        }
        return defaultValue;
      };
      exports.getCapacity = function getCapacity(version, errorCorrectionLevel, mode) {
        if (!VersionCheck.isValid(version)) {
          throw new Error("Invalid QR Code version");
        }
        if (typeof mode === "undefined")
          mode = Mode.BYTE;
        const totalCodewords = Utils.getSymbolTotalCodewords(version);
        const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);
        const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;
        if (mode === Mode.MIXED)
          return dataTotalCodewordsBits;
        const usableBits = dataTotalCodewordsBits - getReservedBitsCount(mode, version);
        switch (mode) {
          case Mode.NUMERIC:
            return Math.floor(usableBits / 10 * 3);
          case Mode.ALPHANUMERIC:
            return Math.floor(usableBits / 11 * 2);
          case Mode.KANJI:
            return Math.floor(usableBits / 13);
          case Mode.BYTE:
          default:
            return Math.floor(usableBits / 8);
        }
      };
      exports.getBestVersionForData = function getBestVersionForData(data, errorCorrectionLevel) {
        let seg;
        const ecl = ECLevel.from(errorCorrectionLevel, ECLevel.M);
        if (Array.isArray(data)) {
          if (data.length > 1) {
            return getBestVersionForMixedData(data, ecl);
          }
          if (data.length === 0) {
            return 1;
          }
          seg = data[0];
        } else {
          seg = data;
        }
        return getBestVersionForDataLength(seg.mode, seg.getLength(), ecl);
      };
      exports.getEncodedBits = function getEncodedBits(version) {
        if (!VersionCheck.isValid(version) || version < 7) {
          throw new Error("Invalid QR Code version");
        }
        let d = version << 12;
        while (Utils.getBCHDigit(d) - G18_BCH >= 0) {
          d ^= G18 << Utils.getBCHDigit(d) - G18_BCH;
        }
        return version << 12 | d;
      };
    }
  });

  // node_modules/qrcode/lib/core/format-info.js
  var require_format_info = __commonJS({
    "node_modules/qrcode/lib/core/format-info.js"(exports) {
      var Utils = require_utils();
      var G15 = 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0;
      var G15_MASK = 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1;
      var G15_BCH = Utils.getBCHDigit(G15);
      exports.getEncodedBits = function getEncodedBits(errorCorrectionLevel, mask) {
        const data = errorCorrectionLevel.bit << 3 | mask;
        let d = data << 10;
        while (Utils.getBCHDigit(d) - G15_BCH >= 0) {
          d ^= G15 << Utils.getBCHDigit(d) - G15_BCH;
        }
        return (data << 10 | d) ^ G15_MASK;
      };
    }
  });

  // node_modules/qrcode/lib/core/numeric-data.js
  var require_numeric_data = __commonJS({
    "node_modules/qrcode/lib/core/numeric-data.js"(exports, module) {
      var Mode = require_mode();
      function NumericData(data) {
        this.mode = Mode.NUMERIC;
        this.data = data.toString();
      }
      NumericData.getBitsLength = function getBitsLength(length) {
        return 10 * Math.floor(length / 3) + (length % 3 ? length % 3 * 3 + 1 : 0);
      };
      NumericData.prototype.getLength = function getLength() {
        return this.data.length;
      };
      NumericData.prototype.getBitsLength = function getBitsLength() {
        return NumericData.getBitsLength(this.data.length);
      };
      NumericData.prototype.write = function write(bitBuffer) {
        let i, group, value;
        for (i = 0; i + 3 <= this.data.length; i += 3) {
          group = this.data.substr(i, 3);
          value = parseInt(group, 10);
          bitBuffer.put(value, 10);
        }
        const remainingNum = this.data.length - i;
        if (remainingNum > 0) {
          group = this.data.substr(i);
          value = parseInt(group, 10);
          bitBuffer.put(value, remainingNum * 3 + 1);
        }
      };
      module.exports = NumericData;
    }
  });

  // node_modules/qrcode/lib/core/alphanumeric-data.js
  var require_alphanumeric_data = __commonJS({
    "node_modules/qrcode/lib/core/alphanumeric-data.js"(exports, module) {
      var Mode = require_mode();
      var ALPHA_NUM_CHARS = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
        " ",
        "$",
        "%",
        "*",
        "+",
        "-",
        ".",
        "/",
        ":"
      ];
      function AlphanumericData(data) {
        this.mode = Mode.ALPHANUMERIC;
        this.data = data;
      }
      AlphanumericData.getBitsLength = function getBitsLength(length) {
        return 11 * Math.floor(length / 2) + 6 * (length % 2);
      };
      AlphanumericData.prototype.getLength = function getLength() {
        return this.data.length;
      };
      AlphanumericData.prototype.getBitsLength = function getBitsLength() {
        return AlphanumericData.getBitsLength(this.data.length);
      };
      AlphanumericData.prototype.write = function write(bitBuffer) {
        let i;
        for (i = 0; i + 2 <= this.data.length; i += 2) {
          let value = ALPHA_NUM_CHARS.indexOf(this.data[i]) * 45;
          value += ALPHA_NUM_CHARS.indexOf(this.data[i + 1]);
          bitBuffer.put(value, 11);
        }
        if (this.data.length % 2) {
          bitBuffer.put(ALPHA_NUM_CHARS.indexOf(this.data[i]), 6);
        }
      };
      module.exports = AlphanumericData;
    }
  });

  // node_modules/encode-utf8/index.js
  var require_encode_utf8 = __commonJS({
    "node_modules/encode-utf8/index.js"(exports, module) {
      "use strict";
      module.exports = function encodeUtf8(input) {
        var result = [];
        var size = input.length;
        for (var index = 0; index < size; index++) {
          var point = input.charCodeAt(index);
          if (point >= 55296 && point <= 56319 && size > index + 1) {
            var second = input.charCodeAt(index + 1);
            if (second >= 56320 && second <= 57343) {
              point = (point - 55296) * 1024 + second - 56320 + 65536;
              index += 1;
            }
          }
          if (point < 128) {
            result.push(point);
            continue;
          }
          if (point < 2048) {
            result.push(point >> 6 | 192);
            result.push(point & 63 | 128);
            continue;
          }
          if (point < 55296 || point >= 57344 && point < 65536) {
            result.push(point >> 12 | 224);
            result.push(point >> 6 & 63 | 128);
            result.push(point & 63 | 128);
            continue;
          }
          if (point >= 65536 && point <= 1114111) {
            result.push(point >> 18 | 240);
            result.push(point >> 12 & 63 | 128);
            result.push(point >> 6 & 63 | 128);
            result.push(point & 63 | 128);
            continue;
          }
          result.push(239, 191, 189);
        }
        return new Uint8Array(result).buffer;
      };
    }
  });

  // node_modules/qrcode/lib/core/byte-data.js
  var require_byte_data = __commonJS({
    "node_modules/qrcode/lib/core/byte-data.js"(exports, module) {
      var encodeUtf8 = require_encode_utf8();
      var Mode = require_mode();
      function ByteData(data) {
        this.mode = Mode.BYTE;
        if (typeof data === "string") {
          data = encodeUtf8(data);
        }
        this.data = new Uint8Array(data);
      }
      ByteData.getBitsLength = function getBitsLength(length) {
        return length * 8;
      };
      ByteData.prototype.getLength = function getLength() {
        return this.data.length;
      };
      ByteData.prototype.getBitsLength = function getBitsLength() {
        return ByteData.getBitsLength(this.data.length);
      };
      ByteData.prototype.write = function(bitBuffer) {
        for (let i = 0, l = this.data.length; i < l; i++) {
          bitBuffer.put(this.data[i], 8);
        }
      };
      module.exports = ByteData;
    }
  });

  // node_modules/qrcode/lib/core/kanji-data.js
  var require_kanji_data = __commonJS({
    "node_modules/qrcode/lib/core/kanji-data.js"(exports, module) {
      var Mode = require_mode();
      var Utils = require_utils();
      function KanjiData(data) {
        this.mode = Mode.KANJI;
        this.data = data;
      }
      KanjiData.getBitsLength = function getBitsLength(length) {
        return length * 13;
      };
      KanjiData.prototype.getLength = function getLength() {
        return this.data.length;
      };
      KanjiData.prototype.getBitsLength = function getBitsLength() {
        return KanjiData.getBitsLength(this.data.length);
      };
      KanjiData.prototype.write = function(bitBuffer) {
        let i;
        for (i = 0; i < this.data.length; i++) {
          let value = Utils.toSJIS(this.data[i]);
          if (value >= 33088 && value <= 40956) {
            value -= 33088;
          } else if (value >= 57408 && value <= 60351) {
            value -= 49472;
          } else {
            throw new Error(
              "Invalid SJIS character: " + this.data[i] + "\nMake sure your charset is UTF-8"
            );
          }
          value = (value >>> 8 & 255) * 192 + (value & 255);
          bitBuffer.put(value, 13);
        }
      };
      module.exports = KanjiData;
    }
  });

  // node_modules/dijkstrajs/dijkstra.js
  var require_dijkstra = __commonJS({
    "node_modules/dijkstrajs/dijkstra.js"(exports, module) {
      "use strict";
      var dijkstra = {
        single_source_shortest_paths: function(graph, s, d) {
          var predecessors = {};
          var costs = {};
          costs[s] = 0;
          var open = dijkstra.PriorityQueue.make();
          open.push(s, 0);
          var closest, u, v, cost_of_s_to_u, adjacent_nodes, cost_of_e, cost_of_s_to_u_plus_cost_of_e, cost_of_s_to_v, first_visit;
          while (!open.empty()) {
            closest = open.pop();
            u = closest.value;
            cost_of_s_to_u = closest.cost;
            adjacent_nodes = graph[u] || {};
            for (v in adjacent_nodes) {
              if (adjacent_nodes.hasOwnProperty(v)) {
                cost_of_e = adjacent_nodes[v];
                cost_of_s_to_u_plus_cost_of_e = cost_of_s_to_u + cost_of_e;
                cost_of_s_to_v = costs[v];
                first_visit = typeof costs[v] === "undefined";
                if (first_visit || cost_of_s_to_v > cost_of_s_to_u_plus_cost_of_e) {
                  costs[v] = cost_of_s_to_u_plus_cost_of_e;
                  open.push(v, cost_of_s_to_u_plus_cost_of_e);
                  predecessors[v] = u;
                }
              }
            }
          }
          if (typeof d !== "undefined" && typeof costs[d] === "undefined") {
            var msg = ["Could not find a path from ", s, " to ", d, "."].join("");
            throw new Error(msg);
          }
          return predecessors;
        },
        extract_shortest_path_from_predecessor_list: function(predecessors, d) {
          var nodes = [];
          var u = d;
          var predecessor;
          while (u) {
            nodes.push(u);
            predecessor = predecessors[u];
            u = predecessors[u];
          }
          nodes.reverse();
          return nodes;
        },
        find_path: function(graph, s, d) {
          var predecessors = dijkstra.single_source_shortest_paths(graph, s, d);
          return dijkstra.extract_shortest_path_from_predecessor_list(
            predecessors,
            d
          );
        },
        /**
         * A very naive priority queue implementation.
         */
        PriorityQueue: {
          make: function(opts) {
            var T = dijkstra.PriorityQueue, t = {}, key;
            opts = opts || {};
            for (key in T) {
              if (T.hasOwnProperty(key)) {
                t[key] = T[key];
              }
            }
            t.queue = [];
            t.sorter = opts.sorter || T.default_sorter;
            return t;
          },
          default_sorter: function(a, b) {
            return a.cost - b.cost;
          },
          /**
           * Add a new item to the queue and ensure the highest priority element
           * is at the front of the queue.
           */
          push: function(value, cost) {
            var item = { value, cost };
            this.queue.push(item);
            this.queue.sort(this.sorter);
          },
          /**
           * Return the highest priority element in the queue.
           */
          pop: function() {
            return this.queue.shift();
          },
          empty: function() {
            return this.queue.length === 0;
          }
        }
      };
      if (typeof module !== "undefined") {
        module.exports = dijkstra;
      }
    }
  });

  // node_modules/qrcode/lib/core/segments.js
  var require_segments = __commonJS({
    "node_modules/qrcode/lib/core/segments.js"(exports) {
      var Mode = require_mode();
      var NumericData = require_numeric_data();
      var AlphanumericData = require_alphanumeric_data();
      var ByteData = require_byte_data();
      var KanjiData = require_kanji_data();
      var Regex = require_regex();
      var Utils = require_utils();
      var dijkstra = require_dijkstra();
      function getStringByteLength(str) {
        return unescape(encodeURIComponent(str)).length;
      }
      function getSegments(regex, mode, str) {
        const segments = [];
        let result;
        while ((result = regex.exec(str)) !== null) {
          segments.push({
            data: result[0],
            index: result.index,
            mode,
            length: result[0].length
          });
        }
        return segments;
      }
      function getSegmentsFromString(dataStr) {
        const numSegs = getSegments(Regex.NUMERIC, Mode.NUMERIC, dataStr);
        const alphaNumSegs = getSegments(Regex.ALPHANUMERIC, Mode.ALPHANUMERIC, dataStr);
        let byteSegs;
        let kanjiSegs;
        if (Utils.isKanjiModeEnabled()) {
          byteSegs = getSegments(Regex.BYTE, Mode.BYTE, dataStr);
          kanjiSegs = getSegments(Regex.KANJI, Mode.KANJI, dataStr);
        } else {
          byteSegs = getSegments(Regex.BYTE_KANJI, Mode.BYTE, dataStr);
          kanjiSegs = [];
        }
        const segs = numSegs.concat(alphaNumSegs, byteSegs, kanjiSegs);
        return segs.sort(function(s1, s2) {
          return s1.index - s2.index;
        }).map(function(obj) {
          return {
            data: obj.data,
            mode: obj.mode,
            length: obj.length
          };
        });
      }
      function getSegmentBitsLength(length, mode) {
        switch (mode) {
          case Mode.NUMERIC:
            return NumericData.getBitsLength(length);
          case Mode.ALPHANUMERIC:
            return AlphanumericData.getBitsLength(length);
          case Mode.KANJI:
            return KanjiData.getBitsLength(length);
          case Mode.BYTE:
            return ByteData.getBitsLength(length);
        }
      }
      function mergeSegments(segs) {
        return segs.reduce(function(acc, curr) {
          const prevSeg = acc.length - 1 >= 0 ? acc[acc.length - 1] : null;
          if (prevSeg && prevSeg.mode === curr.mode) {
            acc[acc.length - 1].data += curr.data;
            return acc;
          }
          acc.push(curr);
          return acc;
        }, []);
      }
      function buildNodes(segs) {
        const nodes = [];
        for (let i = 0; i < segs.length; i++) {
          const seg = segs[i];
          switch (seg.mode) {
            case Mode.NUMERIC:
              nodes.push([
                seg,
                { data: seg.data, mode: Mode.ALPHANUMERIC, length: seg.length },
                { data: seg.data, mode: Mode.BYTE, length: seg.length }
              ]);
              break;
            case Mode.ALPHANUMERIC:
              nodes.push([
                seg,
                { data: seg.data, mode: Mode.BYTE, length: seg.length }
              ]);
              break;
            case Mode.KANJI:
              nodes.push([
                seg,
                { data: seg.data, mode: Mode.BYTE, length: getStringByteLength(seg.data) }
              ]);
              break;
            case Mode.BYTE:
              nodes.push([
                { data: seg.data, mode: Mode.BYTE, length: getStringByteLength(seg.data) }
              ]);
          }
        }
        return nodes;
      }
      function buildGraph(nodes, version) {
        const table = {};
        const graph = { start: {} };
        let prevNodeIds = ["start"];
        for (let i = 0; i < nodes.length; i++) {
          const nodeGroup = nodes[i];
          const currentNodeIds = [];
          for (let j2 = 0; j2 < nodeGroup.length; j2++) {
            const node = nodeGroup[j2];
            const key = "" + i + j2;
            currentNodeIds.push(key);
            table[key] = { node, lastCount: 0 };
            graph[key] = {};
            for (let n = 0; n < prevNodeIds.length; n++) {
              const prevNodeId = prevNodeIds[n];
              if (table[prevNodeId] && table[prevNodeId].node.mode === node.mode) {
                graph[prevNodeId][key] = getSegmentBitsLength(table[prevNodeId].lastCount + node.length, node.mode) - getSegmentBitsLength(table[prevNodeId].lastCount, node.mode);
                table[prevNodeId].lastCount += node.length;
              } else {
                if (table[prevNodeId])
                  table[prevNodeId].lastCount = node.length;
                graph[prevNodeId][key] = getSegmentBitsLength(node.length, node.mode) + 4 + Mode.getCharCountIndicator(node.mode, version);
              }
            }
          }
          prevNodeIds = currentNodeIds;
        }
        for (let n = 0; n < prevNodeIds.length; n++) {
          graph[prevNodeIds[n]].end = 0;
        }
        return { map: graph, table };
      }
      function buildSingleSegment(data, modesHint) {
        let mode;
        const bestMode = Mode.getBestModeForData(data);
        mode = Mode.from(modesHint, bestMode);
        if (mode !== Mode.BYTE && mode.bit < bestMode.bit) {
          throw new Error('"' + data + '" cannot be encoded with mode ' + Mode.toString(mode) + ".\n Suggested mode is: " + Mode.toString(bestMode));
        }
        if (mode === Mode.KANJI && !Utils.isKanjiModeEnabled()) {
          mode = Mode.BYTE;
        }
        switch (mode) {
          case Mode.NUMERIC:
            return new NumericData(data);
          case Mode.ALPHANUMERIC:
            return new AlphanumericData(data);
          case Mode.KANJI:
            return new KanjiData(data);
          case Mode.BYTE:
            return new ByteData(data);
        }
      }
      exports.fromArray = function fromArray(array) {
        return array.reduce(function(acc, seg) {
          if (typeof seg === "string") {
            acc.push(buildSingleSegment(seg, null));
          } else if (seg.data) {
            acc.push(buildSingleSegment(seg.data, seg.mode));
          }
          return acc;
        }, []);
      };
      exports.fromString = function fromString(data, version) {
        const segs = getSegmentsFromString(data, Utils.isKanjiModeEnabled());
        const nodes = buildNodes(segs);
        const graph = buildGraph(nodes, version);
        const path = dijkstra.find_path(graph.map, "start", "end");
        const optimizedSegs = [];
        for (let i = 1; i < path.length - 1; i++) {
          optimizedSegs.push(graph.table[path[i]].node);
        }
        return exports.fromArray(mergeSegments(optimizedSegs));
      };
      exports.rawSplit = function rawSplit(data) {
        return exports.fromArray(
          getSegmentsFromString(data, Utils.isKanjiModeEnabled())
        );
      };
    }
  });

  // node_modules/qrcode/lib/core/qrcode.js
  var require_qrcode = __commonJS({
    "node_modules/qrcode/lib/core/qrcode.js"(exports) {
      var Utils = require_utils();
      var ECLevel = require_error_correction_level();
      var BitBuffer = require_bit_buffer();
      var BitMatrix = require_bit_matrix();
      var AlignmentPattern = require_alignment_pattern();
      var FinderPattern = require_finder_pattern();
      var MaskPattern = require_mask_pattern();
      var ECCode = require_error_correction_code();
      var ReedSolomonEncoder = require_reed_solomon_encoder();
      var Version = require_version();
      var FormatInfo = require_format_info();
      var Mode = require_mode();
      var Segments = require_segments();
      function setupFinderPattern(matrix, version) {
        const size = matrix.size;
        const pos = FinderPattern.getPositions(version);
        for (let i = 0; i < pos.length; i++) {
          const row = pos[i][0];
          const col = pos[i][1];
          for (let r = -1; r <= 7; r++) {
            if (row + r <= -1 || size <= row + r)
              continue;
            for (let c2 = -1; c2 <= 7; c2++) {
              if (col + c2 <= -1 || size <= col + c2)
                continue;
              if (r >= 0 && r <= 6 && (c2 === 0 || c2 === 6) || c2 >= 0 && c2 <= 6 && (r === 0 || r === 6) || r >= 2 && r <= 4 && c2 >= 2 && c2 <= 4) {
                matrix.set(row + r, col + c2, true, true);
              } else {
                matrix.set(row + r, col + c2, false, true);
              }
            }
          }
        }
      }
      function setupTimingPattern(matrix) {
        const size = matrix.size;
        for (let r = 8; r < size - 8; r++) {
          const value = r % 2 === 0;
          matrix.set(r, 6, value, true);
          matrix.set(6, r, value, true);
        }
      }
      function setupAlignmentPattern(matrix, version) {
        const pos = AlignmentPattern.getPositions(version);
        for (let i = 0; i < pos.length; i++) {
          const row = pos[i][0];
          const col = pos[i][1];
          for (let r = -2; r <= 2; r++) {
            for (let c2 = -2; c2 <= 2; c2++) {
              if (r === -2 || r === 2 || c2 === -2 || c2 === 2 || r === 0 && c2 === 0) {
                matrix.set(row + r, col + c2, true, true);
              } else {
                matrix.set(row + r, col + c2, false, true);
              }
            }
          }
        }
      }
      function setupVersionInfo(matrix, version) {
        const size = matrix.size;
        const bits = Version.getEncodedBits(version);
        let row, col, mod;
        for (let i = 0; i < 18; i++) {
          row = Math.floor(i / 3);
          col = i % 3 + size - 8 - 3;
          mod = (bits >> i & 1) === 1;
          matrix.set(row, col, mod, true);
          matrix.set(col, row, mod, true);
        }
      }
      function setupFormatInfo(matrix, errorCorrectionLevel, maskPattern) {
        const size = matrix.size;
        const bits = FormatInfo.getEncodedBits(errorCorrectionLevel, maskPattern);
        let i, mod;
        for (i = 0; i < 15; i++) {
          mod = (bits >> i & 1) === 1;
          if (i < 6) {
            matrix.set(i, 8, mod, true);
          } else if (i < 8) {
            matrix.set(i + 1, 8, mod, true);
          } else {
            matrix.set(size - 15 + i, 8, mod, true);
          }
          if (i < 8) {
            matrix.set(8, size - i - 1, mod, true);
          } else if (i < 9) {
            matrix.set(8, 15 - i - 1 + 1, mod, true);
          } else {
            matrix.set(8, 15 - i - 1, mod, true);
          }
        }
        matrix.set(size - 8, 8, 1, true);
      }
      function setupData(matrix, data) {
        const size = matrix.size;
        let inc = -1;
        let row = size - 1;
        let bitIndex = 7;
        let byteIndex = 0;
        for (let col = size - 1; col > 0; col -= 2) {
          if (col === 6)
            col--;
          while (true) {
            for (let c2 = 0; c2 < 2; c2++) {
              if (!matrix.isReserved(row, col - c2)) {
                let dark = false;
                if (byteIndex < data.length) {
                  dark = (data[byteIndex] >>> bitIndex & 1) === 1;
                }
                matrix.set(row, col - c2, dark);
                bitIndex--;
                if (bitIndex === -1) {
                  byteIndex++;
                  bitIndex = 7;
                }
              }
            }
            row += inc;
            if (row < 0 || size <= row) {
              row -= inc;
              inc = -inc;
              break;
            }
          }
        }
      }
      function createData(version, errorCorrectionLevel, segments) {
        const buffer = new BitBuffer();
        segments.forEach(function(data) {
          buffer.put(data.mode.bit, 4);
          buffer.put(data.getLength(), Mode.getCharCountIndicator(data.mode, version));
          data.write(buffer);
        });
        const totalCodewords = Utils.getSymbolTotalCodewords(version);
        const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);
        const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;
        if (buffer.getLengthInBits() + 4 <= dataTotalCodewordsBits) {
          buffer.put(0, 4);
        }
        while (buffer.getLengthInBits() % 8 !== 0) {
          buffer.putBit(0);
        }
        const remainingByte = (dataTotalCodewordsBits - buffer.getLengthInBits()) / 8;
        for (let i = 0; i < remainingByte; i++) {
          buffer.put(i % 2 ? 17 : 236, 8);
        }
        return createCodewords(buffer, version, errorCorrectionLevel);
      }
      function createCodewords(bitBuffer, version, errorCorrectionLevel) {
        const totalCodewords = Utils.getSymbolTotalCodewords(version);
        const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);
        const dataTotalCodewords = totalCodewords - ecTotalCodewords;
        const ecTotalBlocks = ECCode.getBlocksCount(version, errorCorrectionLevel);
        const blocksInGroup2 = totalCodewords % ecTotalBlocks;
        const blocksInGroup1 = ecTotalBlocks - blocksInGroup2;
        const totalCodewordsInGroup1 = Math.floor(totalCodewords / ecTotalBlocks);
        const dataCodewordsInGroup1 = Math.floor(dataTotalCodewords / ecTotalBlocks);
        const dataCodewordsInGroup2 = dataCodewordsInGroup1 + 1;
        const ecCount = totalCodewordsInGroup1 - dataCodewordsInGroup1;
        const rs = new ReedSolomonEncoder(ecCount);
        let offset = 0;
        const dcData = new Array(ecTotalBlocks);
        const ecData = new Array(ecTotalBlocks);
        let maxDataSize = 0;
        const buffer = new Uint8Array(bitBuffer.buffer);
        for (let b = 0; b < ecTotalBlocks; b++) {
          const dataSize = b < blocksInGroup1 ? dataCodewordsInGroup1 : dataCodewordsInGroup2;
          dcData[b] = buffer.slice(offset, offset + dataSize);
          ecData[b] = rs.encode(dcData[b]);
          offset += dataSize;
          maxDataSize = Math.max(maxDataSize, dataSize);
        }
        const data = new Uint8Array(totalCodewords);
        let index = 0;
        let i, r;
        for (i = 0; i < maxDataSize; i++) {
          for (r = 0; r < ecTotalBlocks; r++) {
            if (i < dcData[r].length) {
              data[index++] = dcData[r][i];
            }
          }
        }
        for (i = 0; i < ecCount; i++) {
          for (r = 0; r < ecTotalBlocks; r++) {
            data[index++] = ecData[r][i];
          }
        }
        return data;
      }
      function createSymbol(data, version, errorCorrectionLevel, maskPattern) {
        let segments;
        if (Array.isArray(data)) {
          segments = Segments.fromArray(data);
        } else if (typeof data === "string") {
          let estimatedVersion = version;
          if (!estimatedVersion) {
            const rawSegments = Segments.rawSplit(data);
            estimatedVersion = Version.getBestVersionForData(rawSegments, errorCorrectionLevel);
          }
          segments = Segments.fromString(data, estimatedVersion || 40);
        } else {
          throw new Error("Invalid data");
        }
        const bestVersion = Version.getBestVersionForData(segments, errorCorrectionLevel);
        if (!bestVersion) {
          throw new Error("The amount of data is too big to be stored in a QR Code");
        }
        if (!version) {
          version = bestVersion;
        } else if (version < bestVersion) {
          throw new Error(
            "\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + bestVersion + ".\n"
          );
        }
        const dataBits = createData(version, errorCorrectionLevel, segments);
        const moduleCount = Utils.getSymbolSize(version);
        const modules = new BitMatrix(moduleCount);
        setupFinderPattern(modules, version);
        setupTimingPattern(modules);
        setupAlignmentPattern(modules, version);
        setupFormatInfo(modules, errorCorrectionLevel, 0);
        if (version >= 7) {
          setupVersionInfo(modules, version);
        }
        setupData(modules, dataBits);
        if (isNaN(maskPattern)) {
          maskPattern = MaskPattern.getBestMask(
            modules,
            setupFormatInfo.bind(null, modules, errorCorrectionLevel)
          );
        }
        MaskPattern.applyMask(maskPattern, modules);
        setupFormatInfo(modules, errorCorrectionLevel, maskPattern);
        return {
          modules,
          version,
          errorCorrectionLevel,
          maskPattern,
          segments
        };
      }
      exports.create = function create(data, options) {
        if (typeof data === "undefined" || data === "") {
          throw new Error("No input text");
        }
        let errorCorrectionLevel = ECLevel.M;
        let version;
        let mask;
        if (typeof options !== "undefined") {
          errorCorrectionLevel = ECLevel.from(options.errorCorrectionLevel, ECLevel.M);
          version = Version.from(options.version);
          mask = MaskPattern.from(options.maskPattern);
          if (options.toSJISFunc) {
            Utils.setToSJISFunction(options.toSJISFunc);
          }
        }
        return createSymbol(data, version, errorCorrectionLevel, mask);
      };
    }
  });

  // node_modules/qrcode/lib/renderer/utils.js
  var require_utils2 = __commonJS({
    "node_modules/qrcode/lib/renderer/utils.js"(exports) {
      function hex2rgba(hex) {
        if (typeof hex === "number") {
          hex = hex.toString();
        }
        if (typeof hex !== "string") {
          throw new Error("Color should be defined as hex string");
        }
        let hexCode = hex.slice().replace("#", "").split("");
        if (hexCode.length < 3 || hexCode.length === 5 || hexCode.length > 8) {
          throw new Error("Invalid hex color: " + hex);
        }
        if (hexCode.length === 3 || hexCode.length === 4) {
          hexCode = Array.prototype.concat.apply([], hexCode.map(function(c2) {
            return [c2, c2];
          }));
        }
        if (hexCode.length === 6)
          hexCode.push("F", "F");
        const hexValue = parseInt(hexCode.join(""), 16);
        return {
          r: hexValue >> 24 & 255,
          g: hexValue >> 16 & 255,
          b: hexValue >> 8 & 255,
          a: hexValue & 255,
          hex: "#" + hexCode.slice(0, 6).join("")
        };
      }
      exports.getOptions = function getOptions(options) {
        if (!options)
          options = {};
        if (!options.color)
          options.color = {};
        const margin = typeof options.margin === "undefined" || options.margin === null || options.margin < 0 ? 4 : options.margin;
        const width = options.width && options.width >= 21 ? options.width : void 0;
        const scale = options.scale || 4;
        return {
          width,
          scale: width ? 4 : scale,
          margin,
          color: {
            dark: hex2rgba(options.color.dark || "#000000ff"),
            light: hex2rgba(options.color.light || "#ffffffff")
          },
          type: options.type,
          rendererOpts: options.rendererOpts || {}
        };
      };
      exports.getScale = function getScale(qrSize, opts) {
        return opts.width && opts.width >= qrSize + opts.margin * 2 ? opts.width / (qrSize + opts.margin * 2) : opts.scale;
      };
      exports.getImageWidth = function getImageWidth(qrSize, opts) {
        const scale = exports.getScale(qrSize, opts);
        return Math.floor((qrSize + opts.margin * 2) * scale);
      };
      exports.qrToImageData = function qrToImageData(imgData, qr, opts) {
        const size = qr.modules.size;
        const data = qr.modules.data;
        const scale = exports.getScale(size, opts);
        const symbolSize = Math.floor((size + opts.margin * 2) * scale);
        const scaledMargin = opts.margin * scale;
        const palette = [opts.color.light, opts.color.dark];
        for (let i = 0; i < symbolSize; i++) {
          for (let j2 = 0; j2 < symbolSize; j2++) {
            let posDst = (i * symbolSize + j2) * 4;
            let pxColor = opts.color.light;
            if (i >= scaledMargin && j2 >= scaledMargin && i < symbolSize - scaledMargin && j2 < symbolSize - scaledMargin) {
              const iSrc = Math.floor((i - scaledMargin) / scale);
              const jSrc = Math.floor((j2 - scaledMargin) / scale);
              pxColor = palette[data[iSrc * size + jSrc] ? 1 : 0];
            }
            imgData[posDst++] = pxColor.r;
            imgData[posDst++] = pxColor.g;
            imgData[posDst++] = pxColor.b;
            imgData[posDst] = pxColor.a;
          }
        }
      };
    }
  });

  // node_modules/qrcode/lib/renderer/canvas.js
  var require_canvas = __commonJS({
    "node_modules/qrcode/lib/renderer/canvas.js"(exports) {
      var Utils = require_utils2();
      function clearCanvas(ctx, canvas, size) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if (!canvas.style)
          canvas.style = {};
        canvas.height = size;
        canvas.width = size;
        canvas.style.height = size + "px";
        canvas.style.width = size + "px";
      }
      function getCanvasElement() {
        try {
          return document.createElement("canvas");
        } catch (e) {
          throw new Error("You need to specify a canvas element");
        }
      }
      exports.render = function render(qrData, canvas, options) {
        let opts = options;
        let canvasEl = canvas;
        if (typeof opts === "undefined" && (!canvas || !canvas.getContext)) {
          opts = canvas;
          canvas = void 0;
        }
        if (!canvas) {
          canvasEl = getCanvasElement();
        }
        opts = Utils.getOptions(opts);
        const size = Utils.getImageWidth(qrData.modules.size, opts);
        const ctx = canvasEl.getContext("2d");
        const image = ctx.createImageData(size, size);
        Utils.qrToImageData(image.data, qrData, opts);
        clearCanvas(ctx, canvasEl, size);
        ctx.putImageData(image, 0, 0);
        return canvasEl;
      };
      exports.renderToDataURL = function renderToDataURL(qrData, canvas, options) {
        let opts = options;
        if (typeof opts === "undefined" && (!canvas || !canvas.getContext)) {
          opts = canvas;
          canvas = void 0;
        }
        if (!opts)
          opts = {};
        const canvasEl = exports.render(qrData, canvas, opts);
        const type = opts.type || "image/png";
        const rendererOpts = opts.rendererOpts || {};
        return canvasEl.toDataURL(type, rendererOpts.quality);
      };
    }
  });

  // node_modules/qrcode/lib/renderer/svg-tag.js
  var require_svg_tag = __commonJS({
    "node_modules/qrcode/lib/renderer/svg-tag.js"(exports) {
      var Utils = require_utils2();
      function getColorAttrib(color, attrib) {
        const alpha = color.a / 255;
        const str = attrib + '="' + color.hex + '"';
        return alpha < 1 ? str + " " + attrib + '-opacity="' + alpha.toFixed(2).slice(1) + '"' : str;
      }
      function svgCmd(cmd, x, y) {
        let str = cmd + x;
        if (typeof y !== "undefined")
          str += " " + y;
        return str;
      }
      function qrToPath(data, size, margin) {
        let path = "";
        let moveBy = 0;
        let newRow = false;
        let lineLength = 0;
        for (let i = 0; i < data.length; i++) {
          const col = Math.floor(i % size);
          const row = Math.floor(i / size);
          if (!col && !newRow)
            newRow = true;
          if (data[i]) {
            lineLength++;
            if (!(i > 0 && col > 0 && data[i - 1])) {
              path += newRow ? svgCmd("M", col + margin, 0.5 + row + margin) : svgCmd("m", moveBy, 0);
              moveBy = 0;
              newRow = false;
            }
            if (!(col + 1 < size && data[i + 1])) {
              path += svgCmd("h", lineLength);
              lineLength = 0;
            }
          } else {
            moveBy++;
          }
        }
        return path;
      }
      exports.render = function render(qrData, options, cb) {
        const opts = Utils.getOptions(options);
        const size = qrData.modules.size;
        const data = qrData.modules.data;
        const qrcodesize = size + opts.margin * 2;
        const bg = !opts.color.light.a ? "" : "<path " + getColorAttrib(opts.color.light, "fill") + ' d="M0 0h' + qrcodesize + "v" + qrcodesize + 'H0z"/>';
        const path = "<path " + getColorAttrib(opts.color.dark, "stroke") + ' d="' + qrToPath(data, size, opts.margin) + '"/>';
        const viewBox = 'viewBox="0 0 ' + qrcodesize + " " + qrcodesize + '"';
        const width = !opts.width ? "" : 'width="' + opts.width + '" height="' + opts.width + '" ';
        const svgTag = '<svg xmlns="http://www.w3.org/2000/svg" ' + width + viewBox + ' shape-rendering="crispEdges">' + bg + path + "</svg>\n";
        if (typeof cb === "function") {
          cb(null, svgTag);
        }
        return svgTag;
      };
    }
  });

  // node_modules/qrcode/lib/browser.js
  var require_browser = __commonJS({
    "node_modules/qrcode/lib/browser.js"(exports) {
      var canPromise = require_can_promise();
      var QRCode2 = require_qrcode();
      var CanvasRenderer = require_canvas();
      var SvgRenderer = require_svg_tag();
      function renderCanvas(renderFunc, canvas, text2, opts, cb) {
        const args = [].slice.call(arguments, 1);
        const argsNum = args.length;
        const isLastArgCb = typeof args[argsNum - 1] === "function";
        if (!isLastArgCb && !canPromise()) {
          throw new Error("Callback required as last argument");
        }
        if (isLastArgCb) {
          if (argsNum < 2) {
            throw new Error("Too few arguments provided");
          }
          if (argsNum === 2) {
            cb = text2;
            text2 = canvas;
            canvas = opts = void 0;
          } else if (argsNum === 3) {
            if (canvas.getContext && typeof cb === "undefined") {
              cb = opts;
              opts = void 0;
            } else {
              cb = opts;
              opts = text2;
              text2 = canvas;
              canvas = void 0;
            }
          }
        } else {
          if (argsNum < 1) {
            throw new Error("Too few arguments provided");
          }
          if (argsNum === 1) {
            text2 = canvas;
            canvas = opts = void 0;
          } else if (argsNum === 2 && !canvas.getContext) {
            opts = text2;
            text2 = canvas;
            canvas = void 0;
          }
          return new Promise(function(resolve, reject) {
            try {
              const data = QRCode2.create(text2, opts);
              resolve(renderFunc(data, canvas, opts));
            } catch (e) {
              reject(e);
            }
          });
        }
        try {
          const data = QRCode2.create(text2, opts);
          cb(null, renderFunc(data, canvas, opts));
        } catch (e) {
          cb(e);
        }
      }
      exports.create = QRCode2.create;
      exports.toCanvas = renderCanvas.bind(null, CanvasRenderer.render);
      exports.toDataURL = renderCanvas.bind(null, CanvasRenderer.renderToDataURL);
      exports.toString = renderCanvas.bind(null, function(data, _2, opts) {
        return SvgRenderer.render(data, opts);
      });
    }
  });

  // node_modules/svelte/internal/index.mjs
  function noop() {
  }
  function assign(tar, src) {
    for (const k in src)
      tar[k] = src[k];
    return tar;
  }
  function run(fn) {
    return fn();
  }
  function blank_object() {
    return /* @__PURE__ */ Object.create(null);
  }
  function run_all(fns) {
    fns.forEach(run);
  }
  function is_function(thing) {
    return typeof thing === "function";
  }
  function safe_not_equal(a, b) {
    return a != a ? b == b : a !== b || (a && typeof a === "object" || typeof a === "function");
  }
  var src_url_equal_anchor;
  function src_url_equal(element_src, url2) {
    if (!src_url_equal_anchor) {
      src_url_equal_anchor = document.createElement("a");
    }
    src_url_equal_anchor.href = url2;
    return element_src === src_url_equal_anchor.href;
  }
  function is_empty(obj) {
    return Object.keys(obj).length === 0;
  }
  function subscribe(store, ...callbacks) {
    if (store == null) {
      return noop;
    }
    const unsub = store.subscribe(...callbacks);
    return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
  }
  function get_store_value(store) {
    let value;
    subscribe(store, (_2) => value = _2)();
    return value;
  }
  function component_subscribe(component, store, callback) {
    component.$$.on_destroy.push(subscribe(store, callback));
  }
  function create_slot(definition, ctx, $$scope, fn) {
    if (definition) {
      const slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
      return definition[0](slot_ctx);
    }
  }
  function get_slot_context(definition, ctx, $$scope, fn) {
    return definition[1] && fn ? assign($$scope.ctx.slice(), definition[1](fn(ctx))) : $$scope.ctx;
  }
  function get_slot_changes(definition, $$scope, dirty, fn) {
    if (definition[2] && fn) {
      const lets = definition[2](fn(dirty));
      if ($$scope.dirty === void 0) {
        return lets;
      }
      if (typeof lets === "object") {
        const merged = [];
        const len = Math.max($$scope.dirty.length, lets.length);
        for (let i = 0; i < len; i += 1) {
          merged[i] = $$scope.dirty[i] | lets[i];
        }
        return merged;
      }
      return $$scope.dirty | lets;
    }
    return $$scope.dirty;
  }
  function update_slot_base(slot, slot_definition, ctx, $$scope, slot_changes, get_slot_context_fn) {
    if (slot_changes) {
      const slot_context = get_slot_context(slot_definition, ctx, $$scope, get_slot_context_fn);
      slot.p(slot_context, slot_changes);
    }
  }
  function get_all_dirty_from_scope($$scope) {
    if ($$scope.ctx.length > 32) {
      const dirty = [];
      const length = $$scope.ctx.length / 32;
      for (let i = 0; i < length; i++) {
        dirty[i] = -1;
      }
      return dirty;
    }
    return -1;
  }
  function action_destroyer(action_result) {
    return action_result && is_function(action_result.destroy) ? action_result.destroy : noop;
  }
  var globals = typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : global;
  var ResizeObserverSingleton = class {
    constructor(options) {
      this.options = options;
      this._listeners = "WeakMap" in globals ? /* @__PURE__ */ new WeakMap() : void 0;
    }
    observe(element2, listener) {
      this._listeners.set(element2, listener);
      this._getObserver().observe(element2, this.options);
      return () => {
        this._listeners.delete(element2);
        this._observer.unobserve(element2);
      };
    }
    _getObserver() {
      var _a;
      return (_a = this._observer) !== null && _a !== void 0 ? _a : this._observer = new ResizeObserver((entries) => {
        var _a2;
        for (const entry of entries) {
          ResizeObserverSingleton.entries.set(entry.target, entry);
          (_a2 = this._listeners.get(entry.target)) === null || _a2 === void 0 ? void 0 : _a2(entry);
        }
      });
    }
  };
  ResizeObserverSingleton.entries = "WeakMap" in globals ? /* @__PURE__ */ new WeakMap() : void 0;
  var is_hydrating = false;
  function start_hydrating() {
    is_hydrating = true;
  }
  function end_hydrating() {
    is_hydrating = false;
  }
  function append(target, node) {
    target.appendChild(node);
  }
  function insert(target, node, anchor) {
    target.insertBefore(node, anchor || null);
  }
  function detach(node) {
    if (node.parentNode) {
      node.parentNode.removeChild(node);
    }
  }
  function destroy_each(iterations, detaching) {
    for (let i = 0; i < iterations.length; i += 1) {
      if (iterations[i])
        iterations[i].d(detaching);
    }
  }
  function element(name2) {
    return document.createElement(name2);
  }
  function svg_element(name2) {
    return document.createElementNS("http://www.w3.org/2000/svg", name2);
  }
  function text(data) {
    return document.createTextNode(data);
  }
  function space() {
    return text(" ");
  }
  function empty() {
    return text("");
  }
  function listen(node, event, handler, options) {
    node.addEventListener(event, handler, options);
    return () => node.removeEventListener(event, handler, options);
  }
  function attr(node, attribute, value) {
    if (value == null)
      node.removeAttribute(attribute);
    else if (node.getAttribute(attribute) !== value)
      node.setAttribute(attribute, value);
  }
  function init_binding_group(group) {
    let _inputs;
    return {
      /* push */
      p(...inputs) {
        _inputs = inputs;
        _inputs.forEach((input) => group.push(input));
      },
      /* remove */
      r() {
        _inputs.forEach((input) => group.splice(group.indexOf(input), 1));
      }
    };
  }
  function children(element2) {
    return Array.from(element2.childNodes);
  }
  function set_data(text2, data) {
    data = "" + data;
    if (text2.data === data)
      return;
    text2.data = data;
  }
  function set_input_value(input, value) {
    input.value = value == null ? "" : value;
  }
  function set_style(node, key, value, important) {
    if (value == null) {
      node.style.removeProperty(key);
    } else {
      node.style.setProperty(key, value, important ? "important" : "");
    }
  }
  var crossorigin;
  function is_crossorigin() {
    if (crossorigin === void 0) {
      crossorigin = false;
      try {
        if (typeof window !== "undefined" && window.parent) {
          void window.parent.document;
        }
      } catch (error) {
        crossorigin = true;
      }
    }
    return crossorigin;
  }
  function add_iframe_resize_listener(node, fn) {
    const computed_style = getComputedStyle(node);
    if (computed_style.position === "static") {
      node.style.position = "relative";
    }
    const iframe = element("iframe");
    iframe.setAttribute("style", "display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;");
    iframe.setAttribute("aria-hidden", "true");
    iframe.tabIndex = -1;
    const crossorigin2 = is_crossorigin();
    let unsubscribe;
    if (crossorigin2) {
      iframe.src = "data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>";
      unsubscribe = listen(window, "message", (event) => {
        if (event.source === iframe.contentWindow)
          fn();
      });
    } else {
      iframe.src = "about:blank";
      iframe.onload = () => {
        unsubscribe = listen(iframe.contentWindow, "resize", fn);
        fn();
      };
    }
    append(node, iframe);
    return () => {
      if (crossorigin2) {
        unsubscribe();
      } else if (unsubscribe && iframe.contentWindow) {
        unsubscribe();
      }
      detach(iframe);
    };
  }
  function toggle_class(element2, name2, toggle) {
    element2.classList[toggle ? "add" : "remove"](name2);
  }
  function custom_event(type, detail, { bubbles = false, cancelable = false } = {}) {
    const e = document.createEvent("CustomEvent");
    e.initCustomEvent(type, bubbles, cancelable, detail);
    return e;
  }
  var HtmlTag = class {
    constructor(is_svg = false) {
      this.is_svg = false;
      this.is_svg = is_svg;
      this.e = this.n = null;
    }
    c(html) {
      this.h(html);
    }
    m(html, target, anchor = null) {
      if (!this.e) {
        if (this.is_svg)
          this.e = svg_element(target.nodeName);
        else
          this.e = element(target.nodeType === 11 ? "TEMPLATE" : target.nodeName);
        this.t = target.tagName !== "TEMPLATE" ? target : target.content;
        this.c(html);
      }
      this.i(anchor);
    }
    h(html) {
      this.e.innerHTML = html;
      this.n = Array.from(this.e.nodeName === "TEMPLATE" ? this.e.content.childNodes : this.e.childNodes);
    }
    i(anchor) {
      for (let i = 0; i < this.n.length; i += 1) {
        insert(this.t, this.n[i], anchor);
      }
    }
    p(html) {
      this.d();
      this.h(html);
      this.i(this.a);
    }
    d() {
      this.n.forEach(detach);
    }
  };
  var current_component;
  function set_current_component(component) {
    current_component = component;
  }
  function get_current_component() {
    if (!current_component)
      throw new Error("Function called outside component initialization");
    return current_component;
  }
  function onMount(fn) {
    get_current_component().$$.on_mount.push(fn);
  }
  function onDestroy(fn) {
    get_current_component().$$.on_destroy.push(fn);
  }
  function createEventDispatcher() {
    const component = get_current_component();
    return (type, detail, { cancelable = false } = {}) => {
      const callbacks = component.$$.callbacks[type];
      if (callbacks) {
        const event = custom_event(type, detail, { cancelable });
        callbacks.slice().forEach((fn) => {
          fn.call(component, event);
        });
        return !event.defaultPrevented;
      }
      return true;
    };
  }
  var dirty_components = [];
  var binding_callbacks = [];
  var render_callbacks = [];
  var flush_callbacks = [];
  var resolved_promise = /* @__PURE__ */ Promise.resolve();
  var update_scheduled = false;
  function schedule_update() {
    if (!update_scheduled) {
      update_scheduled = true;
      resolved_promise.then(flush);
    }
  }
  function add_render_callback(fn) {
    render_callbacks.push(fn);
  }
  function add_flush_callback(fn) {
    flush_callbacks.push(fn);
  }
  var seen_callbacks = /* @__PURE__ */ new Set();
  var flushidx = 0;
  function flush() {
    if (flushidx !== 0) {
      return;
    }
    const saved_component = current_component;
    do {
      try {
        while (flushidx < dirty_components.length) {
          const component = dirty_components[flushidx];
          flushidx++;
          set_current_component(component);
          update(component.$$);
        }
      } catch (e) {
        dirty_components.length = 0;
        flushidx = 0;
        throw e;
      }
      set_current_component(null);
      dirty_components.length = 0;
      flushidx = 0;
      while (binding_callbacks.length)
        binding_callbacks.pop()();
      for (let i = 0; i < render_callbacks.length; i += 1) {
        const callback = render_callbacks[i];
        if (!seen_callbacks.has(callback)) {
          seen_callbacks.add(callback);
          callback();
        }
      }
      render_callbacks.length = 0;
    } while (dirty_components.length);
    while (flush_callbacks.length) {
      flush_callbacks.pop()();
    }
    update_scheduled = false;
    seen_callbacks.clear();
    set_current_component(saved_component);
  }
  function update($$) {
    if ($$.fragment !== null) {
      $$.update();
      run_all($$.before_update);
      const dirty = $$.dirty;
      $$.dirty = [-1];
      $$.fragment && $$.fragment.p($$.ctx, dirty);
      $$.after_update.forEach(add_render_callback);
    }
  }
  function flush_render_callbacks(fns) {
    const filtered = [];
    const targets = [];
    render_callbacks.forEach((c2) => fns.indexOf(c2) === -1 ? filtered.push(c2) : targets.push(c2));
    targets.forEach((c2) => c2());
    render_callbacks = filtered;
  }
  var outroing = /* @__PURE__ */ new Set();
  var outros;
  function group_outros() {
    outros = {
      r: 0,
      c: [],
      p: outros
      // parent group
    };
  }
  function check_outros() {
    if (!outros.r) {
      run_all(outros.c);
    }
    outros = outros.p;
  }
  function transition_in(block, local) {
    if (block && block.i) {
      outroing.delete(block);
      block.i(local);
    }
  }
  function transition_out(block, local, detach2, callback) {
    if (block && block.o) {
      if (outroing.has(block))
        return;
      outroing.add(block);
      outros.c.push(() => {
        outroing.delete(block);
        if (callback) {
          if (detach2)
            block.d(1);
          callback();
        }
      });
      block.o(local);
    } else if (callback) {
      callback();
    }
  }
  function get_spread_update(levels, updates) {
    const update2 = {};
    const to_null_out = {};
    const accounted_for = { $$scope: 1 };
    let i = levels.length;
    while (i--) {
      const o = levels[i];
      const n = updates[i];
      if (n) {
        for (const key in o) {
          if (!(key in n))
            to_null_out[key] = 1;
        }
        for (const key in n) {
          if (!accounted_for[key]) {
            update2[key] = n[key];
            accounted_for[key] = 1;
          }
        }
        levels[i] = n;
      } else {
        for (const key in o) {
          accounted_for[key] = 1;
        }
      }
    }
    for (const key in to_null_out) {
      if (!(key in update2))
        update2[key] = void 0;
    }
    return update2;
  }
  function get_spread_object(spread_props) {
    return typeof spread_props === "object" && spread_props !== null ? spread_props : {};
  }
  var _boolean_attributes = [
    "allowfullscreen",
    "allowpaymentrequest",
    "async",
    "autofocus",
    "autoplay",
    "checked",
    "controls",
    "default",
    "defer",
    "disabled",
    "formnovalidate",
    "hidden",
    "inert",
    "ismap",
    "loop",
    "multiple",
    "muted",
    "nomodule",
    "novalidate",
    "open",
    "playsinline",
    "readonly",
    "required",
    "reversed",
    "selected"
  ];
  var boolean_attributes = /* @__PURE__ */ new Set([..._boolean_attributes]);
  function bind(component, name2, callback) {
    const index = component.$$.props[name2];
    if (index !== void 0) {
      component.$$.bound[index] = callback;
      callback(component.$$.ctx[index]);
    }
  }
  function create_component(block) {
    block && block.c();
  }
  function mount_component(component, target, anchor, customElement) {
    const { fragment, after_update } = component.$$;
    fragment && fragment.m(target, anchor);
    if (!customElement) {
      add_render_callback(() => {
        const new_on_destroy = component.$$.on_mount.map(run).filter(is_function);
        if (component.$$.on_destroy) {
          component.$$.on_destroy.push(...new_on_destroy);
        } else {
          run_all(new_on_destroy);
        }
        component.$$.on_mount = [];
      });
    }
    after_update.forEach(add_render_callback);
  }
  function destroy_component(component, detaching) {
    const $$ = component.$$;
    if ($$.fragment !== null) {
      flush_render_callbacks($$.after_update);
      run_all($$.on_destroy);
      $$.fragment && $$.fragment.d(detaching);
      $$.on_destroy = $$.fragment = null;
      $$.ctx = [];
    }
  }
  function make_dirty(component, i) {
    if (component.$$.dirty[0] === -1) {
      dirty_components.push(component);
      schedule_update();
      component.$$.dirty.fill(0);
    }
    component.$$.dirty[i / 31 | 0] |= 1 << i % 31;
  }
  function init(component, options, instance49, create_fragment54, not_equal, props, append_styles, dirty = [-1]) {
    const parent_component = current_component;
    set_current_component(component);
    const $$ = component.$$ = {
      fragment: null,
      ctx: [],
      // state
      props,
      update: noop,
      not_equal,
      bound: blank_object(),
      // lifecycle
      on_mount: [],
      on_destroy: [],
      on_disconnect: [],
      before_update: [],
      after_update: [],
      context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
      // everything else
      callbacks: blank_object(),
      dirty,
      skip_bound: false,
      root: options.target || parent_component.$$.root
    };
    append_styles && append_styles($$.root);
    let ready = false;
    $$.ctx = instance49 ? instance49(component, options.props || {}, (i, ret, ...rest) => {
      const value = rest.length ? rest[0] : ret;
      if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
        if (!$$.skip_bound && $$.bound[i])
          $$.bound[i](value);
        if (ready)
          make_dirty(component, i);
      }
      return ret;
    }) : [];
    $$.update();
    ready = true;
    run_all($$.before_update);
    $$.fragment = create_fragment54 ? create_fragment54($$.ctx) : false;
    if (options.target) {
      if (options.hydrate) {
        start_hydrating();
        const nodes = children(options.target);
        $$.fragment && $$.fragment.l(nodes);
        nodes.forEach(detach);
      } else {
        $$.fragment && $$.fragment.c();
      }
      if (options.intro)
        transition_in(component.$$.fragment);
      mount_component(component, options.target, options.anchor, options.customElement);
      end_hydrating();
      flush();
    }
    set_current_component(parent_component);
  }
  var SvelteElement;
  if (typeof HTMLElement === "function") {
    SvelteElement = class extends HTMLElement {
      constructor() {
        super();
        this.attachShadow({ mode: "open" });
      }
      connectedCallback() {
        const { on_mount } = this.$$;
        this.$$.on_disconnect = on_mount.map(run).filter(is_function);
        for (const key in this.$$.slotted) {
          this.appendChild(this.$$.slotted[key]);
        }
      }
      attributeChangedCallback(attr2, _oldValue, newValue) {
        this[attr2] = newValue;
      }
      disconnectedCallback() {
        run_all(this.$$.on_disconnect);
      }
      $destroy() {
        destroy_component(this, 1);
        this.$destroy = noop;
      }
      $on(type, callback) {
        if (!is_function(callback)) {
          return noop;
        }
        const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
        callbacks.push(callback);
        return () => {
          const index = callbacks.indexOf(callback);
          if (index !== -1)
            callbacks.splice(index, 1);
        };
      }
      $set($$props) {
        if (this.$$set && !is_empty($$props)) {
          this.$$.skip_bound = true;
          this.$$set($$props);
          this.$$.skip_bound = false;
        }
      }
    };
  }
  var SvelteComponent = class {
    $destroy() {
      destroy_component(this, 1);
      this.$destroy = noop;
    }
    $on(type, callback) {
      if (!is_function(callback)) {
        return noop;
      }
      const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
      callbacks.push(callback);
      return () => {
        const index = callbacks.indexOf(callback);
        if (index !== -1)
          callbacks.splice(index, 1);
      };
    }
    $set($$props) {
      if (this.$$set && !is_empty($$props)) {
        this.$$.skip_bound = true;
        this.$$set($$props);
        this.$$.skip_bound = false;
      }
    }
  };

  // ../ptk/offtext/constants.ts
  var OFFTAG_REGEX_G = /\^([#@\/\.\:a-z_\-\d~]+)(<(?:\\.|.)*?>)?/g;
  var QUOTEPREFIX = "";
  var QUOTEPAT = /\u001a(\d+)/g;
  var OFFTAG_NAME_ATTR = /([a-z_\:]+)(.*)/;
  var OFFTAG_COMPACT_ID = /^([a-z\d]+[_a-z\d\-~\.]*)/;
  var QSTRING_REGEX_G = /"((?:\\.|.)*?)"/g;
  var OFFTAG_LEADBYTE = "^";
  var FROMTILL = /^(>\d+)?(<\d+)?(:[\-\d]+)?$/;
  var PTK_FROMTILL = /^([a-z\.\d\-_]+\:)(>\d+)?(<\d+)?(:[\-\d]+)?$/;
  var PTK_ACTION_FROMTILL = /^([a-z\.\d\-_]+\:)?([^<>\d:]+[^:<>]*)(>\d+)?(<\d+)?(:[\-\d]+)?$/;
  var MIN_ABRIDGE = 8;

  // ../ptk/utils/bsearch.ts
  var bsearchNumber = (arr, obj) => {
    let low = 0, high = arr.length - 1, mid;
    while (low < high) {
      mid = low + high >> 1;
      if (arr[mid] === obj) {
        while (mid > -1 && arr[mid - 1] === obj)
          mid--;
        return mid;
      }
      arr[mid] < obj ? low = mid + 1 : high = mid;
    }
    return low;
  };
  var bsearch = (arr, obj) => {
    let low = 0, high = arr.length - 1, mid;
    while (low < high) {
      mid = low + high >> 1;
      if (arr[mid] === obj) {
        while (mid > -1 && arr[mid - 1] === obj)
          mid--;
        return mid;
      }
      arr[mid] < obj ? low = mid + 1 : high = mid;
    }
    return low;
  };
  var bsearchGetter = (getter, obj) => {
    const len = parseInt(getter(-1));
    let low = 0, high = len - 1;
    while (low < high) {
      let mid = low + high >> 1;
      if (getter(mid) === obj) {
        while (mid > -1 && getter(mid - 1) === obj)
          mid--;
        return mid;
      }
      getter(mid) < obj ? low = mid + 1 : high = mid;
    }
    return low;
  };

  // ../ptk/utils/sortedarray.ts
  var alphabetically = (a, b) => a > b ? 1 : a < b ? -1 : 0;
  var alphabetically0 = (a, b) => a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0;
  var unique = (arr, sorted = false) => {
    if (!arr || !arr.length)
      return [];
    if (!sorted) {
      arr.sort(typeof arr[0] == "string" ? alphabetically : (a, b) => a - b);
    }
    let prev, out = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== prev)
        out.push(arr[i]);
      prev = arr[i];
    }
    return out;
  };
  var fromObj = (obj, cb) => {
    const arr = [];
    for (let key in obj) {
      if (!cb) {
        arr.push(key + "	" + obj[key]);
      } else {
        if (typeof cb == "function") {
          arr.push(cb(key, obj[key]));
        } else {
          arr.push([key, obj[key]]);
        }
      }
    }
    if (cb && typeof cb !== "function") {
      arr.sort((a, b) => b[1] - a[1]);
    }
    return arr;
  };
  var sortNumberArray = (arr) => {
    const value_id = arr.map((v, idx2) => [v, idx2]);
    value_id.sort((a, b) => a[0] - b[0]);
    const indexes = value_id.map(([v, idx2]) => idx2);
    const newarr = value_id.map(([v, idx2]) => v);
    return [newarr, indexes];
  };

  // ../ptk/utils/array.ts
  var arraydiff = (arr1, arr2) => arr1.filter((x) => !arr2.includes(x)).concat(arr2.filter((x) => !arr1.includes(x)));
  var indexOfs = (arr, tofind2) => {
    const out = [];
    for (let j2 = 0; j2 < arr.length; j2++) {
      if (~arr[j2].indexOf(tofind2)) {
        out.push(j2);
      }
    }
    return out;
  };

  // ../ptk/utils/unpackintarray.ts
  var maxlen2 = 113 * 113;
  var maxlen3 = 113 * 113 * 113;
  var CodeStart = 14;
  var BYTE_MAX = 113;
  var BYTE1_MAX = 45;
  var BYTE2_MAX = 44 * BYTE_MAX + BYTE1_MAX;
  var BYTE2_START = 45;
  var BYTE3_START = 89;
  var BYTE4_START = 105;
  var BYTE5_START = 112;
  var BYTE3_MAX = 16 * BYTE_MAX * BYTE_MAX + BYTE2_MAX;
  var BYTE4_MAX = 6 * BYTE_MAX * BYTE_MAX * BYTE_MAX + BYTE3_MAX;
  var BYTE5_MAX = 2 * BYTE_MAX * BYTE_MAX * BYTE_MAX * BYTE_MAX + BYTE4_MAX;
  var SEP2DITEM = 127;
  var SEPARATOR2D = "\x7F";
  var unpackInt = (s, delta = false) => {
    let arr = [];
    if (!s)
      return [];
    let o, i = 0, c2 = 0, prev = 0;
    while (i < s.length) {
      o = s.charCodeAt(i) - CodeStart;
      if (o < BYTE2_START) {
      } else if (o < BYTE3_START) {
        const i1 = s.charCodeAt(++i) - CodeStart;
        o -= BYTE2_START;
        o = o * BYTE_MAX + i1 + BYTE1_MAX;
      } else if (o < BYTE4_START) {
        const i2 = s.charCodeAt(++i) - CodeStart;
        const i1 = s.charCodeAt(++i) - CodeStart;
        o -= BYTE3_START;
        o = o * BYTE_MAX * BYTE_MAX + i2 * BYTE_MAX + i1 + BYTE2_MAX;
      } else if (o < BYTE5_START) {
        const i3 = s.charCodeAt(++i) - CodeStart;
        const i2 = s.charCodeAt(++i) - CodeStart;
        const i1 = s.charCodeAt(++i) - CodeStart;
        o -= BYTE4_START;
        o = o * BYTE_MAX * BYTE_MAX * BYTE_MAX + i3 * BYTE_MAX * BYTE_MAX + i2 * BYTE_MAX + i1 + BYTE3_MAX;
      } else if (o < SEP2DITEM) {
        const i4 = s.charCodeAt(++i) - CodeStart;
        const i3 = s.charCodeAt(++i) - CodeStart;
        const i2 = s.charCodeAt(++i) - CodeStart;
        const i1 = s.charCodeAt(++i) - CodeStart;
        o -= BYTE5_START;
        o = o * BYTE_MAX * BYTE_MAX * BYTE_MAX * BYTE_MAX + i4 * BYTE_MAX * BYTE_MAX * BYTE_MAX + i3 * BYTE_MAX * BYTE_MAX + i2 * BYTE_MAX + i1 + BYTE3_MAX;
      } else {
        throw new Error("exit max integer 0x7f," + o);
      }
      arr[c2] = o + (delta ? prev : 0) - 1;
      prev = arr[c2];
      c2++;
      i++;
    }
    return arr;
  };
  var unpackIntDelta = (str) => {
    return unpackInt(str, true);
  };
  var unpackIntDelta2d = (str) => {
    if (!str)
      return [];
    return unpackInt2d(str, true);
  };
  var unpackInt2d = (str, delta = false) => {
    if (!str)
      return [];
    const arr = str.split(SEPARATOR2D);
    if (arr.length == 1)
      return [unpackInt(arr[0])];
    return arr.map((it) => unpackInt(it, delta));
  };

  // ../ptk/utils/packintarray.ts
  var packInt2d = (arr, delta = false) => {
    const o = [];
    for (let i = 0; i < arr.length; i++) {
      o.push(packInt(arr[i], delta));
    }
    return o.join(SEPARATOR2D);
  };
  var packInt = (arr, delta = false) => {
    if (arr.length == 0)
      return "";
    const sz = arr.length * 5;
    let s = new Uint8Array(sz), int = arr[0] + 1, prev = arr[0], idx2 = 0;
    for (let i = 1; i <= arr.length; i++) {
      if (isNaN(int))
        new Error("not an integer at" + i);
      if (int < 0)
        new Error("negative value at" + i + " value" + int);
      if (int < BYTE1_MAX) {
        s[idx2++] = int + CodeStart;
      } else if (int < BYTE2_MAX) {
        int -= BYTE1_MAX;
        let i1, i2;
        i1 = int % BYTE_MAX;
        i2 = Math.floor(int / BYTE_MAX);
        s[idx2++] = i2 + BYTE2_START + CodeStart;
        s[idx2++] = i1 + CodeStart;
      } else if (int < BYTE3_MAX) {
        int -= BYTE2_MAX;
        let i1, i2, i3;
        i1 = int % BYTE_MAX;
        int = Math.floor(int / BYTE_MAX);
        i2 = int % BYTE_MAX;
        i3 = Math.floor(int / BYTE_MAX);
        s[idx2++] = i3 + BYTE3_START + CodeStart;
        s[idx2++] = i2 + CodeStart;
        s[idx2++] = i1 + CodeStart;
      } else if (int < BYTE4_MAX) {
        int -= BYTE3_MAX;
        let i1, i2, i3, i4;
        i1 = int % BYTE_MAX;
        int = Math.floor(int / BYTE_MAX);
        i2 = int % BYTE_MAX;
        int = Math.floor(int / BYTE_MAX);
        i3 = int % BYTE_MAX;
        i4 = Math.floor(int / BYTE_MAX);
        s[idx2++] = i4 + BYTE4_START + CodeStart;
        s[idx2++] = i3 + CodeStart;
        s[idx2++] = i2 + CodeStart;
        s[idx2++] = i1 + CodeStart;
      } else if (int < BYTE5_MAX) {
        int -= BYTE4_MAX;
        let i1, i2, i3, i4, i5;
        i1 = int % BYTE_MAX;
        int = Math.floor(int / BYTE_MAX);
        i2 = int % BYTE_MAX;
        int = Math.floor(int / BYTE_MAX);
        i3 = int % BYTE_MAX;
        int = Math.floor(int / BYTE_MAX);
        i4 = int % BYTE_MAX;
        i5 = Math.floor(int / BYTE_MAX);
        s[idx2++] = i5 + BYTE5_START + CodeStart;
        s[idx2++] = i4 + CodeStart;
        s[idx2++] = i3 + CodeStart;
        s[idx2++] = i2 + CodeStart;
        s[idx2++] = i1 + CodeStart;
      } else {
        throw new Error("exist max int boundary " + BYTE5_MAX + " i" + i + ",val:" + arr[i] + " int" + int);
      }
      int = (delta ? arr[i] - prev : arr[i]) + 1;
      if (int < 0 && delta) {
        throw new Error("negative delta", arr[i], "prev", prev);
      }
      prev = arr[i] || 0;
    }
    return new TextDecoder().decode(s.subarray(0, idx2));
  };
  var packIntDelta = (arr) => packInt(arr, true);
  var packIntDelta2d = (arr2d) => packInt2d(arr2d, true);

  // ../ptk/utils/packstr.ts
  var CodeStart2 = 14;
  var CodeEnd = 31;
  var MaxShared = CodeEnd - CodeStart2;
  var SEP = String.fromCharCode(CodeStart2);

  // ../ptk/utils/unicode.ts
  var substrUTF32 = (str, from, n) => {
    if (!str || !n || n < 0)
      return "";
    let i = from;
    while (n > 0 && i < str.length) {
      if (str.codePointAt(i) > 65535) {
        i++;
      }
      n--;
      i++;
    }
    return str.slice(from, i);
  };
  var splitUTF32 = (str) => {
    if (!str) {
      const empty2 = [];
      return empty2;
    }
    let i = 0;
    const out = [];
    while (i < str.length) {
      const code = str.codePointAt(i) || 0;
      out.push(code);
      i++;
      if (code > 65535)
        i++;
    }
    return out;
  };
  var splitUTF32Char = (str) => splitUTF32(str).map((cp) => String.fromCodePoint(cp));

  // ../ptk/utils/stringarray.ts
  var LEMMA_DELIMITER = "\x7F";
  var StringArray = class {
    constructor(buf, opts = {}) {
      this.buf = "";
      this.sep = "";
      this.charpos = [];
      this.middleCache = {};
      this.endCache = {};
      this.findMatches = (rawtext) => {
        let i = 0;
        const out = [];
        while (i < rawtext.length) {
          const tf = rawtext.slice(i);
          const m4 = this.matchLongest(tf);
          if (m4.length) {
            i += m4.length;
            out.push([i, m4[0][0], m4[0][1]]);
          } else {
            i++;
          }
        }
        return out;
      };
      this.sequencial = opts.sequencial;
      this.delimiter = opts.delimiter || "";
      this.buf = buf;
      this.sep = opts.sep || "\n";
      this.now = 0;
      if (!this.sequencial)
        this.buildcharpos();
    }
    buildcharpos() {
      let prev = -1, p = 0;
      while (p < this.buf.length) {
        const at = this.buf.indexOf(this.sep, prev);
        if (at == -1) {
          this.charpos.push(this.buf.length);
          break;
        } else {
          this.charpos.push(at + 1);
          prev = at + 1;
        }
      }
    }
    len() {
      return this.charpos.length;
    }
    reset() {
      this.now = 0;
    }
    first() {
      this.reset();
      return this.next();
    }
    next() {
      if (this.now == -1)
        return;
      const at = this.buf.indexOf(this.sep, this.now);
      if (at == -1) {
        if (this.now >= 0) {
          const lastline = this.buf.slice(this.now);
          this.now = -1;
          return lastline;
        } else {
          this.now = -1;
          return;
        }
      }
      const s = this.buf.slice(this.now, at);
      this.now = at + 1;
      return s;
    }
    get(idx2) {
      if (this.sequencial)
        return null;
      if (idx2 == -1)
        return this.charpos.length.toString();
      const from = idx2 == 0 ? 0 : this.charpos[idx2 - 1];
      const to = this.charpos[idx2] - (idx2 == this.charpos.length - 1 ? 0 : 1);
      return this.buf.slice(from, to);
    }
    at(offset) {
      return bsearchNumber(this.charpos, offset);
    }
    //assuming sorted
    find(pat) {
      const getter = this.get.bind(this);
      if (this.delimiter)
        pat += this.delimiter;
      const at = bsearchGetter(getter, pat);
      const found = getter(at);
      return found.endsWith(pat) ? at : -1;
    }
    indexOf(pat) {
      let at;
      at = this.buf.indexOf(pat);
      while (at > -1) {
        if (at == 0)
          return 0;
        if (this.buf.length == pat.length + at)
          return this.len() - 1;
        if (this.buf.charAt(at - 1) == this.sep && this.buf.charAt(at + pat.length) == this.sep) {
          return bsearchNumber(this.charpos, at) + 1;
        } else {
          at = this.buf.indexOf(pat, at + pat.length);
        }
      }
      return -1;
    }
    enumMiddle(infix, max = 999) {
      if (this.middleCache.hasOwnProperty(infix)) {
        return this.middleCache[infix];
      }
      let idx2 = this.buf.indexOf(infix);
      const out = [];
      while (idx2 > -1) {
        const at = this.at(idx2);
        const lp = at ? this.charpos[at - 1] : 0;
        const lp2 = this.charpos[at] - 1 - infix.length;
        if (idx2 > lp && idx2 < lp2) {
          out.push(at);
          if (out.length > max)
            break;
        }
        idx2 = this.buf.indexOf(infix, this.charpos[at] + this.sep.length);
      }
      this.middleCache[infix] = out;
      return out;
    }
    enumStart(prefix, max = 999) {
      const getter = this.get.bind(this);
      let at = bsearchGetter(getter, prefix);
      if (at == -1)
        return [];
      const out = [];
      const len = this.len();
      while (at < len) {
        const found = this.get(at);
        if (found.startsWith(prefix)) {
          out.push(at);
          if (out.length > max)
            break;
        } else
          break;
        at++;
      }
      return out;
    }
    enumEnd(suffix, max = 999) {
      if (this.endCache.hasOwnProperty(suffix)) {
        console.log("cache");
        return this.endCache[suffix];
      }
      if (suffix[suffix.length - 1] !== this.sep)
        suffix = suffix + this.sep;
      let idx2 = this.buf.indexOf(suffix);
      const out = [];
      while (idx2 > -1 && this.buf.charAt(idx2 - 1) !== this.sep) {
        const at = this.at(idx2);
        out.push(at);
        if (out.length > max)
          break;
        idx2 = this.buf.indexOf(suffix, idx2 + this.sep.length);
      }
      this.endCache[suffix] = out;
      return out;
    }
    enumMode(s, mode = 0) {
      if (mode == 0)
        return this.enumStart(s);
      else if (mode == 1)
        return this.enumMiddle(s);
      else if (mode == 2)
        return this.enumEnd(s);
      return [];
    }
    matchLongest(text2) {
      const getter = this.get.bind(this);
      const at = bsearchGetter(getter, text2) - 1;
      const out = [];
      let upper = at - 1;
      if (text2.startsWith(this.get(at)))
        out.push([this.get(at), at]);
      let lower = at + 1;
      while (upper > 0) {
        const found = this.get(upper);
        if (text2.startsWith(found))
          out.push([found, upper]);
        else if (text2.codePointAt(0) < 256 || text2[0] !== found[0])
          break;
        upper--;
      }
      while (lower < this.len()) {
        const found = this.get(lower);
        if (text2.startsWith(found))
          out.push([found, lower]);
        else if (text2.codePointAt(0) < 256 || text2[0] !== found[0])
          break;
        lower++;
      }
      out.sort((a, b) => b[0].length - a[0].length);
      return out;
    }
    /* if delimiter is missing, value is the text after key, ie , a fixed with key */
    getValue(key) {
      const at = this.find(key);
      return ~at ? this.get(at).slice(key.length + this.delimiter.length) : "";
    }
  };

  // ../ptk/utils/cjk.ts
  var CJKRanges = {
    "BMP": [19968, 40869],
    "ExtA": [13312, 19967],
    "ExtB": [131072, 173823],
    "ExtC": [173824, 177983],
    "ExtD": [177984, 178207],
    "ExtE": [178208, 183983],
    "ExtF": [183984, 191456],
    "ExtG": [196608, 201551],
    "ExtH": [201552, 205743],
    "ExtZ": [655360, 870399]
  };
  var CJKRangeName = (s) => {
    let cp = 0;
    if (typeof s === "string") {
      const code = parseInt(s, 16);
      if (!isNaN(code)) {
        cp = code;
      } else {
        cp = s.codePointAt(0) || 0;
      }
    }
    for (let rangename in CJKRanges) {
      const [from, to] = CJKRanges[rangename];
      if (cp >= from && cp <= to)
        return rangename;
    }
  };
  var isPunc = (str) => {
    if (!str)
      return false;
    const cp = str.charCodeAt(0);
    return cp >= 12289 && cp <= 12319 || cp > 65280 || cp >= 65040 && cp <= 65131;
  };
  var openBrackets = "(\u300C\u300E\u3014\uFF08\uFE39\uFE35\uFE37\u3010\uFE3B\u300A\u3008\uFE3D\uFE3F\uFE41\uFE43\uFE59\uFE5D\u2018\u201C\u301D";
  var closeBracketOf = (ch) => {
    if (!ch)
      return;
    const at = openBrackets.indexOf(ch.slice(0, 1));
    return ~at ? String.fromCodePoint(1 + (openBrackets.codePointAt(at) || 0)) : "";
  };
  var removeBracket = (str) => {
    const closebracket = closeBracketOf(str);
    if (closebracket && str.slice(str.length - 1) == closebracket) {
      return str.slice(1, str.length - 1);
    }
    return str;
  };
  var VerticalPuncs = {
    "\u300C": "\uFE41",
    "\u300D": "\uFE42",
    "\u300E": "\uFE43",
    "\u300F": "\uFE44"
  };
  var toVerticalPunc = (punc) => {
    return VerticalPuncs[punc] || punc;
  };

  // ../ptk/utils/misc.ts
  var lineBreaksOffset = (str) => {
    let i = 0, at = 0;
    const out = [];
    while (i < str.length) {
      const at2 = str.indexOf("\n", i);
      if (at2 == -1)
        break;
      out.push(at2);
      i = at2 + 1;
    }
    return out;
  };
  var humanBytes = (n) => {
    if (n < 1024) {
      return [n, "b"];
    }
    if (n < 1024 * 1024) {
      return [parseFloat((n / 1024).toFixed(2)), "kb"];
    } else {
      return [parseFloat((n / (1024 * 1024)).toFixed(2)), "mb"];
    }
  };
  function debounce(f, ms) {
    let timer;
    return function(...args) {
      clearTimeout(timer);
      timer = setTimeout(f.bind(this, ...args), ms);
    };
  }

  // ../ptk/utils/loadscript.ts
  var parseJsonp = (str) => {
    const start = str.indexOf("{");
    const end = str.indexOf("},`") + 1;
    let payload = str.substring(end + 2, str.length - 2);
    if (payload.indexOf("\\\\") > -1)
      payload = payload.replace(/\\\\/g, "\\");
    if (payload.indexOf("\\`") > -1)
      payload = payload.replace(/\\`/g, "`");
    if (payload.indexOf("$\\{") > -1)
      payload = payload.replace(/\$\\\{/g, "${");
    return [JSON.parse(str.substring(start, end)), payload];
  };
  var loadScript = async (src, cb) => {
    if (cb && cb()) {
      return true;
    }
    if (src.slice(0, 2) == "./")
      src = src.slice(2);
    const css = src.endsWith(".css");
    const children2 = document.head.children;
    for (let i = 0; i < children2.length; i++) {
      const ele = children2[i];
      if (css && ele.tagName == "LINK" && ele.href.endsWith("/" + src)) {
        if (i < children2.length - 1) {
          document.head.removeChild(ele);
          document.head.appendChild(ele);
        }
        return true;
      } else if (ele.tagName == "SCRIPT" && ele.src.endsWith("/" + src))
        return true;
    }
    const promise = new Promise((resolve, reject) => {
      const script = document.createElement(css ? "link" : "script");
      script.type = css ? "text/css" : "text/javascript";
      if (css) {
        script.rel = "stylesheet";
        script.href = src;
      } else {
        script.src = src;
      }
      script.onerror = reject;
      script.async = true;
      script.onload = resolve;
      document.head.appendChild(script);
    });
    return promise;
  };

  // ../ptk/utils/bopomofo.ts
  var consonants = "b,p,m,f,d,t,n,l,g,k,h,j,q,x,zh,ch,sh,r,z,c,s".split(",");
  var vowels = "a,o,e,e,ai,ei,ao,ou,an,en,ang,eng,er,i,u,v".split(",");

  // ../ptk/utils/cnumber.ts
  var toChineseNumber = (n) => {
    let out = "";
    while (n) {
      const digit = ["\u3007", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D", "\u4E03", "\u516B", "\u4E5D"][n % 10];
      out = digit + out;
      n = Math.floor(n / 10);
    }
    return out;
  };
  var StyledNumber1 = {
    "\u2160": 10,
    "\u2170": 10,
    "\u249C": 26,
    "\u24B6": 26,
    "\u24D0": 26,
    "\u24EB": 10,
    "\u3251": 15,
    "\u3358": 25,
    "\u3359": 24,
    "\u3220": 10,
    "\u3280": 10,
    "\u32C0": 12,
    "\u33E0": 31,
    "\u2460": 50,
    "\u2474": 20,
    "\u2488": 20,
    "\u24F5": 10,
    "\u2776": 10,
    "\u2780": 10,
    "\u278A": 10
  };
  var styledNumber = (n, style = "\u2460", offset = 1) => {
    let max = StyledNumber1[style];
    if (typeof n !== "number")
      n = parseInt(n) || 0;
    if (!max) {
      return n.toString();
    } else {
      if (n - offset >= max) {
        return n.toString();
      }
      if (style == "\u2460") {
        if (n > 35) {
          style = "\u32B1";
          n -= 35;
        } else if (n > 20) {
          style = "\u3251";
          n -= 20;
        }
        if (n == 0)
          return "\u24EA";
      }
      let code = style.charCodeAt(0) + n - offset;
      return String.fromCharCode(code);
    }
  };

  // ../ptk/utils/helper.ts
  var sleep = (time) => new Promise((r) => {
    setTimeout(() => r(), time);
  });
  var updateUrl = (address) => {
    window.location.hash = "#" + address;
  };
  var addressFromUrl = () => {
    let hash = window.location.hash;
    if (hash[0] == "#")
      hash = hash.slice(1);
    let address = decodeURI(hash);
    if (!~address.indexOf("bk") && !~address.indexOf("ak"))
      address = "";
    return address;
  };

  // ../ptk/fts/constants.ts
  var Word_tailspace_Reg = /([\dA-Za-z\u1000-\u1049\u0900-\u0963\u96f\u00c0-\u02af\u1e00-\u1faf][\dA-Za-z\u1000-\u1049\u0900-\u0963\u96f\u00c0-\u02af\u1e00-\u1faf\d]* ?)/g;
  var MAXPHRASELEN = 16;

  // ../ptk/fts/tokenize.ts
  function Token(text2, choff, tkoff, type) {
    return { text: text2, choff, tkoff, type };
  }
  var tokenize = (text2) => {
    const out = [];
    let i = 0, tkoff = 0;
    if (typeof text2 !== "string")
      return [];
    while (i < text2.length) {
      let code = text2.codePointAt(i) || 0;
      if (code > 65535) {
        const sur = String.fromCodePoint(code);
        out.push(Token(sur, i, tkoff, 50 /* CJK_SURROGATE */));
        tkoff++;
        i += 2;
        continue;
      } else if (code >= 8192 && code <= 65535) {
        const tt = code >= 2e80 && code <= 12287 || code >= 12353 && code <= 40959 || code >= 54272 && code < 57343 || code >= 57344 && code < 64223 ? 49 /* CJK_BMP */ : 1 /* UNSEARCHABLE */;
        out.push(Token(text2[i], i, tkoff, tt));
        if (tt !== 1 /* UNSEARCHABLE */)
          tkoff++;
        i++;
        continue;
      }
      let s = "", prev = 0;
      let j2 = i;
      while (j2 < text2.length && code < 8192) {
        s += text2[j2];
        code = text2.codePointAt(++j2) || 0;
      }
      s.replace(Word_tailspace_Reg, (m4, m1, offset) => {
        if (offset > prev) {
          out.push(Token(s.substring(prev, offset), prev + i, tkoff, 1 /* UNSEARCHABLE */));
        }
        while (s[offset] == " ")
          offset++;
        out.push(Token(m1, i + offset, tkoff, 32 /* ROMANIZE */));
        tkoff++;
        prev = offset + m4.length;
        return "";
      });
      if (prev < s.length)
        out.push(Token(s.substring(prev), prev + i, tkoff, 1 /* UNSEARCHABLE */));
      i = j2;
    }
    return out;
  };

  // ../ptk/offtext/parser.ts
  var parseCompactAttr = (str) => {
    const out = {}, arr = str.split(/([@#~])/);
    while (arr.length) {
      let v = arr.shift();
      if (v === "~")
        out["~"] = arr.shift();
      else if (v === "@")
        out["@"] = arr.shift();
      else if (v === "#") {
        v = arr.shift();
        const m4 = v.match(OFFTAG_COMPACT_ID);
        if (m4)
          out.id = m4[1];
      } else {
        out.id = v;
      }
    }
    return out;
  };
  var parseAttributes = (rawAttrs, compactAttr) => {
    let quotes = [];
    const getqstr = (str, withq) => str.replace(QUOTEPAT, (m4, qc) => {
      return (withq ? '"' : "") + quotes[parseInt(qc)] + (withq ? '"' : "");
    });
    let rawattr = rawAttrs ? rawAttrs.slice(1, rawAttrs.length - 1).replace(QSTRING_REGEX_G, (m4, m1) => {
      quotes.push(m1);
      return QUOTEPREFIX + (quotes.length - 1);
    }) : "";
    const attrarr = rawattr.split(/( +)/), attrs = {};
    let i = 0;
    if (compactAttr)
      Object.assign(attrs, parseCompactAttr(compactAttr));
    while (attrarr.length) {
      const it = attrarr.shift();
      let eq = -1, key = "";
      if (it[0] == "~" || it[0] == "#" || it[0] == "@") {
        key = it[0];
        if (key == "#")
          key = "id";
        eq = it[1] == "=" ? 1 : 0;
      } else {
        eq = it.indexOf("=");
        if (eq > 0)
          key = it.slice(0, eq);
      }
      if (eq > -1) {
        attrs[key] = getqstr(it.slice(eq + 1));
        if (attrarr.length && !attrarr[0].trim())
          attrarr.shift();
      } else {
        if (it)
          attrs[it] = true;
      }
      i++;
    }
    return attrs;
  };
  var parseOfftag = (raw, rawAttrs) => {
    if (raw[0] == OFFTAG_LEADBYTE)
      raw = raw.slice(1);
    if (!rawAttrs) {
      const at = raw.indexOf("<");
      if (at > 0) {
        rawAttrs = raw.slice(at);
        raw = raw.slice(0, at);
      }
    }
    const o = raw.match(OFFTAG_NAME_ATTR);
    if (!o) {
      console.log("\ninvalid tag, raw", raw, "attr", rawAttrs);
      return [raw, {}];
    } else {
      let [m22, tagName, compactAttr] = o;
      let attrs = parseAttributes(rawAttrs, compactAttr);
      return [tagName, attrs];
    }
  };
  var resolveEnd = (raw, plain, tags) => {
    for (let i = 0; i < tags.length; i++) {
      const tag = tags[i];
      let j2 = i;
      if (tag.end > tag.start && !tag.width) {
        while (j2 < tags.length && tag.end > tags[j2].start)
          j2++;
        if (j2 < tags.length && tags[j2].start > tag.end || j2 == tags.length)
          j2--;
        const closest = j2 < tags.length ? tags[j2] : tag;
        tag.width = tag.end - closest.start;
        tag.width += closest.choff - tag.choff;
      }
    }
    for (let i = 0; i < tags.length; i++) {
      const tag = tags[i];
      if (tag.width && tag.end == tag.start) {
        tag.width = substrUTF32(plain, tag.choff, tag.width).length;
        let j2 = i + 1;
        while (j2 < tags.length && tag.choff + tag.width > tags[j2].choff)
          j2++;
        if (j2 < tags.length && tags[j2].choff > tag.choff + tag.width || j2 == tags.length)
          j2--;
        const closest = j2 < tags.length ? tags[j2] : tag;
        if (closest === tag) {
          tag.end += tag.width;
        } else {
          tag.end = closest.start + (tag.choff + tag.width - closest.choff);
        }
      }
    }
  };
  var parseOfftext = (str, line = 0) => {
    if (!str || str.indexOf("^") == -1)
      return [str || "", []];
    let tags = [];
    let choff = 0, prevoff = 0;
    let text2 = str.replace(OFFTAG_REGEX_G, (m4, rawName, rawAttrs, offset) => {
      if (!rawName) {
        console.log(str);
      }
      let [tagName, attrs] = parseOfftag(rawName, rawAttrs);
      let width = 0;
      let start = offset + m4.length, end = start;
      let endch = attrs["~"];
      if (endch) {
        if (isNaN(parseInt(endch))) {
          width = 0;
          let repeat = 0;
          const m5 = endch.match(/\+(\d+)$/);
          if (m5) {
            endch = endch.slice(0, endch.length - m5.length);
            repeat = parseInt(m5[1]);
          }
          let at = str.indexOf(endch, start);
          while (~at && repeat) {
            at = str.indexOf(endch, at + 1);
            repeat--;
          }
          if (~at) {
            end = at + endch.length;
            delete attrs["~"];
          }
        } else {
          width = parseInt(endch);
        }
      } else {
        const closebracket = closeBracketOf(str.charAt(start));
        if (closebracket) {
          const at = str.indexOf(closebracket, start + 1);
          if (~at)
            end = at + closebracket.length;
        }
      }
      const aoffset = offset + rawName.length + 1;
      choff += offset - prevoff;
      let offtag = {
        name: tagName,
        offset,
        aoffset,
        attrs,
        line,
        choff,
        width,
        start,
        end,
        active: false
      };
      tags.push(offtag);
      choff -= m4.length;
      prevoff = offset;
      return "";
    });
    resolveEnd(str, text2, tags);
    if (tags.length && tags[tags.length - 1].choff >= text2.length) {
      text2 += " ";
    }
    return [text2, tags];
  };
  var updateOfftext = (rawtext, tag, newtag) => {
    for (let n in newtag.attrs) {
      if (newtag.attrs[n] != tag.attrs[n]) {
        let newvalue = typeof newtag.attrs[n] !== "string" ? JSON.stringify(newtag.attrs[n]) : newtag.attrs[n];
        if (newvalue.indexOf(" ") > 0) {
          newvalue = '"' + newvalue + '"';
        }
        const regex = new RegExp("\\b" + n + ' *= *"?' + tag.attrs[n] + '"?');
        rawtext = rawtext.replace(regex, n + "=" + newvalue);
      }
    }
    return rawtext;
  };
  var Offtext = class {
    constructor(raw, line = 0) {
      this.raw = raw;
      [this.plain, this.tags] = parseOfftext(raw, line);
    }
    getTag(ntag) {
      return this.tags[ntag];
    }
    tagText(tag, raw = false) {
      if (typeof tag == "number")
        tag = this.tags[tag];
      if (!tag)
        return;
      return raw ? this.raw.slice(tag.start, tag.end) : this.plain.slice(tag.choff, tag.choff + tag.width);
    }
    tagRawText(tag) {
      return this.tagText(tag, true);
    }
  };

  // ../lossless-simplified-chinese/sc-tc-map.js
  var sc2tc = `\u3454\u346F
\u3447\u3473
\u3439\u3476
\u523E\u34E8
\u360E\u361A
\u36AF\u3704
\u36E3\u370F
\u37C6\u380F
\u3918\u396E
\u3A2B\u3A5C
\u39D0\u3A73
\u64DC\u3A75
\u3EEA\u3EFD
\u4025\u407B
\u9FCE\u40EE
\u4336\u42B7
\u433A\u42D9
\u433B\u42DA
\u433F\u42F9
\u433E\u42FB
\u43AC\u43B1
\u464C\u4661
\u4727\u4700
\u478D\u477C
\u4982\u4947
\u9FCF\u4951
\u497E\u4971
\u49B6\u499B
\u49B7\u499F
\u4BC5\u4BC0
\u9C83\u4C3E
\u4CA3\u4C77
\u4C9D\u4C7D
\u9CDA\u4C81
\u9CE4\u4C98
\u9E6E\u4D09
\u4E22\u4E1F
\u5E76<\u4F75\u4E26
\u5E72<\u5E79>\u4E7E
\u4E71\u4E82
\u4E9A\u4E9E
\u4F2B\u4F47
\u6765\u4F86
\u4ED1\u4F96
\u4FA3\u4FB6
\u4FE3\u4FC1
\u7CFB<\u7E6B\u4FC2
\u4F23\u4FD4
\u4FA0\u4FE0
\u4F21\u4FE5
\u4F25\u5000
\u4FE9\u5006
\u4FEB\u5008
\u4ED3\u5009
\u4E2A\u500B
\u4EEC\u5011
\u4F26\u502B
\u3448\u5032
\u4F1F\u5049
\u343D\u5051
\u4FA7\u5074
\u4FA6\u5075
\u4F2A\u50DE\u507D
\u3437\u508C
\u6770<\u5091
\u4F27\u5096
\u4F1E\u5098
\u5907\u5099
\u4F63<\u50AD
\u506C\u50AF
\u4F20\u50B3
\u4F1B\u50B4
\u503A\u50B5
\u4F24\u50B7
\u503E\u50BE
\u507B\u50C2
\u4EC5\u50C5
\u4F65\u50C9
\u4FA8\u50D1
\u4EC6<\u50D5
\u4FA5\u50E5
\u507E\u50E8
\u4EF7<\u50F9
\u4EEA\u5100
\u347A\u5101
\u4FAC\u5102
\u4EBF\u5104
\u4FA9\u5108
\u4FED\u5109
\u50A7\u5110
\u4FE6\u5114
\u4FAA\u5115
\u5C3D\u76E1\u5118
\u507F\u511F
\u4F18<\u512A
\u50A8\u5132
\u4FEA\u5137
\u3469\u5138
\u50A9\u513A
\u50A5\u513B
\u4FE8\u513C
\u5151\u514C
\u513F<\u5152
\u5156\u5157
\u5185\u5167
\u4E24\u5169
\u518C\u518A
\u5E42\u51AA
\u51C0\u51C8
\u51BB\u51CD
\u51DB\u51DC
\u51EF\u51F1
\u522B\u5225
\u5220\u522A
\u522D\u5244
\u5219\u5247
\u514B<\u524B
\u5239\u524E
\u522C\u5257
\u521A\u525B
\u5265\u525D
\u5250\u526E
\u5240\u5274
\u521B\u5275
\u5212<\u5283
\u5267\u5287
\u5218\u5289
\u523D\u528A
\u523F\u528C
\u5251\u528D
\u34E5\u528F
\u5242\u5291
\u3509\u529A
\u52B2\u52C1
\u52A8\u52D5
\u52A1\u52D9
\u52CB\u52DB
\u80DC<\u52DD
\u52B3\u52DE
\u52BF\u52E2
\u52DA\u52E9
\u52A2\u52F1
\u52B1\u52F5
\u529D\u52F8
\u5300\u52FB
\u5326\u532D
\u6C47\u5F59\u532F
\u532E\u5331
\u533A\u5340
\u534F\u5354
\u5374\u537B
\u538D\u5399
\u538C\u53AD
\u5389\u53B2
\u53A3\u53B4
\u53C2\u53C3
\u53C1\u53C4
\u4E1B\u53E2
\u54A4>\u5412
\u5434\u5433
\u5450\u5436
\u5415\u5442
\u5459\u54BC
\u5458\u54E1
\u5457\u5504
\u5423\u551A
\u95EE\u554F
\u54D1\u555E
\u542F\u555F
\u5521\u5562
\u359E\u558E
\u5524\u559A
\u4E27\u55AA
\u4E54\u55AC
\u5355\u55AE
\u54DF\u55B2
\u545B\u55C6
\u556C\u55C7
\u551D\u55CA
\u5417\u55CE
\u545C\u55DA
\u5522\u55E9
\u54D4\u55F6
\u53F9\u5606
\u55BD\u560D
\u556F\u5613
\u5455\u5614
\u5567\u5616
\u5C1D\u5617
\u551B\u561C
\u54D7\u5629
\u5520\u562E
\u5578\u562F
\u53FD\u5630
\u54D3\u5635
\u5452\u5638
\u5574\u563D
\u5618\u5653
\u358A\u565A
\u549D\u565D
\u54D2\u5660
\u54DD\u5665
\u54D5\u5666
\u55F3\u566F
\u54D9\u5672
\u55B7\u5674
\u5428<\u5678
\u5F53\u7576\u5679
\u549B\u5680
\u5413\u5687
\u54DC\u568C
\u565C\u5695
\u556E\u5699
\u5456\u56A6
\u5499\u56A8
\u4EB8\u56B2
\u55BE\u56B3
\u4E25\u56B4
\u5624\u56B6
\u556D\u56C0
\u55EB\u56C1
\u56A3\u56C2
\u5181\u56C5
\u5453\u56C8
\u5570\u56C9
\u5631\u56D1
\u56F1\u56EA
\u56F5\u5707
\u56FD\u570B
\u56F4\u570D
\u56ED\u5712
\u5706\u5713
\u56FE\u5716
\u56E2\u5718
\u57EF\u57B5
\u57AD\u57E1
\u91C7<\u63A1\u57F0
\u6267\u57F7
\u575A\u5805
\u57A9\u580A
\u57B4\u5816
\u57DA\u581D
\u5C27\u582F
\u62A5\u5831
\u573A\u5834
\u5757\u584A
\u8314\u584B
\u57B2\u584F
\u57D8\u5852
\u6D82<\u5857
\u575E\u5862
\u57D9\u5864
\u5C18\u5875
\u5811\u5879
\u57AB\u588A
\u5760\u589C
\u5815\u58AE
\u575F\u58B3
\u57AF\u58B6
\u57A6\u58BE
\u575B\u7F48\u58C7
\u57B1\u58CB
\u538B\u58D3
\u5792\u58D8
\u5739\u58D9
\u5786\u58DA
\u574F<\u58DE
\u5784\u58DF
\u5785\u58E0
\u575C\u58E2
\u575D\u58E9
\u5846\u58EA
\u58EE\u58EF
\u58F6\u58FA
\u58F8\u58FC
\u5BFF\u58FD
\u591F\u5920
\u68A6\u5922
\u5939\u593E
\u5942\u5950
\u5965\u5967
\u5941\u5969
\u593A\u596A
\u5968\u596C
\u594B\u596E
\u59F9\u597C
\u5986\u599D
\u59D7\u59CD
\u5978<\u59E6
\u5A31\u5A1B
\u5A04\u5A41
\u5987\u5A66
\u5A05\u5A6D
\u5A32\u5AA7
\u59AB\u5AAF
\u36C0\u5AB0
\u5AAA\u5ABC
\u5988\u5ABD
\u59AA\u5AD7
\u59A9\u5AF5
\u5A34\u5AFB
\u5A73\u5AFF
\u5AAD\u5B03
\u5A06\u5B08
\u5A75\u5B0B
\u5A07\u5B0C
\u5AF1\u5B19
\u5AD2\u5B21
\u5B37\u5B24
\u5AD4\u5B2A
\u5A74\u5B30
\u5A76\u5B38
\u36E4\u5B4B
\u5A08\u5B4C
\u5B59\u5B6B
\u5B66\u5B78
\u5B6A\u5B7F
\u5BAB\u5BAE
\u5BDD\u5BE2
\u5B9E\u5BE6
\u5B81<\u5BE7
\u5BA1\u5BE9
\u5199\u5BEB
\u5BBD\u5BEC
\u3766\u5BEF
\u5BA0\u5BF5
\u5B9D\u5BF6
\u5C06\u5C07
\u4E13\u5C08
\u5BFB\u5C0B
\u5BF9\u5C0D
\u5BFC\u5C0E
\u5C34\u5C37
\u5C4A\u5C46
\u5C38<\u5C4D
\u5C43\u5C53
\u5C49\u5C5C
\u5C61\u5C62
\u5C42\u5C64
\u5C66\u5C68
\u5C5E\u5C6C
\u5188\u5CA1
\u5C98\u5CF4
\u5C9B\u5CF6
\u5CE1\u5CFD
\u5D03\u5D0D
\u5C97\u5D17
\u5CE5\u5D22
\u5CBD\u5D2C
\u5C9A\u5D50
\u37E5\u5D7E
\u5D5D\u5D81
\u5D2D\u5D84
\u5C96\u5D87
\u5D5A\u5D94
\u5D02\u5D97
\u5CE4\u5DA0
\u5CE3\u5DA2
\u5CC4\u5DA7
\u5D04\u5DAE
\u5C99\u5DB4
\u5D58\u5DB8
\u5CAD<\u5DBA
\u5C7F\u5DBC
\u5CBF\u5DCB
\u5CE6\u5DD2
\u5DC5\u5DD4
\u5DEF\u5DF0
\u5E05\u5E25
\u5E08\u5E2B
\u5E10\u5E33
\u5E26\u5E36
\u5E27\u5E40
\u5E0F\u5E43
\u384E\u5E53
\u5E3C\u5E57
\u5E3B\u5E58
\u5E1C\u5E5F
\u5E01\u5E63
\u5E2E\u5E6B
\u5E31\u5E6C
\u4E48<\u9EBC>\u5E7A>\u9EBD
\u51E0<\u5E7E
\u5E93\u5EAB
\u5395\u5EC1
\u53A2\u5EC2
\u53A9\u5EC4
\u53A6\u5EC8
\u53A8\u5EDA
\u53AE\u5EDD
\u5E99\u5EDF
\u5382<\u5EE0
\u5E91\u5EE1
\u5E9F\u5EE2
\u5E7F\u5EE3
\u5EEA\u5EE9
\u5E90\u5EEC
\u5385\u5EF3
\u5F11\u5F12
\u5F2A\u5F33
\u5F20\u5F35
\u5F3A\u5F37
\u5F39\u5F48
\u5F25\u5F4C
\u5F2F\u5F4E
\u5F5D<\u5F5E
\u5F5F\u5F60
\u5F66\u5F65
\u5F68\u5F72
\u540E<>\u5F8C
\u5F84\u5F91
\u4ECE\u5F9E
\u5F95\u5FA0
\u590D<\u8907\u5FA9>\u8986
\u5F81<>\u5FB5
\u5F7B\u5FB9
\u6052\u6046
\u803B\u6065
\u60A6\u6085
\u60AE\u609E
\u6005\u60B5
\u95F7\u60B6
\u6076\u60E1
\u607C\u60F1
\u607D\u60F2
\u607B\u60FB
\u7231\u611B
\u60EC\u611C
\u60AB\u6128
\u6006\u6134
\u607A\u6137
\u5FFE\u613E
\u6817<\u6144
\u6001\u614B
\u6120\u614D
\u60E8\u6158
\u60ED\u615A
\u6078\u615F
\u60EF\u6163
\u6004\u616A
\u6002\u616B
\u8651\u616E
\u60AD\u6173
\u5E86\u6176
\u396A\u617A
\u5FE7\u6182
\u60EB\u618A
\u392D\u618D
\u601C<\u6190
\u51ED\u6191
\u6126\u6192
\u616D\u6196
\u60EE\u619A
\u6124\u61A4
\u60AF\u61AB
\u6003\u61AE
\u5BAA\u61B2
\u5FC6\u61B6
\u6073\u61C7
\u5E94\u61C9
\u603F\u61CC
\u61D4\u61CD
\u603C\u61DF
\u61D1\u61E3
\u393D\u61E4
\u3916\u61E7
\u6079\u61E8
\u60E9\u61F2
\u61D2\u61F6
\u6000<\u61F7
\u60AC\u61F8
\u5FCF<\u61FA
\u60E7\u61FC
\u6151\u61FE
\u604B\u6200
\u6206\u6207
\u620B\u6214
\u6217\u6227
\u622C\u6229
\u6218\u6230
\u622F\u6231
\u620F\u6232
\u6237\u6236
\u629B\u62CB
\u635D\u6329
\u631F\u633E
\u820D<\u6368
\u626A\u636B
\u626B\u6383
\u62A1\u6384
\u39CF\u6386
\u631C\u6397
\u6323\u6399
\u6302<\u639B
\u62E3\u63C0
\u626C\u63DA
\u6362\u63DB
\u6325\u63EE
\u635F\u640D
\u6447\u6416
\u6363\u6417
\u63FE\u6435
\u62A2\u6436
\u63B4\u6451
\u63BC\u645C
\u6402\u645F
\u631A\u646F
\u62A0\u6473
\u629F\u6476
\u63BA\u647B
\u635E\u6488
\u6326\u648F
\u6491\u6490
\u6320\u6493
\u39D1\u649D
\u6322\u649F
\u63B8\u64A3
\u62E8\u64A5
\u629A\u64AB
\u6251<\u64B2
\u63FF\u64B3
\u631E\u64BB
\u631D\u64BE
\u6361\u64BF
\u62E5\u64C1
\u63B3\u64C4
\u62E9\u64C7
\u51FB\u64CA
\u6321\u64CB
\u39DF\u64D3
\u62C5\u64D4
\u636E<\u64DA
\u6324\u64E0
\u39DB\u64E5
\u62DF\u64EC
\u6448\u64EF
\u62E7\u64F0
\u6401\u64F1
\u63B7\u64F2
\u6269\u64F4
\u64B7\u64F7
\u6446\u64FA
\u64DE\u64FB
\u64B8\u64FC
\u39F0\u64FD
\u6270<\u64FE
\u6445\u6504
\u64B5\u6506
\u62E2\u650F
\u62E6\u6514
\u6484\u6516
\u6400\u6519
\u64BA\u651B
\u643A\u651C
\u6444\u651D
\u6512\u6522
\u631B\u6523
\u644A\u6524
\u6405\u652A
\u63FD\u652C
\u8D25\u6557
\u53D9\u6558
\u654C\u6575
\u6570\u6578
\u655B\u6582
\u6BD9\u6583
\u6569\u6586
\u6593\u6595
\u65A9\u65AC
\u65AD\u65B7
\u4E8E<>\u65BC
\u65F6\u6642
\u664B\u6649
\u663C\u665D
\u6655\u6688
\u6656\u6689
\u65F8\u6698
\u7545\u66A2
\u6682\u66AB
\u6654\u66C4
\u5386\u6B77\u66C6
\u6619\u66C7
\u6653\u66C9
\u5411<\u66CF
\u66A7\u66D6
\u65F7\u66E0
\u663D\u66E8
\u6652<\u66EC
\u4E66\u66F8
\u4F1A\u6703
\u80E7\u6727
\u4E1C\u6771
\u6805\u67F5
\u6746<\u687F
\u6800\u6894
\u67A7\u6898
\u6761\u689D
\u67AD\u689F
\u68C1\u68B2
\u5F03\u68C4
\u67A8\u68D6
\u67A3\u68D7
\u680B\u68DF
\u3B4E\u68E1
\u6808\u68E7
\u6816<\u68F2
\u68BE\u68F6
\u6860\u690F
\u3B4F\u6932
\u6768\u694A
\u67AB\u6953
\u6862\u6968
\u4E1A\u696D
\u6781<\u6975
\u6769\u69AA
\u8363\u69AE
\u6985\u69B2
\u6864\u69BF
\u6784<\u69CB
\u67AA\u69CD
\u68BF\u69E4
\u6920\u69E7
\u6901\u69E8
\u692E\u69EE
\u6868\u69F3
\u6922\u69F6
\u691D\u69FC
\u6869\u6A01
\u4E50\u6A02
\u679E\u6A05
\u697C\u6A13
\u6807\u6A19
\u67A2\u6A1E
\u3B64\u6A22
\u6837\u6A23
\u3B74\u6A2B
\u686A\u6A33
\u6734<\u6A38
\u6811\u6A39
\u6866\u6A3A
\u692B\u6A3F
\u6861\u6A48
\u6865\u6A4B
\u673A<\u6A5F
\u692D\u6A62
\u6A2A\u6A6B
\u6AA9\u6A81
\u67FD\u6A89
\u6863\u6A94
\u6867\u6A9C
\u69DA\u6A9F
\u68C0\u6AA2
\u6A2F\u6AA3
\u68BC\u6AAE
\u53F0<\u98B1\u81FA\u6AAF
\u69DF\u6AB3
\u67E0\u6AB8
\u69DB\u6ABB
\u67DC<\u6AC3
\u6A79\u6AD3
\u6988\u6ADA
\u6809\u6ADB
\u691F\u6ADD
\u6A7C\u6ADE
\u680E\u6ADF
\u6A71\u6AE5
\u69E0\u6AE7
\u680C\u6AE8
\u67A5\u6AEA
\u6A65\u6AEB
\u6987\u6AEC
\u8616\u6AF1
\u680A\u6AF3
\u6989\u6AF8
\u6A31\u6AFB
\u680F\u6B04
\u6743\u6B0A
\u6924\u6B0F
\u683E\u6B12
\u6984\u6B16
\u68C2\u6B1E
\u94A6\u6B3D
\u6B27\u6B50
\u6B24\u6B5F
\u6B22\u6B61
\u5C81\u6B72
\u5F52\u6B78
\u6B81\u6B7F
\u6B8B\u6B98
\u6B92\u6B9E
\u6B87\u6BA4
\u3C6E\u6BA8
\u6B9A\u6BAB
\u6B93\u6BAE
\u6BA1\u6BAF
\u3C69\u6BB0
\u6B7C\u6BB2
\u6740\u6BBA
\u58F3\u6BBC
\u6BC1\u6BC0
\u6BB4\u6BC6
\u6BF5\u6BFF
\u7266\u6C02
\u6BE1\u6C08
\u6C07\u6C0C
\u6C14<\u6C23
\u6C22\u6C2B
\u6C29\u6C2C
\u6C32\u6C33
\u51B3\u6C7A
\u6CA1\u6C92
\u51B2\u885D\u6C96
\u51B5\u6CC1
\u6C79\u6D36
\u6D43\u6D79
\u6CFE\u6D87
\u51C9\u6DBC
\u6CEA\u6DDA
\u6E0C\u6DE5
\u6CA6\u6DEA
\u6E0A\u6DF5
\u6D9E\u6DF6
\u6D45\u6DFA
\u6DA3\u6E19
\u51CF\u6E1B
\u6CA8\u6E22
\u6DA1\u6E26
\u6D4B\u6E2C
\u6D51\u6E3E
\u51D1\u6E4A
\u6D48\u6E5E
\u6C64\u6E6F
\u6CA9\u6E88
\u51C6<\u6E96
\u6C9F\u6E9D
\u6E29\u6EAB
\u6D49\u6EAE
\u6DA2\u6EB3
\u6CA7\u6EC4
\u706D\u6EC5
\u6DA4\u6ECC
\u8365\u6ECE
\u6CAA\u6EEC
\u6EDE\u6EEF
\u6E17\u6EF2
\u6D52\u6EF8
\u6D50\u6EFB
\u6EDA\u6EFE
\u6EE1\u6EFF
\u6E14\u6F01
\u6E87\u6F0A
\u6CA4\u6F1A
\u6C49\u6F22
\u6D9F\u6F23
\u6E0D\u6F2C
\u6DA8\u6F32
\u6E86\u6F35
\u6E10\u6F38
\u6D46\u6F3F
\u988D\u6F41
\u6CFC\u6F51
\u6D01<\u6F54
\u3D0B\u6F5A
\u6F5C\u6F5B
\u6DA6\u6F64
\u6D54\u6F6F
\u6E83\u6F70
\u6ED7\u6F77
\u6DA0\u6F7F
\u6DA9\u6F80
\u6D47\u6F86
\u6D9D\u6F87
\u6DA7\u6F97
\u6E11\u6FA0
\u6CFD\u6FA4
\u6EEA\u6FA6
\u6CF6\u6FA9
\u6D4D\u6FAE
\u6DC0<\u6FB1
\u3CE0\u6FBE
\u6D4A\u6FC1
\u6D53\u6FC3
\u3CE1\u6FC4
\u6E7F\u6FD5
\u6CDE<\u6FD8
\u6E81\u6FDA
\u6D55\u6FDC
\u6D4E\u6FDF
\u6D9B\u6FE4
\u3CD4\u6FE7
\u6EE5\u6FEB
\u6F4D\u6FF0
\u6EE8\u6FF1
\u6E85\u6FFA
\u6CFA\u6FFC
\u6EE4\u6FFE
\u6F9B\u7002
\u6EE2\u7005
\u6E0E\u7006
\u3CBF\u7007
\u6CFB\u7009
\u6C88<\u700B
\u6D4F\u700F
\u6FD2\u7015
\u6CF8\u7018
\u6CA5\u701D
\u6F47\u701F
\u6F46\u7020
\u6F74\u7026
\u6CF7\u7027
\u6FD1\u7028
\u3CFD\u7030
\u6F4B\u7032
\u6F9C\u703E
\u6CA3\u7043
\u6EE0\u7044
\u6D12<\u7051
\u6F13<\u7055
\u6EE9\u7058
\u704F\u705D
\u6F24\u7060
\u3CD5\u7061
\u6E7E\u7063
\u6EE6\u7064
\u6EDF\u7067
\u707E\u707D
\u4E3A\u70BA
\u4E4C\u70CF
\u70C3\u70F4
\u65E0\u7121
\u70BC\u7149
\u709C\u7152
\u70DF\u7159
\u8315\u7162
\u7115\u7165
\u70E6\u7169
\u7080\u716C
\u3DBD\u7171
\u7174\u7185
\u8367\u7192
\u709D\u7197
\u70ED\u71B1
\u988E\u71B2
\u70BD\u71BE
\u70E8\u71C1
\u706F\u71C8
\u70E7\u71D2
\u70EB\u71D9
\u7116\u71DC
\u8425\u71DF
\u707F\u71E6
\u70DB\u71ED
\u70E9\u71F4
\u3DB6\u71F6
\u70EC\u71FC
\u7118\u71FE
\u70C1\u720D
\u7089\u7210
\u70C2\u721B
\u4E89\u722D
\u7237\u723A
\u5C14\u723E
\u5899\u7246
\u724D\u7258
\u7275\u727D
\u8366\u7296
\u728A\u72A2
\u727A\u72A7
\u72B6\u72C0
\u72ED\u72F9
\u72C8\u72FD
\u72F0\u7319
\u72B9\u7336
\u72F2\u733B
\u72B8\u7341
\u72F1\u7344
\u72EE\u7345
\u5956\u734E
\u72EC\u7368
\u72EF\u736A
\u7303\u736B
\u72DD\u736E
\u72DE\u7370
\u3E8D\u7371
\u83B7\u7A6B\u7372
\u730E\u7375
\u72B7\u7377
\u517D\u7378
\u736D\u737A
\u732E\u737B
\u7315\u737C
\u7321\u7380
\u73B0\u73FE
\u73D0\u743A
\u73F2\u743F
\u73AE\u744B
\u739A\u7452
\u7410\u7463
\u7476\u7464
\u83B9\u7469
\u739B\u746A
\u73B1\u7472
\u740F\u7489
\u740E\u74A1
\u7391\u74A3
\u7477\u74A6
\u73F0\u74AB
\u3EC5\u74AF
\u73AF\u74B0
\u7399\u74B5
\u7478\u74B8
\u73BA\u74BD
\u743C\u74CA
\u73D1\u74CF
\u748E\u74D4
\u74D2\u74DA
\u74EF\u750C
\u4EA7\u7522
\u4EA9\u755D
\u6BD5\u7562
\u753B\u756B
\u5F02<\u7570
\u7574\u7587
\u53E0\u758A
\u75C9\u75D9
\u75B4\u75FE
\u75D6\u7602
\u75AF\u760B
\u75A1\u760D
\u75EA\u7613
\u7617\u761E
\u75AE\u7621
\u759F\u7627
\u7606\u762E
\u75AD\u7632
\u7618\u763A
\u7597\u7642
\u75E8\u7646
\u75EB\u7647
\u7605\u7649
\u75A0\u7658
\u762A\u765F
\u75D2<\u7662
\u7596\u7664
\u75C7<\u7665
\u75AC\u7667
\u765E\u7669
\u7663\u766C
\u763F\u766D
\u763E\u766E
\u75C8\u7670
\u762B\u7671
\u766B\u7672
\u53D1\u9AEE\u767C
\u7691\u769A
\u75B1\u76B0
\u76B2\u76B8
\u76B1\u76BA
\u76D7\u76DC
\u76CF\u76DE
\u76D1\u76E3
\u76D8\u76E4
\u5362\u76E7
\u8361\u8569\u76EA
\u7726\u7725
\u4F17\u773E
\u56F0<\u774F
\u7741\u775C
\u7750\u775E
\u770D\u7798
\u4056\u779C
\u7792\u779E
\u7786\u77B6
\u7751\u77BC
\u772C\u77D3
\u77A9\u77DA
\u77EB\u77EF
\u7841\u785C
\u7856\u7864
\u7817\u7868
\u781A\u786F
\u7855\u78A9
\u7800\u78AD
\u781C\u78B8
\u786E<\u78BA
\u7801\u78BC
\u40B5\u78BD
\u7859\u78D1
\u7816\u78DA
\u7875\u78E0
\u789C\u78E3
\u789B\u78E7
\u77F6\u78EF
\u7857\u78FD
\u40C5\u78FE
\u785A\u7904
\u7877\u9E7C\u7906
\u7840\u790E
\u788D\u7919
\u77FF\u7926
\u783A\u792A
\u783E\u792B
\u77FE\u792C
\u783B\u7931
\u7984\u797F
\u7978\u798D
\u796F\u798E
\u794E\u7995
\u7943\u79A1
\u5FA1<\u79A6
\u7985\u79AA
\u793C\u79AE
\u7962\u79B0
\u7977\u79B1
\u79C3\u79BF
\u7C7C\u79C8
\u7A0E\u7A05
\u79C6\u7A08
\u4149\u7A0F
\u7980\u7A1F
\u79CD<\u7A2E
\u79F0\u7A31
\u8C37<\u7A40
\u415F\u7A47
\u7A23\u7A4C
\u79EF\u7A4D
\u9896\u7A4E
\u79FE\u7A60
\u7A51\u7A61
\u79FD\u7A62
\u7A33\u7A69
\u7A06\u7A6D
\u7A9D\u7AA9
\u6D3C<\u7AAA
\u7A77\u7AAE
\u7A91\u7AAF
\u7A8E\u7AB5
\u7AAD\u7AB6
\u7AA5\u7ABA
\u7A9C\u7AC4
\u7A8D\u7AC5
\u7AA6\u7AC7
\u7A83\u7ACA
\u7ADE\u7AF6
\u7B14\u7B46
\u7B0B\u7B4D
\u7B15\u7B67
\u41F2\u7B74
\u7B3A\u7B8B
\u7B5D\u7B8F
\u8282\u7BC0
\u8303<\u7BC4
\u7B51<\u7BC9
\u7BA7\u7BCB
\u7B7C\u7BD4
\u7B03\u7BE4
\u7B5B\u7BE9
\u7B5A\u7BF3
\u7BA6\u7C00
\u7BD3\u7C0D
\u7BAA\u7C1E
\u7B80\u7C21
\u7BD1\u7C23
\u7BAB\u7C2B
\u7B5C\u7C39
\u7B7E\u7C3D
\u5E18<\u7C3E
\u7BEE\u7C43
\u7B79\u7C4C
\u4264\u7C54
\u7B93\u7C59
\u7BEF\u7C5B
\u7BA8\u7C5C
\u7C41\u7C5F
\u7B3C\u7C60
\u7B3E\u7C69
\u7C16\u7C6A
\u7BF1<\u7C6C
\u7BA9\u7C6E
\u7CA4\u7CB5
\u7CC1\u7CDD
\u7CAA\u7CDE
\u7CAE\u7CE7
\u7C9D\u7CF2
\u7C74\u7CF4
\u7C9C\u7CF6
\u7E9F\u7CF9
\u7EA0\u7CFE
\u7EAA\u7D00
\u7EA3\u7D02
\u7EA6\u7D04
\u7EA2\u7D05
\u7EA1\u7D06
\u7EA5\u7D07
\u7EA8\u7D08
\u7EAB\u7D09
\u7EB9\u7D0B
\u7EB3\u7D0D
\u7EBD\u7D10
\u7EBE\u7D13
\u7EAF\u7D14
\u7EB0\u7D15
\u7EBC\u7D16
\u7EB1\u7D17
\u7EAE\u7D18
\u7EB8\u7D19
\u7EA7\u7D1A
\u7EB7\u7D1B
\u7EAD\u7D1C
\u7EB4\u7D1D
\u7EBA\u7D21
\u4337\u7D2C
\u7EC6\u7D30
\u7EC2\u7D31
\u7EC1\u7D32
\u7EC5\u7D33
\u7EBB\u7D35
\u7ECD\u7D39
\u7EC0\u7D3A
\u7ECB\u7D3C
\u7ED0\u7D3F
\u7ECC\u7D40
\u7EC8\u7D42
\u7EC4\u7D44
\u4339\u7D45
\u7ECA\u7D46
\u7ED7\u7D4E
\u7ED3\u7D50
\u7EDD\u7D55
\u7EE6\u7E27\u7D5B
\u7ED4\u7D5D
\u7EDE\u7D5E
\u7EDC\u7D61
\u7EDA\u7D62
\u7ED9\u7D66
\u7ED2\u7D68
\u7ED6\u7D70
\u7EDF\u7D71
\u4E1D\u7D72
\u7EDB\u7D73
\u7EE2\u7D79
\u7ED1\u7D81
\u7EE1\u7D83
\u7EE0\u7D86
\u7EE8\u7D88
\u7EE4\u7D8C
\u7EE5\u7D8F
\u433C\u7D90
\u7ECF\u7D93
\u7EFC\u7D9C
\u7F0D\u7D9E
\u7EFF\u7DA0
\u7EF8\u7DA2
\u7EFB\u7DA3
\u7EF6\u7DAC
\u7EF4\u7DAD
\u7EF9\u7DAF
\u7EFE\u7DB0
\u7EB2\u7DB1
\u7F51<\u7DB2
\u7F00\u7DB4
\u433D\u7DB5
\u7EB6\u7DB8
\u7EFA\u7DB9
\u7EEE\u7DBA
\u7EFD\u7DBB
\u7EF0\u7DBD
\u7EEB\u7DBE
\u7EF5\u7DBF
\u7EF2\u7DC4
\u7F01\u7DC7
\u7D27\u7DCA
\u7EEF\u7DCB
\u7EEA\u7DD2
\u7EEC\u7DD3
\u7EF1\u979D\u7DD4
\u7F03\u7DD7
\u7F04\u7DD8
\u7F02\u7DD9
\u7EBF\u7DDA
\u7F09\u7DDD
\u7F0E\u7DDE
\u7F14\u7DE0
\u7F17\u7DE1
\u7F18\u7DE3
\u7F0C\u7DE6
\u7F16\u7DE8
\u7F13\u7DE9
\u7F05\u7DEC
\u7EAC\u7DEF
\u7F11\u7DF1
\u7F08\u7DF2
\u7EC3\u7DF4
\u7F0F\u7DF6
\u7F07\u7DF9
\u81F4<\u7DFB
\u8426\u7E08
\u7F19\u7E09
\u7F22\u7E0A
\u7F12\u7E0B
\u7EC9\u7E10
\u7F23\u7E11
\u7F0A\u7E15
\u7F1E\u7E17
\u7F1A\u7E1B
\u7F1C\u7E1D
\u7F1F\u7E1E
\u7F1B\u7E1F
\u53BF\u7E23
\u7F1D\u7E2B
\u7F21\u7E2D
\u7F29\u7E2E
\u7EB5\u7E31
\u7F27\u7E32
\u4338\u7E33
\u7F26\u7E35
\u7D77\u7E36
\u7F15\u7E37
\u7F25\u7E39
\u603B\u7E3D
\u7EE9\u7E3E
\u7EF7\u7E43
\u7F2B\u7E45
\u7F2A\u7E46
\u7F2F\u7E52
\u7EC7\u7E54
\u7F2E\u7E55
\u7F2D\u7E5A
\u7ED5\u7E5E
\u7EE3\u7E61
\u7F0B\u7E62
\u7EF3\u7E69
\u7ED8\u7E6A
\u8327<\u7E6D
\u7F30\u97C1\u7E6E
\u7F33\u7E6F
\u7F32\u7E70
\u7F34\u7E73
\u4341\u7E78
\u7ECE\u7E79
\u7EE7\u7E7C
\u7F24\u7E7D
\u7F31\u7E7E
\u4340\u7E7F
\u98A3\u7E87
\u7F2C\u7E88
\u7EA9\u7E8A
\u7EED\u7E8C
\u7D2F<\u7E8D
\u7F20\u7E8F
\u7F28\u7E93
\u7EA4\u7E96
\u7F35\u7E98
\u7F06\u7E9C
\u94B5\u7F3D
\u7F42\u7F4C
\u7F5A\u7F70
\u9A82\u7F75
\u7F62\u7F77
\u7F57\u7F85
\u7F74\u7F86
\u7F81\u7F88
\u8288\u7F8B
\u7F9F\u7FA5
\u4E49\u7FA9
\u4E60\u7FD2
\u7FDA\u7FEC
\u7FD8\u7FF9
\u7FD9\u7FFD
\u8027\u802C
\u8022\u802E
\u5723<\u8056
\u95FB\u805E
\u8054\u806F
\u806A\u8070
\u58F0\u8072
\u8038\u8073
\u8069\u8075
\u8042\u8076
\u804C\u8077
\u804D\u8079
\u542C<\u807D
\u804B\u807E
\u8083\u8085
\u80C1\u8105
\u8109\u8108
\u80EB\u811B
\u8131\u812B
\u80C0\u8139
\u80BE\u814E
\u80E8\u8156
\u8136\u8161
\u8111\u8166
\u80BF\u816B
\u811A\u8173
\u80A0\u8178
\u817D\u8183
\u8158\u8195
\u80A4\u819A
\u43DD\u819E
\u80F6\u81A0
\u817B\u81A9
\u80C6\u81BD
\u810D\u81BE
\u8113\u81BF
\u442A\u81C7
\u8138\u81C9
\u8110\u81CD
\u8191\u81CF
\u814A<\u81D8
\u80EA\u81DA
\u810F\u9AD2\u81DF
\u8114\u81E0
\u81DC\u81E2
\u4E34\u81E8
\u4E0E<\u8207
\u5174\u8208
\u4E3E\u8209
\u65E7\u820A
\u8231\u8259
\u8223\u8264
\u8230\u8266
\u823B\u826B
\u8270\u8271
\u8273\u8277
\u520D\u82BB
\u82CE\u82E7
\u5179\u8332
\u8346\u834A
\u5E84<\u838A
\u830E\u8396
\u835A\u83A2
\u82CB\u83A7
\u534E\u83EF
\u82CC\u8407
\u83B1\u840A
\u4E07<\u842C
\u835D\u8434
\u83B4\u8435
\u53F6\u8449
\u836D\u8452
\u7740>\u8457
\u836E\u8464
\u82C7\u8466
\u8364\u8477
\u83B3\u8494
\u8385\u849E
\u82CD\u84BC
\u836A\u84C0
\u76D6\u84CB
\u83B2\u84EE
\u82C1\u84EF
\u83BC\u84F4
\u835C\u84FD
\u848C\u851E
\u848B\u8523
\u8471\u8525
\u8311\u8526
\u836B\u852D
\u8368\u8541
\u8487\u8546
\u835E\u854E
\u836C\u8552
\u82B8<\u8553
\u83B8\u8555
\u835B\u8558
\u8489\u8562
\u829C\u856A
\u8427\u856D
\u84E3\u8577
\u8570\u8580
\u835F\u8588
\u84DF\u858A
\u8297\u858C
\u8537\u8594
\u8359\u8598
\u83B6\u859F
\u8350<\u85A6
\u8428\u85A9
\u44D5\u85B3
\u82E7<\u85B4
\u44D3\u85B5
\u8360\u85BA
\u84DD\u85CD
\u8369\u85CE
\u827A\u85DD
\u836F\u85E5
\u85AE\u85EA
\u82C8\u85F6
\u853C\u85F9
\u853A\u85FA
\u841A\u8600
\u8572\u8604
\u82A6\u8606
\u82CF\u8607
\u8574\u860A
\u82F9<\u860B
\u85D3\u861A
\u8539\u861E
\u830F\u8622
\u5170\u862D
\u84E0\u863A
\u841D\u863F
\u8502<\u8646
\u5904\u8655
\u865A\u865B
\u864F\u865C
\u53F7\u865F
\u4E8F\u8667
\u866C\u866F
\u86F1\u86FA
\u8715\u86FB
\u86AC\u8706
\u8680\u8755
\u732C\u875F
\u867E\u8766
\u8717\u8778
\u86F3\u8784
\u8682\u879E
\u8424\u87A2
\u45D6\u87AE
\u877C\u87BB
\u8780\u87BF
\u86F0\u87C4
\u8748\u87C8
\u87A8\u87CE
\u866E<\u87E3
\u8749\u87EC
\u86F2\u87EF
\u866B<\u87F2
\u86CF\u87F6
\u8681\u87FB
\u8683\u8801
\u8747\u8805
\u867F\u8806
\u86F4\u8810
\u877E\u8811
\u8721<\u881F
\u86CE\u8823
\u87CF\u8828
\u86CA\u8831
\u8695<\u8836
\u86EE\u883B
\u672F\u8853
\u540C<\u8855
\u80E1<\u9B0D\u885A
\u536B\u885B
\u886E\u889E
\u8885\u88CA
\u8865\u88DC
\u88C5\u88DD
\u91CC<\u88E1
\u5236<\u88FD
\u88C8\u890C
\u8886\u8918
\u88E4\u8932
\u88E2\u8933
\u891B\u8938
\u4EB5\u893B
\u88E5\u8947
\u891D\u894C
\u88AF\u894F
\u8884\u8956
\u88E3\u895D
\u88C6\u8960
\u8934\u8964
\u889C\u896A
\u4653\u896C
\u886C\u896F
\u88AD\u8972
\u8955\u8974
\u89C1\u898B
\u89C3\u898E
\u89C4\u898F
\u89C5\u8993
\u89C6\u8996
\u89C7\u8998
\u89CB\u89A1
\u89CD\u89A5
\u89CE\u89A6
\u4EB2\u89AA
\u89CA\u89AC
\u89CF\u89AF
\u89D0\u89B2
\u89D1\u89B7
\u89C9\u89BA
\u89C8\u89BD
\u89CC\u89BF
\u89C2\u89C0
\u89DE\u89F4
\u89EF\u89F6
\u89E6<\u89F8
\u8BA0\u8A01
\u8BA2\u8A02
\u8BA3\u8A03
\u8BA1\u8A08
\u8BAF\u8A0A
\u8BA7\u8A0C
\u8BA8\u8A0E
\u8BA6\u8A10
\u8BB1\u8A12
\u8BAD\u8A13
\u8BAA\u8A15
\u8BAB\u8A16
\u8BAC\u8A17
\u8BB0\u8A18
\u8BB9\u8A1B
\u8BB6\u8A1D
\u8BBC\u8A1F
\u4723\u8A22
\u8BC0\u8A23
\u8BB7\u8A25
\u8BBB\u8A29
\u8BBF\u8A2A
\u8BBE\u8A2D
\u8BB8\u8A31
\u8BC9\u8A34
\u8BC3\u8A36
\u8BCA\u8A3A
\u6CE8<\u8A3B
\u8BC2\u8A41
\u8BCB\u8A46
\u8BB5\u8A4E
\u8BC8\u8A50
\u8BD2\u8A52
\u8BCF\u8A54
\u8BC4\u8A55
\u8BD0\u8A56
\u8BC7\u8A57
\u8BCE\u8A58
\u8BC5\u8A5B
\u8BCD\u8A5E
\u548F\u8A60
\u8BE9\u8A61
\u8BE2\u8A62
\u8BE3\u8A63
\u8BD5\u8A66
\u8BD7\u8A69
\u8BE7\u8A6B
\u8BDF\u8A6C
\u8BE1\u8A6D
\u8BE0\u8A6E
\u8BD8\u8A70
\u8BDD\u8A71
\u8BE5\u8A72
\u8BE6\u8A73
\u8BDC\u8A75
\u8BD9\u8A7C
\u8BD6\u8A7F
\u8BD4\u8A84
\u8BDB\u8A85
\u8BD3\u8A86
\u5938<\u8A87
\u5FD7<\u8A8C
\u8BA4\u8A8D
\u8BF3\u8A91
\u8BF6\u8A92
\u8BDE\u8A95
\u8BF1\u8A98
\u8BEE\u8A9A
\u8BED\u8A9E
\u8BDA\u8AA0
\u8BEB\u8AA1
\u8BEC\u8AA3
\u8BEF\u8AA4
\u8BF0\u8AA5
\u8BF5\u8AA6
\u8BF2\u8AA8
\u8BF4\u8AAA
\u8C01\u8AB0
\u8BFE\u8AB2
\u8C07\u8AB6
\u8BFD\u8AB9
\u8C0A\u8ABC
\u8A1A\u8ABE
\u8C03\u8ABF
\u8C04\u8AC2
\u8C06\u8AC4
\u8C08\u8AC7
\u8BFF\u8AC9
\u8BF7\u8ACB
\u8BE4\u8ACD
\u8BF9\u8ACF
\u8BFC\u8AD1
\u8C05\u8AD2
\u8BBA\u8AD6
\u8C02\u8AD7
\u8C00\u8ADB
\u8C0D\u8ADC
\u8C1E\u8ADD
\u8C1D\u8ADE
\u8BE8\u8AE2
\u8C14\u8AE4
\u8C1B\u8AE6
\u8C10\u8AE7
\u8C0F\u8AEB
\u8C15\u8AED
\u8C18\u8AEE
\u8BB3\u8AF1
\u8C19\u8AF3
\u8C0C\u8AF6
\u8BBD\u8AF7
\u8BF8\u8AF8
\u8C1A\u8AFA
\u8C16\u8AFC
\u8BFA\u8AFE
\u8C0B\u8B00
\u8C12\u8B01
\u8C13\u8B02
\u8A8A\u8B04
\u8BCC\u8B05
\u8C0E\u8B0A
\u8C1C\u8B0E
\u8C27\u8B10
\u8C11\u8B14
\u8C21\u8B16
\u8C24\u8B17
\u8C26\u8B19
\u8C25\u8B1A
\u8BB2\u8B1B
\u8C22\u8B1D
\u8C23\u8B20
\u8C1F\u8B28
\u8C2A\u8B2B
\u8C2C\u8B2C
\u8C2B\u8B7E\u8B2D
\u8BB4\u8B33
\u8C28\u8B39
\u8C29\u8B3E
\u8BC1\u8B49
\u8C32\u8B4E
\u8BA5\u8B4F
\u8C2E\u8B56
\u8BC6\u8B58
\u8C2F\u8B59
\u8C2D\u8B5A
\u8C31\u8B5C
\u8C35\u8B6B
\u8BD1\u8B6F
\u8BAE\u8B70
\u8C34\u8B74
\u62A4\u8B77
\u8BEA\u8B78
\u46D3\u8B7C
\u8A89\u8B7D
\u8BFB\u8B80
\u8C09\u8B85
\u53D8\u8B8A
\u8A5F\u8B8B
\u4729\u8B8C
\u96E0\u8B8E
\u8C17\u8B92
\u8BA9\u8B93
\u8C30\u8B95
\u8C36\u8B96
\u8C20\u8B9C
\u8C33\u8B9E
\u5C82\u8C48
\u7AD6\u8C4E
\u4E30<\u8C50
\u732A\u8C6C
\u8C6E\u8C76
\u732B\u8C93
\u4759\u8C99
\u8D1D\u8C9D
\u8D1E\u8C9E
\u8D20\u8C9F
\u8D1F\u8CA0
\u8D22\u8CA1
\u8D21\u8CA2
\u8D2B\u8CA7
\u8D27\u8CA8
\u8D29\u8CA9
\u8D2A\u8CAA
\u8D2F\u8CAB
\u8D23\u8CAC
\u8D2E\u8CAF
\u8D33\u8CB0
\u8D40\u8CB2
\u8D30\u8CB3
\u8D35\u8CB4
\u8D2C\u8CB6
\u4E70\u8CB7
\u8D37\u8CB8
\u8D36\u8CBA
\u8D39\u8CBB
\u8D34\u8CBC
\u8D3B\u8CBD
\u8D38\u8CBF
\u8D3A\u8CC0
\u8D32\u8CC1
\u8D42\u8CC2
\u8D41\u8CC3
\u8D3F\u8CC4
\u8D45\u8CC5
\u8D44\u8CC7
\u8D3E\u8CC8
\u8D3C\u8CCA
\u8D48\u8CD1
\u8D4A\u8CD2
\u5BBE\u8CD3
\u8D47\u8CD5
\u8D52\u8CD9
\u8D49\u8CDA
\u8D50\u8CDC
\u8D4F\u8CDE
\u8D54\u8CE0
\u8D53\u8CE1
\u8D24\u8CE2
\u5356\u8CE3
\u8D31\u8CE4
\u8D4B\u8CE6
\u8D55\u8CE7
\u8D28\u8CEA
\u8D26\u8CEC
\u8D4C\u8CED
\u4790\u8CF0
\u8D56\u8CF4
\u8D57\u8CF5
\u8D5A\u8CFA
\u8D59\u8CFB
\u8D2D\u8CFC
\u8D5B\u8CFD
\u8D5C\u8CFE
\u8D3D\u8D04
\u8D58\u8D05
\u8D5F\u8D07
\u8D60\u8D08
\u8D5E\u8D0A
\u8D5D\u8D17\u8D0B
\u8D61\u8D0D
\u8D62\u8D0F
\u8D46\u8D10
\u8D43\u8D13
\u8D51\u8D14
\u8D4E\u8D16
\u8D63\u8D1B
\u8D6A\u8D6C
\u8D76<\u8D95
\u8D75\u8D99
\u8D8B\u8DA8
\u8DB1\u8DB2
\u8FF9\u8DE1
\u8DF5\u8E10
\u8E0A<\u8E34
\u8DC4\u8E4C
\u8DF8\u8E55
\u8E52\u8E63
\u8E2A\u8E64
\u8DF7\u8E7A
\u8DF6\u8E82
\u8DB8\u8E89
\u8E0C\u8E8A
\u8DFB\u8E8B
\u8DC3\u8E8D
\u47E2\u8E8E
\u8E2F\u8E91
\u8DDE\u8E92
\u8E2C\u8E93
\u8E70\u8E95
\u8DF9\u8E9A
\u8E51\u8EA1
\u8E7F\u8EA5
\u8E9C\u8EA6
\u8E8F\u8EAA
\u8EAF\u8EC0
\u8F66\u8ECA
\u8F67\u8ECB
\u8F68\u8ECC
\u519B\u8ECD
\u8F6A\u8ED1
\u8F69\u8ED2
\u8F6B\u8ED4
\u8F6D\u8EDB
\u8F6F\u8EDF
\u8F77\u8EE4
\u8F78\u8EEB
\u8F71\u8EF2
\u8F74\u8EF8
\u8F75\u8EF9
\u8F7A\u8EFA
\u8F72\u8EFB
\u8F76\u8EFC
\u8F7C\u8EFE
\u8F83\u8F03
\u8F82\u8F05
\u8F81\u8F07
\u8F80\u8F08
\u8F7D\u8F09
\u8F7E\u8F0A
\u8F84\u8F12
\u633D<\u8F13
\u8F85\u8F14
\u8F7B\u8F15
\u8F86\u8F1B
\u8F8E\u8F1C
\u8F89\u8F1D
\u8F8B\u8F1E
\u8F8D\u8F1F
\u8F8A\u8F25
\u8F87\u8F26
\u8F88\u8F29
\u8F6E\u8F2A
\u8F8C\u8F2C
\u8F91\u8F2F
\u8F8F\u8F33
\u8F93\u8F38
\u8F90\u8F3B
\u8F97\u8F3E
\u8206\u8F3F
\u8F92\u8F40
\u6BC2\u8F42
\u8F96\u8F44
\u8F95\u8F45
\u8F98\u8F46
\u8F6C\u8F49
\u8F99\u8F4D
\u8F7F\u8F4E
\u8F9A\u8F54
\u8F70\u8F5F
\u8F94\u8F61
\u8F79\u8F62
\u8F73\u8F64
\u529E\u8FA6
\u8F9E\u8FAD
\u8FAB\u8FAE
\u8FA9\u8FAF
\u519C\u8FB2
\u8FF3\u9015
\u8FD9\u9019
\u8FDE\u9023
\u8FDB\u9032
\u8FD0\u904B
\u8FC7\u904E
\u8FBE\u9054
\u8FDD\u9055
\u9065\u9059
\u900A\u905C
\u9012\u905E
\u8FDC\u9060
\u9002<\u9069
\u8FDF\u9072
\u8FC1\u9077
\u9009\u9078
\u9057\u907A
\u8FBD\u907C
\u8FC8\u9081
\u8FD8\u9084
\u8FE9\u9087
\u8FB9\u908A
\u903B\u908F
\u9026\u9090
\u90CF\u90DF
\u90AE\u90F5
\u90D3\u9106
\u4E61\u9109
\u90B9\u9112
\u90AC\u9114
\u90E7\u9116
\u9093\u9127
\u90D1\u912D
\u90BB\u9130
\u90F8\u9132
\u90BA\u9134
\u90D0\u9136
\u909D\u913A
\u9142\u9147
\u90E6\u9148
\u4E11<\u919C
\u915D\u919E
\u533B\u91AB
\u9171\u91AC
\u9166\u91B1
\u917F\u91C0
\u8845\u91C1
\u917E\u91C3
\u917D\u91C5
\u91CA\u91CB
\u5398<\u91D0
\u9485\u91D2
\u9486\u91D3
\u9487\u91D4
\u948C\u91D5
\u948A\u91D7
\u9489\u91D8
\u948B\u91D9
\u9488\u91DD
\u9493\u91E3
\u9490\u91E4
\u948F\u91E7
\u9492\u91E9
\u9497\u91F5
\u948D\u91F7
\u9495\u91F9
\u948E\u91FA
\u497A\u91FE
\u94AF\u9200
\u94AB\u9201
\u9498\u9203
\u94AD\u9204
\u949A\u9208
\u94A0\u9209
\u949D\u920D
\u94A9\u9264\u920E
\u94A4\u9210
\u94A3\u9211
\u9491\u9212
\u949E\u9214
\u94AE\u9215
\u94A7\u921E
\u9499\u9223
\u94AC\u9225
\u949B\u9226
\u94AA\u9227
\u94CC\u922E
\u94C8\u9230
\u94B6\u9233
\u94C3\u9234
\u94B4\u9237
\u94B9\u9238
\u94CD\u9239
\u94B0\u923A
\u94B8\u923D
\u94C0\u923E
\u94BF\u923F
\u94BE\u9240
\u949C\u9245
\u94CA\u9248
\u94C9\u9249
\u94C7\u924B
\u94CB\u924D
\u94C2\u9251
\u94B7\u9255
\u94B3\u9257
\u94C6\u925A
\u94C5\u925B
\u94BA\u925E
\u94B2\u9266
\u9FED\u9448\u9268
\u94BC\u926C
\u94BD\u926D
\u94CF\u9276
\u94F0\u9278
\u94D2\u927A
\u94EC\u927B
\u94EA\u927F
\u94F6\u9280
\u94F3\u9283
\u94DC\u9285
\u94DA\u928D
\u94E3\u9291
\u94E8\u9293
\u94E2\u9296
\u94ED\u9298
\u94EB\u929A
\u94E6\u929B
\u8854\u929C
\u94D1\u92A0
\u94F7\u92A3
\u94F1\u92A5
\u94DF\u92A6
\u94F5\u92A8
\u94E5\u92A9
\u94D5\u92AA
\u94EF\u92AB
\u94D0\u92AC
\u94DE\u92B1
\u9510\u92B3
\u9500\u92B7
\u9508\u93FD\u92B9
\u9511\u92BB
\u9509\u92BC
\u94DD\u92C1
\u9512\u92C3
\u950C\u92C5
\u94A1\u92C7
\u94E4\u92CC
\u94D7\u92CF
\u950B\u92D2
\u94FB\u92D9
\u950A\u92DD
\u9513\u92DF
\u94D8\u92E3
\u9504\u92E4
\u9503\u92E5
\u9514\u92E6
\u9507\u92E8
\u94D3\u92E9
\u94FA\u92EA
\u94D6\u92EE
\u9506\u92EF
\u9502\u92F0
\u94FD\u92F1
\u950D\u92F6
\u952F\u92F8
\u94A2\u92FC
\u951E\u9301
\u5F55\u9304
\u9516\u9306
\u952B\u9307
\u9529\u9308
\u94D4\u930F
\u9525\u9310
\u9515\u9312
\u951F\u9315
\u9524\u9318
\u9531\u9319
\u94EE\u931A
\u951B\u931B
\u952C\u931F
\u952D\u9320
\u951C\u9321
\u94B1\u9322
\u9526\u9326
\u951A\u9328
\u9520\u9329
\u9521\u932B
\u9522\u932E
\u9519\u932F
\u9530\u9333
\u8868<\u9336
\u94FC\u9338
\u951D\u9340
\u9528\u9341
\u952A\u9343
\u9494\u9346
\u9534\u9347
\u9533\u9348
\u9505\u934B
\u9540\u934D
\u9537\u9354
\u94E1\u9358
\u9496\u935A
\u953B\u935B
\u953D\u9360
\u9538\u9364
\u9532\u9365
\u9518\u9369
\u9539\u936C
\u953E\u9370
\u952E\u9375
\u9536\u9376
\u9517\u937A
\u949F\u9418\u937E
\u9541\u9382
\u953F\u9384
\u9545\u9387
\u9551\u938A
\u9555\u9394
\u9501\u9396
\u9549\u9398
\u9548\u939B
\u9543\u93A1
\u94A8\u93A2
\u84E5\u93A3
\u954F\u93A6
\u94E0\u93A7
\u94E9\u93A9
\u953C\u93AA
\u9550\u93AC
\u9547\u93AE
\u9552\u93B0
\u954B\u93B2
\u954D\u93B3
\u9553\u93B5
\u9FD4\u93B6
\u954E\u93BF
\u955E\u93C3
\u955F\u93C7
\u94FE\u93C8
\u9546\u93CC
\u9559\u93CD
\u9560\u93D0
\u955D\u93D1
\u94FF\u93D7
\u9535\u93D8
\u9557\u93DC
\u9558\u93DD
\u955B\u93DE
\u94F2\u93DF
\u955C\u93E1
\u9556\u93E2
\u9542\u93E4
\u933E\u93E8
\u955A\u93F0
\u94E7\u93F5
\u9564\u93F7
\u956A\u93F9
\u497D\u93FA
\u94D9\u9403
\u94F4\u940B
\u9563\u9410
\u94F9\u9412
\u9566\u9413
\u9561\u9414
\u956B\u9419
\u9562\u941D
\u9568\u9420
\u4985\u9425
\u950E\u9426
\u950F\u9427
\u9544\u9428
\u954C\u942B
\u9570\u942E
\u4983\u942F
\u956F\u9432
\u956D\u9433
\u94C1\u9435
\u956E\u9436
\u94CE\u9438
\u94DB\u943A
\u9571\u943F
\u94F8\u9444
\u956C\u944A
\u9554\u944C
\u9274\u9452
\u9572\u9454
\u9527\u9455
\u9574\u945E
\u94C4\u9460
\u9573\u9463
\u9565\u9465
\u9567\u946D
\u94A5\u9470
\u9575\u9471
\u9576\u9472
\u954A\u9477
\u9569\u9479
\u9523\u947C
\u94BB\u947D
\u92AE\u947E
\u51FF\u947F
\u4986\u9481
\u957F\u9577
\u95E8\u9580
\u95E9\u9582
\u95EA\u9583
\u95EB\u9586
\u95EC\u9588
\u95ED\u9589
\u5F00\u958B
\u95F6\u958C
\u95F3\u958E
\u95F0\u958F
\u95F2\u9592\u9591
\u95F4\u9593
\u95F5\u9594
\u95F8\u9598
\u9602\u95A1
\u9601\u95A3
\u9600\u95A5
\u95FA\u95A8
\u95FD\u95A9
\u9603\u95AB
\u9606\u95AC
\u95FE\u95AD
\u9605\u95B1
\u960A\u95B6
\u9609\u95B9
\u960E\u95BB
\u960F\u95BC
\u960D\u95BD
\u9608\u95BE
\u960C\u95BF
\u9612\u95C3
\u677F<\u95C6
\u95F1\u95C8
\u9614\u95CA
\u9615\u95CB
\u9611\u95CC
\u9607\u95CD
\u9617\u95D0
\u9618\u95D2
\u95FF\u95D3
\u9616\u95D4
\u9619\u95D5
\u95EF\u95D6
\u5173\u95DC
\u961A\u95DE
\u9613\u95E0
\u9610\u95E1
\u8F9F<\u95E2
\u961B\u95E4
\u95FC\u95E5
\u5742>\u962A
\u9649\u9658
\u9655\u965D
\u9635\u9663
\u9634\u9670
\u9648\u9673
\u9646\u9678
\u9633\u967D
\u9667\u9689
\u961F\u968A
\u9636\u968E
\u9668\u9695
\u9645\u969B
\u968F\u96A8
\u9669\u96AA
\u9666\u96AF
\u9690\u96B1
\u9647\u96B4
\u96B6\u96B8
\u53EA<\u96BB
\u96BD\u96CB
\u867D\u96D6
\u53CC\u96D9
\u96CF\u96DB
\u6742\u96DC
\u9E21\u96DE
\u79BB<\u96E2
\u96BE\u96E3
\u4E91<\u96F2
\u7535\u96FB
\u9721\u9722
\u96FE\u9727
\u9701\u973D
\u96F3\u9742
\u972D\u9744
\u53C7\u9746
\u7075\u9748
\u53C6\u9749
\u9753\u975A
\u9759\u975C
\u4A44\u9766
\u9765\u9768
\u9F17\u9780
\u5DE9\u978F
\u9792\u97BD
\u9791\u97C3
\u97AF\u97C9
\u97E6\u97CB
\u97E7\u97CC
\u97E8\u97CD
\u97E9\u97D3
\u97EA\u97D9
\u97EC\u97DC
\u97EB\u97DE
\u97F5\u97FB
\u54CD\u97FF
\u9875\u9801
\u9876\u9802
\u9877\u9803
\u9879\u9805
\u987A\u9806
\u9878\u9807
\u987B\u9B1A\u9808
\u987C\u980A
\u9882\u980C
\u9880\u980E
\u9883\u980F
\u9884\u9810
\u987D\u9811
\u9881\u9812
\u987F\u9813
\u9887\u9817
\u9886\u9818
\u988C\u981C
\u9889\u9821
\u9890\u9824
\u988F\u9826
\u5934\u982D
\u9892\u982E
\u988A\u9830
\u988B\u9832
\u9895\u9834
\u9894\u9837
\u9888\u9838
\u9893\u9839
\u9891\u983B
\u9897\u9846
\u9898\u984C
\u989D\u984D
\u989A\u984E
\u989C\u984F
\u9899\u9852
\u989B\u9853
\u613F<\u9858
\u98A1\u9859
\u98A0\u985B
\u7C7B\u985E
\u989F\u9862
\u98A2\u9865
\u987E\u9867
\u98A4\u986B
\u98A5\u986C
\u663E\u986F
\u98A6\u9870
\u9885\u9871
\u989E\u9873
\u98A7\u9874
\u98CE\u98A8
\u98D0\u98AD
\u98D1\u98AE
\u98D2\u98AF
\u522E<\u98B3
\u98D3\u98B6
\u98D4\u98B8
\u98CF\u98BA
\u98D6\u98BB
\u98D5\u98BC
\u98D7\u98C0
\u98D8\u98C4
\u98D9\u98C6
\u98DA\u98C8
\u98DE\u98DB
\u9963\u98E0
\u9965\u98E2
\u9964\u98E3
\u9966\u98E5
\u9968\u98E9
\u996A\u98EA
\u996B\u98EB
\u996C\u98ED
\u996D\u98EF
\u996E\u98F2
\u9974\u98F4
\u9972\u98FC
\u9971\u98FD
\u9970\u98FE
\u9973\u98FF
\u997A\u9903
\u9978\u9904
\u997C\u9905
\u9977\u9909
\u517B\u990A
\u9975\u990C
\u9979\u990E
\u997B\u990F
\u997D\u9911
\u9981\u9912
\u997F\u9913
\u9982\u9915
\u997E\u9916
\u4F59<\u9918
\u80B4<\u991A
\u9984\u991B
\u9983\u991C
\u996F\u991E
\u9985\u9921
\u9986\u9928
\u7CC7\u9931
\u9967\u9933
\u9989\u9936
\u9987\u9937
\u998E\u993A
\u9969\u993C
\u998F\u993E
\u998A\u993F
\u998C\u9941
\u998D\u9943
\u9992\u9945
\u9990\u9948
\u9991\u9949
\u9993\u994A
\u9988\u994B
\u9994\u994C
\u9976\u9952
\u98E8\u9957
\u990D\u995C
\u998B\u995E
\u9995\u9962
\u9A6C\u99AC
\u9A6D\u99AD
\u51AF\u99AE
\u9A6E\u99B1
\u9A70\u99B3
\u9A6F\u99B4
\u9A72\u99B9
\u9A73\u99C1
\u9A7B\u99D0
\u9A7D\u99D1
\u9A79\u99D2
\u9A75\u99D4
\u9A7E\u99D5
\u9A80\u99D8
\u9A78\u99D9
\u9A76\u99DB
\u9A7C\u99DD
\u9A77\u99DF
\u9A88\u99E2
\u9A87\u99ED
\u9A83\u99F0
\u9A86\u99F1
\u9A8E\u99F8
\u9A8F\u99FF
\u9A8B\u9A01
\u9A8D\u9A02
\u9A93\u9A05
\u9A94\u9A0C
\u9A92\u9A0D
\u9A91\u9A0E
\u9A90\u9A0F
\u9A9B\u9A16
\u9A97\u9A19
\u9A99\u9A24
\u4BC4\u9A27
\u9A9E\u9A2B
\u9A98\u9A2D
\u9A9D\u9A2E
\u817E\u9A30
\u9A7A\u9A36
\u9A9A\u9A37
\u9A9F\u9A38
\u9AA1\u9A3E
\u84E6\u9A40
\u9A9C\u9A41
\u9A96\u9A42
\u9AA0\u9A43
\u9AA2\u9A44
\u9A71\u9A45
\u9A85\u9A4A
\u9A95\u9A4C
\u9A81\u9A4D
\u9AA3\u9A4F
\u9A84\u9A55
\u9A8C\u9A57
\u60CA<\u9A5A
\u9A7F\u9A5B
\u9AA4\u9A5F
\u9A74\u9A62
\u9AA7\u9A64
\u9AA5\u9A65
\u9AA6\u9A66
\u9A8A\u9A6A
\u9A89\u9A6B
\u80AE<\u9AAF
\u9AC5\u9ACF
\u4F53<\u9AD4
\u9ACC\u9AD5
\u9ACB\u9AD6
\u677E<\u9B06
\u9B13\u9B22
\u6597<\u9B25
\u95F9\u9B27
\u960B\u9B29
\u9604\u9B2E
\u90C1<\u9B31
\u9B36\u9B39
\u9B49\u9B4E
\u9B47\u9B58
\u9C7C\u9B5A
\u9C7D\u9B5B
\u9C7E\u9B62
\u9C80\u9B68
\u9C81\u9B6F
\u9C82\u9B74
\u9C7F\u9B77
\u9C84\u9B7A
\u9C85\u9B81
\u9C86\u9B83
\u9C8C\u9B8A
\u9C89\u9B8B
\u9C8F\u9B8D
\u9C87\u9B8E
\u9C90\u9B90
\u9C8D\u9B91
\u9C8B\u9B92
\u9C8A\u9B93
\u9C92\u9B9A
\u9C98\u9B9C
\u9C95\u9B9E
\u4C9F\u9BA3
\u9C96\u9BA6
\u9C94\u9BAA
\u9C9B\u9BAB
\u9C91\u9BAD
\u9C9C\u9BAE
\u9C93\u9BB3
\u9CAA\u9BB6
\u9C9D\u9BBA
\u9CA7\u9BC0
\u9CA0\u9BC1
\u9CA9\u9BC7
\u9CA4\u9BC9
\u9CA8\u9BCA
\u9CAC\u9BD2
\u9CBB\u9BD4
\u9CAF\u9BD5
\u9CAD\u9BD6
\u9C9E\u9BD7
\u9CB7\u9BDB
\u9CB4\u9BDD
\u9CB1\u9BE1
\u9CB5\u9BE2
\u9CB2\u9BE4
\u9CB3\u9BE7
\u9CB8\u9BE8
\u9CAE\u9BEA
\u9CB0\u9BEB
\u9CB6\u9BF0
\u9CBA\u9BF4
\u9CC0\u9BF7
\u9CAB\u9BFD
\u9CCA\u9BFF
\u9CC8\u9C01
\u9C97\u9C02
\u9CC2\u9C03
\u4CA0\u9C06
\u9CBD\u9C08
\u9CC7\u9C09
\u4CA1\u9C0C
\u9CC5\u9C0D
\u9CBE\u9C0F
\u9CC4\u9C77\u9C10
\u9CC6\u9C12
\u9CC3\u9C13
\u9CD2\u9C1C
\u9CD1\u9C1F
\u9CCB\u9C20
\u9CA5\u9C23
\u9CCF\u9C25
\u4CA2\u9C27
\u9CCE\u9C28
\u9CD0\u9C29
\u9CCD\u9C2D
\u9CC1\u9C2E
\u9CA2\u9C31
\u9CCC\u9C32
\u9CD3\u9C33
\u9CD8\u9C35
\u9CA6\u9C37
\u9CA3\u9C39
\u9CB9\u9C3A
\u9CD7\u9C3B
\u9CDB\u9C3C
\u9CD4\u9C3E
\u9CC9\u9C42
\u9CD9\u9C45
\u9CD5\u9C48
\u9CD6\u9C49
\u9CDF\u9C52
\u9CDD\u9C54
\u9CDC\u9C56
\u9CDE\u9C57
\u9C9F\u9C58
\u9CBC\u9C5D
\u9C8E\u9C5F
\u9C99\u9C60
\u9CE3\u9C63
\u9CE1\u9C64
\u9CE2\u9C67
\u9CBF\u9C68
\u9C9A\u9C6D
\u9CE0\u9C6F
\u9C88\u9C78
\u9CA1\u9C7A
\u9E1F\u9CE5
\u51EB\u9CE7
\u9E20\u9CE9
\u9E24\u9CF2
\u51E4\u9CF3
\u9E23\u9CF4
\u9E22\u9CF6
\u4D13\u9CFE
\u9E29\u9D06
\u9E28\u9D07
\u9E26\u9D09
\u9E30\u9D12
\u9E35\u9D15
\u9E33\u9D1B
\u9E32\u9D1D
\u9E2E\u9D1E
\u9E31\u9D1F
\u9E2A\u9D23
\u9E2F\u9D26
\u9E2D\u9D28
\u9E38\u9D2F
\u9E39\u9D30
\u9E3B\u9D34
\u4D15\u9D37
\u9E3F\u9D3B
\u9E3D\u9D3F
\u4D14\u9D41
\u9E3A\u9D42
\u9E3C\u9D43
\u9E40\u9D50
\u9E43\u9D51
\u9E46\u9D52
\u9E41\u9D53
\u9E48\u9D5C
\u9E45\u9D5D
\u9E44\u9D60
\u9E49\u9D61
\u9E4C\u9D6A
\u9E4F\u9D6C
\u9E50\u9D6E
\u9E4E\u9D6F
\u9E4A\u9D72
\u9E53\u9D77
\u9E4D\u9D7E
\u4D16\u9D84
\u9E2B\u9D87
\u9E51\u9D89
\u9E52\u9D8A
\u9E4B\u9D93
\u9E59\u9D96
\u9E55\u9D98
\u9E57\u9D9A
\u9E56\u9DA1
\u9E5B\u9DA5
\u9E5C\u9DA9
\u4D17\u9DAA
\u9E27\u9DAC
\u83BA\u9DAF
\u9E5F\u9DB2
\u9E64\u9DB4
\u9E60\u9DB9
\u9E61\u9DBA
\u9E58\u9DBB
\u9E63\u9DBC
\u9E5A\u9DC0
\u9E62\u9DC1
\u9E5E\u9DC2
\u4D18\u9DC9\u9DC8
\u9E5D\u9DCA
\u9E67\u9DD3
\u9E65\u9DD6
\u9E25\u9DD7
\u9E37\u9DD9
\u9E68\u9DDA
\u9E36\u9DE5
\u9E6A\u9DE6
\u9E54\u9DEB
\u9E69\u9DEF
\u9E6B\u9DF2
\u9E47\u9DF3
\u9E6C\u9DF8
\u9E70\u9DF9
\u9E6D\u9DFA
\u9E34\u9DFD
\u4D19\u9E0A\u9DFF
\u3D89\u9E02
\u9E6F\u9E07
\u9E71\u9E0C
\u9E72\u9E0F
\u9E2C\u9E15
\u9E74\u9E18
\u9E66\u9E1A
\u9E73\u9E1B
\u9E42\u9E1D
\u9E3E\u9E1E
\u5364\u9E75
\u54B8<\u9E79
\u9E7E\u9E7A
\u76D0\u9E7D
\u4E3D\u9E97
\u9EA6\u9EA5
\u9EB8\u9EA9
\u66F2<\u9EAF
\u9EB9>\u9EB4
\u9762<\u9EB5
\u9EC4\u9EC3
\u9EC9\u9ECC
\u70B9\u9EDE
\u515A<\u9EE8
\u9EEA\u9EF2
\u9EE1\u9EF6
\u9EE9\u9EF7
\u9EFE\u9EFD
\u9F0B\u9EFF
\u9F0D\u9F09
\u9F39\u9F34
\u9F50\u9F4A
\u658B\u9F4B
\u8D4D\u9F4E
\u9F51\u9F4F
\u9F7F\u9F52
\u9F80\u9F54
\u9F81\u9F55
\u9F82\u9F57
\u9F85\u9F59
\u9F87\u9F5C
\u9F83\u9F5F
\u9F86\u9F60
\u9F84\u9F61
\u51FA<\u9F63
\u9F88\u9F66
\u9F8A\u9F6A
\u9F89\u9F6C
\u9F8B\u9F72
\u816D\u9F76
\u9F8C\u9F77
\u9F99\u9F8D
\u5390\u9F8E
\u5E9E\u9F90
\u4DAE\u9F91
\u9F9A\u9F94
\u9F9B\u9F95
\u9F9F\u9F9C
\u4724\u9FC1
\u4CA4\u9FD0
\u9FD3\u9FD2`;

  // ../lossless-simplified-chinese/index.js
  var mapping = sc2tc.split(/\r?\n/);
  mapping.push("\u201C\u300C");
  mapping.push("\u2018\u300E");
  mapping.push("\u201D\u300D");
  mapping.push("\u2019\u300F");
  var overwrite = {
    "\u83B7": "\u7372\u7A6B",
    "\u7F30": "\u7E6E\u97C1",
    "\u8D5D": "\u8D0B\u8D17",
    "\u4F2A": "\u50DE\u507D",
    "\u6C47": "\u532F\u5F59",
    "\u575B": "\u58C7\u7F48",
    "\u53F0": "\u81FA\u98B1\u6AAF",
    "\u51B2": "\u6C96\u885D",
    "\u7877": "\u7906\u9E7C",
    "\u7EF1": "\u7DD4\u979D",
    "\u810F": "\u81DF\u9AD2",
    "\u8C2B": "\u8B2D\u8B7E",
    "\u94A9": "\u920E\u9264",
    "\u9FED": "\u9268\u9448",
    "\u9508": "\u92B9\u93FD",
    "\u95F2": "\u9591\u9592",
    "\u987B": "\u9808\u9B1A",
    "\u9CC4": "\u9C10\u9C77"
  };
  var t2s = {};
  var t2s_unsafe1 = {};
  var s2t = {};
  mapping.forEach((line, idx2) => {
    const r = line.match(/(.)(<?)(.+)/u);
    if (!r)
      throw "wrong data format " + idx2;
    let [m4, sc, op, tc] = r;
    let oldtc = tc;
    if (overwrite[sc])
      tc = overwrite[sc];
    if (op == "") {
      if (tc.length == 1) {
        t2s[tc] = sc;
      } else {
        if (tc[0] == ">") {
          t2s_unsafe1[tc.substring(1)] = sc;
        } else {
          t2s[tc[0]] = sc;
          tc = tc.substring(1);
          for (let i = 0; i < tc.length; i++) {
            const cp = tc.codePointAt(i);
            if (!cp)
              break;
            t2s_unsafe1[String.fromCodePoint(cp)] = sc;
          }
        }
      }
    } else {
      if (tc.length == 1) {
        t2s_unsafe1[tc] = sc;
      } else {
        while (tc && tc[0] !== ">") {
          const ch = String.fromCodePoint(tc.codePointAt(0));
          t2s_unsafe1[ch] = sc;
          tc = tc.substring(ch.length);
        }
      }
    }
    tc = oldtc.replace(/\>/g, "");
    if (op == "<") {
      s2t[sc] = tc.replace(sc, "") + sc;
    } else
      s2t[sc] = tc;
  });
  var toSim = (s, mode = 1) => {
    if (!s)
      return s;
    let out = "", i = 0;
    if (!mode)
      return s;
    while (i < s.length) {
      const cp = s.codePointAt(i);
      const ucs4 = String.fromCodePoint(cp);
      if (!ucs4)
        break;
      let sc = t2s[ucs4];
      if (mode == 2 && !sc)
        sc = t2s_unsafe1[ucs4];
      out += sc || ucs4;
      i++;
      if (cp > 65535)
        i++;
    }
    return out;
  };
  var fromSim = (s, mode = 1) => {
    let out = "", i = 0;
    if (!mode || !s)
      return s;
    while (i < s.length && s[i]) {
      const cp = s.codePointAt(i);
      const ucs4 = String.fromCodePoint(cp);
      if (!ucs4)
        break;
      let tc = s2t[ucs4];
      if (!tc) {
        out += ucs4;
      } else if (mode == 1 && !tc.codePointAt(1)) {
        out += tc;
      } else if (mode == 2) {
        out += String.fromCodePoint(tc.codePointAt(0));
      } else if (mode == 3) {
        if (tc.codePointAt(1))
          out += "[" + tc + "]";
        else
          out += tc;
      } else
        out += ucs4;
      i++;
      if (cp > 65535)
        i++;
    }
    return out;
  };

  // ../ptk/fts/inverted.ts
  var Inverted = class {
    constructor(section, postingStart) {
      this.words = new StringArray(section.shift(), { sep: LEMMA_DELIMITER });
      this.bmpwithposting = unpackIntDelta(section.shift());
      this.tokenlinepos = unpackIntDelta(section.shift());
      this.postings = [];
      this.postingStart = postingStart;
      this.bmppostingcount = 0;
      for (let i = 1; i < 65536; i++) {
        if (this.bmpwithposting[i])
          this.bmppostingcount++;
      }
    }
    nPostingOf(s) {
      const out = [];
      const tokens = tokenize(s);
      for (let i = 0; i < tokens.length; i++) {
        const { type, text: text2 } = tokens[i];
        let at = -1;
        if (type == 49 /* CJK_BMP */) {
          const cp = text2.charCodeAt(0);
          at = bsearchNumber(this.bmpwithposting, cp);
          if (this.bmpwithposting[at] !== cp) {
            const cpsim = fromSim(text2).charCodeAt(0);
            at = bsearchNumber(this.bmpwithposting, cpsim);
            if (this.bmpwithposting[at] !== cpsim)
              continue;
          }
        } else if (type >= 16 /* SEARCHABLE */) {
          if (~at)
            at += this.bmppostingcount;
          else {
            let at2 = this.words.find(s);
            if (~at2)
              at = at2 + this.bmppostingcount;
          }
          ;
        }
        out.push(at);
      }
      return out;
    }
  };

  // ../ptk/fts/posting.ts
  var counter = 0;
  var maxspeed = 0;
  var plFind = (arr, v, p = 0) => {
    let speed = 1;
    let p2 = p;
    while (p2 < arr.length) {
      if (v > arr[p2]) {
        speed++;
        if (speed > maxspeed)
          maxspeed = speed;
      } else {
        if (speed <= 1)
          break;
        p2 -= speed;
        speed = 1;
      }
      p2 += speed;
      counter++;
    }
    return p2;
  };
  var plAnd = (pl1, pl2, dist = 1) => {
    let p2 = 0, c2 = 0;
    if (!pl1 || !pl2 || pl1.length == 0 || pl2.length == 0)
      return [];
    const sz = Math.min(pl1.length, pl2.length);
    let out = [];
    for (let p1 = 0; p1 < pl1.length; p1++) {
      let v1 = pl1[p1] + dist;
      let v2 = pl2[p2];
      while (v1 > v2 && p2 < pl2.length)
        v2 = pl2[++p2];
      if (v1 === v2) {
        out[c2++] = v1 - dist;
      }
    }
    return out.slice(0, c2);
  };
  var plCount = (pl, plgroup) => {
    let p = 0, start = 0, end = 0;
    const out = [];
    for (let i = 0; i < plgroup.length; i++) {
      const [from, to] = plgroup[i];
      start = p;
      if (from > pl[p])
        start = plFind(pl, from, p);
      end = start;
      while (pl[end] < to && end < pl.length)
        end++;
      if (end > start) {
        out[i] = end - start;
      } else
        out[i] = 0;
      p = end;
    }
    for (let i = 0; i < out.length; i++) {
      if (typeof out[i] !== "number")
        out[i] = 0;
    }
    return out;
  };
  var plTrim = (pl, from, to) => {
    const at1 = bsearchNumber(pl, from);
    let at2 = bsearchNumber(pl, to) + 1;
    const out = pl.slice(at1, at2);
    while (out[0] < from)
      out.shift();
    while (out[out.length - 1] > to)
      out.pop();
    return out;
  };
  var plRanges = (posting, ranges) => {
    if (!ranges || !ranges.length)
      return posting;
    const out = [];
    let j2 = 0, r = ranges[j2];
    for (let i = 0; i < posting.length; i++) {
      const p = posting[i];
      if (p >= r[0] && r[1] >= p)
        out.push(p);
      while (p > r[0] && j2 < ranges.length - 1) {
        r = ranges[++j2];
      }
      if (j2 >= ranges.length)
        break;
    }
    return out;
  };
  var plContain = (posting, ltp, withHits = false) => {
    let p, i = 0, j2 = 0;
    const lines = [], hits = [];
    while (i < posting.length) {
      let p2 = posting[i];
      let at = bsearchNumber(ltp, p2);
      if (at >= 0 && at < ltp.length) {
        if (lines[lines.length - 1] !== at) {
          lines.push(at);
        }
        if (withHits) {
          if (!hits[lines.length - 1])
            hits[lines.length - 1] = [];
          hits[lines.length - 1].push(p2 - ltp[at - 1]);
        }
        p2 = posting[i];
      }
      i++;
    }
    return [lines, hits];
  };

  // ../node_modules/diff/lib/index.mjs
  function Diff() {
  }
  Diff.prototype = {
    diff: function diff(oldString, newString) {
      var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      var callback = options.callback;
      if (typeof options === "function") {
        callback = options;
        options = {};
      }
      this.options = options;
      var self = this;
      function done(value) {
        if (callback) {
          setTimeout(function() {
            callback(void 0, value);
          }, 0);
          return true;
        } else {
          return value;
        }
      }
      oldString = this.castInput(oldString);
      newString = this.castInput(newString);
      oldString = this.removeEmpty(this.tokenize(oldString));
      newString = this.removeEmpty(this.tokenize(newString));
      var newLen = newString.length, oldLen = oldString.length;
      var editLength = 1;
      var maxEditLength = newLen + oldLen;
      if (options.maxEditLength) {
        maxEditLength = Math.min(maxEditLength, options.maxEditLength);
      }
      var bestPath = [{
        newPos: -1,
        components: []
      }];
      var oldPos = this.extractCommon(bestPath[0], newString, oldString, 0);
      if (bestPath[0].newPos + 1 >= newLen && oldPos + 1 >= oldLen) {
        return done([{
          value: this.join(newString),
          count: newString.length
        }]);
      }
      function execEditLength() {
        for (var diagonalPath = -1 * editLength; diagonalPath <= editLength; diagonalPath += 2) {
          var basePath = void 0;
          var addPath = bestPath[diagonalPath - 1], removePath = bestPath[diagonalPath + 1], _oldPos = (removePath ? removePath.newPos : 0) - diagonalPath;
          if (addPath) {
            bestPath[diagonalPath - 1] = void 0;
          }
          var canAdd = addPath && addPath.newPos + 1 < newLen, canRemove = removePath && 0 <= _oldPos && _oldPos < oldLen;
          if (!canAdd && !canRemove) {
            bestPath[diagonalPath] = void 0;
            continue;
          }
          if (!canAdd || canRemove && addPath.newPos < removePath.newPos) {
            basePath = clonePath(removePath);
            self.pushComponent(basePath.components, void 0, true);
          } else {
            basePath = addPath;
            basePath.newPos++;
            self.pushComponent(basePath.components, true, void 0);
          }
          _oldPos = self.extractCommon(basePath, newString, oldString, diagonalPath);
          if (basePath.newPos + 1 >= newLen && _oldPos + 1 >= oldLen) {
            return done(buildValues(self, basePath.components, newString, oldString, self.useLongestToken));
          } else {
            bestPath[diagonalPath] = basePath;
          }
        }
        editLength++;
      }
      if (callback) {
        (function exec() {
          setTimeout(function() {
            if (editLength > maxEditLength) {
              return callback();
            }
            if (!execEditLength()) {
              exec();
            }
          }, 0);
        })();
      } else {
        while (editLength <= maxEditLength) {
          var ret = execEditLength();
          if (ret) {
            return ret;
          }
        }
      }
    },
    pushComponent: function pushComponent(components, added, removed) {
      var last = components[components.length - 1];
      if (last && last.added === added && last.removed === removed) {
        components[components.length - 1] = {
          count: last.count + 1,
          added,
          removed
        };
      } else {
        components.push({
          count: 1,
          added,
          removed
        });
      }
    },
    extractCommon: function extractCommon(basePath, newString, oldString, diagonalPath) {
      var newLen = newString.length, oldLen = oldString.length, newPos = basePath.newPos, oldPos = newPos - diagonalPath, commonCount = 0;
      while (newPos + 1 < newLen && oldPos + 1 < oldLen && this.equals(newString[newPos + 1], oldString[oldPos + 1])) {
        newPos++;
        oldPos++;
        commonCount++;
      }
      if (commonCount) {
        basePath.components.push({
          count: commonCount
        });
      }
      basePath.newPos = newPos;
      return oldPos;
    },
    equals: function equals(left, right) {
      if (this.options.comparator) {
        return this.options.comparator(left, right);
      } else {
        return left === right || this.options.ignoreCase && left.toLowerCase() === right.toLowerCase();
      }
    },
    removeEmpty: function removeEmpty(array) {
      var ret = [];
      for (var i = 0; i < array.length; i++) {
        if (array[i]) {
          ret.push(array[i]);
        }
      }
      return ret;
    },
    castInput: function castInput(value) {
      return value;
    },
    tokenize: function tokenize2(value) {
      return value.split("");
    },
    join: function join(chars) {
      return chars.join("");
    }
  };
  function buildValues(diff2, components, newString, oldString, useLongestToken) {
    var componentPos = 0, componentLen = components.length, newPos = 0, oldPos = 0;
    for (; componentPos < componentLen; componentPos++) {
      var component = components[componentPos];
      if (!component.removed) {
        if (!component.added && useLongestToken) {
          var value = newString.slice(newPos, newPos + component.count);
          value = value.map(function(value2, i) {
            var oldValue = oldString[oldPos + i];
            return oldValue.length > value2.length ? oldValue : value2;
          });
          component.value = diff2.join(value);
        } else {
          component.value = diff2.join(newString.slice(newPos, newPos + component.count));
        }
        newPos += component.count;
        if (!component.added) {
          oldPos += component.count;
        }
      } else {
        component.value = diff2.join(oldString.slice(oldPos, oldPos + component.count));
        oldPos += component.count;
        if (componentPos && components[componentPos - 1].added) {
          var tmp = components[componentPos - 1];
          components[componentPos - 1] = components[componentPos];
          components[componentPos] = tmp;
        }
      }
    }
    var lastComponent = components[componentLen - 1];
    if (componentLen > 1 && typeof lastComponent.value === "string" && (lastComponent.added || lastComponent.removed) && diff2.equals("", lastComponent.value)) {
      components[componentLen - 2].value += lastComponent.value;
      components.pop();
    }
    return components;
  }
  function clonePath(path) {
    return {
      newPos: path.newPos,
      components: path.components.slice(0)
    };
  }
  var characterDiff = new Diff();
  var extendedWordChars = /^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/;
  var reWhitespace = /\S/;
  var wordDiff = new Diff();
  wordDiff.equals = function(left, right) {
    if (this.options.ignoreCase) {
      left = left.toLowerCase();
      right = right.toLowerCase();
    }
    return left === right || this.options.ignoreWhitespace && !reWhitespace.test(left) && !reWhitespace.test(right);
  };
  wordDiff.tokenize = function(value) {
    var tokens = value.split(/([^\S\r\n]+|[()[\]{}'"\r\n]|\b)/);
    for (var i = 0; i < tokens.length - 1; i++) {
      if (!tokens[i + 1] && tokens[i + 2] && extendedWordChars.test(tokens[i]) && extendedWordChars.test(tokens[i + 2])) {
        tokens[i] += tokens[i + 2];
        tokens.splice(i + 1, 2);
        i--;
      }
    }
    return tokens;
  };
  var lineDiff = new Diff();
  lineDiff.tokenize = function(value) {
    var retLines = [], linesAndNewlines = value.split(/(\n|\r\n)/);
    if (!linesAndNewlines[linesAndNewlines.length - 1]) {
      linesAndNewlines.pop();
    }
    for (var i = 0; i < linesAndNewlines.length; i++) {
      var line = linesAndNewlines[i];
      if (i % 2 && !this.options.newlineIsToken) {
        retLines[retLines.length - 1] += line;
      } else {
        if (this.options.ignoreWhitespace) {
          line = line.trim();
        }
        retLines.push(line);
      }
    }
    return retLines;
  };
  var sentenceDiff = new Diff();
  sentenceDiff.tokenize = function(value) {
    return value.split(/(\S.+?[.!?])(?=\s+|$)/);
  };
  var cssDiff = new Diff();
  cssDiff.tokenize = function(value) {
    return value.split(/([{}:;,]|\s+)/);
  };
  function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function(obj2) {
        return typeof obj2;
      };
    } else {
      _typeof = function(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof(obj);
  }
  var objectPrototypeToString = Object.prototype.toString;
  var jsonDiff = new Diff();
  jsonDiff.useLongestToken = true;
  jsonDiff.tokenize = lineDiff.tokenize;
  jsonDiff.castInput = function(value) {
    var _this$options = this.options, undefinedReplacement = _this$options.undefinedReplacement, _this$options$stringi = _this$options.stringifyReplacer, stringifyReplacer = _this$options$stringi === void 0 ? function(k, v) {
      return typeof v === "undefined" ? undefinedReplacement : v;
    } : _this$options$stringi;
    return typeof value === "string" ? value : JSON.stringify(canonicalize(value, null, null, stringifyReplacer), stringifyReplacer, "  ");
  };
  jsonDiff.equals = function(left, right) {
    return Diff.prototype.equals.call(jsonDiff, left.replace(/,([\r\n])/g, "$1"), right.replace(/,([\r\n])/g, "$1"));
  };
  function canonicalize(obj, stack, replacementStack, replacer, key) {
    stack = stack || [];
    replacementStack = replacementStack || [];
    if (replacer) {
      obj = replacer(key, obj);
    }
    var i;
    for (i = 0; i < stack.length; i += 1) {
      if (stack[i] === obj) {
        return replacementStack[i];
      }
    }
    var canonicalizedObj;
    if ("[object Array]" === objectPrototypeToString.call(obj)) {
      stack.push(obj);
      canonicalizedObj = new Array(obj.length);
      replacementStack.push(canonicalizedObj);
      for (i = 0; i < obj.length; i += 1) {
        canonicalizedObj[i] = canonicalize(obj[i], stack, replacementStack, replacer, key);
      }
      stack.pop();
      replacementStack.pop();
      return canonicalizedObj;
    }
    if (obj && obj.toJSON) {
      obj = obj.toJSON();
    }
    if (_typeof(obj) === "object" && obj !== null) {
      stack.push(obj);
      canonicalizedObj = {};
      replacementStack.push(canonicalizedObj);
      var sortedKeys = [], _key;
      for (_key in obj) {
        if (obj.hasOwnProperty(_key)) {
          sortedKeys.push(_key);
        }
      }
      sortedKeys.sort();
      for (i = 0; i < sortedKeys.length; i += 1) {
        _key = sortedKeys[i];
        canonicalizedObj[_key] = canonicalize(obj[_key], stack, replacementStack, replacer, _key);
      }
      stack.pop();
      replacementStack.pop();
    } else {
      canonicalizedObj = obj;
    }
    return canonicalizedObj;
  }
  var arrayDiff = new Diff();
  arrayDiff.tokenize = function(value) {
    return value.slice();
  };
  arrayDiff.join = arrayDiff.removeEmpty = function(value) {
    return value;
  };

  // ../ptk/fts/excerpt.ts
  var listExcerpts = async (ptk3, tofind2, opts = {}) => {
    const tlp = ptk3.inverted.tokenlinepos;
    let sectionfrom = 0, sectionto = 0;
    if (opts.range) {
      const [first, last] = ptk3.rangeOfAddress(opts.range);
      sectionfrom = tlp[first];
      sectionto = tlp[last];
    } else {
      sectionfrom = tlp[0];
      sectionto = tlp[ptk3.header.eot];
    }
    const [phrases, postings] = await ptk3.parseQuery(tofind2, { tosim: ptk3.attributes.lang == "zh" });
    let chunkobj = {}, lineobj = {}, hitcount2 = 0;
    const chunklinepos = ptk3.defines.ck.linepos;
    for (let i = 0; i < postings.length; i++) {
      const pl = plTrim(postings[i], sectionfrom, sectionto);
      const [pllines, lineshits] = plContain(pl, ptk3.inverted.tokenlinepos, true);
      const phraselen = phrases[i].length;
      hitcount2 += pl.length;
      for (let j2 = 0; j2 < pllines.length; j2++) {
        const line = pllines[j2];
        let removed = false;
        if (opts.includelines) {
          const at2 = bsearchNumber(opts.includelines, line);
          if (opts.includelines[at2] !== line)
            removed = true;
        }
        if (opts.excludelines) {
          const at2 = bsearchNumber(opts.excludelines, line);
          if (opts.excludelines[at2] == line)
            removed = true;
        }
        if (removed)
          continue;
        if (!lineobj[line])
          lineobj[line] = [];
        lineobj[line].push(...lineshits[j2].map((it) => it * MAXPHRASELEN + phraselen));
        const at = bsearchNumber(chunklinepos, line) - 1;
        if (!chunkobj[at]) {
          chunkobj[at] = 0;
        }
        chunkobj[at]++;
      }
    }
    const lines = fromObj(lineobj, (a, b) => [parseInt(a), b.sort()]).sort((a, b) => a[0] - b[0]);
    const chunks = fromObj(chunkobj, (a, b) => [a, b]).sort((a, b) => b[1] - a[1]);
    return { lines, chunks, phrases, postings };
  };

  // ../ptk/offtext/render.ts
  var RenderUnit = class {
    constructor(token, ntoken, offtext, postingoffset) {
      this.token = token;
      this.postingoffset = postingoffset;
      this.choff = token.choff;
      this.text = token.text;
      this.ntoken = ntoken;
      this.offtext = offtext;
      this.tags = [];
      this.hide = false;
      this.luminate = 0;
      this.highlight = false;
      this.css = "";
    }
    tagsOf(closing = false) {
      const out = [];
      if (!this.tags || !this.tags.length)
        return "";
      for (let i = 0; i < this.tags.length; i++) {
        const tag = this.offtext.getTag(this.tags[i]);
        if (this.choff == tag.choff + (closing ? tag.width - 1 : 0)) {
          out.push(this.tags[i]);
        }
      }
      return out;
    }
    closestTag() {
      return this.offtext.getTag(this.tags[this.tags.length - 1]);
    }
  };
  var findUnitText = (runits, text2, from = 0) => {
    for (let i = from; i < runits.length; i++) {
      if (runits[i].token.text === text2)
        return runits[i];
    }
  };
  var renderOfftext = (linetext = "", opts = {}) => {
    const extra = opts.extra || [];
    const hits = opts.hits || [];
    const phraselength = opts.phraselength || [];
    const ot = new Offtext(linetext, opts.line || 0);
    let postingoffset = 0;
    const runits = tokenize(ot.plain).map((tk, idx2) => {
      postingoffset++;
      const ru = new RenderUnit(tk, idx2, ot, postingoffset);
      return ru;
    });
    const tagsAt = [];
    let phit = 0, pextra = 0;
    for (let i = 0; i < ot.tags.length; i++) {
      const tag = ot.tags[i];
      const width = tag.width ? tag.width : 1;
      for (let j2 = tag.choff; j2 < tag.choff + width; j2++) {
        if (!tagsAt[j2])
          tagsAt[j2] = [];
        tagsAt[j2].push(i);
      }
    }
    for (let i = 0; i < runits.length; i++) {
      const ru = runits[i];
      ru.tags = tagsAt[ru.token.choff] || [];
      if (extra.length && pextra < extra.length) {
        if (ru.choff == extra[pextra].choff) {
          ru.extra = extra[pextra];
          pextra++;
        }
      }
      if (hits && hits.length && phit < hits.length) {
        if (ru.postingoffset >= hits[phit] && ru.postingoffset < hits[phit] + phraselength[phit] && ru.token.type >= 16 /* SEARCHABLE */) {
          ru.highlight = true;
        }
        if (hits[phit] + phraselength[phit] <= ru.postingoffset)
          phit++;
        if (ru.highlight) {
          ru.luminate++;
          let j2 = i + 1;
          while (j2 < runits.length) {
            if (runits[j2].token.type >= 16 /* SEARCHABLE */ || j2 - i < MIN_ABRIDGE)
              j2++;
            else
              break;
            if (j2 < runits.length)
              runits[j2].luminate++;
          }
          j2 = i - 1;
          while (j2 > 0) {
            if (runits[j2].token.type >= 16 /* SEARCHABLE */ || i - j2 < MIN_ABRIDGE)
              j2--;
            else
              break;
            if (j2 >= 0)
              runits[j2].luminate++;
          }
        }
      }
      const bracket = closeBracketOf(ru.text);
      if (ru.hide || ru.tags.length && bracket) {
        ru.hide = true;
        const closeAt = findUnitText(runits, bracket, i + 1);
        if (closeAt)
          closeAt.hide = true;
      }
    }
    return [runits, ot];
  };
  var abridgeRenderUnits = (runits, minwidth = 20) => {
    const out = [];
    let abridged = [];
    const addAbridge = (final = false) => {
      if (abridged.length > MIN_ABRIDGE) {
        out.push([abridged.length, abridged[0], final]);
      } else {
        for (let j2 = 0; j2 < abridged.length; j2++) {
          out.push(runits[abridged[j2]]);
        }
      }
      abridged = [];
    };
    if (runits.length < minwidth)
      return runits;
    for (let i = 0; i < runits.length; i++) {
      const ru = runits[i];
      if (ru.luminate) {
        addAbridge();
        out.push(ru);
      } else {
        abridged.push(i);
      }
    }
    addAbridge(true);
    return out;
  };

  // ../ptk/platform/chromefs.ts
  var m = typeof navigator !== "undefined" && navigator.userAgent.match(/Chrome\/(\d+)/);
  var supprtedBrowser = m && parseInt(m[1]) >= 86;

  // ../ptk/basket/pool.ts
  var _pool = {};
  var poolGet = (name2) => _pool[name2];
  var poolAdd = (name2, inst) => _pool[name2] = inst;
  var poolDel = (name2) => delete _pool[name2];
  var poolGetAll = () => {
    const out = [];
    for (const name2 in _pool) {
      out.push(_pool[name2]);
    }
    return out;
  };
  var poolParallelPitakas = (ptk3) => {
    let align = ptk3.attributes?.align;
    if (!align)
      align = ptk3.name.replace(/\-[^-]+$/, "");
    const out = [];
    for (const n in _pool) {
      if (_pool[n].attributes.align == align || n.replace(/\-[^-]+$/, "") == align) {
        if (ptk3.name !== _pool[n].name)
          out.push(n);
      }
    }
    return out;
  };

  // ../ptk/linebase/loadpage.ts
  var pagefilename = (page) => page.toString().padStart(3, "0") + ".js";
  var makePageURI = (folder, page) => {
    const fn = folder + "/" + pagefilename(page);
    return fn;
  };
  async function loadNodeJs(page) {
    let fn = makePageURI(this.name, page);
    if (!fs.existsSync(fn) && fs.existsSync("../" + this.name + "/" + this.name)) {
      fn = makePageURI("../" + this.name + "/" + this.name, page);
    }
    try {
      const data = await fs.promises.readFile(fn, "utf8");
      this.setPage(page, ...parseJsonp(data));
    } catch (e) {
      console.error("readFile failed,", fn, e);
    }
  }
  async function loadRemoteZip(page) {
    throw "not implement yet";
  }
  async function loadInMemoryZipStore(page) {
    let content;
    const fn = this.name + "/" + pagefilename(page);
    for (let i = 0; i < this.zipstore.files.length; i++) {
      if (this.zipstore.files[i].name == fn) {
        content = new TextDecoder().decode(this.zipstore.files[i].content);
      }
    }
    content && this.setPage(page, ...parseJsonp(content));
  }
  async function loadFetch(page) {
    if (this.zip) {
      const data = await this.zip.readTextFile(this.name + "/" + pagefilename(page));
      this.setPage(page, ...parseJsonp(data));
      return;
    }
    const uri = makePageURI(this.name, page);
    try {
      const res = await fetch(uri);
      const text2 = await res.text();
      const arr = parseJsonp(text2);
      this.setPage(page, ...arr);
    } catch (e) {
      this.failed = true;
    }
  }
  var jsonp = (page, header, _payload) => {
    const ptk3 = poolGet(header.name);
    ptk3.setPage(page, header, _payload);
  };
  function isLoaded(page) {
    return page == 0 ? this.pagestarts.length : this._pages[page - 1];
  }
  async function loadJSONP(page) {
    if (isLoaded.call(this, page))
      return;
    if (!typeof window.jsonp !== "function") {
      window.jsonp = jsonp;
    }
    let tried = 0, timer;
    const that = this;
    try {
      const status = await loadScript(makePageURI(that.name, page), () => {
        if (isLoaded.call(that, page))
          return true;
        timer = setInterval(() => {
          tried++;
          if (tried > 10 || isLoaded.call(that, page)) {
            if (tried > 10)
              console.error("failed loading page", page, that.name);
            clearInterval(timer);
          }
        }, 10);
      });
    } catch (e) {
      this.failed = true;
    }
  }

  // ../ptk/linebase/linebase.ts
  var instancecount = 0;
  var combineRange = (range) => {
    const combined = [];
    let from = 0;
    range = range.filter((it) => !!it);
    if (Array.isArray(range[0]) && range.length) {
      range.sort((a, b) => a - b);
      from = range[0][0];
      for (let i = 1; i < range.length; i++) {
        if (range[i][0] > range[i - 1][1]) {
          combined.push([from, range[i - 1][1]]);
          from = range[i][0];
        }
      }
      if (range[range.length - 1][1] > from)
        combined.push([from, range[range.length - 1][1]]);
    } else {
      return range;
    }
    return combined;
  };
  var LineBase = class {
    constructor(opts = {}) {
      this.pageOfLine = (line) => {
        if (line >= this.pagestarts[this.pagestarts.length - 1])
          return this.pagestarts.length - 1;
        return bsearchNumber(this.pagestarts, line, true);
      };
      this.stamp = ++instancecount;
      this._pages = [];
      this._lineoffsets = [];
      this.pagestarts = [];
      this.header = { starts: [], sectionnames: [], sectionstarts: [], sectiontypes: [] };
      this.name = opts.name || "";
      this.zip = opts.zip;
      this.zipstore = opts.zipstore;
      this.payload;
      let protocol = typeof chrome !== "undefined" ? "chrome-extension:" : "";
      this._loader = () => {
      };
      if (typeof window !== "undefined") {
        protocol = window.location.protocol;
      }
      if (this.zipstore) {
        this._loader = loadInMemoryZipStore;
      } else if (protocol === "http:" || protocol === "https:" || protocol === "chrome-extension:") {
        this._loader = loadFetch;
      } else if (protocol == "file:") {
        this._loader = loadJSONP;
      } else {
        this._loader = this.zip ? loadRemoteZip : loadNodeJs;
      }
      this.failed = false;
      if (!opts.inmemory) {
        this._loader.call(this, 0);
      }
    }
    async loadAll() {
      await this.loadLines([[0, this.pagestarts[this.pagestarts.length - 1]]]);
      return this.slice(0, this.pagestarts[this.pagestarts.length - 1]);
    }
    inMem() {
      return this.inmemory || this.zipstore;
    }
    pageOfRange([from, to]) {
      if (from < 0)
        return [];
      if (from > to)
        to += from;
      let cstart = this.pageOfLine(from);
      const cend = this.pageOfLine(to);
      const notloaded = [];
      if (cstart > 1)
        cstart--;
      for (let i = cstart; i < cend + 1; i++) {
        if (!this._pages[i])
          notloaded.push(i);
      }
      return notloaded;
    }
    async loadLines(_range) {
      const that = this;
      let toload = [], range = combineRange(_range);
      const notincache = {};
      for (let i = 0; i < range.length; i++) {
        if (Array.isArray(range[i])) {
          const [from, to] = range[i];
          toload.push(...this.pageOfRange([from, to]));
        } else {
          notincache[this.pageOfLine(range[i])] = true;
        }
      }
      toload.push(...Object.keys(notincache).map((it) => parseInt(it)));
      toload = unique(toload.filter((it) => !that._pages[it]));
      const jobs = [];
      for (let i = 0; i < toload.length; i++) {
        jobs.push(this._loader.call(this, toload[i] + 1));
      }
      await Promise.all(jobs);
    }
    lineCount() {
      return this.header.starts[this.header.starts.length - 1];
    }
    getPageLineOffset(page, line) {
      if (page > this._pages.length)
        return 0;
      if (line == 0)
        return 0;
      if (line > this._lineoffsets[page].length)
        return this._pages[page].length;
      return this._lineoffsets[page][line - 1];
    }
    getLines(nlines) {
      if (!nlines.length)
        return [];
      let out = Array();
      let pline = nlines[0];
      let start = pline;
      for (let i = 1; i < nlines.length; i++) {
        if (pline + 1 !== nlines[i]) {
          out = out.concat(this.slice(start, i));
          start = nlines[i];
        }
        pline = nlines[i];
      }
      out = out.concat(this.slice(start, pline + 1));
      return out;
    }
    getLine(nline) {
      return this.slice(nline, nline + 1)[0];
    }
    slice(nline, to) {
      if (!to)
        to = nline + 1;
      const p1 = this.pageOfLine(nline, this.pagestarts);
      const p2 = this.pageOfLine(to, this.pagestarts);
      let out = "";
      for (let i = p1; i <= p2; i++) {
        if (!this._pages[i])
          return out.split("\n");
        if (i == p1 || i == p2) {
          let slicefrom = this.getPageLineOffset(i, nline - (p1 > 0 ? this.pagestarts[p1 - 1] : 0));
          if (nline)
            slicefrom++;
          const sliceto = this.getPageLineOffset(i, to - (p2 > 0 ? this.pagestarts[p2 - 1] : 0));
          if (p2 > p1) {
            if (i == p1)
              out = this._pages[i].slice(slicefrom);
            else
              out += (out ? "\n" : "") + this._pages[i].slice(0, sliceto);
          } else {
            out += this._pages[i].slice(slicefrom, sliceto);
          }
        } else
          out += "\n" + this._pages[i];
      }
      return out.split("\n");
    }
    setPage(page, header, payload) {
      if (page == 0) {
        this.header = header;
        this.name = this.header.name;
        this.pagestarts = header.starts;
        this.payload = payload || "nopayload";
        this.opened = true;
      } else if (page > 0) {
        this._pages[page - 1] = payload;
        this._lineoffsets[page - 1] = lineBreaksOffset(payload);
      }
    }
    isReady() {
      if (this.payload)
        return true;
      const that = this;
      let timer = 0;
      return new Promise((resolve) => {
        timer = setInterval(() => {
          if (that.failed)
            resolve(false);
          else if (that.payload) {
            clearInterval(timer);
            resolve(true);
          }
        }, 50);
      });
    }
    getSection(name2) {
      const [from, to] = this.sectionRange(name2);
      if (from == to)
        return [];
      return this.slice(from, to);
    }
    sectionRange(sname) {
      const notfound = [0, 0];
      const { sectionnames, sectionstarts } = this.header;
      if (!sectionnames || !sectionnames.length)
        return notfound;
      for (let i = 0; i < sectionnames.length; i++) {
        const name2 = sectionnames[i];
        if (sname && name2 == sname) {
          const endoflastsection = i < sectionstarts.length - 1 ? sectionstarts[i + 1] : this.pagestarts[this.pagestarts.length - 1];
          return [sectionstarts[i], endoflastsection];
        }
      }
      return notfound;
    }
  };

  // ../ptk/compiler/error.ts
  var MAX_VERROR = 3;
  var VError2 = /* @__PURE__ */ ((VError3) => {
    VError3["NoKeys"] = "NO_KEYS";
    VError3["NoKey"] = "NO_KEY";
    VError3["NotANumber"] = "NOT_NUMBER";
    VError3["Empty"] = "EMPTY_BUFFER";
    VError3["Pattern"] = "PATTERN_MISMATCH";
    VError3["NotUnique"] = "NOT_UNIQUE";
    VError3["Mandatory"] = "MANDANTORY";
    VError3["TypeRedef"] = "TYPE_REDEF";
    VError3["MissingTagName"] = "MISSING_TAGNAME";
    VError3["UnknownType"] = "UNKNOWN_TYPE";
    VError3["ExcessiveField"] = "EXCESSIVE_FIELD";
    VError3["PtkNamed"] = "PTK_NAMED";
    VError3["PtkNoName"] = "PTK_NONAME";
    VError3["RedefineChunkTag"] = "REDEFINE_CHUNK_CHUNK_TAG";
    VError3["InvalidLinkAddress"] = "INVALID_LINK_ADDRESS";
    return VError3;
  })(VError2 || {});
  var VErrorMessage = {
    ["NO_KEYS" /* NoKeys */]: "missing keys $1",
    ["NO_KEY" /* NoKey */]: "missing key $1 for string",
    ["NOT_NUMBER" /* NotANumber */]: "not a number",
    ["PATTERN_MISMATCH" /* Pattern */]: "pattern mismatch",
    ["NOT_UNIQUE" /* NotUnique */]: "not unique",
    ["MANDANTORY" /* Mandatory */]: "mandatory field",
    ["TYPE_REDEF" /* TypeRedef */]: "redefine type",
    [VError2.MissingTypedef]: "mssing typedef",
    ["EXCESSIVE_FIELD" /* ExcessiveField */]: "excessive field",
    ["UNKNOWN_TYPE" /* UnknownType */]: "unknown type",
    ["PTK_NAMED" /* PtkNamed */]: "ptk already named",
    ["PTK_NONAME" /* PtkNoName */]: "ptk not named",
    ["EMPTY_BUFFER" /* Empty */]: "Empty buffer"
  };

  // ../ptk/compiler/basefield.ts
  var Field = class {
    constructor(name2, def) {
      this.name = name2;
      this.foreign = def.foreign || "";
      this.pattern = def.pattern || null;
      this.keys = def.keys || [];
      this.unique = null;
      this.optional = true;
      this.caption = "";
      this.type = def.type || "string";
      this.values = [];
      this.sortedIndex;
      for (let n in def) {
        if (!this.hasOwnProperty(n)) {
          console.log("unknown defining attr", n, "of", name2, def);
        }
        this[n] = def[n];
      }
      if (def.unique)
        this.unique = {};
    }
    resetUnique() {
      if (this.unique)
        this.unique = {};
    }
    validate(value, line) {
      if (this.unique) {
        if (this.unique[value]) {
          return ["NOT_UNIQUE" /* NotUnique */, "tag:" + this.name + ", value:" + value, this.unique[value]];
        } else {
          this.unique[value] = line;
        }
      }
      return [0, value];
    }
    find() {
      return -1;
    }
  };

  // ../ptk/lineview/interfaces.ts
  var ACTIONPAGESIZE = 5;

  // ../ptk/basket/address.ts
  var BRANCH_SEP = ".";
  var parseAction = (action, objform = false) => {
    if (!action)
      return [];
    const branches = action.split(BRANCH_SEP);
    const out = [];
    for (let i = 0; i < branches.length; i++) {
      const m1 = branches[i].match(/^([a-z_\-]+)#([a-z\d_-]+)$/);
      const m22 = branches[i].match(/^([a-z_\-]+)(\d+[a-z\d_-]+)$/);
      const m32 = branches[i].match(/^([a-z_\-]+)(\d*)$/);
      if (m1) {
        out.push([m1[1], m1[2]]);
      } else if (m22) {
        out.push([m22[1], m22[2]]);
      } else if (m32) {
        out.push([m32[1], m32[2]]);
      } else {
        const at = branches[i].indexOf("#");
        if (at > 0) {
          out.push([branches[i].slice(0, at), branches[i].slice(at + 1)]);
        } else {
          out.push(["ck", branches[i]]);
        }
      }
    }
    if (objform) {
      const obj = {};
      for (let i = 0; i < out.length; i++) {
        const [tag, value] = out[i];
        obj[tag] = value;
      }
      return obj;
    } else {
      return out;
    }
  };
  var makeAddress = (ptkname = "", action = "", from = 0, till = 0, lineoff = 0, choff = 0) => {
    if (typeof ptkname == "object") {
      const obj = ptkname;
      ptkname = obj.ptkname;
      action = obj.action || "";
      from = obj.from || 0;
      till = obj.till || 0;
      lineoff = obj.highlightline || obj.lineoff || 0;
      choff = obj.choff || 0;
    }
    let linechoff = "";
    if (choff > 0) {
      linechoff = lineoff + "-" + choff;
    } else if (lineoff > 0) {
      linechoff = lineoff.toString();
    }
    return (ptkname ? ptkname + ":" : "") + action + (from ? ">" + from : "") + (till ? "<" + till : "") + (linechoff ? ":" + linechoff : "");
  };
  var parseAddress = (address) => {
    let m0, ptkname = "", action = "", from = "", till = "", linechoff = "";
    let m4 = address.match(PTK_ACTION_FROMTILL);
    if (m4) {
      [m0, ptkname, action, from, till, linechoff] = m4;
    } else {
      m4 = address.match(PTK_FROMTILL);
      if (m4) {
        [m0, ptkname, from, till, linechoff] = m4;
      } else {
        m4 = address.match(FROMTILL);
        if (m4)
          [m0, from, till, linechoff] = m4;
        else
          return null;
      }
    }
    from = (from || "").slice(1);
    till = (till || "").slice(1);
    linechoff = (linechoff || "").slice(1);
    if (!from && !till && linechoff) {
      if (parseInt(linechoff) > ACTIONPAGESIZE) {
        from = parseInt(linechoff) - Math.floor(ACTIONPAGESIZE / 2);
        till = from + ACTIONPAGESIZE;
      }
    }
    let choff = 0;
    const at = linechoff.indexOf("-");
    if (~at)
      choff = parseInt(linechoff.slice(at + 1));
    ptkname = ptkname || "";
    ptkname = ptkname.slice(0, ptkname.length - 1);
    return {
      ptkname,
      action,
      from: Math.abs(parseInt(from)) || 0,
      till: Math.abs(parseInt(till)) || 0,
      highlightline: linechoff ? parseInt(linechoff) : -1,
      lineoff: parseInt(linechoff),
      choff
    };
  };
  function rangeOfElementId(eleidarr) {
    const out = [], ptk3 = this;
    let from = 0, to = ptk3.header.eot;
    for (let i = 0; i < eleidarr.length; i++) {
      const [ele, id] = eleidarr[i];
      if (ptk3.defines[ele]) {
        const idtype = ptk3.defines[ele].fields?.id;
        const _id = idtype?.type == "number" ? parseInt(id) : id;
        const startfrom = bsearchNumber(ptk3.defines[ele].linepos, from);
        const at = idtype.values.indexOf(_id, startfrom);
        const first = ptk3.defines[ele].linepos[at] || ptk3.defines[ele].linepos[0];
        let last = ptk3.defines[ele].linepos[at + 1] || ptk3.header.eot;
        if (first >= from && idtype.values[at] == _id) {
          from = first;
          if (last > to && to !== ptk3.header.eot)
            last = to;
          else
            to = last;
          out.push([first, last]);
        } else {
          return [];
        }
      } else {
        const at = ptk3.defines.bk?.fields.id.values.indexOf(ele);
        const at2 = at == -1 ? ptk3.defines.ak?.fields.id.values.indexOf(ele) : -1;
        if (i == 0 && (~at || ~at2)) {
          const first = ptk3.defines.bk.linepos[at] || ptk3.defines.ak.linepos[at2];
          let last = ptk3.defines.bk.linepos[at + 1] || ptk3.defines.ak.linepos[at2 + 1];
          if (!last)
            last = ptk3.header.eot;
          out.push([first, last]);
          from = first;
        }
      }
    }
    return out;
  }
  function rangeOfAddress(address) {
    let addr = address;
    if (typeof address == "string") {
      addr = parseAddress(address);
    }
    const { from, till, action, highlightline } = addr;
    const eleid = parseAction(action);
    const ranges = rangeOfElementId.call(this, eleid);
    if (ranges.length) {
      const [first, last] = ranges[ranges.length - 1];
      return [first, last, from, till, highlightline];
    } else {
      const end = till ? till : from + 1;
      return [0, 0, from, till, highlightline];
    }
  }
  async function fetchAddress(address) {
    const r = rangeOfAddress.call(this, address);
    if (!r || r[0] == r[1])
      return [];
    await this.loadLines([r]);
    const lines = this.slice(r[0], r[1]);
    return lines;
  }
  async function fetchAddressExtra(address, ext = "num") {
    const r = rangeOfAddress.call(this, address);
    if (!r || r[0] == r[1])
      return [];
    const sectionname = this.getSectionName(r[0]);
    const parsectionname = sectionname.replace("off", ext);
    const start = this.getSectionStart(sectionname);
    const parstart = this.getSectionStart(parsectionname);
    if (~parstart) {
      const r0 = r[0] - start + parstart;
      const r1 = r[1] - start + parstart;
      await this.loadLines([r0, r1]);
      let lines = this.slice(r0, r1);
      if (ext == "num") {
        lines = lines.map((it) => unpackInt(it));
      }
      return lines;
    }
    return [];
  }
  function innertext(address) {
    let addr = address;
    if (typeof address == "string") {
      addr = parseAddress(address);
    }
    const { action } = addr;
    const defines = this.defines;
    const eleidarr = parseAction(action);
    const out = [];
    for (let i = 0; i < eleidarr.length; i++) {
      const [ele, id] = eleidarr[i];
      if (!defines[ele] || !defines[ele].fields.id)
        return "";
      const at = defines[ele].fields.id.values.indexOf(id);
      out.push(defines[ele]?.innertext?.get(at));
    }
    return out.join("/");
  }
  function makeElementId(ele, id) {
    return ele + (!isNaN(parseInt(id)) ? "" : "#") + id;
  }
  function tagAtAction(action) {
    const [start, end] = this.rangeOfAddress(action);
    const arr = parseAction(action);
    const out = [];
    let parentlinepos = 0;
    for (let i = 0; i < arr.length; i++) {
      let [tagname, id] = arr[i];
      if (!this.defines[tagname])
        continue;
      const taglinepos = this.defines[tagname].linepos;
      const tagidarr = this.defines[tagname].fields.id.values;
      const searchfrom = bsearchNumber(taglinepos, parentlinepos);
      if (typeof tagidarr[0] == "number")
        id = parseInt(id);
      let at = tagidarr.indexOf(id, searchfrom);
      let rel = at - searchfrom;
      if (at < 0)
        at = 0;
      if (rel < 0)
        rel = 0;
      out.push({ tagname, at, rel });
      parentlinepos = taglinepos[at];
    }
    return out;
  }

  // ../ptk/compiler/linkfield.ts
  var LinkField = class extends Field {
    constructor(name2, def) {
      super(name2, def);
      this.invertlinks = {};
      this.type = "link";
      this.count = 0;
    }
    validate(value, line) {
      const addr = parseAddress(value);
      const act = parseAction(addr.action);
      if (!this.invertlinks[addr.ptkname])
        this.invertlinks[addr.ptkname] = {};
      let invertlinks = this.invertlinks[addr.ptkname];
      if (act.length !== 2) {
      }
      for (let i = 0; i < act.length; i++) {
        let [ele, id] = act[i];
        if (i == 0 && !act[i][1]) {
          ele = "bk";
          id = act[i][0];
        }
        const eleid = makeElementId(ele, id);
        if (i == act.length - 1) {
          if (!invertlinks[ele])
            invertlinks[ele] = {};
          if (!invertlinks[ele][id])
            invertlinks[ele][id] = [];
          invertlinks[ele][id].push(this.count);
          this.count++;
        } else {
          if (!invertlinks[eleid]) {
            invertlinks[eleid] = {};
          }
          invertlinks = invertlinks[eleid];
        }
      }
      return [0, value];
    }
    serializeLinks(bklinks) {
      const out = [];
      for (let bk2 in bklinks) {
        const links = bklinks[bk2];
        for (let targettag in links) {
          const arr = [];
          for (let id in links[targettag]) {
            arr.push([id, links[targettag][id]]);
          }
          arr.sort(alphabetically0);
          const chunks = arr.map((it) => it[0]);
          const idxarr = arr.map((it) => it[1]);
          out.push(bk2);
          out.push(targettag);
          out.push(chunks.join(LEMMA_DELIMITER));
          out.push(packInt2d(idxarr));
        }
      }
      return out;
    }
    serialize() {
      const attrs = {};
      let section = [].concat(this.values);
      for (let ptkname in this.invertlinks) {
        const out = this.serializeLinks(this.invertlinks[ptkname]);
        attrs[ptkname] = out.length;
        section = section.concat(out);
      }
      attrs["*"] = this.values.length;
      section.push(JSON.stringify(attrs));
      return section;
    }
    deserialize(section, ptk3) {
      const attrs = JSON.parse(section.pop());
      const valuelen = attrs["*"];
      let offset = 0;
      for (let db in attrs) {
        if (db == "*")
          continue;
        const datalen = attrs[db];
        while (offset < datalen) {
          const bk2 = section[valuelen + offset];
          const targettagname = section[valuelen + offset + 1];
          const chunks = new StringArray(section[valuelen + offset + 2], { sep: LEMMA_DELIMITER });
          const idxarr = unpackInt2d(section[valuelen + offset + 3]);
          ptk3.addBacklinks(this.name, db, bk2, targettagname, chunks, idxarr);
          offset += 4;
        }
      }
      const values = section.slice(0, valuelen);
      section.length = 0;
      return values;
    }
  };

  // ../ptk/compiler/keyfield.ts
  var KeyField = class extends Field {
    constructor(name2, def) {
      super(name2, def);
      this.type = "key";
    }
    validate(value, line) {
      const keys = this.keys;
      if (!keys)
        return ["NO_KEYS" /* NoKeys */, value];
      if (!value) {
        return [this.optional ? 0 : "MANDANTORY" /* Mandatory */, []];
      }
      const at = bsearch(keys, value);
      if (keys[at] !== value) {
        return ["NO_KEY" /* NoKey */, []];
      } else {
        return [0, at];
      }
    }
  };

  // ../ptk/compiler/keysfield.ts
  var KeysField = class extends Field {
    constructor(name2, def) {
      super(name2, def);
      this.type = "keys";
    }
    validate(value, line) {
      const keys = this.keys;
      if (!keys)
        return ["NO_KEYS" /* NoKeys */, value];
      if (!value) {
        return [this.optional ? 0 : "MANDANTORY" /* Mandatory */, []];
      }
      const items = value.split(",").map((it) => {
        if (!it)
          return 0;
        const at = bsearch(keys, it);
        if (keys[at] === it) {
          return at;
        } else {
          return -1;
        }
      }).filter((it) => !!it).sort((a, b) => a - b);
      if (items.filter((it) => it === -1).length) {
        return ["NO_KEY" /* NoKey */, []];
      } else {
        return [0, items];
      }
    }
  };

  // ../ptk/compiler/textfield.ts
  var TextField = class extends Field {
    //multiline 
    constructor(name2, def) {
      super(name2, def);
      this.type = "text";
    }
  };

  // ../ptk/compiler/numberfield.ts
  var NumberField = class extends Field {
    constructor(name2, def) {
      super(name2, def);
      this.type = "number";
      this.name = name2;
      this.sortedIndex = null;
    }
    _sort() {
      [this.values, this.sortedIndex] = sortNumberArray(this.values);
    }
    find(value) {
      if (!this.values.length)
        return -1;
      if (!this.sortedIndex)
        this._sort();
      const at = bsearch(this.values, value);
      return this.values[at] == value ? this.sortedIndex[at] : -1;
    }
    validate(value, line) {
      const n = parseInt(value);
      if (n.toString() !== value && value?.length) {
        return ["NOT_NUMBER" /* NotANumber */, line];
      }
      if (this.pattern && !value.match(this.pattern)) {
        return ["PATTERN_MISMATCH" /* Pattern */, 0];
      }
      if (this.unique && n >= 0) {
        if (this.unique[value]) {
          return ["NOT_UNIQUE" /* NotUnique */, "tag:" + this.name + ", value:" + value, this.unique[value]];
        } else {
          this.unique[value] = line;
        }
      }
      return [0, parseInt(value)];
    }
  };

  // ../ptk/compiler/numbersfield.ts
  var NumbersField = class extends Field {
    constructor(name2, def) {
      super(name2, def);
      this.type = "numbers";
    }
    validate(value, line) {
      if (typeof value == "undefined") {
        console.log("undefined", line);
      }
      const items = value.split(",").filter((it) => !!it);
      const out = [];
      for (let i = 0; i < items.length; i++) {
        const v = items[i];
        const n = parseInt(items[i]);
        if (n.toString() !== v && v.length) {
          return ["NOT_NUMBER" /* NotANumber */, line];
        }
        if (this.pattern && !v.match(this.pattern)) {
          return ["PATTERN_MISMATCH" /* Pattern */, line];
        }
        out.push(n);
      }
      return [0, out];
    }
  };

  // ../ptk/compiler/filelineposfield.ts
  var FileLinePosField = class extends Field {
    constructor(name2, def) {
      super(name2, def);
      this.type = "filelinepos";
      this.prevfn = "";
    }
    validate(value, line, compiledFiles) {
      const arr = value.split(",");
      const out = [];
      let linestart = 0;
      for (let i = 0; i < arr.length; i++) {
        const v = parseInt(arr[i]);
        if (isNaN(v)) {
          const f = compiledFiles[arr[i]];
          if (!f) {
            throw "no such file " + arr[i];
          }
          linestart = f.linestart;
        } else {
          out.push(linestart + v);
        }
      }
      return [0, out];
    }
  };

  // ../ptk/compiler/groupfield.ts
  var GroupField = class extends Field {
    //multiline 
    constructor(name2, def) {
      super(name2, def);
      this.type = def.type || "range";
      this.ranges = {};
    }
    validate(value, line) {
      if (!value) {
        return [this.optional ? 0 : VError.Mandatory, []];
      }
      if (!this.ranges[value])
        this.ranges[value] = [];
      this.ranges[value].push(line);
      if (isNaN(value)) {
        throw "group index should be numeric";
      }
      return [0, parseInt(value)];
    }
    serialize(out) {
      const keys = Object.keys(this.ranges);
      keys.sort(alphabetically);
      out.push(keys.join(LEMMA_DELIMITER));
      const delta2d = [];
      for (let i = 0; i < keys.length; i++) {
        delta2d.push(this.ranges[keys[i]]);
      }
      out.push(packIntDelta2d(delta2d));
      out.push();
    }
    deserialize(section) {
      const keys = (section.shift() || "").split(LEMMA_DELIMITER);
      const arr = unpackIntDelta2d(section.shift());
      for (let i = 0; i < keys.length; i++) {
        this.ranges[keys[i]] = arr[i];
      }
    }
  };

  // ../ptk/compiler/fielder.ts
  function createField(name2, def, primarykeys, ownkeys) {
    if (typeof def !== "string") {
      return new Field(name2, def);
    }
    let v;
    const m4 = def.match(/([a-z_]+):?([a-z_]*)\/?(.*)/);
    if (!m4) {
      return;
    }
    const typename = m4[1], foreign = m4[2];
    let pat = m4[3], pattern;
    if (pat) {
      const at2 = pat.lastIndexOf("/");
      let regopts = "";
      if (at2 > 0) {
        regopts = pat.slice(at2 + 1);
        pat = pat.slice(0, at2);
      }
      pattern = new RegExp(pat, regopts);
    }
    if (typename === "number")
      v = new NumberField(name2, { pattern, foreign });
    else if (typename === "numbers")
      v = new NumbersField(name2, { pattern, foreign });
    else if (typename === "filelinepos")
      v = new FileLinePosField(name2, { pattern, foreign });
    else if (typename === "unique_number")
      v = new NumberField(name2, { pattern, unique: true, optional: false, foreign });
    else if (typename === "unique")
      v = new TextField(name2, { pattern, unique: true, optional: false, foreign });
    else if (typename === "string")
      v = new Field(name2, { pattern, foreign });
    else if (typename === "link")
      v = new LinkField(name2, { pattern, foreign });
    else if (typename === "text")
      v = new TextField(name2, { pattern });
    else if (typename === "key") {
      const keys = primarykeys && primarykeys[foreign] || ownkeys;
      v = new KeyField(name2, { keys, pattern, foreign, optional: false });
    } else if (typename === "keys") {
      const keys = primarykeys && primarykeys[foreign] || ownkeys;
      v = new KeysField(name2, { keys, pattern, foreign });
    } else if (typename === "group") {
      v = new GroupField(name2, { type: typename });
    } else if (typename === "note") {
      const keys = primarykeys && primarykeys[foreign] || ownkeys;
      v = new Field(name2, { type: typename, keys, pattern, foreign });
    } else if (typename === "confer") {
      v = new Field(name2, { type: typename, foreign });
    }
    if (!v)
      v = new Field(name2, {});
    return v;
  }
  function validate_z(offtext, tag) {
    const depth = parseInt(tag.name.slice(1, 2), 36) - 10;
    if (isNaN(depth))
      return;
    if (!(depth == this.prevdepth || depth == this.prevdepth + 1 || depth < this.prevdepth)) {
      const msg = "\u76EE\u5F54\u6DF1\u5EA6\u9519\u8BEF " + this.prevdepth + "+1!=" + depth;
      this.errors.push({ msg, offset: tag.offset, prev: this.prevzline });
    }
    let text2 = offtext.tagText(tag);
    const closebracket = closeBracketOf(text2);
    if (text2.slice(text2.length - 1) == closebracket)
      text2 = text2.slice(1, text2.length - 1);
    const line = this.compiledLine + this.line;
    this.toc.push({ depth, text: text2, key: this.zcount, line });
    this.zcount++;
    this.prevzline = line;
    this.prevdepth = depth;
  }

  // ../ptk/linebase/column.ts
  var Column = class {
    constructor(opts = {}) {
      this.fieldvalues = [];
      this.fieldnames = [];
      this.fieldsdef = [];
      this.attrs;
      this.name = "";
      this.keys = null;
      this.primarykeys = opts.primarykeys || {};
      this.onError = opts.onError;
      this.typedef = opts.typedef;
      this.tokenfield = -1;
      this.tokentable = null;
    }
    //lexicon :: key(sorted primary key) = payload
    addColumn(name2) {
      this.fieldnames.push(name2);
      this.fieldvalues.push([]);
    }
    tokenizeField(value) {
      const tokenized = tokenize(value);
      for (let i = 0; i < tokenized.length; i++) {
        const { text: text2, type } = tokenized[i];
        if (type > 16 /* SEARCHABLE */ && !this.tokentable[text2]) {
          this.tokentable[text2] = true;
        }
      }
    }
    addRow(fields, nrow, skipFirstField, compiledFiles) {
      let i = 0;
      if (skipFirstField)
        i++;
      for (; i < this.fieldsdef.length; i++) {
        const F = this.fieldsdef[i];
        const [err, value] = F.validate(fields[i], nrow, compiledFiles);
        if (err) {
          this.onError && this.onError(err, this.fieldnames[i] + " " + fields[i], -1, nrow);
        }
        this.fieldvalues[i].push(value || "");
        if (i + 1 == this.tokenfield)
          this.tokenizeField(value);
      }
    }
    createFields(typedef) {
      if (typedef)
        for (let idx2 in typedef) {
          const fieldtype = typedef[idx2] || "key=string";
          const [name2, def] = fieldtype.split("=");
          this.addColumn(name2);
          const field = createField(name2, def || {}, this.primarykeys, this.keys);
          this.fieldsdef.push(field);
        }
    }
    deserialize(section) {
      if (!section.length)
        return;
      const firstline = section.shift();
      const [text2, tags] = parseOfftext(firstline);
      if (!section.length)
        return;
      this.attrs = tags[0]?.attrs;
      this.name = this.attrs.name;
      this.caption = this.attrs.caption;
      const typedef = text2.split("	");
      this.createFields(typedef);
      if (this.attrs.keytype == "serial") {
        this.keys = null;
      } else {
        this.keys = new StringArray(section.shift(), { sep: LEMMA_DELIMITER });
      }
      if (this.attrs.tokenfield) {
        this.tokenfield = parseInt(this.attrs.tokenfield);
        this.tokentable = section.shift()?.split(LEMMA_DELIMITER);
        this.tokentable.sort(alphabetically);
      }
      let idx2 = 0, usesection = false;
      for (let fieldname in this.fieldsdef) {
        const field = this.fieldsdef[fieldname];
        if (field.type === "number") {
          this.fieldvalues[idx2] = unpackInt(section.shift());
        } else if (field.type === "numbers") {
          this.fieldvalues[idx2] = unpackIntDelta2d(section.shift());
        } else if (field.type === "filelinepos") {
          this.fieldvalues[idx2] = unpackIntDelta2d(section.shift());
        } else if (field.type === "keys") {
          this.fieldvalues[idx2] = unpackIntDelta2d(section.shift());
        } else if (field.type === "key") {
          this.fieldvalues[idx2] = unpackInt(section.shift());
        } else if (field.type === "string") {
          this.fieldvalues[idx2] = section.shift().split(LEMMA_DELIMITER);
        } else if (field.type === "group") {
          field.deserialize(section);
          this.fieldvalues[idx2] = unpackInt(section.shift());
        } else if (field.type === "text") {
          usesection = true;
          this.fieldvalues[idx2] = section;
        }
        if (!this[field.name]) {
          this[field.name] = this.fieldvalues[idx2];
        }
        idx2++;
      }
      if (!usesection && section.length) {
        console.log("section not consumed");
      }
    }
    fromStringArray(sa, attrs = {}, from = 1, compiledFiles) {
      const allfields = [];
      let line = sa.first();
      let textstart = 0;
      let skipFirstField = false;
      while (from > 0) {
        line = sa.next();
        from--;
      }
      while (line || line === "") {
        const fields = line.split("	");
        allfields.push(fields);
        line = sa.next();
      }
      if (attrs.keytype !== "serial") {
        allfields.sort(alphabetically0);
        skipFirstField = true;
        this.keys = allfields.map((it) => it[0]);
      }
      this.createFields(this.typedef);
      if (attrs.tokenfield) {
        this.tokenfield = parseInt(attrs.tokenfield || -1);
        this.tokentable = {};
        if (this.tokenfield === 0)
          this.tokenizeField(this.keys.join(LEMMA_DELIMITER));
      }
      if (!this.fieldnames.length) {
        throw "missing typedef";
      }
      for (let i = 0; i < allfields.length; i++) {
        this.addRow(allfields[i], i + 1, skipFirstField, compiledFiles);
      }
      const out = [];
      if (this.keys)
        out.push(this.keys.join(LEMMA_DELIMITER));
      if (this.tokenfield > -1) {
        out.push(Object.keys(this.tokentable).join(LEMMA_DELIMITER));
      }
      for (let i = 0; i < this.fieldnames.length; i++) {
        const V = this.fieldsdef[i];
        if (V.type == "number" || V.type == "line") {
          const numbers = this.fieldvalues[i].map((it) => parseInt(it) || 0) || [];
          out.push(packInt(numbers));
        } else if (V.type == "numbers" || V.type == "filelinepos") {
          const numbers = this.fieldvalues[i] || [];
          if (numbers.length == 1) {
            throw "must have more than one array";
          }
          out.push(packIntDelta2d(numbers));
        } else if (V.type == "keys") {
          const numnums = this.fieldvalues[i] || [];
          out.push(packIntDelta2d(numnums));
        } else if (V.type == "key") {
          const nums = this.fieldvalues[i] || [];
          out.push(packInt(nums));
        } else if (V.type == "string") {
          out.push(this.fieldvalues[i].join(LEMMA_DELIMITER));
        } else if (V.type == "group") {
          V.serialize(out);
          out.push(packInt(this.fieldvalues[i]));
        } else if (V.type == "text") {
          if (i !== this.fieldnames.length - 1) {
            throw "multiline text fieldtype must be the last, " + this.fieldnames[i];
          }
          textstart = out.length;
          for (let j2 = 0; j2 < this.fieldvalues[i].length; j2++) {
            out.push(this.fieldvalues[i][j2]);
          }
        } else if (V.type) {
          this.onError && this.onError("UNKNOWN_TYPE" /* UnknownType */, V.type);
        }
      }
      if (textstart == 0)
        textstart = out.length;
      return [out, textstart];
    }
    fromTSV(buffer, attrs, from = 1) {
      const sa = new StringArray(buffer, { sequencial: true });
      return this.fromStringArray(sa, attrs, from, this.compiledFiles);
    }
    findKey(key) {
      if (this.keys) {
        return this.keys.find(key.toString());
      } else {
        return parseInt(key) - 1;
      }
    }
    fieldsByKey(key) {
      const at = this.findKey(key);
      if (!key)
        return null;
      if (~at) {
        const out = { key };
        for (let i = 0; i < this.fieldvalues.length; i++) {
          out[this.fieldnames[i]] = this.fieldvalues[i][at];
        }
        return out;
      } else
        return null;
    }
    fieldByKey(key, fieldname) {
      const at = this.findKey(key);
      if (!key)
        return null;
      if (~at) {
        const out = { key };
        const at2 = this.fieldnames.indexOf(fieldname);
        if (~at2) {
          return this.fieldvalues[at2][at];
        } else {
          return this.fieldvalues[1][at];
        }
      } else
        return null;
    }
    getKey(i) {
      if (this.keys) {
        return this.keys.get(i);
      } else {
        return (i + 1).toString();
      }
    }
  };

  // ../ptk/compiler/typedef.ts
  var reservedAttributes = {
    //是指令不是屬性名, 
    caption: true,
    lazy: false,
    key: true,
    field: true,
    text: true,
    type: true
    //name of painter
  };
  var Typedef = class {
    constructor(attrs, tagname, primarykeys, typedefs) {
      this.fields = {};
      this.mandatory = {};
      this.tagname = tagname;
      this.linepos = [];
      this.innertext = [];
      this.typedefs = typedefs;
      for (let aname in attrs) {
        const def = attrs[aname];
        const opts = typeof def == "string" ? def : { optional: false };
        const V = createField(tagname, opts, primarykeys);
        if (V)
          this.fields[aname] = V;
        if (V && !V.optional && !reservedAttributes[aname])
          this.mandatory[aname] = true;
      }
      this.attrs = attrs;
      this.column = "";
      this.count = 0;
      if (this.attrs.resetby) {
        const resettingparents = this.attrs.resetby.split(",");
        for (let i = 0; i < resettingparents.length; i++) {
          const parent = this.typedefs[resettingparents[i]];
          if (parent) {
            if (!parent.attrs.reset) {
              parent.attrs.reset = tagname;
            } else {
              const arr = parent.attrs.reset.split(",");
              arr.push(tagname);
              parent.attrs.reset = unique(arr).join(",");
            }
          } else {
            console.log("not such parent tag", resettingparents[i]);
          }
        }
      }
    }
    resetChildTag() {
      if (this.attrs.reset) {
        const resetting = this.attrs.reset.split(",");
        for (let i = 0; i < resetting.length; i++) {
          const childtypedef = this.typedefs[resetting[i]];
          if (childtypedef) {
            for (let fieldname in childtypedef.fields) {
              const field = childtypedef.fields[fieldname];
              if (field.unique) {
                field.resetUnique();
              }
            }
          }
        }
      }
    }
    validateFields(tag, line, onError, compiledFiles) {
      let touched = false, newtag;
      this.count++;
      for (let aname in this.attrs) {
        const V = this.fields[aname];
        let value = tag.attrs[aname];
        if (V && !V.foreign)
          V.values.push(tag.attrs[aname]);
        let [err, newvalue, refline] = V && V.validate(tag.attrs[aname], line, compiledFiles) || [0, value, -1];
        if (err) {
          onError(err, newvalue, refline);
        } else {
          if (!touched) {
            newtag = Object.assign({}, tag);
            newtag.attrs = Object.assign({}, tag.attrs);
          }
          if (Array.isArray(newvalue))
            newvalue = newvalue.join(",");
          newtag.attrs[aname] = newvalue;
          touched = true;
        }
      }
      return newtag;
    }
    validateTag(offtext, tag, line, compiledLine, compiledFiles, onError) {
      if (this.fields.id || this.fields["@"] || this.attrs.savelinepos) {
        this.linepos.push(compiledLine + line);
      }
      if (this.attrs.bracket) {
        let tagtext = offtext.tagText(tag);
        if (!tagtext) {
          tagtext = offtext.plain.trim().slice(0, 10);
        }
        if (this.attrs.bracket !== "true")
          tagtext = removeBracket(tagtext);
        this.innertext.push(tagtext);
      }
      for (let aname in this.mandatory) {
        if (!tag.attrs.hasOwnProperty(aname) && this.mandatory[aname]) {
          onError("MANDANTORY" /* Mandatory */, tag.name + " " + aname);
        }
      }
      this.resetChildTag();
      const newtag = this.validateFields(tag, line, onError, compiledFiles);
      return newtag;
    }
    deserialize(section, ptk3) {
      const attrline = section.shift();
      const attrs = attrline ? attrline.split(LEMMA_DELIMITER) : [];
      if (section.length > attrs.length) {
        this.linepos = unpackIntDelta(section.shift());
      }
      this.innertext = null;
      if (!section.length)
        return;
      if (this.fields.bracket) {
        this.innertext = new StringArray(section.shift(), { sep: LEMMA_DELIMITER });
      }
      for (let i = 0; i < attrs.length; i++) {
        const aname = attrs[i];
        const V = this.fields[aname];
        if (!V) {
          console.error("unknown type " + aname);
          continue;
        }
        if (V?.type === "number") {
          V.values = unpackInt(section.shift());
        } else if (V?.type === "text") {
          V.values = section.length ? section.shift().split("	") : [];
        } else if (V?.deserialize) {
          V.values = V.deserialize(section, ptk3);
        }
      }
      if (section.length) {
        console.log("unconsumed section lines", section.length);
      }
    }
    serialize() {
      const attrs = [], out = [];
      if (!this.count)
        return null;
      if (this.linepos.length || this.fields.bracket) {
        out.push(packIntDelta(this.linepos));
      }
      if (this.fields.bracket) {
        out.push(this.innertext.join(LEMMA_DELIMITER));
      }
      for (let aname in this.fields) {
        const V = this.fields[aname];
        if (V.foreign)
          continue;
        if (V.type == "number") {
          attrs.push(aname);
          out.push(packInt(V.values.map((it) => parseInt(it) || 0)));
        } else if (V.type == "text") {
          attrs.push(aname);
          out.push(V.values.join("	"));
        } else if (V.serialize) {
          attrs.push(aname);
          const arr = V.serialize();
          for (let i = 0; i < arr.length; i++) {
            out.push(arr[i]);
          }
        }
      }
      out.unshift(attrs.join(LEMMA_DELIMITER));
      return out.length ? out.join("\n") : null;
    }
  };

  // ../ptk/compiler/predefines.ts
  var predefines = {
    generic: `^:ak<id=unique bracket=false reset=n>
^:bk<id=unique heading=text bracket=false reset=ck,juan>
^:ck<id=unique heading=text bracket=false>
^:p<id=text>
^:n<id=number>
^:o<@=link>
^:j<@=link>
^:k<id=text>
^:ad
^:bc
^:ver<savelinepos=true>
^:f<id=text>
^:sponsor<savelinepos=true>
^:https<bracket=false onclick=gourl>
^:fn<id=number>
^:t`,
    cbeta: `^:ak<id=unique bracket=false>
^:bk<id=unique heading=text bracket=false reset=ck,p>
^:ck<id=unique heading=text bracket=false>
^:https<bracket=false onclick=gourl>
^:p<id=text>
^:f<id=text>
^:ver<savelinepos=true>
^:fn<id=number>
^:fm<id=text>
^:k<id=text>
^:j<@=link>
^:v
^:h
^:mc
^:l`,
    cs: `^:ak<id=unique bracket=false>
^:bk<id=unique heading=text bracket=false>
^:ck<id=unique heading=text bracket=false>
^:n<id=unique resetby=bk>
^:f<id=number>
^:h
^:sz
^:ckan
^:cksn
^:https<bracket=false onclick=gourl>
^:t`,
    zidian: `^:ak<id=unique bracket=false reset=ck>
^:bk<id=unique heading=text bracket=false reset=n>
^:ck<id=unique heading=text bracket=false>
^:f<id=number>
^:https<bracket=false onclick=gourl>
^:j<@=link>
^:o<@=link>
`,
    subtitle: `^:ak<id=unique bracket=false reset=n>
^:bk<id=unique heading=text bracket=false reset=ck>
^:ck<id=unique heading=text bracket=false>
^:mpeg<id=text savelinepos=true>
^:ts<id=range>
^:ver<savelinepos=true>`
  };

  // ../ptk/compiler/compiler.ts
  var sourceType = (firstline, filename) => {
    const at = firstline.indexOf("\n");
    firstline = at > -1 ? firstline.slice(0, at) : firstline;
    const [text2, tags] = parseOfftext(firstline);
    let lazy = true, sourcetype, name2, caption3;
    let consumed = false;
    sourcetype = filename?.endsWith(".tsv") ? "tsv" /* TSV */ : filename?.endsWith(".off") ? "txt" /* Offtext */ : "unknown" /* Unknown */;
    if (tags.length && tags[0].name == ":") {
      const attrs = tags[0].attrs;
      if (attrs.hasOwnProperty(lazy))
        lazy = !!attrs.lazy;
      sourcetype = tags[0].attrs.type?.toLowerCase() || sourcetype;
      name2 = attrs.name;
      caption3 = attrs.caption;
      consumed = true;
      if (sourcetype == "tsv") {
        consumed = false;
        lazy = false;
      }
    }
    return { sourcetype, tag: tags[0], lazy, name: name2, caption: caption3, consumed };
  };
  var Compiler2 = class {
    constructor(opts = {}) {
      this.reset(opts);
    }
    reset(opts = {}) {
      this.ptkname = "";
      this.compilingname = "";
      this.line = 0;
      this.compiledLine = 0;
      this.compiledFiles = {};
      this.primarykeys = {};
      this.errors = [];
      this.typedefs = {};
      this.stopcompile = false;
      this.toc = [];
      this.zcount = 0;
      this.prevzline = 0;
      this.prevdepth = 0;
      this.tagdefs = [];
    }
    onError(code, msg, refline = -1, line) {
      this.errors.push({ name: this.compilingname, line: line || this.line, code, msg, refline });
      if (this.errors.length >= MAX_VERROR)
        this.stopcompile = true;
    }
    setPredefine(name2 = "generic") {
      const predefine = predefines[name2] || "";
      this.compileOfftext(predefine, this.tagdefs);
    }
    compileOfftext(str, tagdefs) {
      const at = str.indexOf("^");
      if (at == -1)
        return str;
      const ot = new Offtext(str);
      for (let i = 0; i < ot.tags.length; i++) {
        const tag = ot.tags[i];
        if (tag.name[0] == ":" && tag.name.length > 1) {
          const newtagname = tag.name.slice(1);
          if (this.typedefs[newtagname]) {
            this.onError("TYPE_REDEF" /* TypeRedef */, newtagname);
          } else {
            this.typedefs[newtagname] = new Typedef(tag.attrs, newtagname, this.primarykeys, this.typedefs);
          }
          tagdefs.push(str);
          str = null;
        } else {
          if (tag.name[0] == "z") {
            validate_z.call(this, ot, tag);
          } else {
            const typedef = this.typedefs[tag.name];
            if (!typedef) {
              console.error("unknown tag\n", str, tag.name);
            } else {
              const newtag = typedef.validateTag(ot, tag, this.line, this.compiledLine, this.compiledFiles, this.onError.bind(this));
              if (newtag) {
                str = updateOfftext(str, tag, newtag);
              }
            }
          }
        }
      }
      return str;
    }
    clearCompiled(filename) {
      delete this.compiledFiles[filename];
    }
    checkFootnote(attrs, notekeys, filename) {
      if (!attrs.footnote)
        return;
      const nametag = attrs.footnote || "bk";
      const tag = this.typedefs[nametag];
      const ftag = this.typedefs.f;
      if (!tag) {
        console.log("unknown tag", tag, "checkfootnote");
        return;
      }
      if (!ftag) {
        console.log("no f tag in source");
        return;
      }
      const at = tag.fields.id.values.indexOf(attrs.name);
      const from = tag.linepos[at];
      const to = tag.linepos[at + 1] || this.compiledLine;
      const start = bsearchNumber(ftag.linepos, from);
      let end = bsearchNumber(ftag.linepos, to);
      if (ftag.linepos[end] < to)
        end++;
      const offtextfootnote = ftag.fields.id.values.slice(start, end).sort(alphabetically);
      if (offtextfootnote.join() !== notekeys.join()) {
        console.log(filename, "footnote missing match", arraydiff(notekeys, offtextfootnote), notekeys.join());
      }
    }
    compileBuffer(buffer, filename) {
      if (!buffer)
        return this.onError("EMPTY_BUFFER" /* Empty */);
      if (!filename)
        return this.onError("PTK_NONAME" /* PtkNoName */);
      let processed, samepage = false, tagdefs = [], attributes = {};
      const sa = new StringArray(buffer, { sequencial: true });
      const firstline = sa.first();
      const { sourcetype, tag, lazy, name: name2, caption: caption3, consumed } = sourceType(firstline, filename);
      if (sourcetype == "txt" && consumed)
        tagdefs.push(firstline);
      let compiledname = name2 || filename;
      let textstart = 0;
      this.compilingname = filename;
      this.stopcompile = false;
      if (tag?.name == ":") {
        if (tag.attrs.ptk) {
          if (this.ptkname && this.ptkname !== tag.attrs.ptk) {
            this.onError("PTK_NAMED" /* PtkNamed */, this.ptkname);
          } else {
            this.ptkname = tag.attrs.ptk;
          }
        }
        if (tag.attrs.type === "txt" || filename == "0.off") {
          this.setPredefine(tag.attrs.define || tag.attrs.template);
        }
        attributes = tag.attrs;
      }
      const linestart = this.compiledLine;
      if (sourcetype === "tsv" /* TSV */) {
        const [text2, tags] = parseOfftext(firstline);
        const attrs = tags[0]?.attrs || {};
        const typedef = text2.split("	");
        const columns = new Column({ typedef, primarykeys: this.primarykeys, onError: this.onError.bind(this) });
        const [serialized, _textstart] = columns.fromStringArray(sa, attrs, 1, this.compiledFiles);
        this.checkFootnote(attrs, columns.keys, filename);
        textstart = _textstart;
        if (serialized) {
          compiledname = attrs.name || filename;
          serialized.unshift(firstline);
          if (attrs.name)
            this.primarykeys[attrs.name] = columns.keys;
          this.compiledLine += serialized.length;
          processed = serialized;
          textstart++;
          samepage = true;
        } else {
          processed = [];
        }
      } else if (sourcetype === "txt" /* Offtext */) {
        const out = [];
        let linetext = sa.first();
        if (consumed)
          linetext = sa.next();
        this.line = 0;
        while (linetext || linetext === "") {
          const o = this.compileOfftext(linetext, tagdefs);
          if (o || o == "") {
            out.push(o);
            this.line++;
          }
          linetext = sa.next();
          if (this.stopcompile)
            break;
        }
        this.compiledLine += out.length;
        processed = out;
      } else {
        if (compiledname.endsWith(".num")) {
          let linetext = sa.first();
          const out = [];
          while (linetext || linetext === "") {
            const o = packInt(linetext.split(",").map((it) => parseInt(it || "0")));
            out.push(o);
            linetext = sa.next();
            if (this.stopcompile)
              break;
          }
          this.compiledLine += out.length;
          textstart = out.length;
          processed = out;
        } else {
          throw "unknown extension " + compiledname;
        }
      }
      this.compiledFiles[filename] = {
        name: compiledname,
        caption: caption3,
        lazy,
        sourcetype,
        processed,
        textstart,
        errors: this.errors,
        samepage,
        tagdefs,
        attributes,
        linestart
      };
      return this.compiledFiles[filename];
    }
  };

  // ../ptk/compiler/toc.ts
  var TableOfContent = class {
    constructor(section, name2) {
      this.lines = unpackIntDelta(section.shift());
      this.depths = unpackInt(section.shift());
      this.texts = new StringArray(section.shift());
    }
  };
  var depthOfId = (str) => {
    return str.split(/(\d+)/).filter((it) => !!it).length;
  };
  function buildTocTag(toctags) {
    for (let i = 0; i < toctags.length; i++) {
      const toctag = toctags[i];
      const out = [];
      if (!this.defines[toctag]) {
        console.log("not such tag", toctag);
        continue;
      }
      const values = this.defines[toctag].fields.id.values;
      for (let j2 = 0; j2 < values.length; j2++) {
        out.push(depthOfId(values[j2]));
      }
      this.defines[toctag].depths = out;
    }
  }

  // ../ptk/basket/columns.ts
  function columnField(name2, field, idx2) {
    const column = this.columns[name2];
    const at = column.fieldnames.indexOf(field);
    return column.fieldvalues[at][idx2];
  }
  async function inlineNote(tagname, noteid) {
    const typedef = this.defines[tagname];
    const col = this.columns[typedef.fields.type.foreign];
    if (!col)
      return;
    const at = col.findKey(noteid);
    const textfield = typedef.attrs.text;
    const at2 = col.fieldnames.indexOf(textfield);
    const values = col.fieldvalues[at2];
    return values && values[at] || "";
  }
  function rowOf(rowname, idx2, field = -1) {
    const column = this.columns[rowname];
    if (typeof field == "string") {
      field = column.fieldnames.indexOf(field);
    }
    const out = [];
    if (field > 0) {
      out.push({ name, typedef: column.fieldsdef[field], value: column.fieldvalues[field][idx2] });
    } else {
      for (let i = 0; i < column.fieldnames.length; i++) {
        const name2 = column.fieldnames[i];
        out.push({ name: name2, typedef: column.fieldsdef[i], value: column.fieldvalues[i][idx2] });
      }
    }
    return out;
  }
  var getCacheKey = (name2, field, tofind2) => {
    return name2 + ":" + field + "=" + tofind2;
  };
  function searchColumnField(name2, field, tofind2) {
    const simtofind = fromSim(tofind2);
    let cachekey = getCacheKey(name2, field, tofind2);
    let cache = this.scanCache[cachekey];
    if (!cache && simtofind !== tofind2) {
      cache = this.scanCache[getCacheKey(name2, field, simtofind)];
    }
    if (!cache) {
      const array = this.columns[name2][field];
      if (!array) {
        console.log("missing field", field, "in column", name2);
        return null;
      }
      let contain = indexOfs(array, tofind2);
      if (!contain.length && simtofind !== tofind2) {
        contain = indexOfs(array, simtofind);
        if (contain.length) {
          cachekey = getCacheKey(name2, field, simtofind);
        }
      }
      const caption3 = this.columns[name2].caption || name2;
      cache = { name: name2, field, caption: caption3, contain };
      this.scanCache[cachekey] = cache;
    }
    return cache;
  }
  function scanColumnFields(tofind2) {
    const out = [];
    if (!tofind2)
      return [];
    for (let name2 in this.columns) {
      if (!this.columns[name2].attrs.scan)
        continue;
      const scans = this.columns[name2].attrs.scan.split(",");
      for (let i = 0; i < scans.length; i++) {
        const cache = searchColumnField.call(this, name2, scans[i], tofind2);
        out.push(cache);
      }
    }
    for (let name2 in this.primarykeys) {
      if (!this.columns[name2].attrs.bme)
        continue;
      const cachekey = name2 + "=" + tofind2;
      let cache = this.scanCache[cachekey];
      if (!cache) {
        const sa = this.primarykeys[name2];
        const start = sa.enumStart(tofind2);
        const middle = sa.enumMiddle(tofind2);
        const end = sa.enumEnd(tofind2);
        const caption3 = this.columns[name2].caption || name2;
        cache = { name: name2, caption: caption3, start, middle, end };
        this.scanCache[cachekey] = cache;
      }
      out.push(cache);
    }
    return out;
  }

  // ../ptk/fts/query.ts
  var MAX_PHRASE = 5;
  var scoreMatch = (matching, weights) => {
    if (matching.length == 0)
      return 0;
    let score = 0, matchcount = 0;
    for (let j2 = 0; j2 < weights.length; j2++) {
      if (matching[j2]) {
        matchcount++;
        score += weights[j2] * (matching[j2] > 1 ? Math.sqrt(matching[j2]) : 1);
      }
    }
    let boost = matchcount / weights.length;
    boost *= boost;
    return score * boost;
  };
  function scoreLine(postings, chunklinepos, tlp) {
    tlp = tlp || this.inverted.tokenlinepos, tlplast = tlp[tlp.length - 1];
    chunklinepos = chunklinepos || this.defines.ck.linepos;
    const averagelinelen = tlplast / tlp.length;
    const allhits = postings.reduce((acc, i2) => i2.length + acc, 0);
    const weights = postings.map((pl) => Math.sqrt(allhits / pl.length));
    let i = 0, scoredLine = [];
    const ptr = new Array(postings.length);
    ptr.fill(0);
    let prev = 0;
    while (i < tlp.length - 1) {
      let nearest = tlplast;
      const from = tlp[i], to = tlp[i + 1];
      let matching = [];
      prev = 0;
      for (let j2 = 0; j2 < postings.length; j2++) {
        const pl = postings[j2];
        let v = pl[ptr[j2]];
        while (v < from && ptr[j2] < pl.length) {
          ptr[j2]++;
          v = pl[ptr[j2]];
        }
        while (v >= from && v < to) {
          if (!matching[j2])
            matching[j2] = 0;
          matching[j2]++;
          if (j2 == 0)
            prev = v;
          else {
            const dist = v - prev - j2;
            if (dist == 0) {
              matching[j2] += 3;
            } else {
              matching[j2] += 1 / dist;
            }
          }
          ptr[j2]++;
          v = pl[ptr[j2]];
        }
        if (nearest > v)
          nearest = v;
      }
      const score = scoreMatch(matching, weights);
      let shortpara = 10 * (averagelinelen / (to - from + 1));
      if (shortpara < 10)
        shortpara = 10;
      const boost = Math.log(shortpara);
      if (score > 0) {
        const chunk = bsearchNumber(chunklinepos, i) - 1;
        scoredLine.push([i + 1, score * boost, chunk]);
      }
      i++;
      while (nearest > tlp[i + 1])
        i++;
    }
    scoredLine = scoredLine.sort((a, b) => b[1] - a[1]);
    return scoredLine;
  }
  async function phraseQuery(phrase) {
    phrase = phrase.trim();
    const qkey = this.name + "@" + phrase;
    let out = this.queryCache[qkey];
    if (out)
      return out;
    const tokens = await this.loadPostings(phrase);
    if (!tokens)
      return [];
    out = tokens[0];
    for (let i = 1; i < tokens.length; i++) {
      let pl1 = out;
      out = plAnd(pl1, tokens[i], i);
    }
    this.queryCache[qkey] = out || [];
    return this.queryCache[qkey];
  }
  async function parseQuery(tofind2, opts) {
    opts = opts || {};
    const phrases = tofind2.split(/[, 　]/);
    if (phrases.length > MAX_PHRASE)
      phrases.length = MAX_PHRASE;
    const outphrases = [], postings = [];
    for (let i = 0; i < phrases.length; i++) {
      if (!phrases[i].trim())
        continue;
      let posting = await phraseQuery.call(this, phrases[i]);
      if ((!posting || !posting.length) && this.attributes.lang == "zh") {
        posting = await phraseQuery.call(this, fromSim(phrases[i]));
      }
      if (opts.ranges && opts.ranges.length) {
        posting = plRanges(posting, opts.ranges);
      }
      outphrases.push(phrases[i]);
      postings.push(posting || []);
    }
    return [outphrases, postings];
  }
  async function scanText(tofind2, opts) {
    const ptk3 = this;
    const [phrases, postings] = await ptk3.parseQuery(tofind2, opts);
    if (!postings.length || !ptk3.inverted)
      return [];
    const tagname = opts?.groupby || "ak";
    const groupby = ptk3.defines[tagname];
    const tlp = [], TLP = ptk3.inverted.tokenlinepos;
    if (groupby) {
      for (let i = 0; i < groupby.linepos.length; i++) {
        const nextstart = TLP[groupby.linepos[i + 1]] || TLP[TLP.length - 1];
        tlp.push([TLP[groupby.linepos[i]], nextstart]);
      }
      const res = new Array(tlp.length);
      res.fill(0);
      for (let i = 0; i < postings.length; i++) {
        const res1 = plCount(postings[i], tlp);
        for (let j2 = 0; j2 < tlp.length; j2++) {
          res[j2] += res1[j2];
        }
      }
      const out = res.map((count, idx2) => {
        const id = groupby.fields.id.values[idx2];
        return {
          count,
          caption: groupby.innertext.get(idx2),
          scope: tagname + (parseInt(id) ? id : "#" + id)
        };
      });
      return out;
    } else {
      return [{ count: postings.length, caption: "-", name: "-" }];
    }
  }
  function hitsOfLine(line, allpostings) {
    const tlp = this.inverted.tokenlinepos;
    const hits = [];
    for (let i = 0; i < allpostings.length; i++) {
      const from = tlp[line - 1], till = tlp[line];
      const hit = plTrim(allpostings[i], from, till).map((it) => it - from);
      hits.push(hit);
    }
    return hits;
  }

  // ../ptk/basket/footnote.ts
  function findFootmarkInBook(ptk3, id, line) {
    const ck = ptk3.nearestChunk(line);
    const fntag = ptk3.defines.fn;
    const closestfn = ptk3.findClosestTag(fntag, "id", id, line);
    if (~closestfn) {
      return ptk3.name + ":bk#" + ck.bk.id + ".fm" + id;
    }
  }
  function footNoteAddress(id, line) {
    const ptk3 = this;
    const fnaddr = findFootmarkInBook(ptk3, id, line);
    if (fnaddr)
      return fnaddr;
    const ck = ptk3.nearestChunk(line);
    const chunktag = ptk3.defines.ck;
    const bktag = ptk3.defines.bk;
    const footbk = "fn_" + ck.bkid;
    const at = bktag.fields.id.values.indexOf(footbk);
    if (at == -1)
      return ptk3.name + ":" + ck.bk.id + ".fm" + id;
    const booknotebkline = bktag.linepos[at];
    const closestchunk = ptk3.findClosestTag(chunktag, "id", ck.id, booknotebkline);
    const chunk = chunktag.fields.id.values[closestchunk];
    const address = ptk3.name + ":" + footbk + ".ck" + (parseInt(chunk) ? chunk : "#" + chunk) + ".fn" + id;
    return address;
  }
  function footNoteInTSV(id, line) {
    const ptk3 = this;
    const ck = ptk3.nearestChunk(line);
    if (!ck)
      return "";
    const footnotecol = ptk3.columns[ck.bkid];
    if (!footnotecol)
      return "--no note--";
    return footnotecol.fieldByKey(id, "note");
  }
  function footNoteByAddress(id, line) {
    const ptk3 = this;
    const ck = ptk3.nearestChunk(line);
    const chunktag = ptk3.defines.ck;
    const bktag = ptk3.defines.ck;
    const footnotetag = ptk3.defines.f;
    let footbk = ck.bkid.replace("_fn", "");
    const at = bktag.fields.id.values.indexOf(footbk);
    if (at == 0)
      footbk = "";
    else
      footbk += ".";
    const booknotebkline = bktag.linepos[at];
    const closestchunk = ptk3.findClosestTag(chunktag, "id", ck.id, booknotebkline);
    const chunk = chunktag.fields.id.values[closestchunk];
    const footnoteat = ptk3.findClosestTag(footnotetag, "id", parseInt(id), chunktag.linepos[closestchunk]);
    const footnoteline = footnotetag.linepos[footnoteat];
    const highlightline = footnoteline - chunktag.linepos[closestchunk];
    const address = footbk + "ck" + chunk + (highlightline ? ":" + highlightline : "");
    return address;
  }

  // ../ptk/compiler/template.ts
  var nop = () => {
    return [];
  };
  var addTemplate = (name2, template) => {
    Templates[name2] = template;
    if (!template.getFilters)
      template.getFilters = nop;
    if (!template.runFilter)
      template.runFilter = nop;
    if (!template.getCorrespondence)
      template.getCorrespondence = nop;
  };
  var Templates = {};
  addTemplate("generic", {});

  // ../ptk/basket/parallel.ts
  var bookPrefix = (bookname) => {
    let prefix = bookname;
    const at = bookname.lastIndexOf("_");
    if (~at)
      prefix = bookname.slice(0, at);
    return prefix;
  };
  function getParallelLine(sourceptk, line, remote = false) {
    const chunk = sourceptk.nearestChunk(line + 1);
    if (!chunk)
      return [];
    const bk2 = this.defines.bk;
    const books = this.getParallelBook(chunk.bkid, remote);
    const bookats = books.map((id) => bk2.fields.id.values.indexOf(id));
    const bookstart = sourceptk.defines.bk.linepos[chunk.bkat];
    const sourcelineoff = line - bookstart;
    const out = [];
    for (let i = 0; i < bookats.length; i++) {
      const bkid = bk2.fields.id.values[bookats[i]];
      const [start, end] = this.rangeOfAddress("bk#" + bkid + ".ck#" + chunk.id);
      const bookstart2 = bk2.linepos[bookats[i]];
      const theline = bookstart2 + sourcelineoff;
      if (theline <= end) {
        out.push([this, start - bookstart2, theline]);
      }
    }
    return out;
  }
  function getParallelBook(bookname, remote) {
    if (typeof bookname == "number") {
      bookname = this.defines.bk.fields.id.values[bookname];
    }
    if (!bookname)
      return [];
    const prefix = bookPrefix(bookname);
    const books = this.defines.bk.fields.id.values.filter((it) => bookPrefix(it) == prefix && (remote || bookname !== it));
    return books;
  }
  function foreignLinksAtTag(tagname, line) {
    const tag = this.defines[tagname];
    const linepos = tag?.linepos;
    if (!tag || !linepos)
      return [];
    const at = bsearchNumber(linepos, line);
    const val = tag.fields.id.values[at].toString();
    const out = [];
    for (let sptkname in this.foreignlinks) {
      const sptk = poolGet(sptkname);
      const linkarr = this.foreignlinks[sptkname];
      for (let i = 0; i < linkarr.length; i++) {
        const [srctag, bk2, targettagname, idStrArr, idxarr] = linkarr[i];
        if (targettagname !== tagname)
          continue;
        const srclinepos = sptk.defines[srctag].linepos;
        const at2 = idStrArr.find(val);
        const tagvalues = this.defines[srctag].fields["@"].values;
        const arr = idxarr[at2];
        for (let j2 = 0; j2 < arr?.length; j2++) {
          const address = tagvalues[arr[j2]];
          const line2 = srclinepos[arr[j2]];
          const ck = sptk.nearestChunk(line2 + 1);
          out.push({ text: address, line: line2, ck, basket: sptkname });
        }
      }
    }
    return out;
  }
  function enumParallelsPtk(address) {
    const ptk3 = this;
    const range = ptk3.rangeOfAddress(address);
    const ck = ptk3.nearestChunk(range[0] + 1);
    const paralleladdress = "bk#" + ck.bkid + ".ck#" + ck.id;
    const ptks2 = poolParallelPitakas(ptk3);
    const out = [ptk3.header.name];
    for (let i = 0; i < ptks2.length; i++) {
      const ptk22 = poolGet(ptks2[i]);
      const [start, end] = ptk22.rangeOfAddress(paralleladdress);
      if (end > 0) {
        out.push(ptks2[i]);
      }
    }
    return out;
  }

  // ../ptk/basket/links.ts
  function addBacklinks(tagname, tptk, bk2, targettagname, chunks, nlinks) {
    if (!tptk)
      tptk = "*";
    if (!this.backlinks[tptk])
      this.backlinks[tptk] = {};
    if (!this.backlinks[tptk][this.name]) {
      this.backlinks[tptk][this.name] = [];
    }
    this.backlinks[tptk][this.name].push([tagname, bk2, targettagname, chunks, nlinks]);
  }
  function addForeignLinks(fptk) {
    for (let tptk in fptk.backlinks) {
      if (tptk == this.name || tptk === "*") {
        for (let sptk in fptk.backlinks[tptk]) {
          this.foreignlinks[sptk] = fptk.backlinks[tptk][sptk];
        }
      }
    }
  }

  // ../ptk/basket/chunk.ts
  function getCaption(at, short = false) {
    const chunktag = this.defines.ck;
    let caption3 = chunktag?.innertext.get(at);
    const id = chunktag?.fields?.id?.values[at];
    const onChunkCaption = this.template.onChunkCaption;
    if (!caption3) {
      caption3 = this.columns[chunktag?.column]?.keys?.get(at) || "";
      if (!caption3 && onChunkCaption)
        caption3 = onChunkCaption(id);
    }
    const at2 = caption3?.indexOf(";");
    let shortcaption = caption3 || "";
    if (~at2) {
      shortcaption = caption3.slice(at2);
      caption3 = caption3.slice(0, at2);
    }
    return short ? shortcaption : caption3;
  }
  function caption2(at) {
    let caption3 = this.getCaption(at);
    let depth = 0;
    while (caption3 && caption3.endsWith("-")) {
      depth++;
      caption3 = caption3.slice(0, caption3.length - 1);
    }
    let at2 = at, parents = [];
    while (at2 > 0 && depth) {
      at2--;
      const par = this.getCaption(at2).split(/[- ]+/);
      const pdepth = par.length;
      while (!par[par.length - 1])
        par.pop();
      if (pdepth - 1 > depth) {
      } else if (par.length > 1 || pdepth == 1) {
        while (par.length && depth) {
          parents.unshift("-" + par.pop());
          depth--;
        }
      }
    }
    return caption3 + parents.join("");
  }
  function nearestChunk(line) {
    const chunktag = this.defines.ck;
    const at = this.nearestTag(line, chunktag);
    return this.getChunk(at);
  }
  function getBookInfo(at) {
    const booktag = this.defines.bk;
    const bkid = booktag.fields.id.values[at];
    let bkcaption = booktag?.innertext.get(at);
    let short = bkcaption.slice(0, 2);
    const bkheading = booktag?.fields.heading?.values[at] || booktag?.innertext?.get(at);
    const at2 = bkcaption.indexOf(";");
    if (~at2) {
      short = bkcaption.slice(at2 + 1);
      bkcaption = bkcaption.slice(0, at2);
    }
    return { id: bkid, caption: bkcaption, short, heading: bkheading, at };
  }
  function getChunk(at) {
    at = parseInt(at);
    const chunktag = this.defines.ck;
    const booktag = this.defines.bk;
    if (at < 0)
      return null;
    if (at >= chunktag.fields.id.values.length)
      return null;
    const line = chunktag.linepos[at];
    const bkat = this.nearestTag(line + 1, booktag);
    const bk2 = getBookInfo.call(this, bkat);
    const bkid = bk2.id;
    const id = chunktag.fields.id.values[at];
    const innertext2 = chunktag.innertext.get(at);
    const caption3 = this.caption(at);
    const depth = chunktag.depths ? chunktag.depths[at] || 1 : 1;
    return {
      bk: bk2,
      bkid,
      bkat,
      caption: caption3,
      at,
      id,
      depth,
      line: chunktag.linepos[at],
      lineend: chunktag.linepos[at + 1] || -1,
      innertext: innertext2
    };
  }
  var resetBy = (ptk3, tagname) => {
    for (let t in ptk3.defines) {
      const tag = ptk3.defines[t];
      if (tag.attrs.reset?.split(",").indexOf(tagname) > -1) {
        return t;
      }
    }
    return null;
  };
  function ancestorChunks(at, start) {
    const chunktag = this.defines.ck;
    if (!chunktag.depths)
      return [];
    let line = chunktag.linepos[at];
    let depth = chunktag.depths[at];
    const out = [];
    while (line > start && depth > 1) {
      if (depth > chunktag.depths[at]) {
        out.unshift(at);
        depth--;
      }
      at--;
      line = chunktag.linepos[at];
    }
    return out;
  }
  function prevsiblingChunk(at, start) {
    let p = at - 1;
    const chunktag = this.defines.ck;
    if (!chunktag.depths && at > 0)
      return at - 1;
    while (p > 0) {
      if (chunktag.depths[p] == chunktag.depths[at])
        return p;
      else if (chunktag.depths[p] < chunktag.depths[at])
        break;
      p--;
      if (start < chunktag.linepos[p])
        break;
    }
    return -1;
  }
  function nextsiblingChunk(at, end) {
    let p = at + 1;
    const chunktag = this.defines.ck;
    if (!chunktag.depths && at < end)
      return at + 1;
    while (p < chunktag.linepos.length) {
      if (chunktag.depths[p] == chunktag.depths[at])
        return p;
      else if (chunktag.depths[p] < chunktag.depths[at])
        break;
      p++;
      if (chunktag.linepos[p] >= end)
        break;
    }
    return -1;
  }
  function firstChildChunk(at) {
    const chunktag = this.defines.ck;
    if (!chunktag.depths)
      return -1;
    if (chunktag.depths[at + 1] == chunktag.depths[at] + 1)
      return at + 1;
    return -1;
  }
  function neighborChunks(at) {
    const ptk3 = this;
    const resettag = this.defines[resetBy(this, "ck")];
    const nearest = resettag ? this.nearestTag(at, resettag) - 1 : 0;
    const start = resettag ? resettag.linepos[nearest] : 0;
    const end = resettag ? resettag.linepos[nearest + 1] || ptk3.header.eot : ptk3.header.eot;
    const ancestors = ancestorChunks.call(this, at, start);
    const out = ancestors.map((it) => ptk3.getChunk.call(ptk3, it));
    const prev = prevsiblingChunk.call(this, at);
    if (prev > -1 && (!ancestors.length || ancestors[ancestors.length - 1] < prev)) {
      out.push(this.getChunk(prev));
    }
    out.push(this.getChunk(at));
    const first = firstChildChunk.call(this, at, start);
    if (first > -1)
      out.push(this.getChunk(first));
    const next = nextsiblingChunk.call(this, at, end);
    if (next > -1)
      out.push(this.getChunk(next));
    return out;
  }

  // ../ptk/basket/pitaka.ts
  var Pitaka = class extends LineBase {
    constructor(opts) {
      super(opts);
      this.defines = {};
      this.primarykeys = {};
      this.columns = {};
      this.tocs = {};
      this.rangeOfAddress = rangeOfAddress;
      this.tagAtAction = tagAtAction;
      this.innertext = innertext;
      this.scanColumnFields = scanColumnFields;
      this.searchColumnField = searchColumnField;
      this.scanText = scanText;
      this.parseQuery = parseQuery;
      this.scoreLine = scoreLine;
      this.scanCache = {};
      this.queryCache = {};
      this.columnField = columnField;
      this.inlineNote = inlineNote;
      this.footNoteAddress = footNoteAddress;
      this.footNoteByAddress = footNoteByAddress;
      this.footNoteInTSV = footNoteInTSV;
      this.foreignLinksAtTag = foreignLinksAtTag;
      this.getParallelBook = getParallelBook;
      this.getParallelLine = getParallelLine;
      this.enumParallelsPtk = enumParallelsPtk;
      this.taggedLines = {};
      this.foreignlinks = {};
      this.backlinks = {};
      this.rowOf = rowOf;
      this.inverted = null;
      this.parallels = {};
      this.lang = "";
      this.preprocessor = null;
      this.addForeignLinks = addForeignLinks;
      this.addBacklinks = addBacklinks;
      this.getCaption = getCaption;
      this.caption = caption2;
      this.nearestChunk = nearestChunk;
      this.getChunk = getChunk;
      this.neighborChunks = neighborChunks;
      this.fetchAddress = fetchAddress;
      this.fetchAddressExtra = fetchAddressExtra;
      this.hitsOfLine = hitsOfLine;
    }
    async init() {
      if (!this.payload)
        return;
      const compiler = new Compiler2();
      compiler.compileBuffer(this.payload, "0.off");
      this.defines = compiler.typedefs;
      this.attributes = compiler.compiledFiles["0.off"]?.attributes;
      this.lang = this.attributes.lang || "zh";
      this.template = Templates[this.attributes.template] || Templates.generic;
      const ranges = [];
      for (let i = 0; i < this.header.preload.length; i++) {
        const r = this.sectionRange(this.header.preload[i]);
        if (r && r[1] > r[0])
          ranges.push(r);
      }
      for (let n in this.defines) {
        if (!this.defines[n].fields.lazy) {
          const r = this.sectionRange("^" + n);
          if (r && r[1] > r[0])
            ranges.push(r);
        }
      }
      await this.loadLines(ranges);
      for (let i = 0; i < this.header.preload.length; i++) {
        const section = this.getSection(this.header.preload[i]);
        if (section.length)
          this.deserialize(section, this.header.preload[i]);
      }
      for (const n in this.defines) {
        if (!this.defines[n].fields.lazy) {
          const section = this.getSection("^" + n);
          if (section && section.length) {
            this.defines[n].deserialize(section, this);
          } else {
            this.defines[n].empty = true;
          }
        }
        for (let attr2 in this.defines[n].fields) {
          const A = this.defines[n].fields[attr2];
          if (A.foreign && this.primarykeys[A.foreign]) {
            A.keys = this.primarykeys[A.foreign];
          }
        }
      }
      for (const n in this.defines) {
        if (this.defines[n].empty)
          delete this.defines[n];
      }
      for (const n in this.columns) {
        const tagname = this.columns[n].attrs?.tagname;
        if (tagname && this.defines[tagname]) {
          this.defines[tagname].column = n;
        }
      }
      if (this.attributes.toctag) {
        const toctags = this.attributes.toctag.split(",");
        buildTocTag.call(this, toctags);
      }
    }
    deserialize(section, sectionname) {
      if (!section.length)
        return;
      if (!section[0])
        section.shift();
      if (!section.length)
        return;
      const firstline = section[0];
      const { name: name2 } = sourceType(firstline);
      const at = this.header.sectionnames.indexOf(sectionname);
      const sourcetype = this.header.sectiontypes[at];
      if (sourcetype === "tsv") {
        const column = new Column();
        column.deserialize(section);
        this.columns[column.name] = column;
        this.primarykeys[column.name] = column.keys;
      } else if (sourcetype === "tokens") {
        section.shift();
        const postingstart = this.sectionRange("_postings")[0];
        this.inverted = new Inverted(section, postingstart);
      } else if (sourcetype === "toc") {
        section.shift();
        this.tocs[name2 || "*"] = new TableOfContent(section, name2);
      }
    }
    async loadPostings(s) {
      if (!this.inverted)
        return;
      const nPostings = this.inverted.nPostingOf(s);
      const postinglines = [];
      const that = this;
      for (let i = 0; i < nPostings.length; i++) {
        if (nPostings[i] < 0)
          continue;
        const line = this.inverted.postingStart + nPostings[i];
        postinglines.push([line, line + 1]);
      }
      postinglines.sort((a, b) => a[0] - b[0]);
      await that.loadLines(postinglines);
      for (let i = 0; i < nPostings.length; i++) {
        const at = nPostings[i];
        if (at == -1)
          continue;
        const line = this.inverted.postingStart + nPostings[i];
        if (!this.inverted.postings[at]) {
          const packedline = that.getLine(line);
          this.inverted.postings[at] = unpackIntDelta(packedline);
        }
      }
      return this.getPostings(s);
    }
    getHeading(line) {
      if (!line)
        return "";
      const chunktag = this.defines.ck;
      const booktag = this.defines.bk;
      const linepos = chunktag?.linepos || [];
      const at = bsearchNumber(linepos, line + 1) - 1;
      const lineoff = line - linepos[at];
      const id = chunktag?.fields?.id?.values[at];
      const bkat = this.nearestTag(line + 1, booktag);
      const bk2 = getBookInfo.call(this, bkat);
      const bkid = bk2?.id;
      const caption3 = this.caption(at);
      return { id, tagname: "ck", caption: caption3, lineoff, bk: bk2, bkid };
    }
    getPostings(s) {
      const nPostings = this.inverted.nPostingOf(s);
      const postings = this.inverted.postings;
      return nPostings.map((np) => postings[np]);
    }
    nearestTag(line, tag, fieldname = "") {
      if (typeof tag == "string")
        tag = this.defines[tag];
      if (!tag)
        return -1;
      const linepos = tag.linepos;
      if (!linepos)
        return null;
      const at = bsearchNumber(linepos, line) - 1;
      const adjustat = line < linepos[linepos.length - 1] ? at : at + 1;
      if (!fieldname)
        return adjustat;
      else
        return tag.fields[fieldname].values[adjustat];
    }
    findClosestTag(typedef, key, value, from = 0) {
      let at = typedef.fields[key].values.indexOf(value);
      while (at >= 0 && typedef.linepos[at] < from) {
        at = typedef.fields[key].values.indexOf(value, at + 1);
      }
      return at;
    }
    postingLine(posting) {
      return plContain(posting, this.inverted.tokenlinepos)[0];
    }
    validId(tagname, id) {
      const V = this.defines[tagname]?.fields;
      if (!V || !V.id)
        return false;
      if (V.id.type == "number" && typeof id !== "number")
        id = parseInt(id);
      return ~V.id.values.indexOf(id);
    }
    typedefOf(tagname) {
      return this.defines[tagname];
    }
    humanName(short, lang = "zh") {
      let n = this.attributes[lang] || this.name;
      const at = n.indexOf("|");
      if (at == -1)
        return n;
      return short ? n.slice(0, at) : n.slice(at + 1);
    }
    getSectionStart(name2) {
      const at = this.header.sectionnames.indexOf(name2);
      if (~at) {
        return this.header.sectionstarts[at];
      }
      return -1;
    }
    getSectionName(line) {
      const at = bsearchNumber(this.header.sectionstarts, line + 1) - 1;
      return this.header.sectionnames[at];
    }
    async fetchTag(ele, id) {
      const range = rangeOfElementId.call(this, [[ele, id]]);
      if (range.length) {
        const [start, end] = range[0];
        const line = await this.getLine(start);
        const [text2, tags] = parseOfftext(line);
        for (let i = 0; i < tags.length; i++) {
          if (tags[i].name == ele && tags[i].attrs.id == id) {
            return tags[i];
          }
        }
      }
      return null;
    }
    tagInRange(ele, from, to) {
      if (typeof to == "undefined") {
        to = this.header.eot;
      }
      const linepos = this.defines[ele]?.linepos;
      if (!linepos)
        return [];
      const at = bsearchNumber(linepos, from);
      let at2 = bsearchNumber(linepos, to);
      if (linepos[at2] > to)
        at2--;
      return [at, at2];
    }
  };

  // ../ptk/zip/utils.ts
  var makeUint8Array = (thing) => new Uint8Array(thing.buffer || thing);
  var wasm = "AGFzbQEAAAABCgJgAABgAn9/AXwDAwIAAQUDAQACBwkCAW0CAAFjAAEIAQAKlQECSQEDfwNAIAEhAEEAIQIDQCAAQQF2IABBAXFBoIbi7X5scyEAIAJBAWoiAkEIRw0ACyABQQJ0IAA2AgAgAUEBaiIBQYACRw0ACwtJAQF/IAFBf3MhAUGAgAQhAkGAgAQgAGohAANAIAFB/wFxIAItAABzQQJ0KAIAIAFBCHZzIQEgAkEBaiICIABJDQALIAFBf3O4Cw";
  var instance = new WebAssembly.Instance(
    new WebAssembly.Module(Uint8Array.from(atob(wasm), (c2) => c2.charCodeAt(0)))
  );
  var { c, m: m2 } = instance.exports;
  var pageSize = 65536;
  var crcBuffer = makeUint8Array(m2).subarray(pageSize);

  // ../ptk/zip/zipstore.ts
  var ZipStore = class {
    //zipbuf should at least include the Central records.
    constructor(zipbuf) {
      if (zipbuf instanceof ArrayBuffer) {
        zipbuf = new Uint8Array(zipbuf);
      }
      this.zipbuf = zipbuf instanceof Uint8Array ? zipbuf : new Uint8Array(zipbuf.buffer);
      this.files = [];
      this.zipStart = 0;
      const { fileCount, centralSize, centralOffset } = this.loadEndRecord();
      if (!fileCount)
        return null;
      this.loadFiles(fileCount, centralSize, centralOffset);
    }
    loadFiles(fileCount, centralSize, centralOffset) {
      const coffset = this.zipbuf.length - 22 /* endLength */ - centralSize;
      const buf = new DataView(this.zipbuf.buffer);
      let p = coffset;
      for (let i = 0; i < fileCount; i++) {
        const signature = buf.getUint32(p);
        if (signature !== 1347092738 /* centralHeaderSignature */) {
          break;
        }
        const size = buf.getUint32(p + 20, true);
        const namelen = buf.getUint16(p + 28, true);
        const extra = buf.getUint16(p + 30, true);
        const commentlen = buf.getUint16(p + 32, true);
        let offset = buf.getUint32(p + 42, true);
        p += 46 /* centralHeaderLength */;
        const encodedName = this.zipbuf.subarray(p, p + namelen);
        const name2 = new TextDecoder().decode(encodedName);
        p += namelen;
        p += extra + commentlen;
        if (i === 0)
          this.zipStart = offset;
        offset += 30 /* fileHeaderLength */ + namelen;
        let content;
        const inbuf = centralOffset - coffset;
        if (offset - inbuf >= 0) {
          content = this.zipbuf.subarray(offset - inbuf, offset - inbuf + size);
        }
        this.files.push({ name: name2, offset, size, content });
      }
    }
    loadEndRecord() {
      const endRecord = { signature: 0, fileCount: 0, centralSize: 0, centralOffset: 0 };
      const buf = new DataView(this.zipbuf.buffer);
      const endpos = this.zipbuf.length - 22 /* endLength */;
      endRecord.signature = buf.getUint32(endpos);
      if (endRecord.signature !== 1347093766 /* endSignature */) {
        console.log("endrecord signature", endRecord.signature, "zipbuf length", this.zipbuf.length);
        throw "wrong endRecord signature";
        return endRecord;
      }
      endRecord.fileCount = buf.getUint16(endpos + 8, true);
      endRecord.centralSize = buf.getUint32(endpos + 12, true);
      endRecord.centralOffset = buf.getUint32(endpos + 16, true);
      return endRecord;
    }
  };

  // ../ptk/basket/openptk.ts
  var openPtk = async (name2, cachedimage) => {
    let ptk3 = usePtk(name2);
    if (ptk3)
      return ptk3;
    if (!name2)
      return null;
    let zipstore;
    if (cachedimage) {
      zipstore = new ZipStore(cachedimage);
    }
    ptk3 = new Pitaka({ name: name2, zipstore });
    poolAdd(name2, ptk3);
    if (await ptk3.isReady()) {
      await ptk3.init();
      const poolptk = poolGetAll();
      for (let i = 0; i < poolptk.length; i++) {
        poolptk[i].addForeignLinks(ptk3);
      }
      return ptk3;
    } else {
      poolDel(name2);
    }
  };
  var usePtk = (name2) => {
    return poolGet(name2);
  };

  // ../ptk/basket/folio.ts
  var VALIDPUNCS = "\u300C\u300D\u300E\u300F\u3002\uFF0C\uFF1B\uFF1A\u3001\uFF01\uFF1F";
  var tidyFolioText = (text2) => {
    return text2.replace(/【([^】]*)】/g, (m4, m1) => "\u3010" + "-".repeat(m1.length) + "\u3011");
  };
  var toFolioText = (lines) => {
    if (!lines || !lines.length)
      return [];
    let firstline = lines[0];
    let m4 = firstline.match(/(\^pb\d+)/);
    if (!m4) {
    }
    const text2 = tidyFolioText(lines.join("	")).replace(/(..)\^pb/g, "$1^lb^pb").split("^lb");
    return text2;
  };
  var countFolioChar = (linetext) => {
    let prev = 0, textlen = 0, textsnip = "", count = 0;
    const consumeChar = () => {
      if (prev && textsnip[0] == "\u3010") {
        textsnip = textsnip.replace(/【([^】]*)】/, (m4, m1) => "\u3010" + "-".repeat(m1.length) + "\u3011");
      }
      const chars = splitUTF32Char(textsnip);
      let i = 0;
      while (i < chars.length) {
        const r = CJKRangeName(chars[i]);
        if (r || chars[i] == "\u3000") {
          count++;
        }
        i++;
      }
    };
    linetext.replace(OFFTAG_REGEX_G, (m4, rawName, rawAttrs, offset) => {
      textsnip = linetext.slice(prev, offset);
      consumeChar();
      prev = offset + m4.length;
    });
    textsnip = linetext.slice(prev);
    consumeChar();
    return count;
  };
  var folioPosFromAddress = async (ptk3, address) => {
    const { choff, lineoff, action } = parseAddress(address);
    const [start, end] = ptk3.rangeOfAddress(action);
    if (!end)
      return {};
    const folio = ptk3.defines.folio;
    const folioat = bsearchNumber(ptk3.defines.folio.linepos, start + 1) - 1;
    const ckat = bsearchNumber(ptk3.defines.ck.linepos, start + 1) - 1;
    const id = folio.fields.id.values[folioat];
    if (!id)
      return {};
    const ck = ptk3.defines.ck.fields.id.values[ckat];
    const ft = new FolioText(ptk3);
    await ft.load(id);
    const [pb2, line, ch] = ft.toFolioPos(ck, lineoff, choff);
    return { id, pb: pb2, line, ch };
  };
  var FolioText = class {
    constructor(ptk3) {
      this.ptk = ptk3;
      this.offtext = "";
      this.pbs = [];
      this.pbpos = [];
      this.chunks = [];
      this.chunkpos = [];
      this.chunklinepos = [];
      this.ck = ptk3.defines.ck;
    }
    toFolioPos(ck = "1", lineoff = 0, choff = 0) {
      const [ckstart, ckend] = this.chunkRange(ck);
      const str = this.offtext.slice(ckstart, ckend);
      let p = 0;
      while (lineoff > 0 && p < str.length) {
        if (str.charAt(p) == "\n")
          lineoff--;
        p++;
      }
      const start = ckstart + p + choff;
      const pbat = bsearchNumber(this.pbpos, start + choff + 1) - 1;
      const [pbstart, pbend] = this.pbRange(this.pbs[pbat]);
      const end = Math.min(start, pbend);
      let pbstr = this.offtext.slice(pbstart, end);
      if (this.offtext.slice(end, end + 3) == "^lb") {
        pbstr += "^lb";
      }
      const pblines = pbstr.split("^lb");
      const line = pblines.length;
      const ch = this.countFolioChar(pblines[pblines.length - 1]);
      return [this.pbs[pbat], line - 1, ch];
    }
    folioPageText(pb2) {
      const [start, end] = this.pbRange(pb2);
      return toFolioText(this.offtext.slice(start, end).split("\n"));
    }
    countFolioChar(linetext) {
      return countFolioChar(linetext);
    }
    skipFolioChar(linetext, ch) {
      if (!linetext)
        return 0;
      let prev = 0, textlen = 0, textsnip = "";
      const consumeChar = () => {
        if (prev && textsnip[0] == "\u3010") {
          textsnip = textsnip.replace(/【([^】]*)】/, (m4, m1) => "\u3010" + "-".repeat(m1.length) + "\u3011");
        }
        const chars = splitUTF32Char(textsnip);
        let i = 0;
        while (ch > -1 && i < chars.length) {
          const r = CJKRangeName(chars[i]);
          if (r || chars[i] == "\u3000") {
            ch--;
          }
          if (ch >= 0)
            textlen += chars[i].codePointAt(0) >= 131072 ? 2 : 1;
          i++;
        }
      };
      let taglens = 0;
      linetext.replace(OFFTAG_REGEX_G, (m4, rawName, rawAttrs, offset) => {
        textsnip = linetext.slice(prev, offset);
        consumeChar();
        if (ch <= 0)
          return;
        prev = offset + m4.length;
        taglens += m4.length;
      });
      textsnip = linetext.slice(prev);
      consumeChar();
      return textlen + taglens;
    }
    fromFolioPos(foliopos, line = 0, ch = 0) {
      let pbid = foliopos;
      if (typeof foliopos == "object") {
        [pbid, line, ch] = foliopos;
      }
      const [pbstart, pbend] = this.pbRange(pbid);
      const pbstr = tidyFolioText(this.offtext.slice(pbstart, pbend));
      const pblines = pbstr.split("^lb");
      let start = pbstart || 0;
      for (let i2 = 0; i2 < line; i2++) {
        start += (pblines[i2]?.length || 0) + (i2 > 0 ? 3 : 0);
      }
      const pbchoff = this.skipFolioChar(pbstr.slice(start - pbstart), ch);
      start += pbchoff;
      let ckat = bsearchNumber(this.chunkpos, start + 1) - 1;
      const ckid = this.chunks[ckat < 0 ? 0 : ckat];
      const [ckstart, ckend] = this.chunkRange(ckid);
      const str = this.offtext.slice(ckstart, ckend);
      const cklines = str.split("\n");
      let p = ckstart || 0;
      let lineoff = 0, choff = 0, i = 0;
      for (i = 0; i < cklines.length; i++) {
        if (p + cklines[i].length >= start) {
          choff = start - p;
          break;
        }
        lineoff++;
        p += cklines[i].length + 1;
      }
      const ptkline = this.from + this.chunklinepos[ckat] + lineoff;
      const linecount = this.chunklinepos[ckat + 1] - this.chunklinepos[ckat];
      const at = bsearchNumber(this.ptk.defines.ck.linepos, ptkline + 1) - 1;
      const chunk = this.ptk.getChunk(at + 1);
      return { ckid, lineoff, choff, linetext: cklines[i] || "", ptkline, linecount, at, ck: chunk };
    }
    chunkRange(ckid) {
      const at = this.chunks.indexOf(ckid);
      if (at == -1)
        return [0, 0];
      return [this.chunkpos[at], this.chunkpos[at + 1]];
    }
    chunkText(ckid) {
      const [s, e] = this.chunkRange(ckid);
      return this.offtext.slice(s, e);
    }
    pbRange(pb2) {
      if (typeof pb2 == "number")
        pb2 = pb2.toString();
      const at = this.pbs.indexOf(pb2);
      if (at == -1)
        return [0, 0];
      return [this.pbpos[at], this.pbpos[at + 1]];
    }
    async load(bkfolio) {
      const ptk3 = this.ptk;
      let bk2 = "", folio = bkfolio;
      if (bkfolio.match(/\d$/)) {
        bk2 = bkfolio.replace(/\d+$/g, "");
      } else {
        folio = "";
        bk2 = bkfolio;
      }
      let from, to;
      const addr = (bk2 ? "bk#" + bk2 : "") + (folio ? "." : "") + (folio ? "folio#" + folio : "");
      [from, to] = ptk3.rangeOfAddress(addr);
      if (from == to) {
        return ["", from, to];
      }
      await ptk3.loadLines([from, to]);
      this.folio = folio;
      this.offtext = ptk3.slice(from, to).join("\n");
      this.from = from;
      this.to = to;
      let p = 0, linecount = 0;
      while (p < this.offtext.length) {
        const ch3 = this.offtext.slice(p, p + 3);
        if (ch3 == "^pb") {
          this.pbpos.push(p);
          p += 3;
          const m4 = this.offtext.slice(p).match(/([\d]+)/);
          this.pbs.push(m4[1]);
          p += m4[1].length;
        } else if (ch3 == "^ck") {
          this.chunkpos.push(p);
          p += 3;
          if (this.offtext.charAt(p) == "#")
            p++;
          const m4 = this.offtext.slice(p).match(/([a-z\d]+)/);
          this.chunks.push(m4[1]);
          this.chunklinepos.push(linecount);
          p += m4[1].length;
        } else {
          if (ch3[0] == "\n")
            linecount++;
          p++;
        }
      }
      this.pbpos.push(this.offtext.length - 1);
      this.chunkpos.push(this.offtext.length - 1);
      this.chunklinepos.push(linecount + 1);
    }
  };
  var extractPuncPos = (foliopagetext, foliolines = 5, validpuncs = VALIDPUNCS) => {
    const puncs = [];
    for (let i = 0; i < foliopagetext.length; i++) {
      let ch = 0, ntag = 0, textsum = 0;
      let [text2, tags] = parseOfftext(foliopagetext[i]);
      const isgatha = !!tags.filter((it) => it.name == "gatha").length;
      if (i >= foliolines)
        break;
      if (isgatha) {
        text2 = text2.replace(/[？；，。．]/g, "\u3000");
      }
      ;
      const chars = splitUTF32Char(text2);
      for (let j2 = 0; j2 < chars.length; j2++) {
        while (ntag < tags.length && textsum > tags[ntag].choff) {
          if (tags[ntag].name == "ck") {
            puncs.push({ line: i, ch, text: styledNumber(parseInt(tags[ntag].attrs.id), "\u2460") });
          } else if (tags[ntag].name == "n") {
            puncs.push({ line: i, ch, text: "n" + parseInt(tags[ntag].attrs.id) });
          }
          ntag++;
        }
        textsum += chars[j2].length;
        if (~validpuncs.indexOf(chars[j2])) {
          let text3 = toVerticalPunc(chars[j2]);
          puncs.push({ line: i, ch, text: text3 });
        }
        const r = CJKRangeName(chars[j2]);
        if (r || chars[j2] == "\u3000") {
          ch++;
        }
      }
    }
    return puncs;
  };

  // ../ptk/align/parallels.ts
  var parallelWithDiff = (ptk3, line, includeself = false, local = true, remote = false) => {
    const out = [];
    if (!ptk3)
      return out;
    const bkat = ptk3.nearestTag(line + 1, "bk");
    const bookstart = ptk3.defines.bk.linepos[bkat];
    if (includeself) {
      out.push([ptk3, bookstart, line]);
    }
    const lineoff = line - bookstart;
    const bkid = ptk3.defines.bk.fields.id.values[bkat];
    const books = ptk3.getParallelBook(bkid);
    const [bkstart, bkend] = ptk3.rangeOfAddress("bk#" + bkid);
    if (local) {
      for (let i = 0; i < books.length; i++) {
        const [start, end] = ptk3.rangeOfAddress("bk#" + books[i]);
        if (lineoff <= end - start) {
          out.push([ptk3, start - bookstart, start + lineoff]);
        }
      }
    }
    if (remote) {
      const parallelPitakas = poolParallelPitakas(ptk3);
      for (let i = 0; i < parallelPitakas.length; i++) {
        const pptk = usePtk(parallelPitakas[i]);
        const lines = pptk.getParallelLine(ptk3, line, true);
        lines.forEach((it) => out.push([...it]));
      }
    }
    return out;
  };
  var getParallelLines = async (ptk3, line, _out, opts = {}) => {
    const lines = parallelWithDiff(ptk3, line, true, opts.local, opts.remote);
    const out = [];
    for (let i = 0; i < lines.length; i++) {
      const [ptk4, bookstart, line2] = lines[i];
      await ptk4.loadLines([line2]);
      const linetext = ptk4.getLine(line2);
      const heading = ptk4.getHeading(line2);
      out.push({ ptk: ptk4, heading, linetext, line: line2 });
    }
    if (_out)
      _out.push(...out);
    return out;
  };

  // ../ptk/align/breaker.ts
  var SENTENCESEP = String.fromCodePoint(12287);
  var SENTENCESEP1 = String.fromCodePoint(12286);

  // ../ptk/utils/diff.ts
  var import_colors = __toESM(require_colors(), 1);

  // src/unit.js
  var stylestring = (f) => {
    return `left:${f.left}px;width:${f.width}px;top:${f.top}px;height:${f.height}px`;
  };

  // src/savestore.ts
  var AppPrefix = "YLZ.";
  var loadSettings = () => {
    const activefolioid2 = "pphs";
    const autodict2 = localStorage.getItem(AppPrefix + "autodict") || "off";
    const newbie2 = localStorage.getItem(AppPrefix + "newbie") || "on";
    const playnextjuan2 = localStorage.getItem(AppPrefix + "playnextjuan") || "on";
    const showpunc2 = localStorage.getItem(AppPrefix + "showpunc") || "on";
    const showsponsor2 = localStorage.getItem(AppPrefix + "showsponsor") || "off";
    const showyoutube2 = localStorage.getItem(AppPrefix + "showyoutube") || "off";
    const heightratio2 = parseFloat(localStorage.getItem(AppPrefix + "heightratio") || "1") || 1;
    const textsize2 = parseInt(localStorage.getItem(AppPrefix + "textsize") || "150") || 150;
    const playrate2 = parseInt(localStorage.getItem(AppPrefix + "playrate") || "100") || 100;
    const vip2 = localStorage.getItem(AppPrefix + "vip") || "";
    const tosim2 = localStorage.getItem(AppPrefix + "tosim") || "0";
    let _favorites = localStorage.getItem(AppPrefix + "favorites") || "{}";
    let _preferaudio = localStorage.getItem(AppPrefix + "preferaudio") || "{}";
    let _tofindhistory = localStorage.getItem(AppPrefix + "tofindhistory") || '["\u6DE8\u4FE1",""]';
    let favorites2 = {}, preferaudio2 = {}, tofindhistory2 = [];
    try {
      favorites2 = JSON.parse(_favorites);
      preferaudio2 = JSON.parse(_preferaudio);
      tofindhistory2 = JSON.parse(_tofindhistory);
    } catch (e) {
      console.log(e);
      favorites2 = {};
      preferaudio2 = {};
    }
    return {
      tosim: tosim2,
      vip: vip2,
      activefolioid: activefolioid2,
      heightratio: heightratio2,
      tofindhistory: tofindhistory2,
      playrate: playrate2,
      textsize: textsize2,
      showsponsor: showsponsor2,
      showyoutube: showyoutube2,
      autodict: autodict2,
      newbie: newbie2,
      favorites: favorites2,
      playnextjuan: playnextjuan2,
      preferaudio: preferaudio2,
      showpunc: showpunc2
    };
  };
  var saveSettings = () => {
    for (let key in settingsToBeSave) {
      localStorage.setItem(key, settingsToBeSave[key]);
      delete settingsToBeSave[key];
    }
    clearTimeout(updateTimer);
  };
  var updateTimer = 0;
  var settingsToBeSave = {};
  var updateSettings = (_settings) => {
    let updated = false, oldval;
    for (let key in _settings) {
      if (_settings.hasOwnProperty(key)) {
        if (settings[key] !== _settings[key]) {
          let val = _settings[key];
          if (typeof val == "object") {
            val = JSON.stringify(_settings[key]);
            oldval = JSON.stringify(localStorage.getItem(key));
          }
          if (val !== oldval) {
            settingsToBeSave[AppPrefix + key] = val;
            if (typeof _settings[key] == "object") {
              settings[key] = JSON.parse(JSON.stringify(_settings[key]));
            } else {
              settings[key] = _settings[key];
            }
            updated = true;
          }
        }
      }
    }
    if (updated) {
      clearTimeout(updateTimer);
      updateTimer = setTimeout(saveSettings, 5e3);
    }
  };
  var settings = loadSettings();

  // node_modules/svelte/store/index.mjs
  var subscriber_queue = [];
  function writable(value, start = noop) {
    let stop;
    const subscribers = /* @__PURE__ */ new Set();
    function set(new_value) {
      if (safe_not_equal(value, new_value)) {
        value = new_value;
        if (stop) {
          const run_queue = !subscriber_queue.length;
          for (const subscriber of subscribers) {
            subscriber[1]();
            subscriber_queue.push(subscriber, value);
          }
          if (run_queue) {
            for (let i = 0; i < subscriber_queue.length; i += 2) {
              subscriber_queue[i][0](subscriber_queue[i + 1]);
            }
            subscriber_queue.length = 0;
          }
        }
      }
    }
    function update2(fn) {
      set(fn(value));
    }
    function subscribe2(run2, invalidate = noop) {
      const subscriber = [run2, invalidate];
      subscribers.add(subscriber);
      if (subscribers.size === 1) {
        stop = start(set) || noop;
      }
      run2(value);
      return () => {
        subscribers.delete(subscriber);
        if (subscribers.size === 0 && stop) {
          stop();
          stop = null;
        }
      };
    }
    return { set, update: update2, subscribe: subscribe2 };
  }

  // src/constant.js
  var CacheName = "v1::ylz";
  var APPVER = "23.11.14";

  // src/mediaurls.js
  var ptk2;
  var silence = { vid: "", performer: "-\u975C\u9ED8-" };
  var audiofolder = "/baudio/";
  var setTimestampPtk = (_ptk) => {
    ptk2 = _ptk;
  };
  var fetchAudioList = async (activeid, store, showyoutube2 = false) => {
    let out = [];
    if (!ptk2)
      return out;
    const ts = ptk2.columns.timestamp;
    if (!ts)
      return out;
    const cache = await caches.open(CacheName);
    const keys = await cache.keys();
    const incaches = keys.map((it) => it.url.slice(window.location.origin.length + audiofolder.length).replace(".mp3", ""));
    for (let i = 0; i < ts.keys.len(); i++) {
      const aid = ts.keys.get(i);
      const audiohost = ts.videohost[i];
      let performer = ts.performer[i];
      let youtube = "";
      const at = performer.indexOf("|");
      if (~at) {
        if (showyoutube2)
          youtube = performer.slice(at + 1);
        performer = performer.slice(0, at);
      }
      const timestamp = ts.timestamp[i];
      const bookid = ts.bookid[i];
      const incache = 1 - !~incaches.indexOf(aid.replace(/\^\d+$/, ""));
      activeid == bookid && out.push({ aid, performer, youtube, incache, bookid, timestamp, audiohost });
    }
    out.sort((a, b) => a.performer == b.performer ? 0 : a.performer < b.performer ? -1 : 1);
    const cacheno = out.filter((it) => !it.incache).concat();
    out = out.filter((it) => it.incache).concat(cacheno);
    out.unshift(silence);
    if (store)
      store.set(out);
    return out;
  };

  // src/store.js
  var online = writable(navigator.onLine);
  var thezip = writable(null);
  var activePtk = writable("ylz-prjn");
  var folioincache = writable({});
  var loadingfolio = writable(false);
  var loadingzip = writable(false);
  var autodict = writable(settings.autodict);
  var activepb = writable("1");
  var activefolioid = writable(settings.activefolioid);
  var maxfolio = writable(0);
  var downloading = writable(0);
  var sharing = writable(false);
  var favorites = writable(settings.favorites);
  var preferaudio = writable(settings.preferaudio);
  var showpunc = writable(settings.showpunc);
  var showsponsor = writable(settings.showsponsor);
  var showyoutube = writable(settings.showyoutube);
  var landscape = writable(false);
  var isAndroid = writable(false);
  var searchable = writable("");
  var leftmode = writable("folio");
  var foliotext = writable(null);
  var tofind = writable("");
  var tofindhistory = writable(settings.tofindhistory);
  var heightratio = writable(settings.heightratio);
  var textsize = writable(settings.textsize);
  var vip = writable(settings.vip);
  var tosim = writable(settings.tosim);
  var palitrans = writable(0);
  var hasupdate = writable(true);
  var playrate = writable(settings.playrate);
  var player;
  var setplayer = (p) => player = p;
  var mediaurls = writable([silence]);
  var notificationmessage = writable("");
  var bookByFolio = (fid, ptk3) => {
    if (ptk3) {
      const folio = dc.defines.folio;
      const bk2 = dc.defines.bk;
      const at = folio.fields.id.values.indexOf(fid);
      if (!~at)
        return "";
      const line = folio.linepos[at] + 1;
      const at2 = bsearchNumber(bk2.linepos, line) - 1;
      return bk2.fields.id.values[at2];
    } else {
      return fid.replace(/\d+$/, "");
    }
  };
  var audioid = writable("");
  var curPtk = () => {
    return usePtk(get_store_value(activePtk));
  };
  var folioLines = function(_fid) {
    const ptk3 = usePtk(get_store_value(activePtk));
    const fid = _fid || get_store_value(activefolioid);
    const at = ptk3.defines.folio.fields.id?.values.indexOf(fid);
    if (~at) {
      return ptk3.defines.folio.fields.lines.values[at] || 5;
    }
    return 5;
  };
  var folioChars = writable(17);
  var playing = writable(false);
  var continueplay = writable(false);
  var playnextjuan = writable(settings.playnextjuan);
  var tapmark = writable(["2", 0, 0]);
  var remainrollback = writable(-1);
  var newbie = writable(settings.newbie);
  var idlecount = writable(0);
  var showpaiji = writable(false);
  var ptks = ["ylz-prjn", "ylz-tg", "ylz_sanskrit", "dc"];
  var allptks = ["ylz-prjn", "ylz-tg", "ylz-svk", "ylz-vny", "ylz_sanskrit", "dc"];
  var reverseswipe = writable(false);
  activefolioid.subscribe((activefolioid2) => updateSettings({ activefolioid: activefolioid2 }));
  autodict.subscribe((autodict2) => updateSettings({ autodict: autodict2 }));
  newbie.subscribe((newbie2) => updateSettings({ newbie: newbie2 }));
  showpunc.subscribe((showpunc2) => updateSettings({ showpunc: showpunc2 }));
  showsponsor.subscribe((showsponsor2) => updateSettings({ showsponsor: showsponsor2 }));
  showyoutube.subscribe((showyoutube2) => updateSettings({ showyoutube: showyoutube2 }));
  favorites.subscribe((favorites2) => updateSettings({ favorites: favorites2 }));
  playrate.subscribe((playrate2) => updateSettings({ playrate: playrate2 }));
  preferaudio.subscribe((preferaudio2) => updateSettings({ preferaudio: preferaudio2 }));
  tofindhistory.subscribe((tofindhistory2) => updateSettings({ tofindhistory: tofindhistory2 }));
  heightratio.subscribe((heightratio2) => updateSettings({ heightratio: heightratio2 }));
  tosim.subscribe((tosim2) => updateSettings({ tosim: tosim2 }));
  reverseswipe.subscribe((reverseswipe2) => {
    console.log("reve", reverseswipe2);
    updateSettings({ reverseswipe: reverseswipe2 });
  });
  textsize.subscribe((textsize2) => {
    const tsz = (textsize2 / 100).toFixed(2) + "em";
    document.documentElement.style.setProperty("--textsize", tsz);
    updateSettings({ textsize: textsize2 });
  });
  vip.subscribe((vip2) => updateSettings({ vip: vip2 }));
  var findByAudioId = (id, column = "timestamp") => {
    const ptk3 = usePtk("dc");
    if (!ptk3.columns[column])
      return null;
    const ts = ptk3.columns[column].fieldsByKey(id);
    return { id, ...ts };
  };
  var stopAudio = () => {
    if (player && player.paused)
      player?.pause();
    playing.set(false);
    remainrollback.set(-1);
  };
  var idletime = 30;
  var hasVariorum = (bkid) => {
    const ptk3 = usePtk("ylz_sanskrit");
    const at = bkid.indexOf("_");
    if (~at)
      bkid = bkid.slice(0, at);
    return ~ptk3.defines.bk.fields.id.values.indexOf(bkid + "_variorum");
  };
  var hasSanskrit = (bkid) => {
    const ptk3 = usePtk("ylz_sanskrit");
    const at = bkid.indexOf("_");
    if (~at)
      bkid = bkid.slice(0, at);
    const at2 = ptk3.defines.bk.fields.id.values.indexOf(bkid);
    return ~at2;
  };
  var hasTranslation = (ptk3, bkid) => {
    const books = ptk3.getParallelBook(bkid);
    return books.length;
  };
  var makeAddressFromFolioPos = (pbid, cx = 0, cy = 0) => {
    if (typeof pbid !== "string") {
      cx = pbid[1];
      cy = pbid[2];
      pbid = pbid[0];
    }
    const ft = get_store_value(foliotext);
    if (!ft || !ft.fromFolioPos)
      return "";
    const { ckid, lineoff, choff } = ft.fromFolioPos(pbid, cx, cy);
    const address = makeAddress("", "bk#" + bookByFolio(get_store_value(activefolioid)) + ".ck#" + ckid, 0, 0, lineoff, choff);
    return address;
  };
  var tapAddress = () => makeAddressFromFolioPos(get_store_value(tapmark));
  var parallelFolios = (ptk3, folioid) => {
    folioid = folioid || get_store_value(activefolioid);
    const folio = ptk3.defines.folio;
    const at = folioid.indexOf("_");
    const prefix = (~at ? folioid.slice(0, at) : folioid).replace(/1$/, "");
    const out = [], idarr = folio.fields.id.values;
    for (let i = 0; i < idarr.length; i++) {
      if (~idarr[i].indexOf("_variorum"))
        continue;
      if (idarr[i].startsWith(prefix + "_") && idarr[i] !== folioid && !idarr[i].replace(/1$/, "").match(/\d$/)) {
        out.push(i);
      }
    }
    return out;
  };
  var selectmedia = (aid, restart) => {
    if (get_store_value(remainrollback) == 0)
      remainrollback.set(-1);
    if (!aid)
      stopAudio();
    else {
      const prefer = get_store_value(preferaudio);
      prefer[get_store_value(activefolioid)] = aid;
      preferaudio.set(Object.assign({}, prefer));
      playing.set(true);
    }
    audioid.set(aid || "");
    if (restart)
      activepb.set("1");
    setTimeout(() => {
      player.play();
    }, 100);
  };
  var sideWidth = () => {
    const w = window.innerHeight * 0.45;
    const r = (w * 100 / window.innerWidth).toFixed(2);
    return "left:" + r + "vw;width:" + (100 - r) + "vw";
  };
  var folioHolderWidth = (ls, ratio = 1, _swiper) => {
    let style = "100vw";
    ratio = ratio || 1;
    if (get_store_value(landscape)) {
      const w = window.innerHeight * 0.45 * ratio;
      const r = (w * 100 / window.innerWidth).toFixed(2);
      style = r + "vw";
    }
    if (_swiper && _swiper?.update)
      setTimeout(() => {
        _swiper?.update && _swiper?.update();
      }, 100);
    return style;
  };
  var paijitexts = [
    "\u65BD\u4E3B\u203B\u9673\u78A7\u541F",
    "\u65BD\u4E3B\u203B\u752F\u8000\u5357",
    "\u65BD\u4E3B\u203B\u8449\u96C5\u67CF",
    "\u65BD\u4E3B\u203B\u674E\u7389\u5A9A"
  ];
  var isSidePaiji = () => {
    const m4 = sideWidth().match(/width:(\d+)/);
    const sidepaiji = m4 && m4[1] && parseInt(m4[1]) > 20;
    return sidepaiji;
  };
  var favortypes = ["\u2661", "\u{1F90D}", "\u2764\uFE0F", "\u{1F49A}", "\u{1F499}", "\u{1F49C}", "\u{1F5A4}"];
  var shareAddress = (addr) => {
    if (!addr)
      addr = makeAddressFromFolioPos(get_store_value(tapmark));
    return location.origin + location.pathname + "#" + addr;
  };
  var addTofind = (tf) => {
    tf = tf.trim().slice(0, 20);
    if (!tf)
      return;
    let arr = get_store_value(tofindhistory);
    if (arr[0] == tf)
      return;
    arr = removeTofind(tf);
    arr.unshift(tf);
    while (arr.length > 10)
      arr.pop();
    tofindhistory.set(arr.slice(0, arr.length));
  };
  var removeTofind = (tf) => {
    const arr = get_store_value(tofindhistory);
    const at = arr.indexOf(tf);
    if (~at) {
      arr.splice(at, 1);
      tofindhistory.set(arr.slice(0, arr.length));
    }
    return arr;
  };

  // src/folio.js
  var url2folioid = (url2) => url2.slice(url2.indexOf("folio/") + 6).replace(".zip", "");
  var fetchFolioList = async (store) => {
    const cache = await caches.open(CacheName);
    const keys = await cache.keys();
    const out = keys.filter((it) => it.url.endsWith(".zip") && ~it.url.indexOf("folio/")).map(
      (it) => url2folioid(it.url)
    );
    if (store) {
      const cached = {};
      for (let i = 0; i < out.length; i++) {
        cached[out[i]] = true;
      }
      store.set(cached);
    } else {
      return out;
    }
  };
  var ptkInCache = async () => {
    const cache = await caches.open(CacheName);
    const keys = await cache.keys();
    const out = keys.filter((it) => ~it.url.indexOf(".ptk")).map((it) => it.url.match(/([a-z\-_]+)\.ptk/)[1]);
    return out;
  };

  // src/nav.js
  var CURSORMARK = "\u25C6";
  var goPb = (pbid, ck) => {
    activepb.set(pbid);
    if (ck) {
      const ft = get_store_value(foliotext);
      const [pbid2, cx, cy] = ft.toFolioPos(ck);
      tapmark.set([pbid2, cx, cy]);
      updateUrl(tapAddress());
    }
  };
  var goPbAt = async (ptk3, at) => {
    const ck = ptk3.defines.ck;
    const pb2 = ptk3.defines.pb;
    const ckline = ck.linepos[at];
    const pbtag = ptk3.nearestTag(ckline + 1, "pb");
    const pbid = pb2.fields.id.values[pbtag];
    goPb(pbid, ck.fields.id.values[at]);
  };
  var loadFolio = (folioid, func2) => {
    let timer = 0;
    if (folioid == get_store_value(activefolioid))
      func2 && func2(folioid);
    else {
      stopAudio();
      audioid.set("");
      loadingfolio.set(true);
      loadingzip.set(true);
      activefolioid.set(folioid);
      timer = setInterval(() => {
        if (!get_store_value(loadingzip)) {
          clearInterval(timer);
          setTimeout(() => {
            func2 && func2(folioid);
            loadingfolio.set(false);
            updateUrl(tapAddress());
            setTimeout(() => {
              fetchFolioList(folioincache);
            }, 100);
          }, 100);
        }
      }, 30);
    }
  };
  var allJuan = (ptk3, folioid) => {
    folioid = folioid || get_store_value(activefolioid);
    const arrfolioid = ptk3.defines.folio.fields.id.values;
    const m4 = folioid.match(/([a-z\_]+)(\d+$)/);
    const juans = [];
    if (!m4)
      return [];
    for (let i = 0; i < arrfolioid.length; i++) {
      if (arrfolioid[i].startsWith(m4[1])) {
        const j2 = arrfolioid[i].slice(m4[1].length);
        if (parseInt(j2))
          juans.push(j2);
      }
    }
    return juans;
  };
  var markChunk = (ckid) => {
    const fpos = get_store_value(foliotext).toFolioPos(ckid);
    activepb.set(fpos[0]);
    tapmark.set(fpos);
  };
  var goChunk = (ptk3, bkid, ckid, direction = 0) => {
    const ft = get_store_value(foliotext);
    if (direction !== 0) {
      const ck = ptk3.defines.ck;
      const [bkstart, bkend] = ptk3.rangeOfAddress("bk#" + bkid);
      const [start, end] = ptk3.rangeOfAddress("bk#" + bkid + ".ck#" + ckid);
      const newck = ptk3.nearestChunk(start + 1);
      const newat = newck.at + direction;
      const linepos = ck.linepos[newat];
      if (linepos < bkend && linepos >= bkstart) {
        ckid = ck.fields.id.values[newat];
      }
    }
    const at = ft.chunks.indexOf(ckid);
    if (at == -1) {
      const folioid = folioByChunk(ptk3, get_store_value(activefolioid), ckid);
      loadFolio(folioid, () => markChunk(ckid));
    } else {
      markChunk(ckid);
    }
  };
  var folioByChunk = (ptk3, folioid, ckid) => {
    const [start] = ptk3.rangeOfAddress("bk#" + bookByFolio(folioid) + ".ck#" + ckid);
    const newfolioid = ptk3.nearestTag(start + 1, "folio", "id");
    return newfolioid;
  };
  var folioPosFromPtkLine = (ptk3, line) => {
    const folio = ptk3.defines.folio;
    const ck = ptk3.defines.ck;
    const folioat = bsearchNumber(folio.linepos, line + 1) - 1;
    const ckat = bsearchNumber(ck.linepos, line + 1) - 1;
    let folioid = "", ckid = "", lineoff = 0;
    if (~folioat && folio.linepos[folioat + 1] > line) {
      folioid = folio.fields.id.values[folioat];
      ckid = ck.fields.id.values[ckat];
      lineoff = line - ck.linepos[ckat];
    }
    return { folioid, ckid, lineoff };
  };
  var goPtkLine = (ptk3, line, choff = 0) => {
    const { folioid, ckid, lineoff } = folioPosFromPtkLine(ptk3, line);
    loadFolio(folioid, () => {
      const foliopos = get_store_value(foliotext).toFolioPos(ckid, lineoff, choff);
      tapmark.set(foliopos);
      activepb.set(foliopos[0]);
    });
  };
  var loadAddress = async (address) => {
    if (!address)
      return;
    const allptks2 = poolGetAll();
    let addr = {};
    for (let i = 0; i < allptks2.length; i++) {
      const ptk3 = allptks2[i];
      if (!ptk3)
        continue;
      addr = await folioPosFromAddress(ptk3, address);
      if (addr.id) {
        if (!get_store_value(foliotext)) {
          const ftext = new FolioText(ptk3);
          await ftext.load(addr.id);
          foliotext.set(ftext);
          addr = await folioPosFromAddress(ptk3, address);
        }
        if (get_store_value(activePtk) !== ptk3.name) {
          activePtk.set(ptk3.name);
        }
        break;
      }
    }
    if (addr.id) {
      activefolioid.set(addr.id);
      const { pb: pb2, line, ch } = addr;
      activepb.set(pb2);
      tapmark.set([pb2, line, ch]);
    }
  };

  // src/transcriptlayer.svelte
  function get_each_context(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[16] = list[i];
    child_ctx[18] = i;
    return child_ctx;
  }
  function create_if_block(ctx) {
    let previous_key = (
      /*$activepb*/
      (ctx[3], /*$audioid*/
      ctx[1])
    );
    let key_block_anchor;
    let key_block = create_key_block(ctx);
    return {
      c() {
        key_block.c();
        key_block_anchor = empty();
      },
      m(target, anchor) {
        key_block.m(target, anchor);
        insert(target, key_block_anchor, anchor);
      },
      p(ctx2, dirty) {
        if (dirty & /*$activepb, $audioid*/
        10 && safe_not_equal(previous_key, previous_key = /*$activepb*/
        (ctx2[3], /*$audioid*/
        ctx2[1]))) {
          key_block.d(1);
          key_block = create_key_block(ctx2);
          key_block.c();
          key_block.m(key_block_anchor.parentNode, key_block_anchor);
        } else {
          key_block.p(ctx2, dirty);
        }
      },
      d(detaching) {
        if (detaching)
          detach(key_block_anchor);
        key_block.d(detaching);
      }
    };
  }
  function create_each_block(ctx) {
    let div;
    let div_id_value;
    let div_style_value;
    return {
      c() {
        div = element("div");
        attr(div, "class", "strip");
        attr(div, "id", div_id_value = "strip" + /*idx*/
        ctx[18]);
        attr(div, "style", div_style_value = /*stripstyle*/
        ctx[5](
          /*idx*/
          ctx[18],
          /*strip*/
          ctx[16]
        ));
      },
      m(target, anchor) {
        insert(target, div, anchor);
      },
      p: noop,
      d(detaching) {
        if (detaching)
          detach(div);
      }
    };
  }
  function create_key_block(ctx) {
    let div;
    let div_style_value;
    let each_value = (
      /*strips*/
      ctx[4]
    );
    let each_blocks = [];
    for (let i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
    }
    return {
      c() {
        div = element("div");
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        attr(div, "class", "transcript");
        attr(div, "style", div_style_value = stylestring(
          /*frame*/
          ctx[0]
        ));
      },
      m(target, anchor) {
        insert(target, div, anchor);
        for (let i = 0; i < each_blocks.length; i += 1) {
          if (each_blocks[i]) {
            each_blocks[i].m(div, null);
          }
        }
      },
      p(ctx2, dirty) {
        if (dirty & /*stripstyle, strips*/
        48) {
          each_value = /*strips*/
          ctx2[4];
          let i;
          for (i = 0; i < each_value.length; i += 1) {
            const child_ctx = get_each_context(ctx2, each_value, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
            } else {
              each_blocks[i] = create_each_block(child_ctx);
              each_blocks[i].c();
              each_blocks[i].m(div, null);
            }
          }
          for (; i < each_blocks.length; i += 1) {
            each_blocks[i].d(1);
          }
          each_blocks.length = each_value.length;
        }
        if (dirty & /*frame*/
        1 && div_style_value !== (div_style_value = stylestring(
          /*frame*/
          ctx2[0]
        ))) {
          attr(div, "style", div_style_value);
        }
      },
      d(detaching) {
        if (detaching)
          detach(div);
        destroy_each(each_blocks, detaching);
      }
    };
  }
  function create_fragment(ctx) {
    let show_if = (
      /*$playing*/
      ctx[2] && findByAudioId(
        /*$audioid*/
        ctx[1]
      )
    );
    let if_block_anchor;
    let if_block = show_if && create_if_block(ctx);
    return {
      c() {
        if (if_block)
          if_block.c();
        if_block_anchor = empty();
      },
      m(target, anchor) {
        if (if_block)
          if_block.m(target, anchor);
        insert(target, if_block_anchor, anchor);
      },
      p(ctx2, [dirty]) {
        if (dirty & /*$playing, $audioid*/
        6)
          show_if = /*$playing*/
          ctx2[2] && findByAudioId(
            /*$audioid*/
            ctx2[1]
          );
        if (show_if) {
          if (if_block) {
            if_block.p(ctx2, dirty);
          } else {
            if_block = create_if_block(ctx2);
            if_block.c();
            if_block.m(if_block_anchor.parentNode, if_block_anchor);
          }
        } else if (if_block) {
          if_block.d(1);
          if_block = null;
        }
      },
      i: noop,
      o: noop,
      d(detaching) {
        if (if_block)
          if_block.d(detaching);
        if (detaching)
          detach(if_block_anchor);
      }
    };
  }
  function instance2($$self, $$props, $$invalidate) {
    let $audioid;
    let $mediaurls;
    let $playnextjuan;
    let $activefolioid;
    let $playing;
    let $activepb;
    component_subscribe($$self, audioid, ($$value) => $$invalidate(1, $audioid = $$value));
    component_subscribe($$self, mediaurls, ($$value) => $$invalidate(10, $mediaurls = $$value));
    component_subscribe($$self, playnextjuan, ($$value) => $$invalidate(11, $playnextjuan = $$value));
    component_subscribe($$self, activefolioid, ($$value) => $$invalidate(12, $activefolioid = $$value));
    component_subscribe($$self, playing, ($$value) => $$invalidate(2, $playing = $$value));
    component_subscribe($$self, activepb, ($$value) => $$invalidate(3, $activepb = $$value));
    let { frame = {}, totalpages } = $$props;
    let { foliopage = [] } = $$props;
    let { ptk: ptk3 } = $$props;
    const strips = new Array(folioLines());
    const timers = [];
    onDestroy(() => {
      destroyTimer();
    });
    const rollback = () => {
      continueplay.set(false);
      activepb.set("1");
      let r = get_store_value(remainrollback);
      if (r > 0) {
        r--;
        remainrollback.set(r);
      }
      if (r == 0)
        stopAudio();
    };
    const playnext = () => {
      const juans = allJuan(ptk3);
      const folioid = $activefolioid;
      const vid = $audioid;
      const thisaudiolist = $mediaurls;
      let performer = "";
      for (let i = 0; i < thisaudiolist.length; i++) {
        if (thisaudiolist[i].vid == vid)
          performer = thisaudiolist[i].performer;
      }
      if ($playnextjuan == "on" && juans.length > 1) {
        const juannow = folioid.match(/(\d+)$/)[1];
        if (parseInt(juannow) == juans.length) {
          rollback();
        } else {
          const nextfolioid = folioid.replace(juannow, parseInt(juannow) + 1);
          loadFolio(nextfolioid, function() {
            const audiolist = $mediaurls;
            if (audiolist) {
              const sameperformer = audiolist.filter((it) => it.performer == performer);
              const vid2 = sameperformer.length ? sameperformer[0].vid : audiolist[0].vid;
              selectmedia(vid2);
            }
          });
        }
      } else {
        rollback();
      }
    };
    const stripstyle = (i, strip) => {
      if (i == 0) {
        destroyTimer();
      }
      let fl = folioLines();
      let fc = get_store_value(folioChars);
      const w = frame.width / fl;
      let out = [];
      out.push("position:absolute");
      out.push("left:" + Math.floor((fl - i - 1) * w) + "px");
      out.push("top:0px");
      out.push("width:" + Math.floor(w) + "px");
      out.push("height:0px");
      const { timestamp } = findByAudioId($audioid);
      if (!timestamp) {
        return out.join(";");
      }
      const line = (parseInt(get_store_value(activepb)) - 1) * fl;
      if (!timestamp[line] && i == 0) {
        playnext();
      }
      const playertime = player?.currentTime;
      let timedelta = playertime - timestamp[line] / 100;
      if (Math.abs(timedelta) > 3) {
        timedelta = 0.02;
      }
      if (i == 0) {
        const lastlinet = timestamp[line + fl] / 100 || timestamp[timestamp.length - 1] / 100;
        const nextpagetime = (lastlinet - timestamp[line] / 100 - timedelta) * 1e3;
        timers.push(setTimeout(
          () => {
            if (parseInt(get_store_value(activepb)) < totalpages) {
              continueplay.set(true);
              activepb.set((parseInt(get_store_value(activepb)) + 1).toString());
              setTimeout(
                () => {
                  continueplay.set(false);
                },
                500
              );
            } else {
              playnext();
            }
          },
          nextpagetime
        ));
      }
      let delay = (timestamp[line + i] / 100 - timestamp[line] / 100 - timedelta) * 1e3;
      if (i == 0 && delay < 30)
        delay = 30;
      const fire = function() {
        if (this.folio != get_store_value(activepb))
          return;
        const ele = document.getElementById("strip" + this.idx);
        if (!ele)
          return;
        const chcount = get_store_value(foliotext).countFolioChar(foliopage[i] || "");
        ele.style.height = Math.floor(chcount * (frame.height / fc)) + "px";
      }.bind({ idx: i, folio: get_store_value(activepb) });
      timers.push(setTimeout(fire, delay));
      duration = timestamp[line + i + 1] / 100 - timestamp[line + i] / 100;
      if (duration == 0 && i + 1 < fl) {
        duration = timestamp[line + i + 2] / 100 - timestamp[line + i] / 100;
      }
      out.push("transition:height " + duration + "s  linear");
      return out.join(";");
    };
    const destroyTimer = () => {
      timers.forEach((it) => clearTimeout(it));
      timers.length = 0;
    };
    $$self.$$set = ($$props2) => {
      if ("frame" in $$props2)
        $$invalidate(0, frame = $$props2.frame);
      if ("totalpages" in $$props2)
        $$invalidate(6, totalpages = $$props2.totalpages);
      if ("foliopage" in $$props2)
        $$invalidate(7, foliopage = $$props2.foliopage);
      if ("ptk" in $$props2)
        $$invalidate(8, ptk3 = $$props2.ptk);
    };
    return [
      frame,
      $audioid,
      $playing,
      $activepb,
      strips,
      stripstyle,
      totalpages,
      foliopage,
      ptk3
    ];
  }
  var Transcriptlayer = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance2, create_fragment, safe_not_equal, {
        frame: 0,
        totalpages: 6,
        foliopage: 7,
        ptk: 8
      });
    }
  };
  var transcriptlayer_default = Transcriptlayer;

  // src/punclayer.svelte
  function get_each_context2(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[9] = list[i];
    return child_ctx;
  }
  function create_each_block2(ctx) {
    let span;
    let t_value = (
      /*formatPuncText*/
      ctx[2](
        /*punc*/
        ctx[9].text
      ) + ""
    );
    let t;
    let span_style_value;
    return {
      c() {
        span = element("span");
        t = text(t_value);
        attr(span, "class", "punc");
        attr(span, "style", span_style_value = /*puncStyle*/
        ctx[3](
          /*punc*/
          ctx[9].line,
          /*punc*/
          ctx[9].ch,
          /*punc*/
          ctx[9].text
        ));
      },
      m(target, anchor) {
        insert(target, span, anchor);
        append(span, t);
      },
      p(ctx2, dirty) {
        if (dirty & /*puncs*/
        2 && t_value !== (t_value = /*formatPuncText*/
        ctx2[2](
          /*punc*/
          ctx2[9].text
        ) + ""))
          set_data(t, t_value);
        if (dirty & /*puncs*/
        2 && span_style_value !== (span_style_value = /*puncStyle*/
        ctx2[3](
          /*punc*/
          ctx2[9].line,
          /*punc*/
          ctx2[9].ch,
          /*punc*/
          ctx2[9].text
        ))) {
          attr(span, "style", span_style_value);
        }
      },
      d(detaching) {
        if (detaching)
          detach(span);
      }
    };
  }
  function create_fragment2(ctx) {
    let div;
    let div_style_value;
    let each_value = (
      /*puncs*/
      ctx[1]
    );
    let each_blocks = [];
    for (let i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block2(get_each_context2(ctx, each_value, i));
    }
    return {
      c() {
        div = element("div");
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        attr(div, "class", "puncs");
        attr(div, "style", div_style_value = stylestring(
          /*frame*/
          ctx[0]
        ));
      },
      m(target, anchor) {
        insert(target, div, anchor);
        for (let i = 0; i < each_blocks.length; i += 1) {
          if (each_blocks[i]) {
            each_blocks[i].m(div, null);
          }
        }
      },
      p(ctx2, [dirty]) {
        if (dirty & /*puncStyle, puncs, formatPuncText*/
        14) {
          each_value = /*puncs*/
          ctx2[1];
          let i;
          for (i = 0; i < each_value.length; i += 1) {
            const child_ctx = get_each_context2(ctx2, each_value, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
            } else {
              each_blocks[i] = create_each_block2(child_ctx);
              each_blocks[i].c();
              each_blocks[i].m(div, null);
            }
          }
          for (; i < each_blocks.length; i += 1) {
            each_blocks[i].d(1);
          }
          each_blocks.length = each_value.length;
        }
        if (dirty & /*frame*/
        1 && div_style_value !== (div_style_value = stylestring(
          /*frame*/
          ctx2[0]
        ))) {
          attr(div, "style", div_style_value);
        }
      },
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching)
          detach(div);
        destroy_each(each_blocks, detaching);
      }
    };
  }
  function instance3($$self, $$props, $$invalidate) {
    let $folioChars;
    component_subscribe($$self, folioChars, ($$value) => $$invalidate(4, $folioChars = $$value));
    let { frame = {} } = $$props;
    let { puncs = [] } = $$props;
    const fl = folioLines(), fc = $folioChars;
    const unitw = frame.width / fl, unith = frame.height / fc;
    const formatPuncText = (text2) => {
      if (isPunc(text2[0])) {
        return text2;
      } else if (text2[0] == "n") {
        return text2.slice(1);
      }
      return text2;
    };
    const puncStyle = (line, ch, text2) => {
      let fontsize = unith * 0.9, yinc = unith * 0.2, xinc = -unitw * 0.1, extrastyle = "";
      if (text2 == "\uFF1F" || text2 == "\uFF01") {
        fontsize = fontsize / 1.5;
        yinc += unith * 0.4;
      } else if (text2 == "\uFE41" || text2 == "\uFE43") {
        xinc += -unitw * 0.3;
        yinc += unith * 0.4;
      } else if (text2 == "\uFE44" || text2 == "\uFE42") {
        xinc += -unitw * 0.6;
        yinc += unith * 0.4;
      } else if (!isPunc(text2[0])) {
        if (text2[0] == "n") {
          xinc -= unitw * 0.5;
          extrastyle = "background:var(--n)";
          text2 = text2.slice(1);
          yinc += unith;
        } else {
          yinc += unith;
        }
        fontsize = fontsize / 1.5;
      }
      const style = "left:" + Math.floor(xinc + unitw * (fl - line) - unitw * 0.25) + "px; top:" + Math.floor(yinc + unith * (ch - 1) - unith * 0.2) + "px;font-size:" + fontsize + "px;" + extrastyle;
      return style;
    };
    $$self.$$set = ($$props2) => {
      if ("frame" in $$props2)
        $$invalidate(0, frame = $$props2.frame);
      if ("puncs" in $$props2)
        $$invalidate(1, puncs = $$props2.puncs);
    };
    return [frame, puncs, formatPuncText, puncStyle];
  }
  var Punclayer = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance3, create_fragment2, safe_not_equal, { frame: 0, puncs: 1 });
    }
  };
  var punclayer_default = Punclayer;

  // src/tapmark.svelte
  function create_fragment3(ctx) {
    let span;
    let span_style_value;
    return {
      c() {
        span = element("span");
        attr(span, "class", "punc");
        attr(span, "style", span_style_value = /*styleString*/
        ctx[0]());
      },
      m(target, anchor) {
        insert(target, span, anchor);
      },
      p: noop,
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching)
          detach(span);
      }
    };
  }
  function instance4($$self, $$props, $$invalidate) {
    let { mark = [], frame, pb: pb2 = "" } = $$props;
    let { folioChars: folioChars2 = 17, folioLines: folioLines2 = 5 } = $$props;
    const unitw = frame.width / folioLines2, unith = frame.height / folioChars2;
    const styleString = () => {
      const [pbmark, line, ch] = mark;
      if (pb2 != pbmark)
        return "";
      return "left:" + Math.floor(unitw * (folioLines2 - line - 1)) + "px; top:" + +Math.floor(frame.top + unith * ch) + "px;width:" + unitw + "px;height:" + unith + "px;background:var(--pinmark);border-radius:5px;pointer-events:none";
    };
    $$self.$$set = ($$props2) => {
      if ("mark" in $$props2)
        $$invalidate(1, mark = $$props2.mark);
      if ("frame" in $$props2)
        $$invalidate(2, frame = $$props2.frame);
      if ("pb" in $$props2)
        $$invalidate(3, pb2 = $$props2.pb);
      if ("folioChars" in $$props2)
        $$invalidate(4, folioChars2 = $$props2.folioChars);
      if ("folioLines" in $$props2)
        $$invalidate(5, folioLines2 = $$props2.folioLines);
    };
    return [styleString, mark, frame, pb2, folioChars2, folioLines2];
  }
  var Tapmark = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance4, create_fragment3, safe_not_equal, {
        mark: 1,
        frame: 2,
        pb: 3,
        folioChars: 4,
        folioLines: 5
      });
    }
  };
  var tapmark_default = Tapmark;

  // src/3rd/swipe.svelte
  function get_each_context3(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[49] = list[i];
    child_ctx[51] = i;
    return child_ctx;
  }
  function create_if_block2(ctx) {
    let div;
    let each_value = (
      /*indicators*/
      ctx[2]
    );
    let each_blocks = [];
    for (let i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block3(get_each_context3(ctx, each_value, i));
    }
    return {
      c() {
        div = element("div");
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        attr(div, "class", "swipe-indicator swipe-indicator-inside svelte-17g4ceu");
      },
      m(target, anchor) {
        insert(target, div, anchor);
        for (let i = 0; i < each_blocks.length; i += 1) {
          if (each_blocks[i]) {
            each_blocks[i].m(div, null);
          }
        }
      },
      p(ctx2, dirty) {
        if (dirty[0] & /*activeIndicator, changeItem, indicators*/
        38) {
          each_value = /*indicators*/
          ctx2[2];
          let i;
          for (i = 0; i < each_value.length; i += 1) {
            const child_ctx = get_each_context3(ctx2, each_value, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
            } else {
              each_blocks[i] = create_each_block3(child_ctx);
              each_blocks[i].c();
              each_blocks[i].m(div, null);
            }
          }
          for (; i < each_blocks.length; i += 1) {
            each_blocks[i].d(1);
          }
          each_blocks.length = each_value.length;
        }
      },
      d(detaching) {
        if (detaching)
          detach(div);
        destroy_each(each_blocks, detaching);
      }
    };
  }
  function create_each_block3(ctx) {
    let span;
    let span_class_value;
    let mounted;
    let dispose;
    function click_handler() {
      return (
        /*click_handler*/
        ctx[23](
          /*i*/
          ctx[51]
        )
      );
    }
    return {
      c() {
        span = element("span");
        attr(span, "aria-hidden", "true");
        attr(span, "class", span_class_value = "dot " + /*activeIndicator*/
        (ctx[1] == /*i*/
        ctx[51] ? "is-active" : "") + " svelte-17g4ceu");
      },
      m(target, anchor) {
        insert(target, span, anchor);
        if (!mounted) {
          dispose = listen(span, "click", click_handler);
          mounted = true;
        }
      },
      p(new_ctx, dirty) {
        ctx = new_ctx;
        if (dirty[0] & /*activeIndicator*/
        2 && span_class_value !== (span_class_value = "dot " + /*activeIndicator*/
        (ctx[1] == /*i*/
        ctx[51] ? "is-active" : "") + " svelte-17g4ceu")) {
          attr(span, "class", span_class_value);
        }
      },
      d(detaching) {
        if (detaching)
          detach(span);
        mounted = false;
        dispose();
      }
    };
  }
  function create_fragment4(ctx) {
    let div4;
    let div2;
    let div1;
    let div0;
    let t0;
    let div3;
    let t1;
    let current;
    let mounted;
    let dispose;
    const default_slot_template = (
      /*#slots*/
      ctx[21].default
    );
    const default_slot = create_slot(
      default_slot_template,
      ctx,
      /*$$scope*/
      ctx[20],
      null
    );
    let if_block = (
      /*showIndicators*/
      ctx[0] && create_if_block2(ctx)
    );
    return {
      c() {
        div4 = element("div");
        div2 = element("div");
        div1 = element("div");
        div0 = element("div");
        if (default_slot)
          default_slot.c();
        t0 = space();
        div3 = element("div");
        t1 = space();
        if (if_block)
          if_block.c();
        attr(div0, "class", "swipeable-slot-wrapper svelte-17g4ceu");
        attr(div1, "class", "swipeable-total_elements svelte-17g4ceu");
        attr(div2, "class", "swipe-item-wrapper svelte-17g4ceu");
        attr(div3, "aria-hidden", "true");
        attr(div3, "class", "swipe-handler svelte-17g4ceu");
        attr(div4, "class", "swipe-panel svelte-17g4ceu");
      },
      m(target, anchor) {
        insert(target, div4, anchor);
        append(div4, div2);
        append(div2, div1);
        append(div1, div0);
        if (default_slot) {
          default_slot.m(div0, null);
        }
        ctx[22](div2);
        append(div4, t0);
        append(div4, div3);
        append(div4, t1);
        if (if_block)
          if_block.m(div4, null);
        current = true;
        if (!mounted) {
          dispose = [
            listen(
              div3,
              "touchstart",
              /*onMoveStart*/
              ctx[4]
            ),
            listen(
              div3,
              "mousedown",
              /*onMoveStart*/
              ctx[4]
            )
          ];
          mounted = true;
        }
      },
      p(ctx2, dirty) {
        if (default_slot) {
          if (default_slot.p && (!current || dirty[0] & /*$$scope*/
          1048576)) {
            update_slot_base(
              default_slot,
              default_slot_template,
              ctx2,
              /*$$scope*/
              ctx2[20],
              !current ? get_all_dirty_from_scope(
                /*$$scope*/
                ctx2[20]
              ) : get_slot_changes(
                default_slot_template,
                /*$$scope*/
                ctx2[20],
                dirty,
                null
              ),
              null
            );
          }
        }
        if (
          /*showIndicators*/
          ctx2[0]
        ) {
          if (if_block) {
            if_block.p(ctx2, dirty);
          } else {
            if_block = create_if_block2(ctx2);
            if_block.c();
            if_block.m(div4, null);
          }
        } else if (if_block) {
          if_block.d(1);
          if_block = null;
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(default_slot, local);
        current = true;
      },
      o(local) {
        transition_out(default_slot, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(div4);
        if (default_slot)
          default_slot.d(detaching);
        ctx[22](null);
        if (if_block)
          if_block.d();
        mounted = false;
        run_all(dispose);
      }
    };
  }
  function instance5($$self, $$props, $$invalidate) {
    let { $$slots: slots = {}, $$scope } = $$props;
    let { transitionDuration = 200 } = $$props;
    let { showIndicators = false } = $$props;
    let { autoplay = false } = $$props;
    let { delay = 1e3 } = $$props;
    let { defaultIndex = 0 } = $$props;
    let { active_item = 0 } = $$props;
    let { is_vertical = false } = $$props;
    let { allow_infinite_swipe = false } = $$props;
    let activeIndicator = 0, indicators, total_elements = 0, availableSpace = 0, availableMeasure = 0, swipeElements, availableDistance = 0, swipeItemsWrapper, swipeWrapper, pos_axis = 0, page_axis = is_vertical ? "pageY" : "pageX", axis, longTouch, last_axis_pos;
    let played;
    let run_interval = false;
    let fire = createEventDispatcher();
    let movingcount = 0;
    function init2() {
      swipeItemsWrapper = swipeWrapper.querySelector(".swipeable-slot-wrapper");
      swipeElements = swipeItemsWrapper.querySelectorAll(".swipeable-item");
      $$invalidate(18, total_elements = swipeElements.length);
      if (allow_infinite_swipe) {
        swipeItemsWrapper.prepend(swipeElements[total_elements - 1].cloneNode(true));
        swipeItemsWrapper.append(swipeElements[0].cloneNode(true));
        swipeElements = swipeItemsWrapper.querySelectorAll(".swipeable-item");
      }
      update2();
    }
    function update2() {
      let { offsetWidth, offsetHeight } = swipeWrapper.querySelector(".swipeable-total_elements");
      availableSpace = is_vertical ? offsetHeight : offsetWidth;
      setElementsPosition({
        init: true,
        elems: [...swipeElements],
        availableSpace,
        has_infinite_loop: allow_infinite_swipe
      });
      availableDistance = 0;
      availableMeasure = availableSpace * (total_elements - 1);
      if (defaultIndex) {
        changeItem(defaultIndex);
      }
    }
    function setElementsPosition({ elems = [], availableSpace: availableSpace2 = 0, pos_axis: pos_axis2 = 0, has_infinite_loop = false, distance = 0, moving = false, init: init3 = false, end = false, reset = false }) {
      elems.forEach((element2, i) => {
        let idx2 = has_infinite_loop ? i - 1 : i;
        if (init3) {
          element2.style.transform = generateTranslateValue(availableSpace2 * idx2);
        }
        if (moving) {
          element2.style.cssText = generateTouchPosCss(availableSpace2 * idx2 - distance);
        }
        if (end) {
          element2.style.cssText = generateTouchPosCss(availableSpace2 * idx2 - pos_axis2, true);
        }
        if (reset) {
          element2.style.cssText = generateTouchPosCss(availableSpace2 * idx2 - pos_axis2);
        }
      });
    }
    function eventDelegate(type) {
      let delegationTypes = {
        add: "addEventListener",
        remove: "removeEventListener"
      };
      if (typeof window !== "undefined") {
        window[delegationTypes[type]]("mousemove", onMove);
        window[delegationTypes[type]]("mouseup", onEnd);
        window[delegationTypes[type]]("touchmove", onMove, { passive: false });
        window[delegationTypes[type]]("touchend", onEnd, { passive: false });
      }
    }
    function generateTranslateValue(value) {
      return is_vertical ? `translate3d(0, ${value}px, 0)` : `translate3d(${value}px, 0, 0)`;
    }
    function generateTouchPosCss(value, touch_end = false) {
      let transformString = generateTranslateValue(value);
      let _css = `
-webkit-transition-duration: ${touch_end ? transitionDuration : "0"}ms;
transition-duration: ${touch_end ? transitionDuration : "0"}ms;
-webkit-transform: ${transformString};
-ms-transform: ${transformString};`;
      return _css;
    }
    onMount(() => {
      init2();
      if (typeof window !== "undefined") {
        window.addEventListener("resize", update2);
      }
    });
    onDestroy(() => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", update2);
      }
    });
    let touch_active = false;
    function onMove(e) {
      if (touch_active) {
        movingcount++;
        e.stopImmediatePropagation();
        e.stopPropagation();
        let _axis = e.touches ? e.touches[0][page_axis] : e[page_axis], distance = axis - _axis + pos_axis;
        if (!allow_infinite_swipe) {
          if (pos_axis == 0 && axis < _axis || pos_axis == availableMeasure && axis > _axis) {
            return;
          }
        }
        e.preventDefault();
        if (distance <= availableMeasure && distance >= 0) {
        }
        setElementsPosition({
          moving: true,
          elems: [...swipeElements],
          availableSpace,
          distance,
          has_infinite_loop: allow_infinite_swipe
        });
        availableDistance = distance;
        last_axis_pos = _axis;
      }
    }
    let startx, starty;
    function onMoveStart(e) {
      fire("start");
      movingcount = 0;
      e.stopImmediatePropagation();
      e.stopPropagation();
      touch_active = true;
      longTouch = false;
      setTimeout(
        function() {
          longTouch = true;
        },
        250
      );
      axis = e.touches ? e.touches[0][page_axis] : e[page_axis];
      if (e.touches) {
        startx = e.touches[0].pageX;
        starty = e.touches[0].pageY;
      } else {
        startx = e.clientX;
        starty = e.clientY;
      }
      eventDelegate("add");
    }
    function onEnd(e) {
      if (e && e.cancelable) {
        e.preventDefault();
      }
      e && e.stopImmediatePropagation();
      e && e.stopPropagation();
      let direction = axis < last_axis_pos;
      touch_active = false;
      let _as = availableSpace;
      let accidental_touch = Math.round(availableSpace / 50) > Math.abs(axis - last_axis_pos);
      if (longTouch || accidental_touch) {
        availableDistance = Math.round(availableDistance / _as) * _as;
      } else {
        availableDistance = direction ? Math.floor(availableDistance / _as) * _as : Math.ceil(availableDistance / _as) * _as;
      }
      axis = null;
      last_axis_pos = null;
      pos_axis = availableDistance;
      $$invalidate(1, activeIndicator = availableDistance / _as);
      $$invalidate(7, active_item = activeIndicator);
      $$invalidate(6, defaultIndex = active_item);
      setElementsPosition({
        end: true,
        elems: [...swipeElements],
        availableSpace: _as,
        pos_axis,
        has_infinite_loop: allow_infinite_swipe
      });
      if (allow_infinite_swipe) {
        if (active_item === -1) {
          pos_axis = _as * (total_elements - 1);
        }
        if (active_item === total_elements) {
          pos_axis = 0;
        }
        $$invalidate(1, activeIndicator = pos_axis / _as);
        $$invalidate(7, active_item = activeIndicator);
        $$invalidate(6, defaultIndex = active_item);
        setTimeout(
          () => {
            setElementsPosition({
              reset: true,
              elems: [...swipeElements],
              availableSpace: _as,
              pos_axis,
              has_infinite_loop: allow_infinite_swipe
            });
          },
          transitionDuration
        );
      }
      eventDelegate("remove");
      let swipe_direction = direction ? "right" : "left";
      let x, y;
      if (e?.changedTouches) {
        x = e.changedTouches[0].pageX;
        y = e.changedTouches[0].pageY;
      } else {
        x = e?.clientX;
        y = e?.clientY;
      }
      if (Math.abs(startx - x) < 3 && Math.abs(starty - y) < 3 && movingcount < 3) {
        fire("click", { x, y });
      } else {
        setTimeout(
          () => {
            fire("change", {
              active_item,
              swipe_direction,
              active_element: swipeElements[active_item]
            });
          },
          transitionDuration
        );
      }
    }
    function changeItem(item) {
      let max = availableSpace;
      availableDistance = max * item;
      $$invalidate(1, activeIndicator = item);
      onEnd();
    }
    function changeView() {
      changeItem(played);
      played = played < total_elements - 1 + allow_infinite_swipe ? ++played : 0;
    }
    const mod = (n, m4) => (n % m4 + m4) % m4;
    function goLast() {
      goTo(total_elements - 1);
    }
    function goTo(step) {
      let item = allow_infinite_swipe ? step : Math.max(0, Math.min(step, indicators.length - 1));
      changeItem(item);
    }
    function prevItem() {
      let step = activeIndicator - 1;
      goTo(step);
    }
    function nextItem() {
      let step = activeIndicator + 1;
      goTo(step);
    }
    function div2_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](() => {
        swipeWrapper = $$value;
        $$invalidate(3, swipeWrapper);
      });
    }
    const click_handler = (i) => {
      changeItem(i);
    };
    $$self.$$set = ($$props2) => {
      if ("transitionDuration" in $$props2)
        $$invalidate(8, transitionDuration = $$props2.transitionDuration);
      if ("showIndicators" in $$props2)
        $$invalidate(0, showIndicators = $$props2.showIndicators);
      if ("autoplay" in $$props2)
        $$invalidate(9, autoplay = $$props2.autoplay);
      if ("delay" in $$props2)
        $$invalidate(10, delay = $$props2.delay);
      if ("defaultIndex" in $$props2)
        $$invalidate(6, defaultIndex = $$props2.defaultIndex);
      if ("active_item" in $$props2)
        $$invalidate(7, active_item = $$props2.active_item);
      if ("is_vertical" in $$props2)
        $$invalidate(11, is_vertical = $$props2.is_vertical);
      if ("allow_infinite_swipe" in $$props2)
        $$invalidate(12, allow_infinite_swipe = $$props2.allow_infinite_swipe);
      if ("$$scope" in $$props2)
        $$invalidate(20, $$scope = $$props2.$$scope);
    };
    $$self.$$.update = () => {
      if ($$self.$$.dirty[0] & /*total_elements*/
      262144) {
        $:
          $$invalidate(2, indicators = Array(total_elements));
      }
      if ($$self.$$.dirty[0] & /*autoplay, run_interval, defaultIndex, active_item, delay*/
      526016) {
        $: {
          if (autoplay && !run_interval) {
            played = defaultIndex || active_item;
            $$invalidate(19, run_interval = setInterval(changeView, delay));
          }
          if (!autoplay && run_interval) {
            clearInterval(run_interval);
            $$invalidate(19, run_interval = false);
          }
        }
      }
    };
    return [
      showIndicators,
      activeIndicator,
      indicators,
      swipeWrapper,
      onMoveStart,
      changeItem,
      defaultIndex,
      active_item,
      transitionDuration,
      autoplay,
      delay,
      is_vertical,
      allow_infinite_swipe,
      update2,
      goLast,
      goTo,
      prevItem,
      nextItem,
      total_elements,
      run_interval,
      $$scope,
      slots,
      div2_binding,
      click_handler
    ];
  }
  var Swipe = class extends SvelteComponent {
    constructor(options) {
      super();
      init(
        this,
        options,
        instance5,
        create_fragment4,
        safe_not_equal,
        {
          transitionDuration: 8,
          showIndicators: 0,
          autoplay: 9,
          delay: 10,
          defaultIndex: 6,
          active_item: 7,
          is_vertical: 11,
          allow_infinite_swipe: 12,
          update: 13,
          goLast: 14,
          goTo: 15,
          prevItem: 16,
          nextItem: 17
        },
        null,
        [-1, -1]
      );
    }
    get update() {
      return this.$$.ctx[13];
    }
    get goLast() {
      return this.$$.ctx[14];
    }
    get goTo() {
      return this.$$.ctx[15];
    }
    get prevItem() {
      return this.$$.ctx[16];
    }
    get nextItem() {
      return this.$$.ctx[17];
    }
  };
  var swipe_default = Swipe;

  // src/3rd/swipeitem.svelte
  function create_fragment5(ctx) {
    let div1;
    let div0;
    let div1_class_value;
    let div1_resize_listener;
    let current;
    const default_slot_template = (
      /*#slots*/
      ctx[6].default
    );
    const default_slot = create_slot(
      default_slot_template,
      ctx,
      /*$$scope*/
      ctx[5],
      null
    );
    return {
      c() {
        div1 = element("div");
        div0 = element("div");
        if (default_slot)
          default_slot.c();
        attr(div0, "class", "swipeable-item-inner");
        attr(div1, "class", div1_class_value = "swipeable-item " + /*classes*/
        ctx[1] + " " + /*active*/
        (ctx[0] ? "is-active" : "") + " svelte-13ik1fy");
        attr(
          div1,
          "style",
          /*style*/
          ctx[2]
        );
        add_render_callback(() => (
          /*div1_elementresize_handler*/
          ctx[8].call(div1)
        ));
      },
      m(target, anchor) {
        insert(target, div1, anchor);
        append(div1, div0);
        if (default_slot) {
          default_slot.m(div0, null);
        }
        ctx[7](div0);
        div1_resize_listener = add_iframe_resize_listener(
          div1,
          /*div1_elementresize_handler*/
          ctx[8].bind(div1)
        );
        current = true;
      },
      p(ctx2, [dirty]) {
        if (default_slot) {
          if (default_slot.p && (!current || dirty & /*$$scope*/
          32)) {
            update_slot_base(
              default_slot,
              default_slot_template,
              ctx2,
              /*$$scope*/
              ctx2[5],
              !current ? get_all_dirty_from_scope(
                /*$$scope*/
                ctx2[5]
              ) : get_slot_changes(
                default_slot_template,
                /*$$scope*/
                ctx2[5],
                dirty,
                null
              ),
              null
            );
          }
        }
        if (!current || dirty & /*classes, active*/
        3 && div1_class_value !== (div1_class_value = "swipeable-item " + /*classes*/
        ctx2[1] + " " + /*active*/
        (ctx2[0] ? "is-active" : "") + " svelte-13ik1fy")) {
          attr(div1, "class", div1_class_value);
        }
        if (!current || dirty & /*style*/
        4) {
          attr(
            div1,
            "style",
            /*style*/
            ctx2[2]
          );
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(default_slot, local);
        current = true;
      },
      o(local) {
        transition_out(default_slot, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(div1);
        if (default_slot)
          default_slot.d(detaching);
        ctx[7](null);
        div1_resize_listener();
      }
    };
  }
  function instance6($$self, $$props, $$invalidate) {
    let { $$slots: slots = {}, $$scope } = $$props;
    let { active = false } = $$props;
    let { classes = "" } = $$props;
    let { style = "" } = $$props;
    let swipeItemInner = null;
    let _height = 0;
    function div0_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](() => {
        swipeItemInner = $$value;
        $$invalidate(3, swipeItemInner);
      });
    }
    function div1_elementresize_handler() {
      _height = this.clientHeight;
      $$invalidate(4, _height);
    }
    $$self.$$set = ($$props2) => {
      if ("active" in $$props2)
        $$invalidate(0, active = $$props2.active);
      if ("classes" in $$props2)
        $$invalidate(1, classes = $$props2.classes);
      if ("style" in $$props2)
        $$invalidate(2, style = $$props2.style);
      if ("$$scope" in $$props2)
        $$invalidate(5, $$scope = $$props2.$$scope);
    };
    return [
      active,
      classes,
      style,
      swipeItemInner,
      _height,
      $$scope,
      slots,
      div0_binding,
      div1_elementresize_handler
    ];
  }
  var Swipeitem = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance6, create_fragment5, safe_not_equal, { active: 0, classes: 1, style: 2 });
    }
  };
  var swipeitem_default = Swipeitem;

  // ../ptk/platform/downloader.js
  var isLatest = async (url2, cachename) => {
    const cachefn = url2.replace(/\?.+/, "");
    const fetchurl = cachefn + "?" + (/* @__PURE__ */ new Date()).toISOString();
    const ContentType = ~fetchurl.indexOf(".mp3") ? "audio/mpeg" : "application/octet-stream";
    const headresponse = await fetch(fetchurl, { method: "HEAD", mode: "no-cors", redirect: "follow", credentials: "omit", origin, headers: { Accept: ContentType } });
    const cache = await caches.open(cachename);
    const cached = await cache.match(cachefn);
    const contentlength = headresponse.headers.get("Content-Length");
    const isLatest2 = cached && contentlength == cached.headers.get("Content-Length");
    return isLatest2;
  };
  var downloadToCache = async (cachename, url2, cb) => {
    const cachefn = url2.replace(/\?.+/, "");
    const ContentType = ~url2.indexOf(".mp3") ? "audio/mpeg" : "application/octet-stream";
    const origin2 = "https://nissaya.cn";
    const cache = await caches.open(cachename);
    const cached = await cache.match(cachefn);
    if (cached && cached.statusText == "OK" && (url2.endsWith(".zip") || url2.endsWith(".mp3") || url2.endsWith(".ptk"))) {
      return cached;
    }
    let headresponse = await fetch(url2, { method: "HEAD", mode: "no-cors", redirect: "follow", credentials: "omit", origin: origin2, headers: { Accept: ContentType } });
    const lastmodified = headresponse.headers.get("Content-Length");
    if (cached && lastmodified == cached.headers.get("Content-Length")) {
      return cached;
    }
    cb && cb("requesting");
    let response = await fetch(url2, {
      method: "GET",
      mode: "no-cors",
      redirect: "follow",
      credentials: "omit",
      origin: origin2,
      headers: { Accept: ContentType }
    });
    cb && cb("responsed");
    if (response.status >= 400) {
      cb && cb(response.statusText);
      return;
    }
    if (response.body) {
      const reader = response.body.getReader();
      const contentLength = +response.headers.get("Content-Length");
      let receivedLength = 0;
      let chunks = [];
      while (true) {
        const { done, value } = await reader.read();
        if (done)
          break;
        chunks.push(value);
        receivedLength += value.length;
        cb && cb(Math.floor(100 * receivedLength / contentLength) + "% / " + humanBytes(contentLength));
      }
      let chunksAll = new Uint8Array(receivedLength);
      let position = 0;
      for (let chunk of chunks) {
        chunksAll.set(chunk, position);
        position += chunk.length;
      }
      const resp = {
        status: response.status,
        statusText: response.statusText,
        headers: {
          "X-Shaka-From-Cache": true,
          "Content-Type": ContentType,
          "Content-Length": contentLength
        }
      };
      const res = new Response(chunksAll, resp);
      cache.put(cachefn, res.clone());
      cb && cb("cached");
      return res;
    } else {
      cache.put(cachefn, response.clone());
      cb && cb("cached");
      return response;
    }
  };

  // src/downloadstatus.svelte
  function create_fragment6(ctx) {
    let div;
    let t;
    return {
      c() {
        div = element("div");
        t = text(
          /*msg*/
          ctx[0]
        );
        attr(div, "class", "downloading bodytext");
      },
      m(target, anchor) {
        insert(target, div, anchor);
        append(div, t);
      },
      p(ctx2, [dirty]) {
        if (dirty & /*msg*/
        1)
          set_data(
            t,
            /*msg*/
            ctx2[0]
          );
      },
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching)
          detach(div);
      }
    };
  }
  function instance7($$self, $$props, $$invalidate) {
    let { msg = "" } = $$props;
    $$self.$$set = ($$props2) => {
      if ("msg" in $$props2)
        $$invalidate(0, msg = $$props2.msg);
    };
    return [msg];
  }
  var Downloadstatus = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance7, create_fragment6, safe_not_equal, { msg: 0 });
    }
  };
  var downloadstatus_default = Downloadstatus;

  // src/swipezipimage.svelte
  function create_else_block(ctx) {
    let downloadstatus;
    let current;
    downloadstatus = new downloadstatus_default({ props: { msg: (
      /*$downloading*/
      ctx[20]
    ) } });
    return {
      c() {
        create_component(downloadstatus.$$.fragment);
      },
      m(target, anchor) {
        mount_component(downloadstatus, target, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        const downloadstatus_changes = {};
        if (dirty[0] & /*$downloading*/
        1048576)
          downloadstatus_changes.msg = /*$downloading*/
          ctx2[20];
        downloadstatus.$set(downloadstatus_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(downloadstatus.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(downloadstatus.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(downloadstatus, detaching);
      }
    };
  }
  function create_if_block_6(ctx) {
    let div;
    let swipe;
    let div_style_value;
    let current;
    let mounted;
    let dispose;
    const swipe_spread_levels = [
      /*swipeConfig*/
      ctx[25],
      { defaultIndex: (
        /*defaultIndex*/
        ctx[7]
      ) }
    ];
    let swipe_props = {
      $$slots: { default: [create_default_slot] },
      $$scope: { ctx }
    };
    for (let i = 0; i < swipe_spread_levels.length; i += 1) {
      swipe_props = assign(swipe_props, swipe_spread_levels[i]);
    }
    swipe = new swipe_default({ props: swipe_props });
    ctx[35](swipe);
    swipe.$on(
      "click",
      /*onfoliopageclick*/
      ctx[29]
    );
    swipe.$on(
      "start",
      /*swipeStart*/
      ctx[26]
    );
    swipe.$on(
      "change",
      /*swipeChanged*/
      ctx[27]
    );
    return {
      c() {
        div = element("div");
        create_component(swipe.$$.fragment);
        attr(div, "aria-hidden", "true");
        attr(div, "class", "swipe-holder svelte-u4lgbo");
        attr(div, "style", div_style_value = "opacity:" + /*$leftmode*/
        (ctx[18] !== "folio" ? "0;" : "1") + ";width:" + folioHolderWidth(
          /*$landscape*/
          ctx[19],
          1,
          /*swiper*/
          ctx[6]
        ));
      },
      m(target, anchor) {
        insert(target, div, anchor);
        mount_component(swipe, div, null);
        current = true;
        if (!mounted) {
          dispose = listen(
            div,
            "wheel",
            /*mousewheel*/
            ctx[28]
          );
          mounted = true;
        }
      },
      p(ctx2, dirty) {
        const swipe_changes = dirty[0] & /*swipeConfig, defaultIndex*/
        33554560 ? get_spread_update(swipe_spread_levels, [
          dirty[0] & /*swipeConfig*/
          33554432 && get_spread_object(
            /*swipeConfig*/
            ctx2[25]
          ),
          dirty[0] & /*defaultIndex*/
          128 && { defaultIndex: (
            /*defaultIndex*/
            ctx2[7]
          ) }
        ]) : {};
        if (dirty[1] & /*$$scope*/
        524288) {
          swipe_changes.$$scope = { dirty, ctx: ctx2 };
        }
        swipe.$set(swipe_changes);
        if (!current || dirty[0] & /*$leftmode, $landscape, swiper*/
        786496 && div_style_value !== (div_style_value = "opacity:" + /*$leftmode*/
        (ctx2[18] !== "folio" ? "0;" : "1") + ";width:" + folioHolderWidth(
          /*$landscape*/
          ctx2[19],
          1,
          /*swiper*/
          ctx2[6]
        ))) {
          attr(div, "style", div_style_value);
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(swipe.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(swipe.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(div);
        ctx[35](null);
        destroy_component(swipe);
        mounted = false;
        dispose();
      }
    };
  }
  function create_default_slot_3(ctx) {
    let img;
    let img_src_value;
    return {
      c() {
        img = element("img");
        if (!src_url_equal(img.src, img_src_value = blankimage))
          attr(img, "src", img_src_value);
        attr(img, "alt", "no");
        attr(img, "class", "leftimage swipe svelte-u4lgbo");
      },
      m(target, anchor) {
        insert(target, img, anchor);
      },
      p: noop,
      d(detaching) {
        if (detaching)
          detach(img);
      }
    };
  }
  function create_default_slot_2(ctx) {
    let img;
    let img_src_value;
    return {
      c() {
        img = element("img");
        if (!src_url_equal(img.src, img_src_value = blankimage))
          attr(img, "src", img_src_value);
        attr(img, "alt", "no");
        attr(img, "class", "middleimage swipe svelte-u4lgbo");
      },
      m(target, anchor) {
        insert(target, img, anchor);
      },
      p: noop,
      d(detaching) {
        if (detaching)
          detach(img);
      }
    };
  }
  function create_default_slot_1(ctx) {
    let img;
    let img_src_value;
    return {
      c() {
        img = element("img");
        if (!src_url_equal(img.src, img_src_value = blankimage))
          attr(img, "src", img_src_value);
        attr(img, "alt", "no");
        attr(img, "class", "rightimage swipe svelte-u4lgbo");
      },
      m(target, anchor) {
        insert(target, img, anchor);
      },
      p: noop,
      d(detaching) {
        if (detaching)
          detach(img);
      }
    };
  }
  function create_default_slot(ctx) {
    let swipeitem0;
    let t0;
    let swipeitem1;
    let t1;
    let swipeitem2;
    let current;
    swipeitem0 = new swipeitem_default({
      props: {
        $$slots: { default: [create_default_slot_3] },
        $$scope: { ctx }
      }
    });
    swipeitem1 = new swipeitem_default({
      props: {
        $$slots: { default: [create_default_slot_2] },
        $$scope: { ctx }
      }
    });
    swipeitem2 = new swipeitem_default({
      props: {
        $$slots: { default: [create_default_slot_1] },
        $$scope: { ctx }
      }
    });
    return {
      c() {
        create_component(swipeitem0.$$.fragment);
        t0 = space();
        create_component(swipeitem1.$$.fragment);
        t1 = space();
        create_component(swipeitem2.$$.fragment);
      },
      m(target, anchor) {
        mount_component(swipeitem0, target, anchor);
        insert(target, t0, anchor);
        mount_component(swipeitem1, target, anchor);
        insert(target, t1, anchor);
        mount_component(swipeitem2, target, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        const swipeitem0_changes = {};
        if (dirty[1] & /*$$scope*/
        524288) {
          swipeitem0_changes.$$scope = { dirty, ctx: ctx2 };
        }
        swipeitem0.$set(swipeitem0_changes);
        const swipeitem1_changes = {};
        if (dirty[1] & /*$$scope*/
        524288) {
          swipeitem1_changes.$$scope = { dirty, ctx: ctx2 };
        }
        swipeitem1.$set(swipeitem1_changes);
        const swipeitem2_changes = {};
        if (dirty[1] & /*$$scope*/
        524288) {
          swipeitem2_changes.$$scope = { dirty, ctx: ctx2 };
        }
        swipeitem2.$set(swipeitem2_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(swipeitem0.$$.fragment, local);
        transition_in(swipeitem1.$$.fragment, local);
        transition_in(swipeitem2.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(swipeitem0.$$.fragment, local);
        transition_out(swipeitem1.$$.fragment, local);
        transition_out(swipeitem2.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(swipeitem0, detaching);
        if (detaching)
          detach(t0);
        destroy_component(swipeitem1, detaching);
        if (detaching)
          detach(t1);
        destroy_component(swipeitem2, detaching);
      }
    };
  }
  function create_if_block_5(ctx) {
    let previous_key = (
      /*favoritetimer*/
      ctx[9]
    );
    let key_block_anchor;
    let key_block = create_key_block_2(ctx);
    return {
      c() {
        key_block.c();
        key_block_anchor = empty();
      },
      m(target, anchor) {
        key_block.m(target, anchor);
        insert(target, key_block_anchor, anchor);
      },
      p(ctx2, dirty) {
        if (dirty[0] & /*favoritetimer*/
        512 && safe_not_equal(previous_key, previous_key = /*favoritetimer*/
        ctx2[9])) {
          key_block.d(1);
          key_block = create_key_block_2(ctx2);
          key_block.c();
          key_block.m(key_block_anchor.parentNode, key_block_anchor);
        } else {
          key_block.p(ctx2, dirty);
        }
      },
      d(detaching) {
        if (detaching)
          detach(key_block_anchor);
        key_block.d(detaching);
      }
    };
  }
  function create_key_block_2(ctx) {
    let span;
    let t_value = favortypes[
      /*$favorites*/
      ctx[14][
        /*$activefolioid*/
        ctx[13]
      ]?.[
        /*$activepb*/
        ctx[1]
      ] || 0
    ] + "";
    let t;
    let mounted;
    let dispose;
    return {
      c() {
        span = element("span");
        t = text(t_value);
        attr(span, "aria-hidden", "true");
        attr(span, "class", "favoritebtn");
        toggle_class(span, "blinkfavorbtn", !!/*favoritetimer*/
        ctx[9]);
      },
      m(target, anchor) {
        insert(target, span, anchor);
        append(span, t);
        if (!mounted) {
          dispose = listen(
            span,
            "click",
            /*favoritebtn*/
            ctx[30]
          );
          mounted = true;
        }
      },
      p(ctx2, dirty) {
        if (dirty[0] & /*$favorites, $activefolioid, $activepb*/
        24578 && t_value !== (t_value = favortypes[
          /*$favorites*/
          ctx2[14][
            /*$activefolioid*/
            ctx2[13]
          ]?.[
            /*$activepb*/
            ctx2[1]
          ] || 0
        ] + ""))
          set_data(t, t_value);
        if (dirty[0] & /*favoritetimer*/
        512) {
          toggle_class(span, "blinkfavorbtn", !!/*favoritetimer*/
          ctx2[9]);
        }
      },
      d(detaching) {
        if (detaching)
          detach(span);
        mounted = false;
        dispose();
      }
    };
  }
  function create_if_block_4(ctx) {
    let span;
    let t_value = (
      /*$audioid*/
      ctx[21] ? "\u25FC" : "\u266B"
    );
    let t;
    let mounted;
    let dispose;
    return {
      c() {
        span = element("span");
        t = text(t_value);
        attr(span, "aria-hidden", "true");
        attr(span, "class", "playbtn");
      },
      m(target, anchor) {
        insert(target, span, anchor);
        append(span, t);
        if (!mounted) {
          dispose = listen(
            span,
            "click",
            /*toggleplaybtn*/
            ctx[31]
          );
          mounted = true;
        }
      },
      p(ctx2, dirty) {
        if (dirty[0] & /*$audioid*/
        2097152 && t_value !== (t_value = /*$audioid*/
        ctx2[21] ? "\u25FC" : "\u266B"))
          set_data(t, t_value);
      },
      d(detaching) {
        if (detaching)
          detach(span);
        mounted = false;
        dispose();
      }
    };
  }
  function create_if_block_3(ctx) {
    let span;
    let t_value = (
      /*$remainrollback*/
      (ctx[23] > 0 ? (
        /*$remainrollback*/
        ctx[23]
      ) : "") + ""
    );
    let t;
    return {
      c() {
        span = element("span");
        t = text(t_value);
        attr(span, "class", "remainrollback");
      },
      m(target, anchor) {
        insert(target, span, anchor);
        append(span, t);
      },
      p(ctx2, dirty) {
        if (dirty[0] & /*$remainrollback*/
        8388608 && t_value !== (t_value = /*$remainrollback*/
        (ctx2[23] > 0 ? (
          /*$remainrollback*/
          ctx2[23]
        ) : "") + ""))
          set_data(t, t_value);
      },
      d(detaching) {
        if (detaching)
          detach(span);
      }
    };
  }
  function create_if_block_2(ctx) {
    let tapmark_1;
    let current;
    tapmark_1 = new tapmark_default({
      props: {
        mark: (
          /*$tapmark*/
          ctx[15]
        ),
        pb: (
          /*$activepb*/
          ctx[1]
        ),
        folioChars: (
          /*$folioChars*/
          ctx[17]
        ),
        folioLines: folioLines(),
        frame: (
          /*imageFrame*/
          ctx[10]
        )
      }
    });
    return {
      c() {
        create_component(tapmark_1.$$.fragment);
      },
      m(target, anchor) {
        mount_component(tapmark_1, target, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        const tapmark_1_changes = {};
        if (dirty[0] & /*$tapmark*/
        32768)
          tapmark_1_changes.mark = /*$tapmark*/
          ctx2[15];
        if (dirty[0] & /*$activepb*/
        2)
          tapmark_1_changes.pb = /*$activepb*/
          ctx2[1];
        if (dirty[0] & /*$folioChars*/
        131072)
          tapmark_1_changes.folioChars = /*$folioChars*/
          ctx2[17];
        if (dirty[0] & /*imageFrame*/
        1024)
          tapmark_1_changes.frame = /*imageFrame*/
          ctx2[10];
        tapmark_1.$set(tapmark_1_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(tapmark_1.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(tapmark_1.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(tapmark_1, detaching);
      }
    };
  }
  function create_key_block_1(ctx) {
    let if_block_anchor;
    let current;
    let if_block = (
      /*ready*/
      ctx[4] && !/*hidepunc*/
      ctx[5] && !/*$showpaiji*/
      ctx[16] && /*$leftmode*/
      ctx[18] == "folio" && create_if_block_2(ctx)
    );
    return {
      c() {
        if (if_block)
          if_block.c();
        if_block_anchor = empty();
      },
      m(target, anchor) {
        if (if_block)
          if_block.m(target, anchor);
        insert(target, if_block_anchor, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        if (
          /*ready*/
          ctx2[4] && !/*hidepunc*/
          ctx2[5] && !/*$showpaiji*/
          ctx2[16] && /*$leftmode*/
          ctx2[18] == "folio"
        ) {
          if (if_block) {
            if_block.p(ctx2, dirty);
            if (dirty[0] & /*ready, hidepunc, $showpaiji, $leftmode*/
            327728) {
              transition_in(if_block, 1);
            }
          } else {
            if_block = create_if_block_2(ctx2);
            if_block.c();
            transition_in(if_block, 1);
            if_block.m(if_block_anchor.parentNode, if_block_anchor);
          }
        } else if (if_block) {
          group_outros();
          transition_out(if_block, 1, 1, () => {
            if_block = null;
          });
          check_outros();
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(if_block);
        current = true;
      },
      o(local) {
        transition_out(if_block);
        current = false;
      },
      d(detaching) {
        if (if_block)
          if_block.d(detaching);
        if (detaching)
          detach(if_block_anchor);
      }
    };
  }
  function create_if_block3(ctx) {
    let t;
    let transcriptlayer;
    let current;
    let if_block = (
      /*$showpunc*/
      ctx[24] == "on" && /*$leftmode*/
      ctx[18] == "folio" && create_if_block_1(ctx)
    );
    transcriptlayer = new transcriptlayer_default({
      props: {
        frame: (
          /*imageFrame*/
          ctx[10]
        ),
        totalpages: (
          /*totalpages*/
          ctx[0]
        ),
        folioLines: folioLines(),
        swiper: (
          /*swiper*/
          ctx[6]
        ),
        ptk: (
          /*ptk*/
          ctx[11]
        ),
        foliopage: (
          /*foliopage*/
          ctx[2]
        )
      }
    });
    return {
      c() {
        if (if_block)
          if_block.c();
        t = space();
        create_component(transcriptlayer.$$.fragment);
      },
      m(target, anchor) {
        if (if_block)
          if_block.m(target, anchor);
        insert(target, t, anchor);
        mount_component(transcriptlayer, target, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        if (
          /*$showpunc*/
          ctx2[24] == "on" && /*$leftmode*/
          ctx2[18] == "folio"
        ) {
          if (if_block) {
            if_block.p(ctx2, dirty);
            if (dirty[0] & /*$showpunc, $leftmode*/
            17039360) {
              transition_in(if_block, 1);
            }
          } else {
            if_block = create_if_block_1(ctx2);
            if_block.c();
            transition_in(if_block, 1);
            if_block.m(t.parentNode, t);
          }
        } else if (if_block) {
          group_outros();
          transition_out(if_block, 1, 1, () => {
            if_block = null;
          });
          check_outros();
        }
        const transcriptlayer_changes = {};
        if (dirty[0] & /*imageFrame*/
        1024)
          transcriptlayer_changes.frame = /*imageFrame*/
          ctx2[10];
        if (dirty[0] & /*totalpages*/
        1)
          transcriptlayer_changes.totalpages = /*totalpages*/
          ctx2[0];
        if (dirty[0] & /*swiper*/
        64)
          transcriptlayer_changes.swiper = /*swiper*/
          ctx2[6];
        if (dirty[0] & /*ptk*/
        2048)
          transcriptlayer_changes.ptk = /*ptk*/
          ctx2[11];
        if (dirty[0] & /*foliopage*/
        4)
          transcriptlayer_changes.foliopage = /*foliopage*/
          ctx2[2];
        transcriptlayer.$set(transcriptlayer_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(if_block);
        transition_in(transcriptlayer.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(if_block);
        transition_out(transcriptlayer.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (if_block)
          if_block.d(detaching);
        if (detaching)
          detach(t);
        destroy_component(transcriptlayer, detaching);
      }
    };
  }
  function create_if_block_1(ctx) {
    let punclayer;
    let current;
    punclayer = new punclayer_default({
      props: {
        frame: (
          /*imageFrame*/
          ctx[10]
        ),
        folioChars: (
          /*$folioChars*/
          ctx[17]
        ),
        folioLines: folioLines(),
        puncs: (
          /*puncs*/
          ctx[3]
        )
      }
    });
    return {
      c() {
        create_component(punclayer.$$.fragment);
      },
      m(target, anchor) {
        mount_component(punclayer, target, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        const punclayer_changes = {};
        if (dirty[0] & /*imageFrame*/
        1024)
          punclayer_changes.frame = /*imageFrame*/
          ctx2[10];
        if (dirty[0] & /*$folioChars*/
        131072)
          punclayer_changes.folioChars = /*$folioChars*/
          ctx2[17];
        if (dirty[0] & /*puncs*/
        8)
          punclayer_changes.puncs = /*puncs*/
          ctx2[3];
        punclayer.$set(punclayer_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(punclayer.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(punclayer.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(punclayer, detaching);
      }
    };
  }
  function create_key_block2(ctx) {
    let if_block_anchor;
    let current;
    let if_block = !/*hidepunc*/
    ctx[5] && create_if_block3(ctx);
    return {
      c() {
        if (if_block)
          if_block.c();
        if_block_anchor = empty();
      },
      m(target, anchor) {
        if (if_block)
          if_block.m(target, anchor);
        insert(target, if_block_anchor, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        if (!/*hidepunc*/
        ctx2[5]) {
          if (if_block) {
            if_block.p(ctx2, dirty);
            if (dirty[0] & /*hidepunc*/
            32) {
              transition_in(if_block, 1);
            }
          } else {
            if_block = create_if_block3(ctx2);
            if_block.c();
            transition_in(if_block, 1);
            if_block.m(if_block_anchor.parentNode, if_block_anchor);
          }
        } else if (if_block) {
          group_outros();
          transition_out(if_block, 1, 1, () => {
            if_block = null;
          });
          check_outros();
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(if_block);
        current = true;
      },
      o(local) {
        transition_out(if_block);
        current = false;
      },
      d(detaching) {
        if (if_block)
          if_block.d(detaching);
        if (detaching)
          detach(if_block_anchor);
      }
    };
  }
  function create_fragment7(ctx) {
    let current_block_type_index;
    let if_block0;
    let t0;
    let t1;
    let show_if = !/*$landscape*/
    ctx[19] && /*$mediaurls*/
    ctx[12].filter(func).length;
    let t2;
    let span;
    let t3_value = (
      /*imageIndex*/
      ctx[8] + 1 + ""
    );
    let t3;
    let t4;
    let t5;
    let previous_key = (
      /*$tapmark*/
      ctx[15] + /*$activepb*/
      ctx[1]
    );
    let t6;
    let previous_key_1 = (
      /*puncs*/
      ctx[3]
    );
    let key_block1_anchor;
    let current;
    const if_block_creators = [create_if_block_6, create_else_block];
    const if_blocks = [];
    function select_block_type(ctx2, dirty) {
      if (
        /*ready*/
        ctx2[4]
      )
        return 0;
      return 1;
    }
    current_block_type_index = select_block_type(ctx, [-1, -1]);
    if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    let if_block1 = !/*$landscape*/
    ctx[19] && /*totalpages*/
    ctx[0] - /*defaultIndex*/
    ctx[7] > 1 && create_if_block_5(ctx);
    let if_block2 = show_if && create_if_block_4(ctx);
    let if_block3 = (
      /*$playing*/
      ctx[22] && create_if_block_3(ctx)
    );
    let key_block0 = create_key_block_1(ctx);
    let key_block1 = create_key_block2(ctx);
    return {
      c() {
        if_block0.c();
        t0 = space();
        if (if_block1)
          if_block1.c();
        t1 = space();
        if (if_block2)
          if_block2.c();
        t2 = space();
        span = element("span");
        t3 = text(t3_value);
        t4 = space();
        if (if_block3)
          if_block3.c();
        t5 = space();
        key_block0.c();
        t6 = space();
        key_block1.c();
        key_block1_anchor = empty();
        attr(span, "class", "pagenumber");
      },
      m(target, anchor) {
        if_blocks[current_block_type_index].m(target, anchor);
        insert(target, t0, anchor);
        if (if_block1)
          if_block1.m(target, anchor);
        insert(target, t1, anchor);
        if (if_block2)
          if_block2.m(target, anchor);
        insert(target, t2, anchor);
        insert(target, span, anchor);
        append(span, t3);
        insert(target, t4, anchor);
        if (if_block3)
          if_block3.m(target, anchor);
        insert(target, t5, anchor);
        key_block0.m(target, anchor);
        insert(target, t6, anchor);
        key_block1.m(target, anchor);
        insert(target, key_block1_anchor, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        let previous_block_index = current_block_type_index;
        current_block_type_index = select_block_type(ctx2, dirty);
        if (current_block_type_index === previous_block_index) {
          if_blocks[current_block_type_index].p(ctx2, dirty);
        } else {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, () => {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
          if_block0 = if_blocks[current_block_type_index];
          if (!if_block0) {
            if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
            if_block0.c();
          } else {
            if_block0.p(ctx2, dirty);
          }
          transition_in(if_block0, 1);
          if_block0.m(t0.parentNode, t0);
        }
        if (!/*$landscape*/
        ctx2[19] && /*totalpages*/
        ctx2[0] - /*defaultIndex*/
        ctx2[7] > 1) {
          if (if_block1) {
            if_block1.p(ctx2, dirty);
          } else {
            if_block1 = create_if_block_5(ctx2);
            if_block1.c();
            if_block1.m(t1.parentNode, t1);
          }
        } else if (if_block1) {
          if_block1.d(1);
          if_block1 = null;
        }
        if (dirty[0] & /*$landscape, $mediaurls*/
        528384)
          show_if = !/*$landscape*/
          ctx2[19] && /*$mediaurls*/
          ctx2[12].filter(func).length;
        if (show_if) {
          if (if_block2) {
            if_block2.p(ctx2, dirty);
          } else {
            if_block2 = create_if_block_4(ctx2);
            if_block2.c();
            if_block2.m(t2.parentNode, t2);
          }
        } else if (if_block2) {
          if_block2.d(1);
          if_block2 = null;
        }
        if ((!current || dirty[0] & /*imageIndex*/
        256) && t3_value !== (t3_value = /*imageIndex*/
        ctx2[8] + 1 + ""))
          set_data(t3, t3_value);
        if (
          /*$playing*/
          ctx2[22]
        ) {
          if (if_block3) {
            if_block3.p(ctx2, dirty);
          } else {
            if_block3 = create_if_block_3(ctx2);
            if_block3.c();
            if_block3.m(t5.parentNode, t5);
          }
        } else if (if_block3) {
          if_block3.d(1);
          if_block3 = null;
        }
        if (dirty[0] & /*$tapmark, $activepb*/
        32770 && safe_not_equal(previous_key, previous_key = /*$tapmark*/
        ctx2[15] + /*$activepb*/
        ctx2[1])) {
          group_outros();
          transition_out(key_block0, 1, 1, noop);
          check_outros();
          key_block0 = create_key_block_1(ctx2);
          key_block0.c();
          transition_in(key_block0, 1);
          key_block0.m(t6.parentNode, t6);
        } else {
          key_block0.p(ctx2, dirty);
        }
        if (dirty[0] & /*puncs*/
        8 && safe_not_equal(previous_key_1, previous_key_1 = /*puncs*/
        ctx2[3])) {
          group_outros();
          transition_out(key_block1, 1, 1, noop);
          check_outros();
          key_block1 = create_key_block2(ctx2);
          key_block1.c();
          transition_in(key_block1, 1);
          key_block1.m(key_block1_anchor.parentNode, key_block1_anchor);
        } else {
          key_block1.p(ctx2, dirty);
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(if_block0);
        transition_in(key_block0);
        transition_in(key_block1);
        current = true;
      },
      o(local) {
        transition_out(if_block0);
        transition_out(key_block0);
        transition_out(key_block1);
        current = false;
      },
      d(detaching) {
        if_blocks[current_block_type_index].d(detaching);
        if (detaching)
          detach(t0);
        if (if_block1)
          if_block1.d(detaching);
        if (detaching)
          detach(t1);
        if (if_block2)
          if_block2.d(detaching);
        if (detaching)
          detach(t2);
        if (detaching)
          detach(span);
        if (detaching)
          detach(t4);
        if (if_block3)
          if_block3.d(detaching);
        if (detaching)
          detach(t5);
        key_block0.d(detaching);
        if (detaching)
          detach(t6);
        if (detaching)
          detach(key_block1_anchor);
        key_block1.d(detaching);
      }
    };
  }
  var blankimage = "frames/blank.png";
  var func = (it) => it.incache;
  function instance8($$self, $$props, $$invalidate) {
    let ptk3;
    let $activepb;
    let $mediaurls;
    let $activefolioid;
    let $preferaudio;
    let $favorites;
    let $activePtk;
    let $tapmark;
    let $showpaiji;
    let $folioChars;
    let $leftmode;
    let $thezip;
    let $showyoutube;
    let $landscape;
    let $downloading;
    let $audioid;
    let $playing;
    let $remainrollback;
    let $showpunc;
    component_subscribe($$self, activepb, ($$value) => $$invalidate(1, $activepb = $$value));
    component_subscribe($$self, mediaurls, ($$value) => $$invalidate(12, $mediaurls = $$value));
    component_subscribe($$self, activefolioid, ($$value) => $$invalidate(13, $activefolioid = $$value));
    component_subscribe($$self, preferaudio, ($$value) => $$invalidate(38, $preferaudio = $$value));
    component_subscribe($$self, favorites, ($$value) => $$invalidate(14, $favorites = $$value));
    component_subscribe($$self, activePtk, ($$value) => $$invalidate(34, $activePtk = $$value));
    component_subscribe($$self, tapmark, ($$value) => $$invalidate(15, $tapmark = $$value));
    component_subscribe($$self, showpaiji, ($$value) => $$invalidate(16, $showpaiji = $$value));
    component_subscribe($$self, folioChars, ($$value) => $$invalidate(17, $folioChars = $$value));
    component_subscribe($$self, leftmode, ($$value) => $$invalidate(18, $leftmode = $$value));
    component_subscribe($$self, thezip, ($$value) => $$invalidate(39, $thezip = $$value));
    component_subscribe($$self, showyoutube, ($$value) => $$invalidate(40, $showyoutube = $$value));
    component_subscribe($$self, landscape, ($$value) => $$invalidate(19, $landscape = $$value));
    component_subscribe($$self, downloading, ($$value) => $$invalidate(20, $downloading = $$value));
    component_subscribe($$self, audioid, ($$value) => $$invalidate(21, $audioid = $$value));
    component_subscribe($$self, playing, ($$value) => $$invalidate(22, $playing = $$value));
    component_subscribe($$self, remainrollback, ($$value) => $$invalidate(23, $remainrollback = $$value));
    component_subscribe($$self, showpunc, ($$value) => $$invalidate(24, $showpunc = $$value));
    let { src } = $$props;
    let foliopage = [], puncs = [], ready, hidepunc = false;
    let { totalpages = 0 } = $$props;
    let { onTapText = function() {
    } } = $$props;
    let swiper;
    let defaultIndex = 1;
    let imageIndex = 0;
    let favoritetimer = 0;
    let imageFrame = {};
    const getImages = (idx2) => {
      const clss = ["leftimage", "middleimage", "rightimage"];
      const cls = clss[idx2];
      const imgs = document.getElementsByClassName(cls);
      return imgs;
    };
    const swipeConfig = {
      autoplay: false,
      delay: 0,
      showIndicators: false,
      transitionDuration: 250,
      allow_infinite_swipe: true
    };
    const loadZip = async () => {
      $$invalidate(4, ready = false);
      loadingzip.set(true);
      let host = "folio/";
      const ftext = new FolioText(ptk3);
      await ftext.load($activefolioid);
      foliotext.set(ftext);
      const validateaddress = makeAddressFromFolioPos($tapmark);
      if (addressFromUrl() !== validateaddress) {
        updateUrl(validateaddress);
      }
      const res = await downloadToCache(CacheName, host + src, (msg) => {
        downloading.set(host + src + " " + msg);
      });
      downloading.set("");
      const buf = await res.arrayBuffer();
      const zip = new ZipStore(buf);
      thezip.set(zip);
      $$invalidate(0, totalpages = zip.files.length);
      $$invalidate(8, imageIndex = parseInt($activepb) - 1);
      if (imageIndex >= totalpages)
        $$invalidate(8, imageIndex = 0);
      $$invalidate(4, ready = true);
      setTimeout(
        () => {
          maxfolio.set(totalpages);
          loadingzip.set(false);
          setImages(imageIndex);
          updateFolioText();
          fetchAudioList($activefolioid, mediaurls, $showyoutube == "on");
        },
        10
      );
    };
    const swipeStart = (obj) => {
      $$invalidate(5, hidepunc = true);
    };
    let oldDefaultIndex = 1;
    const setImage = (imageidx, zip, idx2) => {
      if (!swiper)
        return;
      if (idx2 >= totalpages)
        idx2 = 0;
      else if (idx2 < 0)
        idx2 = totalpages - 1;
      const imgs = getImages(imageidx);
      for (let i = 0; i < imgs.length; i++) {
        const blob = new Blob([zip.files[idx2].content]);
        imgs[i].src = URL.createObjectURL(blob);
      }
      swiper.update();
    };
    const setImages = (idx2) => {
      if (!swiper)
        return;
      const zip = $thezip;
      let previdx = idx2 - 1;
      if (previdx < 0)
        previdx = totalpages - 1;
      let nextidx = idx2 + 1;
      if (nextidx >= totalpages)
        nextidx = 0;
      setImage((defaultIndex + 1) % 3, zip, previdx);
      setImage(defaultIndex, zip, idx2);
      setImage((defaultIndex + 2) % 3, zip, nextidx);
      swiper.update();
      $$invalidate(8, imageIndex = idx2);
      const img = document.getElementsByClassName("middleimage")[0];
      const height = img.clientHeight || imageFrame.height;
      const width = img.clientWidth || imageFrame.width || height * 0.45;
      $$invalidate(10, imageFrame = { left: 0, top: 0, width, height });
    };
    const swipeChanged = (obj) => {
      if (!ready)
        return;
      const { active_item } = obj.detail;
      $$invalidate(7, defaultIndex = active_item);
      let idx2 = imageIndex;
      const zip = $thezip;
      if (oldDefaultIndex == defaultIndex) {
        $$invalidate(5, hidepunc = false);
        return;
      }
      if ((oldDefaultIndex + 3 - defaultIndex) % 3 == 1) {
        idx2++;
        if (idx2 >= totalpages)
          idx2 = 0;
        setImage((oldDefaultIndex + 1) % 3, zip, idx2 + 1);
      } else {
        idx2--;
        if (idx2 < 0)
          idx2 = totalpages - 1;
        setImage((oldDefaultIndex + 2) % 3, zip, idx2 - 1);
      }
      oldDefaultIndex = defaultIndex;
      $$invalidate(8, imageIndex = idx2);
      activepb.set((imageIndex + 1).toString());
      swiper.update();
      updateFolioText();
      useractive();
      confirmfavorite();
    };
    const updateFolioText = () => {
      $$invalidate(5, hidepunc = true);
      $$invalidate(2, foliopage = get_store_value(foliotext).folioPageText($activepb));
      $$invalidate(2, foliopage = foliopage.join("\n").replace(/【[^】]+】/, "").split("\n"));
      setTimeout(
        () => {
          const fl = folioLines();
          $$invalidate(5, hidepunc = false);
          $$invalidate(3, puncs = extractPuncPos(foliopage, fl));
        },
        200
      );
    };
    const useractive = (humanaction = false) => {
      if (!isSidePaiji() || humanaction) {
        showpaiji.set(false);
        idlecount.set(0);
      }
    };
    const mousewheel = (e) => {
      if ($leftmode !== "folio")
        return;
      if (!ready)
        return;
      if (e.ctrlKey)
        return;
      $$invalidate(5, hidepunc = true);
      pb = parseInt($activepb);
      if (e.deltaY > 0) {
        pb++;
        if (pb > totalpages)
          pb = 1;
        activepb.set(pb);
      } else {
        pb--;
        if (pb < 1)
          pb = totalpages;
        activepb.set(pb);
      }
      useractive(true);
      e.preventDefault();
    };
    const getCharXY = (x, y) => {
      const { left, top, width, height } = imageFrame;
      x -= left;
      y -= top;
      const cx = folioLines() - Math.floor(x / width * folioLines()) - 1;
      const cy = Math.floor(y / height * $folioChars);
      return [cx, cy];
    };
    const onfoliopageclick = (e) => {
      if ($showpaiji && !isSidePaiji()) {
        useractive(true);
        return;
      }
      $$invalidate(5, hidepunc = false);
      const { x, y } = e.detail;
      const [cx, cy] = getCharXY(x, y);
      if (cx >= folioLines() !== cx < 0) {
        onTapText("");
        return;
      }
      const oldmark = $tapmark;
      const newmark = [$activepb, cx, cy];
      if (JSON.stringify(oldmark) == JSON.stringify(newmark)) {
        sharing.set(true);
        navigator.clipboard.writeText(shareAddress());
        onTapText("");
        return;
      } else {
        sharing.set(false);
        tapmark.set(newmark);
      }
      updateUrl(tapAddress());
      const ft = get_store_value(foliotext);
      let { choff, linetext } = ft.fromFolioPos($activepb, cx, cy);
      linetext = linetext.replace(/([。！？：、．；，「『（ ])/g, "\u3000");
      const offtext = linetext.slice(0, choff) + CURSORMARK + linetext.slice(choff).replace(/　.+/, "");
      let [t] = parseOfftext(offtext);
      while (t.charAt(0) == "\u3000")
        t = t.slice(1);
      while (t.charAt(t.length - 1) == "\u3000")
        t = t.slice(0, t.length - 1);
      onTapText(t);
    };
    const gotoPb = async (pb2) => {
      if (!totalpages || !swiper)
        return;
      updateFolioText();
      setImages(parseInt(pb2) - 1);
    };
    const confirmfavorite = () => {
      if (favoritetimer) {
        clearTimeout(favoritetimer);
        $$invalidate(9, favoritetimer = 0);
      }
      cancellable = true;
      const pb2 = $activepb;
      const f = $favorites[$activefolioid]?.[pb2];
      if (f) {
        const bookfavor = Object.assign({}, $favorites);
        for (let i in $favorites[$activefolioid]) {
          const f2 = $favorites[$activefolioid][i];
          if (f2 == f && parseInt(pb2) !== parseInt(i)) {
            delete $favorites[$activefolioid][i];
          }
        }
        favorites.set(Object.assign({}, bookfavor));
      }
    };
    let cancellable = true;
    const favoritebtn = () => {
      const actptk = $activePtk;
      if (actptk !== "ylz-prjn" && actptk !== "ylz-tg" && actptk !== "ylz-vny" && actptk !== "ylz-svk")
        return;
      clearTimeout(favoritetimer);
      $$invalidate(9, favoritetimer = setTimeout(
        () => {
          confirmfavorite();
        },
        5e3
      ));
      const bookfavor = Object.assign({}, $favorites);
      if (!bookfavor[$activefolioid]) {
        bookfavor[$activefolioid] = {};
      }
      const type = bookfavor[$activefolioid][$activepb];
      if (!type) {
        cancellable = false;
        bookfavor[$activefolioid][$activepb] = 1;
      } else {
        if (cancellable) {
          delete bookfavor[$activefolioid][$activepb];
          clearTimeout(favoritetimer);
          $$invalidate(9, favoritetimer = 0);
        } else {
          let i = bookfavor[$activefolioid][$activepb] + 1;
          if (i >= favortypes.length)
            i = 1;
          bookfavor[$activefolioid][$activepb] = i;
          cancellable = false;
        }
      }
      favorites.set(Object.assign({}, bookfavor));
    };
    const toggleplaybtn = () => {
      if (!get_store_value(audioid)) {
        if ($mediaurls.length < 2)
          return;
        const pick = Math.floor(Math.random() * ($mediaurls.length - 1)) + 1;
        const vid = $preferaudio[$activefolioid] || $mediaurls[pick || 1]?.aid;
        selectmedia(vid);
      } else {
        selectmedia("");
      }
    };
    function swipe_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](() => {
        swiper = $$value;
        $$invalidate(6, swiper);
      });
    }
    $$self.$$set = ($$props2) => {
      if ("src" in $$props2)
        $$invalidate(32, src = $$props2.src);
      if ("totalpages" in $$props2)
        $$invalidate(0, totalpages = $$props2.totalpages);
      if ("onTapText" in $$props2)
        $$invalidate(33, onTapText = $$props2.onTapText);
    };
    $$self.$$.update = () => {
      if ($$self.$$.dirty[1] & /*$activePtk*/
      8) {
        $:
          $$invalidate(11, ptk3 = usePtk($activePtk));
      }
      if ($$self.$$.dirty[1] & /*src*/
      2) {
        $:
          loadZip(src);
      }
      if ($$self.$$.dirty[0] & /*$activepb*/
      2) {
        $:
          gotoPb($activepb);
      }
    };
    return [
      totalpages,
      $activepb,
      foliopage,
      puncs,
      ready,
      hidepunc,
      swiper,
      defaultIndex,
      imageIndex,
      favoritetimer,
      imageFrame,
      ptk3,
      $mediaurls,
      $activefolioid,
      $favorites,
      $tapmark,
      $showpaiji,
      $folioChars,
      $leftmode,
      $landscape,
      $downloading,
      $audioid,
      $playing,
      $remainrollback,
      $showpunc,
      swipeConfig,
      swipeStart,
      swipeChanged,
      mousewheel,
      onfoliopageclick,
      favoritebtn,
      toggleplaybtn,
      src,
      onTapText,
      $activePtk,
      swipe_binding
    ];
  }
  var Swipezipimage = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance8, create_fragment7, safe_not_equal, { src: 32, totalpages: 0, onTapText: 33 }, null, [-1, -1]);
    }
  };
  var swipezipimage_default = Swipezipimage;

  // ../ptk/platform/pwa.js
  function registerServiceWorker(swfn = "./sw.js") {
    const p = document.location.protocol;
    const h = document.location.hostname;
    const localhost = p == "http:" && (h == "127.0.0.1" || h == "localhost");
    if ("serviceWorker" in navigator && (localhost || p == "https:")) {
      navigator.serviceWorker.register(swfn);
    }
  }

  // src/fullscreen.js
  var portrait = window.matchMedia("(orientation: portrait)");
  portrait.addEventListener("change", function(e) {
    landscape.set(!e.matches);
  });
  window.addEventListener("deviceorientation", () => {
    landscape.set(screen.availWidth > screen.availHeight);
  }, true);
  landscape.set(screen.availWidth > screen.availHeight);
  var documentHeight = () => {
    const doc = document.documentElement;
    const h = window.innerHeight * get_store_value(heightratio);
    doc.style.setProperty("--doc-height", `${h}px`);
  };
  window.addEventListener("resize", documentHeight);

  // src/textout.ts
  var _ = (text2, _sim) => {
    const sim = typeof _sim == "undefined" ? get_store_value(tosim) : _sim;
    if (parseInt(sim))
      return toSim(text2, sim);
    return text2;
  };

  // src/dictpopup.svelte
  function get_each_context4(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[17] = list[i][0];
    child_ctx[18] = list[i][1];
    child_ctx[20] = i;
    return child_ctx;
  }
  function create_else_block_2(ctx) {
    let t_value = _("\u9EDE\u8981\u67E5\u7684\u5B57\u8A5E\u3002") + "";
    let t;
    return {
      c() {
        t = text(t_value);
      },
      m(target, anchor) {
        insert(target, t, anchor);
      },
      p: noop,
      d(detaching) {
        if (detaching)
          detach(t);
      }
    };
  }
  function create_if_block4(ctx) {
    let span;
    let t;
    let if_block_anchor;
    let each_value = (
      /*entries*/
      ctx[3]
    );
    let each_blocks = [];
    for (let i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block4(get_each_context4(ctx, each_value, i));
    }
    let if_block = (
      /*src*/
      ctx[5] && create_if_block_12(ctx)
    );
    return {
      c() {
        span = element("span");
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        t = space();
        if (if_block)
          if_block.c();
        if_block_anchor = empty();
        attr(span, "class", "header svelte-q5fwfc");
      },
      m(target, anchor) {
        insert(target, span, anchor);
        for (let i = 0; i < each_blocks.length; i += 1) {
          if (each_blocks[i]) {
            each_blocks[i].m(span, null);
          }
        }
        insert(target, t, anchor);
        if (if_block)
          if_block.m(target, anchor);
        insert(target, if_block_anchor, anchor);
      },
      p(ctx2, dirty) {
        if (dirty & /*nentry, baidulink, entries, googlelink, wikilink, showing, setWikipedia, wikipedia, onelinelink, setOneline, fgdzd, dfb*/
        8159) {
          each_value = /*entries*/
          ctx2[3];
          let i;
          for (i = 0; i < each_value.length; i += 1) {
            const child_ctx = get_each_context4(ctx2, each_value, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
            } else {
              each_blocks[i] = create_each_block4(child_ctx);
              each_blocks[i].c();
              each_blocks[i].m(span, null);
            }
          }
          for (; i < each_blocks.length; i += 1) {
            each_blocks[i].d(1);
          }
          each_blocks.length = each_value.length;
        }
        if (
          /*src*/
          ctx2[5]
        ) {
          if (if_block) {
            if_block.p(ctx2, dirty);
          } else {
            if_block = create_if_block_12(ctx2);
            if_block.c();
            if_block.m(if_block_anchor.parentNode, if_block_anchor);
          }
        } else if (if_block) {
          if_block.d(1);
          if_block = null;
        }
      },
      d(detaching) {
        if (detaching)
          detach(span);
        destroy_each(each_blocks, detaching);
        if (detaching)
          detach(t);
        if (if_block)
          if_block.d(detaching);
        if (detaching)
          detach(if_block_anchor);
      }
    };
  }
  function create_if_block_22(ctx) {
    let t0;
    let t1;
    let a0;
    let t2;
    let a0_href_value;
    let t3;
    let a1;
    let t4;
    let a1_href_value;
    let if_block0 = (
      /*fgdzd*/
      (ctx[1] || /*dfb*/
      ctx[2]) && create_if_block_52(ctx)
    );
    let if_block1 = (
      /*wikipedia*/
      ctx[0] && create_if_block_32(ctx)
    );
    return {
      c() {
        if (if_block0)
          if_block0.c();
        t0 = space();
        if (if_block1)
          if_block1.c();
        t1 = space();
        a0 = element("a");
        t2 = text("\u8C37\u54E5");
        t3 = space();
        a1 = element("a");
        t4 = text("\u767E\u5EA6");
        attr(a0, "target", "_new");
        attr(a0, "href", a0_href_value = /*googlelink*/
        ctx[9](
          /*entry*/
          ctx[18]
        ));
        attr(a1, "target", "_new");
        attr(a1, "href", a1_href_value = /*baidulink*/
        ctx[10](
          /*entry*/
          ctx[18]
        ));
      },
      m(target, anchor) {
        if (if_block0)
          if_block0.m(target, anchor);
        insert(target, t0, anchor);
        if (if_block1)
          if_block1.m(target, anchor);
        insert(target, t1, anchor);
        insert(target, a0, anchor);
        append(a0, t2);
        insert(target, t3, anchor);
        insert(target, a1, anchor);
        append(a1, t4);
      },
      p(ctx2, dirty) {
        if (
          /*fgdzd*/
          ctx2[1] || /*dfb*/
          ctx2[2]
        ) {
          if (if_block0) {
            if_block0.p(ctx2, dirty);
          } else {
            if_block0 = create_if_block_52(ctx2);
            if_block0.c();
            if_block0.m(t0.parentNode, t0);
          }
        } else if (if_block0) {
          if_block0.d(1);
          if_block0 = null;
        }
        if (
          /*wikipedia*/
          ctx2[0]
        ) {
          if (if_block1) {
            if_block1.p(ctx2, dirty);
          } else {
            if_block1 = create_if_block_32(ctx2);
            if_block1.c();
            if_block1.m(t1.parentNode, t1);
          }
        } else if (if_block1) {
          if_block1.d(1);
          if_block1 = null;
        }
        if (dirty & /*entries*/
        8 && a0_href_value !== (a0_href_value = /*googlelink*/
        ctx2[9](
          /*entry*/
          ctx2[18]
        ))) {
          attr(a0, "href", a0_href_value);
        }
        if (dirty & /*entries*/
        8 && a1_href_value !== (a1_href_value = /*baidulink*/
        ctx2[10](
          /*entry*/
          ctx2[18]
        ))) {
          attr(a1, "href", a1_href_value);
        }
      },
      d(detaching) {
        if (if_block0)
          if_block0.d(detaching);
        if (detaching)
          detach(t0);
        if (if_block1)
          if_block1.d(detaching);
        if (detaching)
          detach(t1);
        if (detaching)
          detach(a0);
        if (detaching)
          detach(t3);
        if (detaching)
          detach(a1);
      }
    };
  }
  function create_if_block_52(ctx) {
    let if_block_anchor;
    function select_block_type_1(ctx2, dirty) {
      if (
        /*showing*/
        ctx2[6] == "oneline"
      )
        return create_if_block_62;
      return create_else_block_1;
    }
    let current_block_type = select_block_type_1(ctx, -1);
    let if_block = current_block_type(ctx);
    return {
      c() {
        if_block.c();
        if_block_anchor = empty();
      },
      m(target, anchor) {
        if_block.m(target, anchor);
        insert(target, if_block_anchor, anchor);
      },
      p(ctx2, dirty) {
        if (current_block_type === (current_block_type = select_block_type_1(ctx2, dirty)) && if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block.d(1);
          if_block = current_block_type(ctx2);
          if (if_block) {
            if_block.c();
            if_block.m(if_block_anchor.parentNode, if_block_anchor);
          }
        }
      },
      d(detaching) {
        if_block.d(detaching);
        if (detaching)
          detach(if_block_anchor);
      }
    };
  }
  function create_else_block_1(ctx) {
    let button;
    let mounted;
    let dispose;
    return {
      c() {
        button = element("button");
        button.textContent = "\u4E00\u884C";
      },
      m(target, anchor) {
        insert(target, button, anchor);
        if (!mounted) {
          dispose = listen(
            button,
            "click",
            /*setOneline*/
            ctx[12]
          );
          mounted = true;
        }
      },
      p: noop,
      d(detaching) {
        if (detaching)
          detach(button);
        mounted = false;
        dispose();
      }
    };
  }
  function create_if_block_62(ctx) {
    let a;
    let t;
    let a_href_value;
    return {
      c() {
        a = element("a");
        t = text("\u4E00\u884C");
        attr(a, "target", "_new");
        attr(a, "href", a_href_value = /*onelinelink*/
        ctx[8](
          /*entry*/
          ctx[18]
        ));
      },
      m(target, anchor) {
        insert(target, a, anchor);
        append(a, t);
      },
      p(ctx2, dirty) {
        if (dirty & /*entries*/
        8 && a_href_value !== (a_href_value = /*onelinelink*/
        ctx2[8](
          /*entry*/
          ctx2[18]
        ))) {
          attr(a, "href", a_href_value);
        }
      },
      d(detaching) {
        if (detaching)
          detach(a);
      }
    };
  }
  function create_if_block_32(ctx) {
    let if_block_anchor;
    function select_block_type_2(ctx2, dirty) {
      if (
        /*showing*/
        ctx2[6] == "wikipedia"
      )
        return create_if_block_42;
      return create_else_block2;
    }
    let current_block_type = select_block_type_2(ctx, -1);
    let if_block = current_block_type(ctx);
    return {
      c() {
        if_block.c();
        if_block_anchor = empty();
      },
      m(target, anchor) {
        if_block.m(target, anchor);
        insert(target, if_block_anchor, anchor);
      },
      p(ctx2, dirty) {
        if (current_block_type === (current_block_type = select_block_type_2(ctx2, dirty)) && if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block.d(1);
          if_block = current_block_type(ctx2);
          if (if_block) {
            if_block.c();
            if_block.m(if_block_anchor.parentNode, if_block_anchor);
          }
        }
      },
      d(detaching) {
        if_block.d(detaching);
        if (detaching)
          detach(if_block_anchor);
      }
    };
  }
  function create_else_block2(ctx) {
    let button;
    let mounted;
    let dispose;
    return {
      c() {
        button = element("button");
        button.textContent = "\u7DAD\u57FA";
      },
      m(target, anchor) {
        insert(target, button, anchor);
        if (!mounted) {
          dispose = listen(
            button,
            "click",
            /*setWikipedia*/
            ctx[11]
          );
          mounted = true;
        }
      },
      p: noop,
      d(detaching) {
        if (detaching)
          detach(button);
        mounted = false;
        dispose();
      }
    };
  }
  function create_if_block_42(ctx) {
    let a;
    let t;
    let a_href_value;
    return {
      c() {
        a = element("a");
        t = text("\u7DAD\u57FA");
        attr(a, "target", "_new");
        attr(a, "href", a_href_value = /*wikilink*/
        ctx[7](
          /*entry*/
          ctx[18]
        ));
      },
      m(target, anchor) {
        insert(target, a, anchor);
        append(a, t);
      },
      p(ctx2, dirty) {
        if (dirty & /*entries*/
        8 && a_href_value !== (a_href_value = /*wikilink*/
        ctx2[7](
          /*entry*/
          ctx2[18]
        ))) {
          attr(a, "href", a_href_value);
        }
      },
      d(detaching) {
        if (detaching)
          detach(a);
      }
    };
  }
  function create_each_block4(ctx) {
    let span;
    let label;
    let input;
    let input_value_value;
    let t0_value = (
      /*entry*/
      ctx[18] + ""
    );
    let t0;
    let t1;
    let t2;
    let binding_group;
    let mounted;
    let dispose;
    let if_block = (
      /*idx*/
      ctx[20] == /*nentry*/
      ctx[4] && create_if_block_22(ctx)
    );
    binding_group = init_binding_group(
      /*$$binding_groups*/
      ctx[14][0]
    );
    return {
      c() {
        span = element("span");
        label = element("label");
        input = element("input");
        t0 = text(t0_value);
        t1 = space();
        if (if_block)
          if_block.c();
        t2 = space();
        attr(input, "type", "radio");
        attr(input, "name", "dict");
        input.__value = input_value_value = /*idx*/
        ctx[20];
        input.value = input.__value;
        toggle_class(
          span,
          "dictgroup",
          /*idx*/
          ctx[20] == /*nentry*/
          ctx[4]
        );
        binding_group.p(input);
      },
      m(target, anchor) {
        insert(target, span, anchor);
        append(span, label);
        append(label, input);
        input.checked = input.__value === /*nentry*/
        ctx[4];
        append(label, t0);
        append(span, t1);
        if (if_block)
          if_block.m(span, null);
        append(span, t2);
        if (!mounted) {
          dispose = listen(
            input,
            "change",
            /*input_change_handler*/
            ctx[13]
          );
          mounted = true;
        }
      },
      p(ctx2, dirty) {
        if (dirty & /*nentry, entries*/
        24) {
          input.checked = input.__value === /*nentry*/
          ctx2[4];
        }
        if (dirty & /*entries*/
        8 && t0_value !== (t0_value = /*entry*/
        ctx2[18] + ""))
          set_data(t0, t0_value);
        if (
          /*idx*/
          ctx2[20] == /*nentry*/
          ctx2[4]
        ) {
          if (if_block) {
            if_block.p(ctx2, dirty);
          } else {
            if_block = create_if_block_22(ctx2);
            if_block.c();
            if_block.m(span, t2);
          }
        } else if (if_block) {
          if_block.d(1);
          if_block = null;
        }
        if (dirty & /*nentry*/
        16) {
          toggle_class(
            span,
            "dictgroup",
            /*idx*/
            ctx2[20] == /*nentry*/
            ctx2[4]
          );
        }
      },
      d(detaching) {
        if (detaching)
          detach(span);
        if (if_block)
          if_block.d();
        binding_group.r();
        mounted = false;
        dispose();
      }
    };
  }
  function create_if_block_12(ctx) {
    let iframe;
    let iframe_src_value;
    return {
      c() {
        iframe = element("iframe");
        set_style(iframe, "border", "none");
        attr(iframe, "class", "iframe svelte-q5fwfc");
        attr(iframe, "title", "wiki");
        if (!src_url_equal(iframe.src, iframe_src_value = /*src*/
        ctx[5]))
          attr(iframe, "src", iframe_src_value);
      },
      m(target, anchor) {
        insert(target, iframe, anchor);
      },
      p(ctx2, dirty) {
        if (dirty & /*src*/
        32 && !src_url_equal(iframe.src, iframe_src_value = /*src*/
        ctx2[5])) {
          attr(iframe, "src", iframe_src_value);
        }
      },
      d(detaching) {
        if (detaching)
          detach(iframe);
      }
    };
  }
  function create_fragment8(ctx) {
    let div;
    function select_block_type(ctx2, dirty) {
      if (
        /*entries*/
        ctx2[3].length
      )
        return create_if_block4;
      return create_else_block_2;
    }
    let current_block_type = select_block_type(ctx, -1);
    let if_block = current_block_type(ctx);
    return {
      c() {
        div = element("div");
        if_block.c();
        attr(div, "class", "dictpopup bodytext svelte-q5fwfc");
      },
      m(target, anchor) {
        insert(target, div, anchor);
        if_block.m(div, null);
      },
      p(ctx2, [dirty]) {
        if (current_block_type === (current_block_type = select_block_type(ctx2, dirty)) && if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block.d(1);
          if_block = current_block_type(ctx2);
          if (if_block) {
            if_block.c();
            if_block.m(div, null);
          }
        }
      },
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching)
          detach(div);
        if_block.d();
      }
    };
  }
  function instance9($$self, $$props, $$invalidate) {
    let $activePtk;
    component_subscribe($$self, activePtk, ($$value) => $$invalidate(15, $activePtk = $$value));
    let { entries = [], wikipedia, fgdzd, dfb } = $$props;
    let nentry = 0;
    let src = "", showing = "";
    const wikilink = (entry) => "https://zh.wikipedia.org/w/index.php?action=render&title=" + encodeURIComponent(entry);
    const onelinelink = (entry) => "https://buddhaspace.org/dict/index.php?keyword=" + encodeURIComponent(entry);
    const googlelink = (entry) => "https://www.google.com/search?q=" + encodeURIComponent(entry);
    const baidulink = (entry) => "https://www.baidu.com/s?wd=" + encodeURIComponent(entry);
    const setWikipedia = () => {
      if (!entries[nentry])
        $$invalidate(4, nentry = 0);
      const entry = entries[nentry][1];
      $$invalidate(6, showing = "wikipedia");
      $$invalidate(5, src = wikilink(entry));
    };
    const setOneline = () => {
      if (!entries[nentry])
        $$invalidate(4, nentry = 0);
      const entry = entries[nentry][1];
      $$invalidate(6, showing = "oneline");
      $$invalidate(5, src = onelinelink(entry));
    };
    const availableDict = (n) => {
      if (n >= entries.length) {
        n = 0;
      }
      if (!entries[n])
        return;
      const at = entries[n][2];
      const flag = usePtk($activePtk).columns.entries.dict[at];
      $$invalidate(0, wikipedia = flag & 1);
      $$invalidate(1, fgdzd = flag & 2);
      $$invalidate(2, dfb = flag & 4);
      if (fgdzd || dfb)
        setOneline();
      else if (wikipedia)
        setWikipedia();
    };
    const $$binding_groups = [[]];
    function input_change_handler() {
      nentry = this.__value;
      $$invalidate(4, nentry);
    }
    $$self.$$set = ($$props2) => {
      if ("entries" in $$props2)
        $$invalidate(3, entries = $$props2.entries);
      if ("wikipedia" in $$props2)
        $$invalidate(0, wikipedia = $$props2.wikipedia);
      if ("fgdzd" in $$props2)
        $$invalidate(1, fgdzd = $$props2.fgdzd);
      if ("dfb" in $$props2)
        $$invalidate(2, dfb = $$props2.dfb);
    };
    $$self.$$.update = () => {
      if ($$self.$$.dirty & /*nentry, entries*/
      24) {
        $:
          availableDict(nentry, entries);
      }
    };
    return [
      wikipedia,
      fgdzd,
      dfb,
      entries,
      nentry,
      src,
      showing,
      wikilink,
      onelinelink,
      googlelink,
      baidulink,
      setWikipedia,
      setOneline,
      input_change_handler,
      $$binding_groups
    ];
  }
  var Dictpopup = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance9, create_fragment8, safe_not_equal, {
        entries: 3,
        wikipedia: 0,
        fgdzd: 1,
        dfb: 2
      });
    }
  };
  var dictpopup_default = Dictpopup;

  // src/favoritebuttons.svelte
  function get_each_context5(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[7] = list[i][0];
    child_ctx[8] = list[i][1];
    return child_ctx;
  }
  function create_each_block5(ctx) {
    let span;
    let t_value = favortypes[
      /*favor*/
      ctx[8]
    ] + "";
    let t;
    let mounted;
    let dispose;
    function click_handler() {
      return (
        /*click_handler*/
        ctx[4](
          /*pb*/
          ctx[7]
        )
      );
    }
    return {
      c() {
        span = element("span");
        t = text(t_value);
        attr(span, "aria-hidden", "true");
      },
      m(target, anchor) {
        insert(target, span, anchor);
        append(span, t);
        if (!mounted) {
          dispose = listen(span, "click", click_handler);
          mounted = true;
        }
      },
      p(new_ctx, dirty) {
        ctx = new_ctx;
      },
      d(detaching) {
        if (detaching)
          detach(span);
        mounted = false;
        dispose();
      }
    };
  }
  function create_fragment9(ctx) {
    let each_1_anchor;
    let each_value = (
      /*favors*/
      ctx[0]
    );
    let each_blocks = [];
    for (let i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block5(get_each_context5(ctx, each_value, i));
    }
    return {
      c() {
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        each_1_anchor = empty();
      },
      m(target, anchor) {
        for (let i = 0; i < each_blocks.length; i += 1) {
          if (each_blocks[i]) {
            each_blocks[i].m(target, anchor);
          }
        }
        insert(target, each_1_anchor, anchor);
      },
      p(ctx2, [dirty]) {
        if (dirty & /*gofavor, favors, favortypes*/
        3) {
          each_value = /*favors*/
          ctx2[0];
          let i;
          for (i = 0; i < each_value.length; i += 1) {
            const child_ctx = get_each_context5(ctx2, each_value, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
            } else {
              each_blocks[i] = create_each_block5(child_ctx);
              each_blocks[i].c();
              each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
            }
          }
          for (; i < each_blocks.length; i += 1) {
            each_blocks[i].d(1);
          }
          each_blocks.length = each_value.length;
        }
      },
      i: noop,
      o: noop,
      d(detaching) {
        destroy_each(each_blocks, detaching);
        if (detaching)
          detach(each_1_anchor);
      }
    };
  }
  function instance10($$self, $$props, $$invalidate) {
    let $favorites;
    component_subscribe($$self, favorites, ($$value) => $$invalidate(5, $favorites = $$value));
    let { folioid } = $$props;
    let { closePopup } = $$props;
    let favors = [];
    const _favorites = $favorites[folioid];
    for (let i in _favorites) {
      if (_favorites[i])
        favors.push([parseInt(i), _favorites[i]]);
    }
    const gofavor = (pb2) => {
      loadFolio(folioid, () => {
        activepb.set(pb2);
      });
      closePopup();
    };
    const click_handler = (pb2) => gofavor(pb2);
    $$self.$$set = ($$props2) => {
      if ("folioid" in $$props2)
        $$invalidate(2, folioid = $$props2.folioid);
      if ("closePopup" in $$props2)
        $$invalidate(3, closePopup = $$props2.closePopup);
    };
    return [favors, gofavor, folioid, closePopup, click_handler];
  }
  var Favoritebuttons = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance10, create_fragment9, safe_not_equal, { folioid: 2, closePopup: 3 });
    }
  };
  var favoritebuttons_default = Favoritebuttons;

  // src/vip.js
  var viplist = {
    "FAWANG": {
      title: "\u6CD5\u738B\u8B1B\u5802",
      www: "http://fawang.com.tw/main1_0.htm"
    },
    "FAYUN": {
      title: "\u6CD5\u96F2\u5BFA",
      www: "https://dcm.org.tw/"
    },
    "TEST": {
      title: "\u6E2C\u8A66\u4EBA\u54E1",
      www: "https://nissaya.cn/"
    }
  };
  var getVip = (field) => {
    const obj = viplist[get_store_value(vip)] || {};
    return obj[field] || "";
  };

  // src/endmarker.svelte
  function create_if_block5(ctx) {
    let t0_value = _("\u516C\u773E\u7248\u672C") + "";
    let t0;
    let t1;
    return {
      c() {
        t0 = text(t0_value);
        t1 = text("\u203B\u203B");
      },
      m(target, anchor) {
        insert(target, t0, anchor);
        insert(target, t1, anchor);
      },
      p: noop,
      d(detaching) {
        if (detaching)
          detach(t0);
        if (detaching)
          detach(t1);
      }
    };
  }
  function create_fragment10(ctx) {
    let div;
    let t0;
    let a;
    let t1_value = getVip(
      "title",
      /*$vip*/
      ctx[0]
    ) + "";
    let t1;
    let a_href_value;
    let t2;
    let if_block = !/*$vip*/
    ctx[0] && create_if_block5(ctx);
    return {
      c() {
        div = element("div");
        t0 = text("\u203B");
        a = element("a");
        t1 = text(t1_value);
        t2 = text("\u203B\n");
        if (if_block)
          if_block.c();
        attr(a, "target", "_new");
        attr(a, "href", a_href_value = getVip("www"));
        attr(div, "class", "endmarker");
      },
      m(target, anchor) {
        insert(target, div, anchor);
        append(div, t0);
        append(div, a);
        append(a, t1);
        append(div, t2);
        if (if_block)
          if_block.m(div, null);
      },
      p(ctx2, [dirty]) {
        if (dirty & /*$vip*/
        1 && t1_value !== (t1_value = getVip(
          "title",
          /*$vip*/
          ctx2[0]
        ) + ""))
          set_data(t1, t1_value);
        if (!/*$vip*/
        ctx2[0]) {
          if (if_block) {
            if_block.p(ctx2, dirty);
          } else {
            if_block = create_if_block5(ctx2);
            if_block.c();
            if_block.m(div, null);
          }
        } else if (if_block) {
          if_block.d(1);
          if_block = null;
        }
      },
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching)
          detach(div);
        if (if_block)
          if_block.d();
      }
    };
  }
  function instance11($$self, $$props, $$invalidate) {
    let $vip;
    component_subscribe($$self, vip, ($$value) => $$invalidate(0, $vip = $$value));
    return [$vip];
  }
  var Endmarker = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance11, create_fragment10, safe_not_equal, {});
    }
  };
  var endmarker_default = Endmarker;

  // src/foliolist.svelte
  function get_each_context6(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[25] = list[i][0];
    child_ctx[26] = list[i][1];
    child_ctx[27] = list[i][2];
    return child_ctx;
  }
  function get_each_context_1(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[30] = list[i];
    return child_ctx;
  }
  function create_else_block3(ctx) {
    let div;
    let span;
    let t0;
    let t1;
    let t2;
    let mounted;
    let dispose;
    let if_block = (
      /*aptk*/
      ctx[1] == "ylz-vny" && create_if_block_23(ctx)
    );
    return {
      c() {
        div = element("div");
        span = element("span");
        t0 = text("\u5B89\u88DD ");
        t1 = text(
          /*downloadmessage*/
          ctx[2]
        );
        t2 = space();
        if (if_block)
          if_block.c();
        attr(span, "aria-hidden", "true");
        attr(span, "class", "clickable hyperlink");
        attr(div, "class", "bodytext");
      },
      m(target, anchor) {
        insert(target, div, anchor);
        append(div, span);
        append(span, t0);
        append(span, t1);
        append(div, t2);
        if (if_block)
          if_block.m(div, null);
        if (!mounted) {
          dispose = listen(
            span,
            "click",
            /*click_handler_6*/
            ctx[20]
          );
          mounted = true;
        }
      },
      p(ctx2, dirty) {
        if (dirty[0] & /*downloadmessage*/
        4)
          set_data(
            t1,
            /*downloadmessage*/
            ctx2[2]
          );
        if (
          /*aptk*/
          ctx2[1] == "ylz-vny"
        ) {
          if (if_block) {
            if_block.p(ctx2, dirty);
          } else {
            if_block = create_if_block_23(ctx2);
            if_block.c();
            if_block.m(div, null);
          }
        } else if (if_block) {
          if_block.d(1);
          if_block = null;
        }
      },
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching)
          detach(div);
        if (if_block)
          if_block.d();
        mounted = false;
        dispose();
      }
    };
  }
  function create_if_block6(ctx) {
    let each_1_anchor;
    let current;
    let each_value = (
      /*folios*/
      ctx[3]
    );
    let each_blocks = [];
    for (let i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block6(get_each_context6(ctx, each_value, i));
    }
    const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
      each_blocks[i] = null;
    });
    return {
      c() {
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        each_1_anchor = empty();
      },
      m(target, anchor) {
        for (let i = 0; i < each_blocks.length; i += 1) {
          if (each_blocks[i]) {
            each_blocks[i].m(target, anchor);
          }
        }
        insert(target, each_1_anchor, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        if (dirty[0] & /*$tosim, folios, getFolioId, aptk, closePopup, $folioincache, $activefolioid, selectfolio, getFolioName, $online, samesutra*/
        4091) {
          each_value = /*folios*/
          ctx2[3];
          let i;
          for (i = 0; i < each_value.length; i += 1) {
            const child_ctx = get_each_context6(ctx2, each_value, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
              transition_in(each_blocks[i], 1);
            } else {
              each_blocks[i] = create_each_block6(child_ctx);
              each_blocks[i].c();
              transition_in(each_blocks[i], 1);
              each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
            }
          }
          group_outros();
          for (i = each_value.length; i < each_blocks.length; i += 1) {
            out(i);
          }
          check_outros();
        }
      },
      i(local) {
        if (current)
          return;
        for (let i = 0; i < each_value.length; i += 1) {
          transition_in(each_blocks[i]);
        }
        current = true;
      },
      o(local) {
        each_blocks = each_blocks.filter(Boolean);
        for (let i = 0; i < each_blocks.length; i += 1) {
          transition_out(each_blocks[i]);
        }
        current = false;
      },
      d(detaching) {
        destroy_each(each_blocks, detaching);
        if (detaching)
          detach(each_1_anchor);
      }
    };
  }
  function create_if_block_23(ctx) {
    let br;
    let t_value = _("\u5305\u542B\u8072\u805E\u6212\u5F8B\uFF0C\u5728\u5BB6\u5C45\u58EB\u95B1\u8B80\u61C9\u6709\u5145\u4EFD\u7406\u7531\u3002") + "";
    let t;
    return {
      c() {
        br = element("br");
        t = text(t_value);
      },
      m(target, anchor) {
        insert(target, br, anchor);
        insert(target, t, anchor);
      },
      p: noop,
      d(detaching) {
        if (detaching)
          detach(br);
        if (detaching)
          detach(t);
      }
    };
  }
  function create_if_block_13(ctx) {
    let span;
    let t0_value = (
      /*getFolioName*/
      ctx[9](
        /*par*/
        ctx[30]
      ) + ""
    );
    let t0;
    let t1;
    let favoritebuttons;
    let current;
    let mounted;
    let dispose;
    function click_handler_5() {
      return (
        /*click_handler_5*/
        ctx[19](
          /*par*/
          ctx[30]
        )
      );
    }
    favoritebuttons = new favoritebuttons_default({
      props: {
        folioid: (
          /*getFolioId*/
          ctx[10](
            /*par*/
            ctx[30]
          )
        ),
        ptk: usePtk(
          /*aptk*/
          ctx[1]
        ),
        closePopup: (
          /*closePopup*/
          ctx[0]
        )
      }
    });
    return {
      c() {
        span = element("span");
        t0 = text(t0_value);
        t1 = space();
        create_component(favoritebuttons.$$.fragment);
        attr(span, "aria-hidden", "true");
        attr(span, "class", "parallelfolio");
        toggle_class(span, "dimmed", !/*$folioincache*/
        ctx[6][
          /*getFolioId*/
          ctx[10](
            /*par*/
            ctx[30]
          )
        ]);
        toggle_class(
          span,
          "selecteditem",
          /*$activefolioid*/
          ctx[7] == /*getFolioId*/
          ctx[10](
            /*par*/
            ctx[30]
          )
        );
      },
      m(target, anchor) {
        insert(target, span, anchor);
        append(span, t0);
        insert(target, t1, anchor);
        mount_component(favoritebuttons, target, anchor);
        current = true;
        if (!mounted) {
          dispose = listen(span, "click", click_handler_5);
          mounted = true;
        }
      },
      p(new_ctx, dirty) {
        ctx = new_ctx;
        if ((!current || dirty[0] & /*folios*/
        8) && t0_value !== (t0_value = /*getFolioName*/
        ctx[9](
          /*par*/
          ctx[30]
        ) + ""))
          set_data(t0, t0_value);
        if (!current || dirty[0] & /*$folioincache, getFolioId, folios*/
        1096) {
          toggle_class(span, "dimmed", !/*$folioincache*/
          ctx[6][
            /*getFolioId*/
            ctx[10](
              /*par*/
              ctx[30]
            )
          ]);
        }
        if (!current || dirty[0] & /*$activefolioid, getFolioId, folios*/
        1160) {
          toggle_class(
            span,
            "selecteditem",
            /*$activefolioid*/
            ctx[7] == /*getFolioId*/
            ctx[10](
              /*par*/
              ctx[30]
            )
          );
        }
        const favoritebuttons_changes = {};
        if (dirty[0] & /*folios*/
        8)
          favoritebuttons_changes.folioid = /*getFolioId*/
          ctx[10](
            /*par*/
            ctx[30]
          );
        if (dirty[0] & /*aptk*/
        2)
          favoritebuttons_changes.ptk = usePtk(
            /*aptk*/
            ctx[1]
          );
        if (dirty[0] & /*closePopup*/
        1)
          favoritebuttons_changes.closePopup = /*closePopup*/
          ctx[0];
        favoritebuttons.$set(favoritebuttons_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(favoritebuttons.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(favoritebuttons.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(span);
        if (detaching)
          detach(t1);
        destroy_component(favoritebuttons, detaching);
        mounted = false;
        dispose();
      }
    };
  }
  function create_each_block_1(ctx) {
    let show_if = (
      /*$folioincache*/
      ctx[6][
        /*getFolioId*/
        ctx[10](
          /*par*/
          ctx[30]
        )
      ] || /*$online*/
      ctx[5]
    );
    let if_block_anchor;
    let current;
    let if_block = show_if && create_if_block_13(ctx);
    return {
      c() {
        if (if_block)
          if_block.c();
        if_block_anchor = empty();
      },
      m(target, anchor) {
        if (if_block)
          if_block.m(target, anchor);
        insert(target, if_block_anchor, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        if (dirty[0] & /*$folioincache, folios, $online*/
        104)
          show_if = /*$folioincache*/
          ctx2[6][
            /*getFolioId*/
            ctx2[10](
              /*par*/
              ctx2[30]
            )
          ] || /*$online*/
          ctx2[5];
        if (show_if) {
          if (if_block) {
            if_block.p(ctx2, dirty);
            if (dirty[0] & /*$folioincache, folios, $online*/
            104) {
              transition_in(if_block, 1);
            }
          } else {
            if_block = create_if_block_13(ctx2);
            if_block.c();
            transition_in(if_block, 1);
            if_block.m(if_block_anchor.parentNode, if_block_anchor);
          }
        } else if (if_block) {
          group_outros();
          transition_out(if_block, 1, 1, () => {
            if_block = null;
          });
          check_outros();
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(if_block);
        current = true;
      },
      o(local) {
        transition_out(if_block);
        current = false;
      },
      d(detaching) {
        if (if_block)
          if_block.d(detaching);
        if (detaching)
          detach(if_block_anchor);
      }
    };
  }
  function create_key_block3(ctx) {
    let span;
    let t0_value = (
      /*getFolioName*/
      ctx[9](
        /*nfolio*/
        ctx[25]
      ) + ""
    );
    let t0;
    let t1;
    let favoritebuttons;
    let t2;
    let each_1_anchor;
    let current;
    let mounted;
    let dispose;
    function click_handler_4() {
      return (
        /*click_handler_4*/
        ctx[18](
          /*nfolio*/
          ctx[25]
        )
      );
    }
    favoritebuttons = new favoritebuttons_default({
      props: {
        ptk: usePtk(
          /*aptk*/
          ctx[1]
        ),
        folioid: (
          /*folioid*/
          ctx[26]
        ),
        closePopup: (
          /*closePopup*/
          ctx[0]
        )
      }
    });
    let each_value_1 = (
      /*pars*/
      ctx[27]
    );
    let each_blocks = [];
    for (let i = 0; i < each_value_1.length; i += 1) {
      each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
    }
    const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
      each_blocks[i] = null;
    });
    return {
      c() {
        span = element("span");
        t0 = text(t0_value);
        t1 = space();
        create_component(favoritebuttons.$$.fragment);
        t2 = space();
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        each_1_anchor = empty();
        attr(span, "aria-hidden", "true");
        toggle_class(span, "dimmed", !/*$folioincache*/
        ctx[6][
          /*folioid*/
          ctx[26]
        ]);
        toggle_class(
          span,
          "selecteditem",
          /*samesutra*/
          ctx[11](
            /*$activefolioid*/
            ctx[7],
            /*folioid*/
            ctx[26]
          )
        );
      },
      m(target, anchor) {
        insert(target, span, anchor);
        append(span, t0);
        insert(target, t1, anchor);
        mount_component(favoritebuttons, target, anchor);
        insert(target, t2, anchor);
        for (let i = 0; i < each_blocks.length; i += 1) {
          if (each_blocks[i]) {
            each_blocks[i].m(target, anchor);
          }
        }
        insert(target, each_1_anchor, anchor);
        current = true;
        if (!mounted) {
          dispose = listen(span, "click", click_handler_4);
          mounted = true;
        }
      },
      p(new_ctx, dirty) {
        ctx = new_ctx;
        if ((!current || dirty[0] & /*folios*/
        8) && t0_value !== (t0_value = /*getFolioName*/
        ctx[9](
          /*nfolio*/
          ctx[25]
        ) + ""))
          set_data(t0, t0_value);
        if (!current || dirty[0] & /*$folioincache, folios*/
        72) {
          toggle_class(span, "dimmed", !/*$folioincache*/
          ctx[6][
            /*folioid*/
            ctx[26]
          ]);
        }
        if (!current || dirty[0] & /*samesutra, $activefolioid, folios*/
        2184) {
          toggle_class(
            span,
            "selecteditem",
            /*samesutra*/
            ctx[11](
              /*$activefolioid*/
              ctx[7],
              /*folioid*/
              ctx[26]
            )
          );
        }
        const favoritebuttons_changes = {};
        if (dirty[0] & /*aptk*/
        2)
          favoritebuttons_changes.ptk = usePtk(
            /*aptk*/
            ctx[1]
          );
        if (dirty[0] & /*folios*/
        8)
          favoritebuttons_changes.folioid = /*folioid*/
          ctx[26];
        if (dirty[0] & /*closePopup*/
        1)
          favoritebuttons_changes.closePopup = /*closePopup*/
          ctx[0];
        favoritebuttons.$set(favoritebuttons_changes);
        if (dirty[0] & /*getFolioId, folios, aptk, closePopup, $folioincache, $activefolioid, selectfolio, getFolioName, $online*/
        2027) {
          each_value_1 = /*pars*/
          ctx[27];
          let i;
          for (i = 0; i < each_value_1.length; i += 1) {
            const child_ctx = get_each_context_1(ctx, each_value_1, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
              transition_in(each_blocks[i], 1);
            } else {
              each_blocks[i] = create_each_block_1(child_ctx);
              each_blocks[i].c();
              transition_in(each_blocks[i], 1);
              each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
            }
          }
          group_outros();
          for (i = each_value_1.length; i < each_blocks.length; i += 1) {
            out(i);
          }
          check_outros();
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(favoritebuttons.$$.fragment, local);
        for (let i = 0; i < each_value_1.length; i += 1) {
          transition_in(each_blocks[i]);
        }
        current = true;
      },
      o(local) {
        transition_out(favoritebuttons.$$.fragment, local);
        each_blocks = each_blocks.filter(Boolean);
        for (let i = 0; i < each_blocks.length; i += 1) {
          transition_out(each_blocks[i]);
        }
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(span);
        if (detaching)
          detach(t1);
        destroy_component(favoritebuttons, detaching);
        if (detaching)
          detach(t2);
        destroy_each(each_blocks, detaching);
        if (detaching)
          detach(each_1_anchor);
        mounted = false;
        dispose();
      }
    };
  }
  function create_each_block6(ctx) {
    let div;
    let previous_key = (
      /*$tosim*/
      ctx[4]
    );
    let t;
    let current;
    let key_block = create_key_block3(ctx);
    return {
      c() {
        div = element("div");
        key_block.c();
        t = space();
        attr(div, "class", "book");
      },
      m(target, anchor) {
        insert(target, div, anchor);
        key_block.m(div, null);
        append(div, t);
        current = true;
      },
      p(ctx2, dirty) {
        if (dirty[0] & /*$tosim*/
        16 && safe_not_equal(previous_key, previous_key = /*$tosim*/
        ctx2[4])) {
          group_outros();
          transition_out(key_block, 1, 1, noop);
          check_outros();
          key_block = create_key_block3(ctx2);
          key_block.c();
          transition_in(key_block, 1);
          key_block.m(div, t);
        } else {
          key_block.p(ctx2, dirty);
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(key_block);
        current = true;
      },
      o(local) {
        transition_out(key_block);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(div);
        key_block.d(detaching);
      }
    };
  }
  function create_fragment11(ctx) {
    let div0;
    let span0;
    let t1;
    let span1;
    let t3;
    let span2;
    let t4_value = _(
      "\u8072\u805E",
      /*$tosim*/
      ctx[4]
    ) + "";
    let t4;
    let t5;
    let span3;
    let t7;
    let current_block_type_index;
    let if_block;
    let t8;
    let div1;
    let endmarker;
    let current;
    let mounted;
    let dispose;
    const if_block_creators = [create_if_block6, create_else_block3];
    const if_blocks = [];
    function select_block_type(ctx2, dirty) {
      if (
        /*folios*/
        ctx2[3].length
      )
        return 0;
      return 1;
    }
    current_block_type_index = select_block_type(ctx, [-1, -1]);
    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    endmarker = new endmarker_default({});
    return {
      c() {
        div0 = element("div");
        span0 = element("span");
        span0.textContent = "\u552F\u540D";
        t1 = space();
        span1 = element("span");
        span1.textContent = "\u552F\u5FC3";
        t3 = space();
        span2 = element("span");
        t4 = text(t4_value);
        t5 = space();
        span3 = element("span");
        span3.textContent = "\u6212\u5F8B";
        t7 = space();
        if_block.c();
        t8 = space();
        div1 = element("div");
        create_component(endmarker.$$.fragment);
        attr(span0, "aria-hidden", "true");
        attr(span0, "class", "clickable");
        toggle_class(
          span0,
          "selected",
          /*aptk*/
          ctx[1] == "ylz-prjn"
        );
        attr(span1, "aria-hidden", "true");
        attr(span1, "class", "clickable");
        toggle_class(
          span1,
          "selected",
          /*aptk*/
          ctx[1] == "ylz-tg"
        );
        attr(span2, "aria-hidden", "true");
        attr(span2, "class", "clickable");
        toggle_class(
          span2,
          "selected",
          /*aptk*/
          ctx[1] == "ylz-svk"
        );
        attr(span3, "aria-hidden", "true");
        attr(span3, "class", "clickable");
        toggle_class(
          span3,
          "selected",
          /*aptk*/
          ctx[1] == "ylz-vny"
        );
        attr(div0, "class", "tabs");
        attr(div1, "class", "bodytext");
      },
      m(target, anchor) {
        insert(target, div0, anchor);
        append(div0, span0);
        append(div0, t1);
        append(div0, span1);
        append(div0, t3);
        append(div0, span2);
        append(span2, t4);
        append(div0, t5);
        append(div0, span3);
        insert(target, t7, anchor);
        if_blocks[current_block_type_index].m(target, anchor);
        insert(target, t8, anchor);
        insert(target, div1, anchor);
        mount_component(endmarker, div1, null);
        current = true;
        if (!mounted) {
          dispose = [
            listen(
              span0,
              "click",
              /*click_handler*/
              ctx[14]
            ),
            listen(
              span1,
              "click",
              /*click_handler_1*/
              ctx[15]
            ),
            listen(
              span2,
              "click",
              /*click_handler_2*/
              ctx[16]
            ),
            listen(
              span3,
              "click",
              /*click_handler_3*/
              ctx[17]
            )
          ];
          mounted = true;
        }
      },
      p(ctx2, dirty) {
        if (!current || dirty[0] & /*aptk*/
        2) {
          toggle_class(
            span0,
            "selected",
            /*aptk*/
            ctx2[1] == "ylz-prjn"
          );
        }
        if (!current || dirty[0] & /*aptk*/
        2) {
          toggle_class(
            span1,
            "selected",
            /*aptk*/
            ctx2[1] == "ylz-tg"
          );
        }
        if ((!current || dirty[0] & /*$tosim*/
        16) && t4_value !== (t4_value = _(
          "\u8072\u805E",
          /*$tosim*/
          ctx2[4]
        ) + ""))
          set_data(t4, t4_value);
        if (!current || dirty[0] & /*aptk*/
        2) {
          toggle_class(
            span2,
            "selected",
            /*aptk*/
            ctx2[1] == "ylz-svk"
          );
        }
        if (!current || dirty[0] & /*aptk*/
        2) {
          toggle_class(
            span3,
            "selected",
            /*aptk*/
            ctx2[1] == "ylz-vny"
          );
        }
        let previous_block_index = current_block_type_index;
        current_block_type_index = select_block_type(ctx2, dirty);
        if (current_block_type_index === previous_block_index) {
          if_blocks[current_block_type_index].p(ctx2, dirty);
        } else {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, () => {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
          if_block = if_blocks[current_block_type_index];
          if (!if_block) {
            if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
            if_block.c();
          } else {
            if_block.p(ctx2, dirty);
          }
          transition_in(if_block, 1);
          if_block.m(t8.parentNode, t8);
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(if_block);
        transition_in(endmarker.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(if_block);
        transition_out(endmarker.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(div0);
        if (detaching)
          detach(t7);
        if_blocks[current_block_type_index].d(detaching);
        if (detaching)
          detach(t8);
        if (detaching)
          detach(div1);
        destroy_component(endmarker);
        mounted = false;
        run_all(dispose);
      }
    };
  }
  function instance12($$self, $$props, $$invalidate) {
    let $tosim;
    let $online;
    let $folioincache;
    let $activefolioid;
    component_subscribe($$self, tosim, ($$value) => $$invalidate(4, $tosim = $$value));
    component_subscribe($$self, online, ($$value) => $$invalidate(5, $online = $$value));
    component_subscribe($$self, folioincache, ($$value) => $$invalidate(6, $folioincache = $$value));
    component_subscribe($$self, activefolioid, ($$value) => $$invalidate(7, $activefolioid = $$value));
    let { thetab } = $$props;
    let { closePopup = function() {
    } } = $$props;
    let aptk = "ylz-prjn", downloadmessage = "";
    let folios = [];
    const texttypeOf = (prefix) => {
      if (prefix.slice(0, 3) == "agm" || prefix == "lastword")
        return 1;
      if (prefix.slice(0, 5) == "vnybs")
        return 4;
      if (prefix.slice(0, 3) == "vny")
        return 3;
      return 2;
    };
    const openptk = async (name2) => {
      const res = await downloadToCache(CacheName, name2 + ".ptk", (msg) => {
        $$invalidate(2, downloadmessage = name2 + ".ptk " + msg);
      });
      const buf = await res.arrayBuffer();
      const ptk3 = await openPtk(name2, new Uint8Array(buf));
      return ptk3;
    };
    const getFolioList = async (aptk2) => {
      const cachedPtks = await ptkInCache();
      const at = cachedPtks.indexOf(aptk2);
      if (!~at) {
        $$invalidate(3, folios = []);
        return;
      }
      const ptk3 = await openptk(aptk2);
      const folio = ptk3.defines.folio;
      const out = [];
      for (let i = 0; i < folio.linepos.length; i++) {
        const id = folio.fields.id.values[i];
        const endingnumber = id.match(/(\d+)$/);
        const at2 = id.indexOf("_");
        const bkprefix = ~at2 ? id.slice(0, at2) : id;
        if (!~at2 && (!endingnumber || endingnumber[1] == "1")) {
          out.push([i, id, parallelFolios(ptk3, id)]);
        }
      }
      $$invalidate(3, folios = out);
    };
    const selectfolio = (nfolio) => {
      const folio = usePtk(aptk).defines.folio;
      const folioid = folio.fields.id.values[nfolio];
      activePtk.set(aptk);
      if ($folioincache[folioid] || $online) {
        stopAudio();
        loadFolio(folioid, function() {
          $$invalidate(13, thetab = "toc");
          activepb.set("1");
        });
        closePopup();
      }
    };
    const getFolioName = (nfolio) => {
      const folio = usePtk(aptk).defines.folio;
      return _(folio.innertext.get(nfolio), $tosim);
    };
    const getFolioId = (nfolio) => {
      const folio = usePtk(aptk).defines.folio;
      return folio.fields.id.values[nfolio];
    };
    const samesutra = (f1, f2) => {
      return f1.replace(/\d+$/, "") == f2.replace(/\d+$/, "");
    };
    let opening = false;
    const installptk = async (name2) => {
      if (opening)
        return;
      opening = true;
      $$invalidate(2, downloadmessage = "try to download " + name2 + ".ptk");
      await openptk(name2);
      opening = false;
      $$invalidate(2, downloadmessage = "");
      getFolioList(aptk);
      return ptk;
    };
    const click_handler = () => $$invalidate(1, aptk = "ylz-prjn");
    const click_handler_1 = () => $$invalidate(1, aptk = "ylz-tg");
    const click_handler_2 = () => $$invalidate(1, aptk = "ylz-svk");
    const click_handler_3 = () => $$invalidate(1, aptk = "ylz-vny");
    const click_handler_4 = (nfolio) => selectfolio(nfolio);
    const click_handler_5 = (par) => selectfolio(par);
    const click_handler_6 = () => installptk(aptk);
    $$self.$$set = ($$props2) => {
      if ("thetab" in $$props2)
        $$invalidate(13, thetab = $$props2.thetab);
      if ("closePopup" in $$props2)
        $$invalidate(0, closePopup = $$props2.closePopup);
    };
    $$self.$$.update = () => {
      if ($$self.$$.dirty[0] & /*aptk*/
      2) {
        $:
          getFolioList(aptk);
      }
    };
    return [
      closePopup,
      aptk,
      downloadmessage,
      folios,
      $tosim,
      $online,
      $folioincache,
      $activefolioid,
      selectfolio,
      getFolioName,
      getFolioId,
      samesutra,
      installptk,
      thetab,
      click_handler,
      click_handler_1,
      click_handler_2,
      click_handler_3,
      click_handler_4,
      click_handler_5,
      click_handler_6
    ];
  }
  var Foliolist = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance12, create_fragment11, safe_not_equal, { thetab: 13, closePopup: 0 }, null, [-1, -1]);
    }
  };
  var foliolist_default = Foliolist;

  // src/3rd/slider.js
  function handle(node) {
    const onDown = getOnDown(node);
    node.addEventListener("touchstart", onDown);
    node.addEventListener("mousedown", onDown);
    return {
      destroy() {
        node.removeEventListener("touchstart", onDown);
        node.removeEventListener("mousedown", onDown);
      }
    };
  }
  function getOnDown(node) {
    const onMove = getOnMove(node);
    return function(e) {
      e.preventDefault();
      node.dispatchEvent(new CustomEvent("dragstart"));
      const moveevent = "touches" in e ? "touchmove" : "mousemove";
      const upevent = "touches" in e ? "touchend" : "mouseup";
      document.addEventListener(moveevent, onMove);
      document.addEventListener(upevent, onUp);
      function onUp(e2) {
        e2.stopPropagation();
        document.removeEventListener(moveevent, onMove);
        document.removeEventListener(upevent, onUp);
        node.dispatchEvent(new CustomEvent("dragend"));
      }
      ;
    };
  }
  function getOnMove(node) {
    const track = node.parentNode;
    return function(e) {
      const { left, width } = track.getBoundingClientRect();
      const clickOffset = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clickPos = Math.min(Math.max((clickOffset - left) / width, 0), 1) || 0;
      node.dispatchEvent(new CustomEvent("drag", { detail: clickPos }));
    };
  }

  // src/3rd/thumb.svelte
  function create_fragment12(ctx) {
    let div1;
    let div0;
    let div1_style_value;
    let handle_action;
    let current;
    let mounted;
    let dispose;
    const default_slot_template = (
      /*#slots*/
      ctx[4].default
    );
    const default_slot = create_slot(
      default_slot_template,
      ctx,
      /*$$scope*/
      ctx[3],
      null
    );
    return {
      c() {
        div1 = element("div");
        div0 = element("div");
        if (default_slot)
          default_slot.c();
        attr(div0, "class", "thumb-content svelte-8w8x88");
        toggle_class(
          div0,
          "active",
          /*active*/
          ctx[1]
        );
        attr(div1, "class", "thumb svelte-8w8x88");
        attr(div1, "style", div1_style_value = `left: ${/*pos*/
        ctx[0] * 100}%;`);
      },
      m(target, anchor) {
        insert(target, div1, anchor);
        append(div1, div0);
        if (default_slot) {
          default_slot.m(div0, null);
        }
        current = true;
        if (!mounted) {
          dispose = [
            action_destroyer(handle_action = handle.call(null, div1)),
            listen(
              div1,
              "dragstart",
              /*dragstart_handler*/
              ctx[5]
            ),
            listen(
              div1,
              "drag",
              /*drag_handler*/
              ctx[6]
            ),
            listen(
              div1,
              "dragend",
              /*dragend_handler*/
              ctx[7]
            )
          ];
          mounted = true;
        }
      },
      p(ctx2, [dirty]) {
        if (default_slot) {
          if (default_slot.p && (!current || dirty & /*$$scope*/
          8)) {
            update_slot_base(
              default_slot,
              default_slot_template,
              ctx2,
              /*$$scope*/
              ctx2[3],
              !current ? get_all_dirty_from_scope(
                /*$$scope*/
                ctx2[3]
              ) : get_slot_changes(
                default_slot_template,
                /*$$scope*/
                ctx2[3],
                dirty,
                null
              ),
              null
            );
          }
        }
        if (!current || dirty & /*active*/
        2) {
          toggle_class(
            div0,
            "active",
            /*active*/
            ctx2[1]
          );
        }
        if (!current || dirty & /*pos*/
        1 && div1_style_value !== (div1_style_value = `left: ${/*pos*/
        ctx2[0] * 100}%;`)) {
          attr(div1, "style", div1_style_value);
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(default_slot, local);
        current = true;
      },
      o(local) {
        transition_out(default_slot, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(div1);
        if (default_slot)
          default_slot.d(detaching);
        mounted = false;
        run_all(dispose);
      }
    };
  }
  function instance13($$self, $$props, $$invalidate) {
    let { $$slots: slots = {}, $$scope } = $$props;
    const dispatch = createEventDispatcher();
    let active;
    let { pos } = $$props;
    const dragstart_handler = () => ($$invalidate(1, active = true), dispatch("active", true));
    const drag_handler = ({ detail: v }) => $$invalidate(0, pos = v);
    const dragend_handler = () => ($$invalidate(1, active = false), dispatch("active", false));
    $$self.$$set = ($$props2) => {
      if ("pos" in $$props2)
        $$invalidate(0, pos = $$props2.pos);
      if ("$$scope" in $$props2)
        $$invalidate(3, $$scope = $$props2.$$scope);
    };
    return [
      pos,
      active,
      dispatch,
      $$scope,
      slots,
      dragstart_handler,
      drag_handler,
      dragend_handler
    ];
  }
  var Thumb = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance13, create_fragment12, safe_not_equal, { pos: 0 });
    }
  };
  var thumb_default = Thumb;

  // src/3rd/rangeslider.svelte
  var get_caption_slot_changes = (dirty) => ({});
  var get_caption_slot_context = (ctx) => ({});
  var get_left_slot_changes = (dirty) => ({});
  var get_left_slot_context = (ctx) => ({});
  function fallback_block_1(ctx) {
    let div;
    return {
      c() {
        div = element("div");
        attr(div, "class", "thumb svelte-giohkn");
      },
      m(target, anchor) {
        insert(target, div, anchor);
      },
      p: noop,
      d(detaching) {
        if (detaching)
          detach(div);
      }
    };
  }
  function fallback_block(ctx) {
    let current;
    const default_slot_template = (
      /*#slots*/
      ctx[11].default
    );
    const default_slot = create_slot(
      default_slot_template,
      ctx,
      /*$$scope*/
      ctx[14],
      null
    );
    const default_slot_or_fallback = default_slot || fallback_block_1(ctx);
    return {
      c() {
        if (default_slot_or_fallback)
          default_slot_or_fallback.c();
      },
      m(target, anchor) {
        if (default_slot_or_fallback) {
          default_slot_or_fallback.m(target, anchor);
        }
        current = true;
      },
      p(ctx2, dirty) {
        if (default_slot) {
          if (default_slot.p && (!current || dirty & /*$$scope*/
          16384)) {
            update_slot_base(
              default_slot,
              default_slot_template,
              ctx2,
              /*$$scope*/
              ctx2[14],
              !current ? get_all_dirty_from_scope(
                /*$$scope*/
                ctx2[14]
              ) : get_slot_changes(
                default_slot_template,
                /*$$scope*/
                ctx2[14],
                dirty,
                null
              ),
              null
            );
          }
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(default_slot_or_fallback, local);
        current = true;
      },
      o(local) {
        transition_out(default_slot_or_fallback, local);
        current = false;
      },
      d(detaching) {
        if (default_slot_or_fallback)
          default_slot_or_fallback.d(detaching);
      }
    };
  }
  function create_default_slot2(ctx) {
    let current;
    const left_slot_template = (
      /*#slots*/
      ctx[11].left
    );
    const left_slot = create_slot(
      left_slot_template,
      ctx,
      /*$$scope*/
      ctx[14],
      get_left_slot_context
    );
    const left_slot_or_fallback = left_slot || fallback_block(ctx);
    return {
      c() {
        if (left_slot_or_fallback)
          left_slot_or_fallback.c();
      },
      m(target, anchor) {
        if (left_slot_or_fallback) {
          left_slot_or_fallback.m(target, anchor);
        }
        current = true;
      },
      p(ctx2, dirty) {
        if (left_slot) {
          if (left_slot.p && (!current || dirty & /*$$scope*/
          16384)) {
            update_slot_base(
              left_slot,
              left_slot_template,
              ctx2,
              /*$$scope*/
              ctx2[14],
              !current ? get_all_dirty_from_scope(
                /*$$scope*/
                ctx2[14]
              ) : get_slot_changes(
                left_slot_template,
                /*$$scope*/
                ctx2[14],
                dirty,
                get_left_slot_changes
              ),
              get_left_slot_context
            );
          }
        } else {
          if (left_slot_or_fallback && left_slot_or_fallback.p && (!current || dirty & /*$$scope*/
          16384)) {
            left_slot_or_fallback.p(ctx2, !current ? -1 : dirty);
          }
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(left_slot_or_fallback, local);
        current = true;
      },
      o(local) {
        transition_out(left_slot_or_fallback, local);
        current = false;
      },
      d(detaching) {
        if (left_slot_or_fallback)
          left_slot_or_fallback.d(detaching);
      }
    };
  }
  function create_fragment13(ctx) {
    let div2;
    let input;
    let input_value_value;
    let input_name_value;
    let t0;
    let div1;
    let div0;
    let t1;
    let thumb;
    let updating_pos;
    let t2;
    let current;
    let mounted;
    let dispose;
    function thumb_pos_binding(value) {
      ctx[12](value);
    }
    let thumb_props = {
      $$slots: { default: [create_default_slot2] },
      $$scope: { ctx }
    };
    if (
      /*pos*/
      ctx[2][0] !== void 0
    ) {
      thumb_props.pos = /*pos*/
      ctx[2][0];
    }
    thumb = new thumb_default({ props: thumb_props });
    binding_callbacks.push(() => bind(thumb, "pos", thumb_pos_binding));
    thumb.$on(
      "active",
      /*active_handler*/
      ctx[13]
    );
    const caption_slot_template = (
      /*#slots*/
      ctx[11].caption
    );
    const caption_slot = create_slot(
      caption_slot_template,
      ctx,
      /*$$scope*/
      ctx[14],
      get_caption_slot_context
    );
    return {
      c() {
        div2 = element("div");
        input = element("input");
        t0 = space();
        div1 = element("div");
        div0 = element("div");
        t1 = space();
        create_component(thumb.$$.fragment);
        t2 = space();
        if (caption_slot)
          caption_slot.c();
        attr(input, "type", "number");
        input.value = input_value_value = /*value*/
        ctx[0][0];
        attr(input, "name", input_name_value = /*name*/
        ctx[1][0]);
        attr(input, "class", "svelte-giohkn");
        attr(div0, "class", "progress svelte-giohkn");
        attr(
          div0,
          "style",
          /*progress*/
          ctx[4]
        );
        attr(div1, "aria-hidden", "true");
        attr(div1, "class", "track svelte-giohkn");
      },
      m(target, anchor) {
        insert(target, div2, anchor);
        append(div2, input);
        append(div2, t0);
        append(div2, div1);
        append(div1, div0);
        append(div1, t1);
        mount_component(thumb, div1, null);
        append(div1, t2);
        if (caption_slot) {
          caption_slot.m(div1, null);
        }
        current = true;
        if (!mounted) {
          dispose = listen(
            div1,
            "click",
            /*adjust*/
            ctx[5]
          );
          mounted = true;
        }
      },
      p(ctx2, [dirty]) {
        if (!current || dirty & /*value*/
        1 && input_value_value !== (input_value_value = /*value*/
        ctx2[0][0]) && input.value !== input_value_value) {
          input.value = input_value_value;
        }
        if (!current || dirty & /*name*/
        2 && input_name_value !== (input_name_value = /*name*/
        ctx2[1][0])) {
          attr(input, "name", input_name_value);
        }
        if (!current || dirty & /*progress*/
        16) {
          attr(
            div0,
            "style",
            /*progress*/
            ctx2[4]
          );
        }
        const thumb_changes = {};
        if (dirty & /*$$scope*/
        16384) {
          thumb_changes.$$scope = { dirty, ctx: ctx2 };
        }
        if (!updating_pos && dirty & /*pos*/
        4) {
          updating_pos = true;
          thumb_changes.pos = /*pos*/
          ctx2[2][0];
          add_flush_callback(() => updating_pos = false);
        }
        thumb.$set(thumb_changes);
        if (caption_slot) {
          if (caption_slot.p && (!current || dirty & /*$$scope*/
          16384)) {
            update_slot_base(
              caption_slot,
              caption_slot_template,
              ctx2,
              /*$$scope*/
              ctx2[14],
              !current ? get_all_dirty_from_scope(
                /*$$scope*/
                ctx2[14]
              ) : get_slot_changes(
                caption_slot_template,
                /*$$scope*/
                ctx2[14],
                dirty,
                get_caption_slot_changes
              ),
              get_caption_slot_context
            );
          }
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(thumb.$$.fragment, local);
        transition_in(caption_slot, local);
        current = true;
      },
      o(local) {
        transition_out(thumb.$$.fragment, local);
        transition_out(caption_slot, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(div2);
        destroy_component(thumb);
        if (caption_slot)
          caption_slot.d(detaching);
        mounted = false;
        dispose();
      }
    };
  }
  function checkPos(pos) {
    return [Math.min(...pos), Math.max(...pos)];
  }
  function instance14($$self, $$props, $$invalidate) {
    let progress;
    let { $$slots: slots = {}, $$scope } = $$props;
    const dispatch = createEventDispatcher();
    let { name: name2 = [] } = $$props;
    let { range = false } = $$props;
    let { min = 0 } = $$props;
    let { max = 100 } = $$props;
    let { step = 1 } = $$props;
    let { value = [min, max] } = $$props;
    let pos = [0, 0];
    let active = false;
    let { order = false } = $$props;
    function setValue(pos2) {
      console.log("setvalue", pos2);
      if (!pos2 || pos2.length !== 2 || !Array.isArray(pos2)) {
        pos2 = [min, max];
      }
      const offset = min % step;
      const width = max - min;
      $$invalidate(0, value = pos2.map((v) => min + v * width).map((v) => Math.round((v - offset) / step) * step + offset));
      dispatch("input", value);
    }
    function setPos(value2) {
      if (!value2 || value2.length !== 2 || !Array.isArray(value2)) {
        value2 = [min, max];
      }
      $$invalidate(2, pos = value2.map((v) => Math.min(Math.max(v, min), max)).map((v) => (v - min) / (max - min)));
    }
    function clamp() {
      setPos(value);
      setValue(pos);
    }
    function adjust(e) {
      if (e.target.classList[0] == "progress") {
        setPos([(value[0] || min) - step, value[1]]);
        setValue(pos);
      } else if (e.target.classList[0] == "track") {
        setPos([(value[0] || min) + step, value[1]]);
        setValue(pos);
      }
    }
    function thumb_pos_binding(value2) {
      if ($$self.$$.not_equal(pos[0], value2)) {
        pos[0] = value2;
        $$invalidate(2, pos), $$invalidate(6, range), $$invalidate(10, order), $$invalidate(3, active);
      }
    }
    const active_handler = ({ detail: v }) => $$invalidate(3, active = v);
    $$self.$$set = ($$props2) => {
      if ("name" in $$props2)
        $$invalidate(1, name2 = $$props2.name);
      if ("range" in $$props2)
        $$invalidate(6, range = $$props2.range);
      if ("min" in $$props2)
        $$invalidate(7, min = $$props2.min);
      if ("max" in $$props2)
        $$invalidate(8, max = $$props2.max);
      if ("step" in $$props2)
        $$invalidate(9, step = $$props2.step);
      if ("value" in $$props2)
        $$invalidate(0, value = $$props2.value);
      if ("order" in $$props2)
        $$invalidate(10, order = $$props2.order);
      if ("$$scope" in $$props2)
        $$invalidate(14, $$scope = $$props2.$$scope);
    };
    $$self.$$.update = () => {
      if ($$self.$$.dirty & /*range, order, active, pos*/
      1100) {
        $:
          if (range && order && active)
            $$invalidate(2, pos = checkPos(pos));
      }
      if ($$self.$$.dirty & /*active, pos*/
      12) {
        $:
          if (active)
            setValue(pos);
      }
      if ($$self.$$.dirty & /*active, value*/
      9) {
        $:
          if (!active)
            setPos(value);
      }
      if ($$self.$$.dirty & /*range, pos*/
      68) {
        $:
          $$invalidate(4, progress = `
    left: ${range ? Math.min(pos[0], pos[1]) * 100 : 0}%;
    right: ${100 - Math.max(pos[0], range ? pos[1] : pos[0]) * 100 || 100}%;
  `);
      }
    };
    return [
      value,
      name2,
      pos,
      active,
      progress,
      adjust,
      range,
      min,
      max,
      step,
      order,
      slots,
      thumb_pos_binding,
      active_handler,
      $$scope
    ];
  }
  var Rangeslider = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance14, create_fragment13, safe_not_equal, {
        name: 1,
        range: 6,
        min: 7,
        max: 8,
        step: 9,
        value: 0,
        order: 10
      });
    }
  };
  var rangeslider_default = Rangeslider;

  // src/3rd/switch.svelte
  function get_each_context7(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[9] = list[i];
    return child_ctx;
  }
  function create_else_block4(ctx) {
    let span2;
    let span1;
    let span0;
    let t0;
    let span0_id_value;
    let t1;
    let span1_aria_labelledby_value;
    let span1_id_value;
    let each_value = (
      /*options*/
      ctx[3]
    );
    let each_blocks = [];
    for (let i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block7(get_each_context7(ctx, each_value, i));
    }
    return {
      c() {
        span2 = element("span");
        span1 = element("span");
        span0 = element("span");
        t0 = text(
          /*label*/
          ctx[1]
        );
        t1 = space();
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        attr(span0, "class", "legend");
        attr(span0, "id", span0_id_value = `label-${/*uniqueID*/
        ctx[5]}`);
        attr(span1, "role", "radiogroup");
        attr(span1, "class", "group-container svelte-jwpg1d");
        attr(span1, "aria-labelledby", span1_aria_labelledby_value = `label-${/*uniqueID*/
        ctx[5]}`);
        attr(span1, "id", span1_id_value = `group-${/*uniqueID*/
        ctx[5]}`);
        attr(span2, "class", "s s--multi svelte-jwpg1d");
      },
      m(target, anchor) {
        insert(target, span2, anchor);
        append(span2, span1);
        append(span1, span0);
        append(span0, t0);
        append(span1, t1);
        for (let i = 0; i < each_blocks.length; i += 1) {
          if (each_blocks[i]) {
            each_blocks[i].m(span1, null);
          }
        }
      },
      p(ctx2, dirty) {
        if (dirty & /*label*/
        2)
          set_data(
            t0,
            /*label*/
            ctx2[1]
          );
        if (dirty & /*options, uniqueID, value*/
        41) {
          each_value = /*options*/
          ctx2[3];
          let i;
          for (i = 0; i < each_value.length; i += 1) {
            const child_ctx = get_each_context7(ctx2, each_value, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
            } else {
              each_blocks[i] = create_each_block7(child_ctx);
              each_blocks[i].c();
              each_blocks[i].m(span1, null);
            }
          }
          for (; i < each_blocks.length; i += 1) {
            each_blocks[i].d(1);
          }
          each_blocks.length = each_value.length;
        }
      },
      d(detaching) {
        if (detaching)
          detach(span2);
        destroy_each(each_blocks, detaching);
      }
    };
  }
  function create_if_block_14(ctx) {
    let span1;
    let span0;
    let t0;
    let span0_id_value;
    let t1;
    let button;
    let button_aria_labelledby_value;
    let mounted;
    let dispose;
    return {
      c() {
        span1 = element("span");
        span0 = element("span");
        t0 = text(
          /*label*/
          ctx[1]
        );
        t1 = space();
        button = element("button");
        attr(span0, "id", span0_id_value = `switch-${/*uniqueID*/
        ctx[5]}`);
        attr(button, "role", "switch");
        attr(
          button,
          "aria-checked",
          /*checked*/
          ctx[4]
        );
        attr(button, "aria-labelledby", button_aria_labelledby_value = `switch-${/*uniqueID*/
        ctx[5]}`);
        attr(button, "class", "svelte-jwpg1d");
        attr(span1, "class", "s s--slider svelte-jwpg1d");
      },
      m(target, anchor) {
        insert(target, span1, anchor);
        append(span1, span0);
        append(span0, t0);
        append(span1, t1);
        append(span1, button);
        if (!mounted) {
          dispose = listen(
            button,
            "click",
            /*handleClick*/
            ctx[6]
          );
          mounted = true;
        }
      },
      p(ctx2, dirty) {
        if (dirty & /*label*/
        2)
          set_data(
            t0,
            /*label*/
            ctx2[1]
          );
        if (dirty & /*checked*/
        16) {
          attr(
            button,
            "aria-checked",
            /*checked*/
            ctx2[4]
          );
        }
      },
      d(detaching) {
        if (detaching)
          detach(span1);
        mounted = false;
        dispose();
      }
    };
  }
  function create_if_block7(ctx) {
    let div;
    let span0;
    let t0;
    let span0_id_value;
    let t1;
    let button;
    let span1;
    let t3;
    let span2;
    let button_aria_labelledby_value;
    let mounted;
    let dispose;
    return {
      c() {
        div = element("div");
        span0 = element("span");
        t0 = text(
          /*label*/
          ctx[1]
        );
        t1 = space();
        button = element("button");
        span1 = element("span");
        span1.textContent = "on";
        t3 = space();
        span2 = element("span");
        span2.textContent = "off";
        attr(span0, "id", span0_id_value = `switch-${/*uniqueID*/
        ctx[5]}`);
        attr(span0, "class", "svelte-jwpg1d");
        attr(span1, "class", "svelte-jwpg1d");
        attr(span2, "class", "svelte-jwpg1d");
        attr(button, "role", "switch");
        attr(
          button,
          "aria-checked",
          /*checked*/
          ctx[4]
        );
        attr(button, "aria-labelledby", button_aria_labelledby_value = `switch-${/*uniqueID*/
        ctx[5]}`);
        attr(button, "class", "svelte-jwpg1d");
        attr(div, "class", "s s--inner svelte-jwpg1d");
      },
      m(target, anchor) {
        insert(target, div, anchor);
        append(div, span0);
        append(span0, t0);
        append(div, t1);
        append(div, button);
        append(button, span1);
        append(button, t3);
        append(button, span2);
        if (!mounted) {
          dispose = listen(
            button,
            "click",
            /*handleClick*/
            ctx[6]
          );
          mounted = true;
        }
      },
      p(ctx2, dirty) {
        if (dirty & /*label*/
        2)
          set_data(
            t0,
            /*label*/
            ctx2[1]
          );
        if (dirty & /*checked*/
        16) {
          attr(
            button,
            "aria-checked",
            /*checked*/
            ctx2[4]
          );
        }
      },
      d(detaching) {
        if (detaching)
          detach(div);
        mounted = false;
        dispose();
      }
    };
  }
  function create_each_block7(ctx) {
    let input;
    let input_id_value;
    let input_value_value;
    let value_has_changed = false;
    let t0;
    let label_1;
    let t1_value = (
      /*option*/
      ctx[9] + ""
    );
    let t1;
    let t2;
    let label_1_for_value;
    let binding_group;
    let mounted;
    let dispose;
    binding_group = init_binding_group(
      /*$$binding_groups*/
      ctx[8][0]
    );
    return {
      c() {
        input = element("input");
        t0 = space();
        label_1 = element("label");
        t1 = text(t1_value);
        t2 = space();
        attr(input, "type", "radio");
        attr(input, "id", input_id_value = `${/*option*/
        ctx[9]}-${/*uniqueID*/
        ctx[5]}`);
        input.__value = input_value_value = /*option*/
        ctx[9];
        input.value = input.__value;
        attr(input, "class", "svelte-jwpg1d");
        attr(label_1, "for", label_1_for_value = `${/*option*/
        ctx[9]}-${/*uniqueID*/
        ctx[5]}`);
        attr(label_1, "class", "svelte-jwpg1d");
        binding_group.p(input);
      },
      m(target, anchor) {
        insert(target, input, anchor);
        input.checked = input.__value === /*value*/
        ctx[0];
        insert(target, t0, anchor);
        insert(target, label_1, anchor);
        append(label_1, t1);
        append(label_1, t2);
        if (!mounted) {
          dispose = listen(
            input,
            "change",
            /*input_change_handler*/
            ctx[7]
          );
          mounted = true;
        }
      },
      p(ctx2, dirty) {
        if (dirty & /*options*/
        8 && input_id_value !== (input_id_value = `${/*option*/
        ctx2[9]}-${/*uniqueID*/
        ctx2[5]}`)) {
          attr(input, "id", input_id_value);
        }
        if (dirty & /*options*/
        8 && input_value_value !== (input_value_value = /*option*/
        ctx2[9])) {
          input.__value = input_value_value;
          input.value = input.__value;
          value_has_changed = true;
        }
        if (value_has_changed || dirty & /*value, options*/
        9) {
          input.checked = input.__value === /*value*/
          ctx2[0];
        }
        if (dirty & /*options*/
        8 && t1_value !== (t1_value = /*option*/
        ctx2[9] + ""))
          set_data(t1, t1_value);
        if (dirty & /*options*/
        8 && label_1_for_value !== (label_1_for_value = `${/*option*/
        ctx2[9]}-${/*uniqueID*/
        ctx2[5]}`)) {
          attr(label_1, "for", label_1_for_value);
        }
      },
      d(detaching) {
        if (detaching)
          detach(input);
        if (detaching)
          detach(t0);
        if (detaching)
          detach(label_1);
        binding_group.r();
        mounted = false;
        dispose();
      }
    };
  }
  function create_fragment14(ctx) {
    let if_block_anchor;
    function select_block_type(ctx2, dirty) {
      if (
        /*design*/
        ctx2[2] == "inner"
      )
        return create_if_block7;
      if (
        /*design*/
        ctx2[2] == "slider"
      )
        return create_if_block_14;
      return create_else_block4;
    }
    let current_block_type = select_block_type(ctx, -1);
    let if_block = current_block_type(ctx);
    return {
      c() {
        if_block.c();
        if_block_anchor = empty();
      },
      m(target, anchor) {
        if_block.m(target, anchor);
        insert(target, if_block_anchor, anchor);
      },
      p(ctx2, [dirty]) {
        if (current_block_type === (current_block_type = select_block_type(ctx2, dirty)) && if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block.d(1);
          if_block = current_block_type(ctx2);
          if (if_block) {
            if_block.c();
            if_block.m(if_block_anchor.parentNode, if_block_anchor);
          }
        }
      },
      i: noop,
      o: noop,
      d(detaching) {
        if_block.d(detaching);
        if (detaching)
          detach(if_block_anchor);
      }
    };
  }
  function instance15($$self, $$props, $$invalidate) {
    let { label } = $$props;
    let { design = "inner label" } = $$props;
    let { options = [] } = $$props;
    let { value = "on" } = $$props;
    let checked = value == "on";
    const uniqueID = Math.floor(Math.random() * 100);
    function handleClick(event) {
      const target = event.target;
      const state = target.getAttribute("aria-checked");
      $$invalidate(4, checked = state === "true" ? false : true);
      $$invalidate(0, value = checked === true ? "on" : "off");
    }
    const $$binding_groups = [[]];
    function input_change_handler() {
      value = this.__value;
      $$invalidate(0, value);
    }
    $$self.$$set = ($$props2) => {
      if ("label" in $$props2)
        $$invalidate(1, label = $$props2.label);
      if ("design" in $$props2)
        $$invalidate(2, design = $$props2.design);
      if ("options" in $$props2)
        $$invalidate(3, options = $$props2.options);
      if ("value" in $$props2)
        $$invalidate(0, value = $$props2.value);
    };
    return [
      value,
      label,
      design,
      options,
      checked,
      uniqueID,
      handleClick,
      input_change_handler,
      $$binding_groups
    ];
  }
  var Switch = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance15, create_fragment14, safe_not_equal, {
        label: 1,
        design: 2,
        options: 3,
        value: 0
      });
    }
  };
  var switch_default = Switch;

  // src/icons.js
  var downloadicon = `<svg width="32px" height="32px" viewBox="0 0 24 24" fill="none"><path d="M12 16L12 8" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 13L11.913 15.913V15.913C11.961 15.961 12.039 15.961 12.087 15.913V15.913L15 13" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 15L3 16L3 19C3 20.1046 3.89543 21 5 21L19 21C20.1046 21 21 20.1046 21 19L21 16L21 15" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  var youtubeicon = `<svg style="margin-bottom:-0.2em" height="4vh" width="4vh" viewBox="0 0 461.001 461.001"><g><path style="fill:#F61C0D;" d="M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z"/></g></svg>`;

  // src/audio.svelte
  function get_each_context8(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[38] = list[i];
    child_ctx[40] = i;
    return child_ctx;
  }
  function create_if_block_7(ctx) {
    let span;
    let mounted;
    let dispose;
    return {
      c() {
        span = element("span");
        attr(span, "aria-hidden", "true");
      },
      m(target, anchor) {
        insert(target, span, anchor);
        span.innerHTML = youtubeicon;
        if (!mounted) {
          dispose = listen(span, "click", function() {
            if (is_function(
              /*goyoutube*/
              ctx[18](
                /*media*/
                ctx[38].youtube
              )
            ))
              ctx[18](
                /*media*/
                ctx[38].youtube
              ).apply(this, arguments);
          });
          mounted = true;
        }
      },
      p(new_ctx, dirty) {
        ctx = new_ctx;
      },
      d(detaching) {
        if (detaching)
          detach(span);
        mounted = false;
        dispose();
      }
    };
  }
  function create_if_block_43(ctx) {
    let span0;
    let t0_value = _(
      /*media*/
      ctx[38].performer
    ) + " ";
    let t0;
    let span1;
    let t1;
    let t2;
    let t3;
    let br;
    let mounted;
    let dispose;
    function click_handler_1() {
      return (
        /*click_handler_1*/
        ctx[23](
          /*media*/
          ctx[38]
        )
      );
    }
    let if_block0 = (
      /*downloading*/
      ctx[5] == /*media*/
      ctx[38].aid && create_if_block_63(ctx)
    );
    let if_block1 = (
      /*$audioid*/
      ctx[0] == /*media*/
      ctx[38].vid && /*$audioid*/
      ctx[0] && create_if_block_53(ctx)
    );
    return {
      c() {
        span0 = element("span");
        t0 = text(t0_value);
        span1 = element("span");
        t1 = space();
        if (if_block0)
          if_block0.c();
        t2 = space();
        if (if_block1)
          if_block1.c();
        t3 = space();
        br = element("br");
        attr(span0, "class", "uncache");
        attr(span1, "aria-hidden", "true");
        attr(span1, "class", "clickable");
      },
      m(target, anchor) {
        insert(target, span0, anchor);
        append(span0, t0);
        insert(target, span1, anchor);
        span1.innerHTML = downloadicon;
        insert(target, t1, anchor);
        if (if_block0)
          if_block0.m(target, anchor);
        insert(target, t2, anchor);
        if (if_block1)
          if_block1.m(target, anchor);
        insert(target, t3, anchor);
        insert(target, br, anchor);
        if (!mounted) {
          dispose = listen(span1, "click", click_handler_1);
          mounted = true;
        }
      },
      p(new_ctx, dirty) {
        ctx = new_ctx;
        if (dirty[0] & /*$mediaurls*/
        512 && t0_value !== (t0_value = _(
          /*media*/
          ctx[38].performer
        ) + " "))
          set_data(t0, t0_value);
        if (
          /*downloading*/
          ctx[5] == /*media*/
          ctx[38].aid
        ) {
          if (if_block0) {
            if_block0.p(ctx, dirty);
          } else {
            if_block0 = create_if_block_63(ctx);
            if_block0.c();
            if_block0.m(t2.parentNode, t2);
          }
        } else if (if_block0) {
          if_block0.d(1);
          if_block0 = null;
        }
        if (
          /*$audioid*/
          ctx[0] == /*media*/
          ctx[38].vid && /*$audioid*/
          ctx[0]
        ) {
          if (if_block1) {
            if_block1.p(ctx, dirty);
          } else {
            if_block1 = create_if_block_53(ctx);
            if_block1.c();
            if_block1.m(t3.parentNode, t3);
          }
        } else if (if_block1) {
          if_block1.d(1);
          if_block1 = null;
        }
      },
      d(detaching) {
        if (detaching)
          detach(span0);
        if (detaching)
          detach(span1);
        if (detaching)
          detach(t1);
        if (if_block0)
          if_block0.d(detaching);
        if (detaching)
          detach(t2);
        if (if_block1)
          if_block1.d(detaching);
        if (detaching)
          detach(t3);
        if (detaching)
          detach(br);
        mounted = false;
        dispose();
      }
    };
  }
  function create_if_block_33(ctx) {
    let span;
    let t0_value = _(
      /*media*/
      ctx[38].performer
    ) + "";
    let t0;
    let t1_value = (
      /*idx*/
      ctx[40] && /*media*/
      ctx[38].aid == /*$audioid*/
      ctx[0] ? "\u266B" : ""
    );
    let t1;
    let t2;
    let br;
    let mounted;
    let dispose;
    function click_handler() {
      return (
        /*click_handler*/
        ctx[22](
          /*media*/
          ctx[38]
        )
      );
    }
    return {
      c() {
        span = element("span");
        t0 = text(t0_value);
        t1 = text(t1_value);
        t2 = space();
        br = element("br");
        attr(span, "aria-hidden", "true");
        attr(span, "class", "clickable");
        toggle_class(
          span,
          "selected",
          /*media*/
          ctx[38].aid == /*$audioid*/
          ctx[0]
        );
      },
      m(target, anchor) {
        insert(target, span, anchor);
        append(span, t0);
        append(span, t1);
        insert(target, t2, anchor);
        insert(target, br, anchor);
        if (!mounted) {
          dispose = listen(span, "click", click_handler);
          mounted = true;
        }
      },
      p(new_ctx, dirty) {
        ctx = new_ctx;
        if (dirty[0] & /*$mediaurls*/
        512 && t0_value !== (t0_value = _(
          /*media*/
          ctx[38].performer
        ) + ""))
          set_data(t0, t0_value);
        if (dirty[0] & /*$mediaurls, $audioid*/
        513 && t1_value !== (t1_value = /*idx*/
        ctx[40] && /*media*/
        ctx[38].aid == /*$audioid*/
        ctx[0] ? "\u266B" : ""))
          set_data(t1, t1_value);
        if (dirty[0] & /*$mediaurls, $audioid*/
        513) {
          toggle_class(
            span,
            "selected",
            /*media*/
            ctx[38].aid == /*$audioid*/
            ctx[0]
          );
        }
      },
      d(detaching) {
        if (detaching)
          detach(span);
        if (detaching)
          detach(t2);
        if (detaching)
          detach(br);
        mounted = false;
        dispose();
      }
    };
  }
  function create_if_block_63(ctx) {
    let t;
    return {
      c() {
        t = text(
          /*progress*/
          ctx[6]
        );
      },
      m(target, anchor) {
        insert(target, t, anchor);
      },
      p(ctx2, dirty) {
        if (dirty[0] & /*progress*/
        64)
          set_data(
            t,
            /*progress*/
            ctx2[6]
          );
      },
      d(detaching) {
        if (detaching)
          detach(t);
      }
    };
  }
  function create_if_block_53(ctx) {
    let t_value = (
      /*humanDuration*/
      ctx[12](
        /*getDuration*/
        ctx[13](
          /*$audioid*/
          ctx[0]
        )
      ) + ""
    );
    let t;
    return {
      c() {
        t = text(t_value);
      },
      m(target, anchor) {
        insert(target, t, anchor);
      },
      p(ctx2, dirty) {
        if (dirty[0] & /*$audioid*/
        1 && t_value !== (t_value = /*humanDuration*/
        ctx2[12](
          /*getDuration*/
          ctx2[13](
            /*$audioid*/
            ctx2[0]
          )
        ) + ""))
          set_data(t, t_value);
      },
      d(detaching) {
        if (detaching)
          detach(t);
      }
    };
  }
  function create_each_block8(ctx) {
    let t;
    let if_block1_anchor;
    let if_block0 = (
      /*idx*/
      ctx[40] && !/*$playing*/
      ctx[10] && /*media*/
      ctx[38].youtube && create_if_block_7(ctx)
    );
    function select_block_type(ctx2, dirty) {
      if (
        /*media*/
        ctx2[38].incache || !/*media*/
        ctx2[38].aid
      )
        return create_if_block_33;
      if (
        /*$online*/
        ctx2[11]
      )
        return create_if_block_43;
    }
    let current_block_type = select_block_type(ctx, [-1, -1]);
    let if_block1 = current_block_type && current_block_type(ctx);
    return {
      c() {
        if (if_block0)
          if_block0.c();
        t = space();
        if (if_block1)
          if_block1.c();
        if_block1_anchor = empty();
      },
      m(target, anchor) {
        if (if_block0)
          if_block0.m(target, anchor);
        insert(target, t, anchor);
        if (if_block1)
          if_block1.m(target, anchor);
        insert(target, if_block1_anchor, anchor);
      },
      p(ctx2, dirty) {
        if (
          /*idx*/
          ctx2[40] && !/*$playing*/
          ctx2[10] && /*media*/
          ctx2[38].youtube
        ) {
          if (if_block0) {
            if_block0.p(ctx2, dirty);
          } else {
            if_block0 = create_if_block_7(ctx2);
            if_block0.c();
            if_block0.m(t.parentNode, t);
          }
        } else if (if_block0) {
          if_block0.d(1);
          if_block0 = null;
        }
        if (current_block_type === (current_block_type = select_block_type(ctx2, dirty)) && if_block1) {
          if_block1.p(ctx2, dirty);
        } else {
          if (if_block1)
            if_block1.d(1);
          if_block1 = current_block_type && current_block_type(ctx2);
          if (if_block1) {
            if_block1.c();
            if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
          }
        }
      },
      d(detaching) {
        if (if_block0)
          if_block0.d(detaching);
        if (detaching)
          detach(t);
        if (if_block1) {
          if_block1.d(detaching);
        }
        if (detaching)
          detach(if_block1_anchor);
      }
    };
  }
  function create_caption_slot(ctx) {
    let span;
    let t_value = (
      /*rate*/
      ctx[1][0] / 100 + _(" \u64AD\u653E\u901F\u5EA6") + ""
    );
    let t;
    return {
      c() {
        span = element("span");
        t = text(t_value);
        attr(span, "slot", "caption");
        set_style(span, "float", "right");
      },
      m(target, anchor) {
        insert(target, span, anchor);
        append(span, t);
      },
      p(ctx2, dirty) {
        if (dirty[0] & /*rate*/
        2 && t_value !== (t_value = /*rate*/
        ctx2[1][0] / 100 + _(" \u64AD\u653E\u901F\u5EA6") + ""))
          set_data(t, t_value);
      },
      d(detaching) {
        if (detaching)
          detach(span);
      }
    };
  }
  function create_if_block_24(ctx) {
    let span;
    let mounted;
    let dispose;
    return {
      c() {
        span = element("span");
        span.textContent = `${_("\u6062\u5FA9\u6B63\u5E38\u901F\u5EA6")}`;
        attr(span, "aria-hidden", "true");
        attr(span, "class", "clickable");
      },
      m(target, anchor) {
        insert(target, span, anchor);
        if (!mounted) {
          dispose = listen(
            span,
            "click",
            /*speed1x*/
            ctx[20]
          );
          mounted = true;
        }
      },
      p: noop,
      d(detaching) {
        if (detaching)
          detach(span);
        mounted = false;
        dispose();
      }
    };
  }
  function create_if_block_15(ctx) {
    let t_value = (
      /*humanStoptime*/
      ctx[17](
        /*value*/
        ctx[2][0] * /*getDuration*/
        ctx[13](
          /*$audioid*/
          ctx[0]
        )
      ) + ""
    );
    let t;
    return {
      c() {
        t = text(t_value);
      },
      m(target, anchor) {
        insert(target, t, anchor);
      },
      p(ctx2, dirty) {
        if (dirty[0] & /*value, $audioid*/
        5 && t_value !== (t_value = /*humanStoptime*/
        ctx2[17](
          /*value*/
          ctx2[2][0] * /*getDuration*/
          ctx2[13](
            /*$audioid*/
            ctx2[0]
          )
        ) + ""))
          set_data(t, t_value);
      },
      d(detaching) {
        if (detaching)
          detach(t);
      }
    };
  }
  function create_if_block8(ctx) {
    let switch_1;
    let updating_value;
    let current;
    function switch_1_value_binding(value) {
      ctx[26](value);
    }
    let switch_1_props = {
      label: _("\u81EA\u52D5\u64AD\u653E\u4E0B\u4E00\u5377"),
      design: "slider",
      fontSize: "24"
    };
    if (
      /*$playnextjuan*/
      ctx[8] !== void 0
    ) {
      switch_1_props.value = /*$playnextjuan*/
      ctx[8];
    }
    switch_1 = new switch_default({ props: switch_1_props });
    binding_callbacks.push(() => bind(switch_1, "value", switch_1_value_binding));
    return {
      c() {
        create_component(switch_1.$$.fragment);
      },
      m(target, anchor) {
        mount_component(switch_1, target, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        const switch_1_changes = {};
        if (!updating_value && dirty[0] & /*$playnextjuan*/
        256) {
          updating_value = true;
          switch_1_changes.value = /*$playnextjuan*/
          ctx2[8];
          add_flush_callback(() => updating_value = false);
        }
        switch_1.$set(switch_1_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(switch_1.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(switch_1.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(switch_1, detaching);
      }
    };
  }
  function create_fragment15(ctx) {
    let div2;
    let t0;
    let br0;
    let t1;
    let slider0;
    let updating_value;
    let t2;
    let br1;
    let t3;
    let t4;
    let t5_value = _("\u91CD\u64AD\u6B21\u6578") + "";
    let t5;
    let t6;
    let t7_value = (
      /*value*/
      (ctx[2][0] > 0 ? (
        /*value*/
        ctx[2][0]
      ) : _("\u7121\u9650")) + ""
    );
    let t7;
    let t8;
    let t9;
    let slider1;
    let updating_value_1;
    let t10;
    let show_if = (
      /*ptk*/
      ctx[7] && allJuan(
        /*ptk*/
        ctx[7]
      ).length > 1
    );
    let t11;
    let hr;
    let t12;
    let div0;
    let raw0_value = _(
      /*htmltext*/
      ctx[14](
        /*subtitle2*/
        ctx[4]
      )
    ) + "";
    let t13;
    let div1;
    let raw1_value = _(
      /*htmltext*/
      ctx[14](
        /*subtitle*/
        ctx[3]
      )
    ) + "";
    let t14;
    let endmarker;
    let current;
    let each_value = (
      /*$mediaurls*/
      ctx[9]
    );
    let each_blocks = [];
    for (let i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block8(get_each_context8(ctx, each_value, i));
    }
    function slider0_value_binding(value) {
      ctx[24](value);
    }
    let slider0_props = {
      max: 300,
      min: 30,
      $$slots: { caption: [create_caption_slot] },
      $$scope: { ctx }
    };
    if (
      /*rate*/
      ctx[1] !== void 0
    ) {
      slider0_props.value = /*rate*/
      ctx[1];
    }
    slider0 = new rangeslider_default({ props: slider0_props });
    binding_callbacks.push(() => bind(slider0, "value", slider0_value_binding));
    slider0.$on("input", debounce(
      /*setPlayrate*/
      ctx[19],
      300
    ));
    let if_block0 = (
      /*rate*/
      ctx[1][0] !== 100 && create_if_block_24(ctx)
    );
    let if_block1 = (
      /*value*/
      ctx[2][0] > 0 && create_if_block_15(ctx)
    );
    function slider1_value_binding(value) {
      ctx[25](value);
    }
    let slider1_props = { min: "0", max: "10" };
    if (
      /*value*/
      ctx[2] !== void 0
    ) {
      slider1_props.value = /*value*/
      ctx[2];
    }
    slider1 = new rangeslider_default({ props: slider1_props });
    binding_callbacks.push(() => bind(slider1, "value", slider1_value_binding));
    slider1.$on(
      "input",
      /*setRemain*/
      ctx[16]
    );
    let if_block2 = show_if && create_if_block8(ctx);
    endmarker = new endmarker_default({});
    return {
      c() {
        div2 = element("div");
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        t0 = space();
        br0 = element("br");
        t1 = space();
        create_component(slider0.$$.fragment);
        t2 = space();
        br1 = element("br");
        t3 = space();
        if (if_block0)
          if_block0.c();
        t4 = space();
        t5 = text(t5_value);
        t6 = text("\uFF1A");
        t7 = text(t7_value);
        t8 = space();
        if (if_block1)
          if_block1.c();
        t9 = space();
        create_component(slider1.$$.fragment);
        t10 = space();
        if (if_block2)
          if_block2.c();
        t11 = space();
        hr = element("hr");
        t12 = space();
        div0 = element("div");
        t13 = space();
        div1 = element("div");
        t14 = space();
        create_component(endmarker.$$.fragment);
        attr(div0, "class", "subtitle");
        attr(div1, "class", "subtitle");
        attr(div2, "class", "bodytext");
      },
      m(target, anchor) {
        insert(target, div2, anchor);
        for (let i = 0; i < each_blocks.length; i += 1) {
          if (each_blocks[i]) {
            each_blocks[i].m(div2, null);
          }
        }
        append(div2, t0);
        append(div2, br0);
        append(div2, t1);
        mount_component(slider0, div2, null);
        append(div2, t2);
        append(div2, br1);
        append(div2, t3);
        if (if_block0)
          if_block0.m(div2, null);
        append(div2, t4);
        append(div2, t5);
        append(div2, t6);
        append(div2, t7);
        append(div2, t8);
        if (if_block1)
          if_block1.m(div2, null);
        append(div2, t9);
        mount_component(slider1, div2, null);
        append(div2, t10);
        if (if_block2)
          if_block2.m(div2, null);
        append(div2, t11);
        append(div2, hr);
        append(div2, t12);
        append(div2, div0);
        div0.innerHTML = raw0_value;
        append(div2, t13);
        append(div2, div1);
        div1.innerHTML = raw1_value;
        append(div2, t14);
        mount_component(endmarker, div2, null);
        current = true;
      },
      p(ctx2, dirty) {
        if (dirty[0] & /*$mediaurls, $audioid, downloading, humanDuration, getDuration, progress, downloadit, $online, goyoutube, $playing*/
        310881) {
          each_value = /*$mediaurls*/
          ctx2[9];
          let i;
          for (i = 0; i < each_value.length; i += 1) {
            const child_ctx = get_each_context8(ctx2, each_value, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
            } else {
              each_blocks[i] = create_each_block8(child_ctx);
              each_blocks[i].c();
              each_blocks[i].m(div2, t0);
            }
          }
          for (; i < each_blocks.length; i += 1) {
            each_blocks[i].d(1);
          }
          each_blocks.length = each_value.length;
        }
        const slider0_changes = {};
        if (dirty[0] & /*rate*/
        2 | dirty[1] & /*$$scope*/
        1024) {
          slider0_changes.$$scope = { dirty, ctx: ctx2 };
        }
        if (!updating_value && dirty[0] & /*rate*/
        2) {
          updating_value = true;
          slider0_changes.value = /*rate*/
          ctx2[1];
          add_flush_callback(() => updating_value = false);
        }
        slider0.$set(slider0_changes);
        if (
          /*rate*/
          ctx2[1][0] !== 100
        ) {
          if (if_block0) {
            if_block0.p(ctx2, dirty);
          } else {
            if_block0 = create_if_block_24(ctx2);
            if_block0.c();
            if_block0.m(div2, t4);
          }
        } else if (if_block0) {
          if_block0.d(1);
          if_block0 = null;
        }
        if ((!current || dirty[0] & /*value*/
        4) && t7_value !== (t7_value = /*value*/
        (ctx2[2][0] > 0 ? (
          /*value*/
          ctx2[2][0]
        ) : _("\u7121\u9650")) + ""))
          set_data(t7, t7_value);
        if (
          /*value*/
          ctx2[2][0] > 0
        ) {
          if (if_block1) {
            if_block1.p(ctx2, dirty);
          } else {
            if_block1 = create_if_block_15(ctx2);
            if_block1.c();
            if_block1.m(div2, t9);
          }
        } else if (if_block1) {
          if_block1.d(1);
          if_block1 = null;
        }
        const slider1_changes = {};
        if (!updating_value_1 && dirty[0] & /*value*/
        4) {
          updating_value_1 = true;
          slider1_changes.value = /*value*/
          ctx2[2];
          add_flush_callback(() => updating_value_1 = false);
        }
        slider1.$set(slider1_changes);
        if (dirty[0] & /*ptk*/
        128)
          show_if = /*ptk*/
          ctx2[7] && allJuan(
            /*ptk*/
            ctx2[7]
          ).length > 1;
        if (show_if) {
          if (if_block2) {
            if_block2.p(ctx2, dirty);
            if (dirty[0] & /*ptk*/
            128) {
              transition_in(if_block2, 1);
            }
          } else {
            if_block2 = create_if_block8(ctx2);
            if_block2.c();
            transition_in(if_block2, 1);
            if_block2.m(div2, t11);
          }
        } else if (if_block2) {
          group_outros();
          transition_out(if_block2, 1, 1, () => {
            if_block2 = null;
          });
          check_outros();
        }
        if ((!current || dirty[0] & /*subtitle2*/
        16) && raw0_value !== (raw0_value = _(
          /*htmltext*/
          ctx2[14](
            /*subtitle2*/
            ctx2[4]
          )
        ) + ""))
          div0.innerHTML = raw0_value;
        ;
        if ((!current || dirty[0] & /*subtitle*/
        8) && raw1_value !== (raw1_value = _(
          /*htmltext*/
          ctx2[14](
            /*subtitle*/
            ctx2[3]
          )
        ) + ""))
          div1.innerHTML = raw1_value;
        ;
      },
      i(local) {
        if (current)
          return;
        transition_in(slider0.$$.fragment, local);
        transition_in(slider1.$$.fragment, local);
        transition_in(if_block2);
        transition_in(endmarker.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(slider0.$$.fragment, local);
        transition_out(slider1.$$.fragment, local);
        transition_out(if_block2);
        transition_out(endmarker.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(div2);
        destroy_each(each_blocks, detaching);
        destroy_component(slider0);
        if (if_block0)
          if_block0.d();
        if (if_block1)
          if_block1.d();
        destroy_component(slider1);
        if (if_block2)
          if_block2.d();
        destroy_component(endmarker);
      }
    };
  }
  function instance16($$self, $$props, $$invalidate) {
    let ptk3;
    let $playnextjuan;
    let $audioid;
    let $showyoutube;
    let $activefolioid;
    let $remainrollback;
    let $playrate;
    let $activePtk;
    let $mediaurls;
    let $playing;
    let $online;
    component_subscribe($$self, playnextjuan, ($$value) => $$invalidate(8, $playnextjuan = $$value));
    component_subscribe($$self, audioid, ($$value) => $$invalidate(0, $audioid = $$value));
    component_subscribe($$self, showyoutube, ($$value) => $$invalidate(33, $showyoutube = $$value));
    component_subscribe($$self, activefolioid, ($$value) => $$invalidate(34, $activefolioid = $$value));
    component_subscribe($$self, remainrollback, ($$value) => $$invalidate(35, $remainrollback = $$value));
    component_subscribe($$self, playrate, ($$value) => $$invalidate(36, $playrate = $$value));
    component_subscribe($$self, activePtk, ($$value) => $$invalidate(21, $activePtk = $$value));
    component_subscribe($$self, mediaurls, ($$value) => $$invalidate(9, $mediaurls = $$value));
    component_subscribe($$self, playing, ($$value) => $$invalidate(10, $playing = $$value));
    component_subscribe($$self, online, ($$value) => $$invalidate(11, $online = $$value));
    let rate = [$playrate || 100, 0];
    let value = [$remainrollback, 0];
    let subtitles = [], subtitles2 = [], subtitle = "", subtitle2 = "", subtitletimer, nsub = 0;
    onDestroy(() => {
      clearInterval(subtitletimer);
    });
    const humanDuration = (t) => {
      if (!t)
        return "";
      const minutes = Math.floor(t / 60);
      const seconds = t - minutes * 60;
      return `${minutes}:${seconds}`;
    };
    const getDuration = (id) => {
      const timestamps = findByAudioId(id)?.timestamp;
      if (!timestamps)
        return 0;
      return timestamps[timestamps.length - 1] - timestamps[0];
    };
    let timestamp = [];
    onMount(() => {
      subtitletimer = setInterval(
        () => {
          if (!$audioid)
            return;
          const playertime = player.currentTime;
          while (playertime >= timestamp[nsub] && nsub < timestamp.length) {
            $$invalidate(3, subtitle = subtitles[nsub] || subtitle || "");
            $$invalidate(4, subtitle2 = subtitles2[nsub] || subtitle2 || "");
            nsub++;
          }
          if (nsub >= timestamp.length)
            nsub = 0;
        },
        500
      );
    });
    const loadSubtitle = async (id) => {
      $$invalidate(4, subtitle2 = $$invalidate(3, subtitle = ""));
      subtitles2 = [], subtitles = [];
      if (!id)
        return;
      timestamp = findByAudioId(id, "timestamp_sanskrit")?.timestamp || [];
      if (!timestamp?.length)
        return;
      const skptk = usePtk("dc_sanskrit");
      subtitles2 = await skptk.fetchAddress("bk#" + $activefolioid);
      subtitles = await ptk3.fetchAddress("bk#" + $activefolioid);
      nsub = 0;
    };
    const htmltext = (s) => {
      return parseOfftext(s)[0].replace(/[【《〔](.+?)[】》〕]/g, "<span class=bracket>$1 </span>");
    };
    let downloading2 = "", progress = "";
    const downloadit = async (aid) => {
      $$invalidate(5, downloading2 = aid);
      await downloadToCache(CacheName, audiofolder + aid + ".mp3", (msg) => {
        $$invalidate(6, progress = msg);
      });
      await sleep(1e3);
      const list = await fetchAudioList($activefolioid, mediaurls, $showyoutube == "on");
      mediaurls.set(list);
      $$invalidate(5, downloading2 = "");
      $$invalidate(6, progress = "");
    };
    const setRemain = () => {
      const v = value[0];
      if (v && get_store_value(remainrollback) == value[0] || v == 0 && get_store_value(remainrollback) == -1)
        return;
      if (v == 0) {
        remainrollback.set(-1);
      } else {
        remainrollback.set(v);
      }
    };
    const humanStoptime = (t) => {
      if (!t || $playnextjuan == "on" && allJuan(ptk3).length > 1)
        return "";
      return new Date(Date.now() + t * 1e3).toLocaleTimeString() + "\u505C\u6B62";
    };
    const goyoutube = (id) => {
      stopAudio();
      window.open("https://youtube.com/watch?v=" + id, "_blank");
    };
    const setPlayrate = (e) => {
      const rate2 = e.detail[0];
      player.playbackRate = rate2 / 100;
      playrate.set(rate2);
    };
    const speed1x = () => {
      $$invalidate(1, rate = [100, 0]);
      player.playbackRate = 1;
      playrate.set(100);
    };
    const click_handler = (media) => !downloading2 && selectmedia(media.aid, true);
    const click_handler_1 = (media) => !downloading2 && downloadit(media.aid);
    function slider0_value_binding(value2) {
      rate = value2;
      $$invalidate(1, rate);
    }
    function slider1_value_binding(value$1) {
      value = value$1;
      $$invalidate(2, value);
    }
    function switch_1_value_binding(value2) {
      $playnextjuan = value2;
      playnextjuan.set($playnextjuan);
    }
    $$self.$$.update = () => {
      if ($$self.$$.dirty[0] & /*$activePtk*/
      2097152) {
        $:
          $$invalidate(7, ptk3 = usePtk($activePtk));
      }
      if ($$self.$$.dirty[0] & /*$audioid*/
      1) {
        $:
          loadSubtitle($audioid);
      }
    };
    return [
      $audioid,
      rate,
      value,
      subtitle,
      subtitle2,
      downloading2,
      progress,
      ptk3,
      $playnextjuan,
      $mediaurls,
      $playing,
      $online,
      humanDuration,
      getDuration,
      htmltext,
      downloadit,
      setRemain,
      humanStoptime,
      goyoutube,
      setPlayrate,
      speed1x,
      $activePtk,
      click_handler,
      click_handler_1,
      slider0_value_binding,
      slider1_value_binding,
      switch_1_value_binding
    ];
  }
  var Audio = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance16, create_fragment15, safe_not_equal, {}, null, [-1, -1]);
    }
  };
  var audio_default = Audio;

  // src/sponsoring.svelte
  function create_fragment16(ctx) {
    let hr0;
    let t0;
    let br0;
    let t1;
    let span0;
    let t3;
    let br1;
    let t4;
    let span1;
    let t6;
    let hr1;
    let t7;
    let a;
    let t9;
    let img0;
    let img0_src_value;
    let t10;
    let hr2;
    let t11;
    let span2;
    let t13;
    let br2;
    let t14;
    let img1;
    let img1_src_value;
    let t15;
    let br3;
    let t16;
    let img2;
    let img2_src_value;
    let t17;
    let br4;
    let t18;
    return {
      c() {
        hr0 = element("hr");
        t0 = text("\n\u53F0\u7063\u7B2C\u4E00\u9280\u884C(007)\n");
        br0 = element("br");
        t1 = text("\u5E33\u865F\uFF1A");
        span0 = element("span");
        span0.textContent = "0000042150203663";
        t3 = space();
        br1 = element("br");
        t4 = text("\u6236\u540D\uFF1A");
        span1 = element("span");
        span1.textContent = "\u738B\u5B97\u666F";
        t6 = space();
        hr1 = element("hr");
        t7 = text("\nLINE Pay\uFF1A\u8ACB\u7528id\u52A0\u597D\u53CB ");
        a = element("a");
        a.textContent = "@fayunshi";
        t9 = text("\uFF08\u6CD5\u96F2\u77E5\u5BA2\u5BA4\uFF09\u9032\u804A\u5929\u5BA4\uFF0C\u53F3\u4E0B\u89D2\uFF0B\u2192\u624B\u6A5F\u8F49\u5E33\u3002\n");
        img0 = element("img");
        t10 = space();
        hr2 = element("hr");
        t11 = text("\n\n\u652F\u4ED8\u5B9D\u6536\u6B3E\u4EBA");
        span2 = element("span");
        span2.textContent = "\u80E1\u6CE2";
        t13 = space();
        br2 = element("br");
        t14 = text("\u5FAE\u4FE1\uFF1Azxzcxzvcxz  \u5934\u50CF");
        img1 = element("img");
        t15 = space();
        br3 = element("br");
        t16 = text("\u7559\u8A00\u201C\u652F\u6301\u6570\u5B57\u4E09\u85CF\u201D\u9879\u76EE\u3002\n\u80E1\u6CE2\u662F\u4EE3\u6536\u5584\u6B3E\u7684\u8D24\u53CB\uFF0C\u9664\u8F6C\u6B3E\u76F8\u5173\u4E8B\u5B9C\u52FF\u6270\u3002\n");
        img2 = element("img");
        t17 = space();
        br4 = element("br");
        t18 = text("\u4EBA\u6C11\u5E01100\u5143\u4EE5\u4E0B\u6350\u6B3E\uFF0C\u6055\u4E0D\u5355\u72EC\u5217\u529F\u5FB7\u82B3\u540D\uFF0C\u4E00\u5F8B\u5408\u5E76\u4E3A\u201C\u5584\u7537\u4FE1\u5973\u201D\u3002");
        attr(span0, "class", "bankaccount");
        attr(span1, "class", "bankaccount");
        attr(a, "href", "https://line.me/ti/p/n1m_j-z2AC");
        attr(a, "target", "_new");
        attr(img0, "alt", "");
        set_style(img0, "width", "100%");
        if (!src_url_equal(img0.src, img0_src_value = "linepay.png"))
          attr(img0, "src", img0_src_value);
        attr(span2, "class", "bankaccount");
        if (!src_url_equal(img1.src, img1_src_value = "logo128.png"))
          attr(img1, "src", img1_src_value);
        attr(img1, "alt", "");
        set_style(img1, "width", "1.2em");
        attr(img2, "alt", "");
        set_style(img2, "width", "100%");
        if (!src_url_equal(img2.src, img2_src_value = "alipay.jpg"))
          attr(img2, "src", img2_src_value);
      },
      m(target, anchor) {
        insert(target, hr0, anchor);
        insert(target, t0, anchor);
        insert(target, br0, anchor);
        insert(target, t1, anchor);
        insert(target, span0, anchor);
        insert(target, t3, anchor);
        insert(target, br1, anchor);
        insert(target, t4, anchor);
        insert(target, span1, anchor);
        insert(target, t6, anchor);
        insert(target, hr1, anchor);
        insert(target, t7, anchor);
        insert(target, a, anchor);
        insert(target, t9, anchor);
        insert(target, img0, anchor);
        insert(target, t10, anchor);
        insert(target, hr2, anchor);
        insert(target, t11, anchor);
        insert(target, span2, anchor);
        insert(target, t13, anchor);
        insert(target, br2, anchor);
        insert(target, t14, anchor);
        insert(target, img1, anchor);
        insert(target, t15, anchor);
        insert(target, br3, anchor);
        insert(target, t16, anchor);
        insert(target, img2, anchor);
        insert(target, t17, anchor);
        insert(target, br4, anchor);
        insert(target, t18, anchor);
      },
      p: noop,
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching)
          detach(hr0);
        if (detaching)
          detach(t0);
        if (detaching)
          detach(br0);
        if (detaching)
          detach(t1);
        if (detaching)
          detach(span0);
        if (detaching)
          detach(t3);
        if (detaching)
          detach(br1);
        if (detaching)
          detach(t4);
        if (detaching)
          detach(span1);
        if (detaching)
          detach(t6);
        if (detaching)
          detach(hr1);
        if (detaching)
          detach(t7);
        if (detaching)
          detach(a);
        if (detaching)
          detach(t9);
        if (detaching)
          detach(img0);
        if (detaching)
          detach(t10);
        if (detaching)
          detach(hr2);
        if (detaching)
          detach(t11);
        if (detaching)
          detach(span2);
        if (detaching)
          detach(t13);
        if (detaching)
          detach(br2);
        if (detaching)
          detach(t14);
        if (detaching)
          detach(img1);
        if (detaching)
          detach(t15);
        if (detaching)
          detach(br3);
        if (detaching)
          detach(t16);
        if (detaching)
          detach(img2);
        if (detaching)
          detach(t17);
        if (detaching)
          detach(br4);
        if (detaching)
          detach(t18);
      }
    };
  }
  var Sponsoring = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, null, create_fragment16, safe_not_equal, {});
    }
  };
  var sponsoring_default = Sponsoring;

  // src/hof.svelte
  function create_fragment17(ctx) {
    let div2;
    let div0;
    let t1;
    let div1;
    let t3;
    let br0;
    let t4;
    let br1;
    let span;
    let t6;
    let t7_value = _("\u6CF0\u9296") + "";
    let t7;
    let t8;
    let br2;
    let t9;
    let t10_value = _("\u99AC\u5E63") + "";
    let t10;
    let t11;
    let br3;
    let t12;
    let br4;
    let t13;
    let br5;
    let t14;
    let endmarker;
    let current;
    endmarker = new endmarker_default({});
    return {
      c() {
        div2 = element("div");
        div0 = element("div");
        div0.textContent = `${_("\u6350\u737B\u8A18\u9304\u3002\u7948\u9858\u8AF8\u8B77\u6301\u8005\u4EE5\u6B64\u529F\u5FB7\uFF0C\u7372\u5F97\u7121\u91CF\u4E16\u51FA\u4E16\u9593\u7684\u5229\u76CA\u3002")}`;
        t1 = space();
        div1 = element("div");
        div1.textContent = "2023\u5E74";
        t3 = text("\n\u9673\u78A7\u541F 1.12 \u7F8E\u5143 1,000\n");
        br0 = element("br");
        t4 = text("\u752F\u8000\u5357 5.21 \u53F0\u5E6310,000\n");
        br1 = element("br");
        span = element("span");
        span.textContent = `${_("\u8449\u96C5\u67CF")}`;
        t6 = text(" 8.19 ");
        t7 = text(t7_value);
        t8 = text("40,000 \n");
        br2 = element("br");
        t9 = text("\u674E\u7389\u5A9A 8.19 ");
        t10 = text(t10_value);
        t11 = text(" 5,000\n");
        br3 = element("br");
        t12 = text("\u6797\u5609\u96EF 8.27 \u53F0\u5E63 1,000\n");
        br4 = element("br");
        t13 = text("\u6CD5\u738B\u8B1B\u5802 9.9 \u53F0\u5E63 50,000\n");
        br5 = element("br");
        t14 = text("\u65BD\u90C1\u82B3 9.13 \u53F0\u5E63 5,000\n");
        create_component(endmarker.$$.fragment);
        attr(span, "class", "deceased");
      },
      m(target, anchor) {
        insert(target, div2, anchor);
        append(div2, div0);
        append(div2, t1);
        append(div2, div1);
        append(div2, t3);
        append(div2, br0);
        append(div2, t4);
        append(div2, br1);
        append(div2, span);
        append(div2, t6);
        append(div2, t7);
        append(div2, t8);
        append(div2, br2);
        append(div2, t9);
        append(div2, t10);
        append(div2, t11);
        append(div2, br3);
        append(div2, t12);
        append(div2, br4);
        append(div2, t13);
        append(div2, br5);
        append(div2, t14);
        mount_component(endmarker, div2, null);
        current = true;
      },
      p: noop,
      i(local) {
        if (current)
          return;
        transition_in(endmarker.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(endmarker.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(div2);
        destroy_component(endmarker);
      }
    };
  }
  var Hof = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, null, create_fragment17, safe_not_equal, {});
    }
  };
  var hof_default = Hof;

  // src/workers.svelte
  function create_fragment18(ctx) {
    let t0_value = _("\u5716\u7248\u88C1\u5207") + "";
    let t0;
    let t1;
    let hr0;
    let t2;
    let t3_value = _("\u5206\u53E5\u6A19\u8A18") + "";
    let t3;
    let t4;
    let hr1;
    let t5;
    let t6_value = _("\u6642\u9593\u6233\u8A18\uFF1A") + "";
    let t6;
    let t7;
    let hr2;
    let t8;
    let t9_value = _("\u7CFB\u7D71\u6E2C\u8A66\uFF1A") + "";
    let t9;
    let t10;
    return {
      c() {
        t0 = text(t0_value);
        t1 = text("\uFF1A\u91CB\u901A\u6CC9\u3000\u5F35\u6DD1\u6968\n");
        hr0 = element("hr");
        t2 = space();
        t3 = text(t3_value);
        t4 = text("\uFF1A\u4181\u5E38\u660E\u3000\u8B1D\u5B87\u6046\n");
        hr1 = element("hr");
        t5 = space();
        t6 = text(t6_value);
        t7 = text("\u6797\u7174\u5982\u3000\n");
        hr2 = element("hr");
        t8 = space();
        t9 = text(t9_value);
        t10 = text("\u685C\u4E95\u609F\u5FD7(\u30B5\u30C8\u30B7\uFF0E\u30B5\u30AF\u30E9\u30A4)");
      },
      m(target, anchor) {
        insert(target, t0, anchor);
        insert(target, t1, anchor);
        insert(target, hr0, anchor);
        insert(target, t2, anchor);
        insert(target, t3, anchor);
        insert(target, t4, anchor);
        insert(target, hr1, anchor);
        insert(target, t5, anchor);
        insert(target, t6, anchor);
        insert(target, t7, anchor);
        insert(target, hr2, anchor);
        insert(target, t8, anchor);
        insert(target, t9, anchor);
        insert(target, t10, anchor);
      },
      p: noop,
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching)
          detach(t0);
        if (detaching)
          detach(t1);
        if (detaching)
          detach(hr0);
        if (detaching)
          detach(t2);
        if (detaching)
          detach(t3);
        if (detaching)
          detach(t4);
        if (detaching)
          detach(hr1);
        if (detaching)
          detach(t5);
        if (detaching)
          detach(t6);
        if (detaching)
          detach(t7);
        if (detaching)
          detach(hr2);
        if (detaching)
          detach(t8);
        if (detaching)
          detach(t9);
        if (detaching)
          detach(t10);
      }
    };
  }
  var Workers = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, null, create_fragment18, safe_not_equal, {});
    }
  };
  var workers_default = Workers;

  // src/project.svelte
  function create_fragment19(ctx) {
    let div;
    let a0;
    let t1;
    let br0;
    let t2;
    let br1;
    let t3;
    let br2;
    let t4;
    let br3;
    let t5;
    let br4;
    let t6;
    let br5;
    let a1;
    let t8;
    let br6;
    let t9;
    let a2;
    let t11;
    let br7;
    let t12;
    let br8;
    let t13;
    let br9;
    let br10;
    let t14;
    let br11;
    let t15;
    let br12;
    let t16;
    let br13;
    let t17;
    let br14;
    let t18;
    let br15;
    let t19;
    let br16;
    let t20;
    let br17;
    let t21;
    let br18;
    let t22;
    let br19;
    let t23;
    let br20;
    let t24;
    let br21;
    let t25;
    let br22;
    let br23;
    let t26;
    let br24;
    let t27;
    let br25;
    let t28;
    let br26;
    let t29;
    let br27;
    let br28;
    let t30;
    let br29;
    let t31;
    let br30;
    let t32;
    let br31;
    let t33;
    let br32;
    let t34;
    let br33;
    let t35;
    let endmarker;
    let current;
    endmarker = new endmarker_default({});
    return {
      c() {
        div = element("div");
        a0 = element("a");
        a0.textContent = "\u88DC\u7248\u8A08\u5283";
        t1 = text("\n\u4F5B\u6CD5\u662F\u4E2D\u83EF\u6587\u660E\u7684\u4E09\u5927\u7D44\u6210\u90E8\u4EFD(\u5112\u91CB\u9053)\u4E2D\u552F\u4E00\u7684\u975E\u539F\u751F\u6587\u660E\uFF0C\u4F5B\u7D93\u7684\u7FFB\u8B6F\u548C\u7DE8\u4FEE\u662F\u5927\u898F\u6A21\u7684\u6587\u5316\u4EA4\u6D41\u5DE5\u7A0B\uFF0C\u5176\u5728\u6587\u660E\u53F2\u7684\u5730\u4F4D\uFF0C\u4E0D\u4E9E\u65BC\u963F\u62C9\u4F2F\u7684\u767E\u5E74\u7FFB\u8B6F\u904B\u52D5\u3002\n");
        br0 = element("br");
        t2 = text("\u56E0\u6B64\uFF0C\u4EE5\u4F5B\u6CD5\u70BA\u4F9D\u6258\u7684\u6587\u5316\u7B26\u865F\uFF0C\u80FD\u5920\u5C07\u4E2D\u83EF\u6587\u660E\u4EE5\u8F03\u5C0F\u7684\u963B\u529B\uFF0C\u6563\u64AD\u81F3\u5112\u5BB6\u6587\u5316\u5708\u4EE5\u5916\u3002\n");
        br1 = element("br");
        t3 = text("\u6F22\u50B3\u4F5B\u6559\u5F92\u7D20\u6709\u52C7\u65BC\u5617\u8A66\u65B0\u79D1\u6280\u7684\u50B3\u7D71\uFF0C\u516C\u5143868\u5E74\uFF08\u5510\u54B8\u901A\u4E5D\u5E74\uFF09\uFF0C\u5728\u96D5\u7248\u5370\u5237\u8853\u840C\u82BD\u4E4B\u521D\uFF0C\u5370\u884C\u4E86\u91D1\u525B\u7D93\uFF08\u6566\u714C\u5510\u523B\u672C\uFF09\uFF0C\u6BD4\u6B50\u6D32\u65E9\u4E94\u767E\u5E74\u3002\n");
        br2 = element("br");
        t4 = text("\u65E5\u672C\u65BC\u4E00\u767E\u5E74\u524D\u7DE8\u4FEE\u7684\u5927\u6B63\u85CF\uFF0C\u662F\u8FD1\u4EE3\u8F03\u70BA\u9F4A\u5168\u3001\u5EE3\u70BA\u6D41\u901A\u7684\u7248\u672C\u3002\u7531\u65BC\u5927\u6B63\u85CF\uFF0C\u4EE5\u53CA\u6536\u9304\u5927\u91CF\u4E2D\u570B\u7956\u5E2B\u8457\u4F5C\u7684\uFF0C\u534D\u7E8C\u85CF\u4E4B\u6210\u5C31\uFF0C\u65E5\u672C\u4EBA\u53EF\u4EE5\u81EA\u8C6A\u5730\u5BA3\u7A31\uFF0C\u6F22\u50B3\u4F5B\u6559\u7684\u7814\u7A76\u91CD\u5FC3\uFF0C\u5DF2\u7531\u4E2D\u571F\u8F49\u79FB\u5230\u6771\u701B\u3002\n\n");
        br3 = element("br");
        t5 = text("\u751F\u70BA\u708E\u9EC3\u5B50\u5B6B\u3001\u8EAB\u70BA\u4E09\u5BF6\u5F1F\u5B50\uFF0C\u611F\u8B1D\u65E5\u672C\u70BA\u4FDD\u5B58\u6F22\u6587\u4F5B\u7D93\u6295\u5165\u7684\u52AA\u529B\uFF0C\u4F46\u4EE5\u4F5B\u6CD5\u6D41\u50B3\u7684\u89D2\u5EA6\u800C\u8A00\uFF0C\u9019\u662F\u6B77\u53F2\u7684\u7570\u5E38\u53CA\u812B\u8ECC(Abberation)\uFF0C\u7406\u7531\u662F\uFF1A\n");
        br4 = element("br");
        t6 = text("\u4E00\uFF09\u5927\u6B63\u85CF\u4FC2\u7531\u5B78\u8005\u4E3B\u5C0E\uFF0C\u800C\u81EA\u4E8C\u5343\u4E94\u767E\u5E74\u524D\uFF0C\u4F5B\u9640\u5165\u6EC5\u4E0D\u4E45\u5F8C\u7684\u738B\u820D\u57CE\u4E03\u8449\u7A9F\u7D50\u96C6\u4EE5\u4F86\uFF0C\u53E4\u4ECA\u4E2D\u5916\u6B77\u4EE3\u7FFB\u8B6F\u7DE8\u4FEE\u4F5B\u7D93\u7686\u7531\u50E7\u5718\u4E3B\u6301\u3002\n");
        br5 = element("br");
        a1 = element("a");
        a1.textContent = "\u5927\u8535\u51FA\u7248\u682A\u5F0F\u4F1A\u793E";
        t8 = text("\u4EE5\u7DE8\u88FD\u6821\u52D8\u7522\u751F\u7684\u6CD5\u5F8B\u4FDD\u969C\uFF0C\u4E0D\u8A31\u4ED6\u4EBA\u8CA9\u552E\u8A72\u7248\u4F5B\u7D93\uFF0C\u9019\u9055\u53CD\u4F5B\u7D93\u81EA\u53E4\u4EE5\u4F86\u81EA\u7531\u516C\u958B\u7684\u5929\u7136\u5C6C\u6027\u3002\n");
        br6 = element("br");
        t9 = text("\u800CCBETA\u7684\u5927\u6B63\u85CF\u6388\u6B0A\u4F86\u81EA\u65BC\u65E5\u672C\uFF0C\u63DB\u8A00\u4E4B\uFF0C\u4EFB\u4F55\u5728\u5176\u4E0A\u7684\u52A0\u5DE5\u8207\u52A0\u503C\uFF0C\u90FD\u53D7\u76F8\u95DC\u8457\u4F5C\u6B0A\u6CD5\u7684");
        a2 = element("a");
        a2.textContent = "\u5236\u7D04";
        t11 = text("\u3002\n");
        br7 = element("br");
        t12 = text("\u4E8C\uFF09\u4F5B\u7D93\u4E0D\u80FD\u53EA\u662F\u5B78\u8005\u7684\u7814\u7A76\u6750\u6599\uFF0C\u4E5F\u4E0D\u8A72\u662F\u71D9\u91D1\u7CBE\u5370\u3001\u7D72\u7DA2\u5305\u88F9\u4F46\u537B\u675F\u4E4B\u9AD8\u95A3\u7684\u6587\u7269\uFF0C\u5FC5\u9808\u662F\u4EFB\u4F55\u4EBA\u90FD\u5BB9\u6613\u89AA\u8FD1\u7684\u7D50\u7DE3\u54C1\u3002\n");
        br8 = element("br");
        t13 = text("\u6211\u5011\u7121\u6CD5\u5BB9\u5FCD\u4E00\u5BB6\u65E5\u672C\u66F8\u5546\u9650\u5236\u4F5B\u7D93\u6D41\u901A\u65B9\u5F0F\uFF0C\u6211\u5011\u5FC5\u9808\u634D\u885B\u4F5B\u7D93\u300C\u4E09\u6839\u666E\u88AB\u300D\u7684\u81EA\u7531\u3002\n");
        br9 = element("br");
        br10 = element("br");
        t14 = text("\u5982\u4ECA\u6211\u5011\u64C1\u6709\u5E7E\u9805\u524D\u4EBA\u96E3\u4EE5\u60F3\u50CF\u7684\u6280\u8853\u689D\u4EF6\uFF0C\u6B63\u662F\u6253\u7834\u9019\u500B\u5C37\u5C2C\u5C40\u9762\u7684\u5927\u597D\u6A5F\u6703\u3002\n");
        br11 = element("br");
        t15 = text("\u4E00\uFF09\u5927\u6B63\u85CF\u8003\u5BDF\u4E86\u591A\u500B\u4F5B\u7D93\u7248\u672C\uFF0C\u5C07\u7D93\u6587\u7684\u5DEE\u7570\u88FD\u6210\u6821\u52D8\uFF0C\u7BC0\u7701\u4E86\u5B78\u8005\u8490\u96C6\u8CC7\u6599\u7684\u6642\u9593\uFF0C\u9019\u662F\u5927\u6B63\u85CF\u7684\u6838\u5FC3\u50F9\u503C\u3002\u56E0\u70BA\u5728\u7D19\u672C\u6642\u4EE3\uFF0C\u4E0D\u53EF\u80FD\u4EBA\u4EBA\u5750\u64C1\u6240\u6709\u7248\u672C\u7684\u4F5B\u7D93\uFF0C\u6821\u52D8\u5728\u67D0\u500B\u610F\u7FA9\u4E0A\u8D77\u5230\uFF0C\u540C\u6642\u53C3\u7167\u591A\u500B\u7248\u672C\u7684\u4F5C\u7528\u3002\n");
        br12 = element("br");
        t16 = text("\u4F46\u6821\u52D8\u7562\u7ADF\u662F\u4E8C\u624B\u8CC7\u6599\uFF0C\u4FDD\u771F\u5EA6\u9060\u4E0D\u5982\u539F\u59CB\u6587\u7269\uFF0C\u5982\u4ECA\u6240\u6709\u7D93\u6587\u6383\u5716\u6A94\uFF08\u516C\u6709\u8CA1\u7522\uFF09\u5F97\u4EE5\u7D0D\u5165\u884C\u52D5\u8F09\u5177\uFF0C\u53EA\u8981\u5EFA\u7ACB\u4E86\u5716\u6A94\u4E4B\u9593\u7684\u5C0D\u7167\u95DC\u4FC2\uFF0C\u5F9E\u4EFB\u4F55\u4E00\u6BB5\u7D93\u6587\u53EF\u8F15\u6613\u5730\u8ABF\u95B1\u6240\u6709\u7248\u672C\u7684\u539F\u59CB\u5716\u6A94\uFF0C\u6821\u52D8\u4E4B\u91CD\u8981\u6027\u5927\u6E1B\u3002\n");
        br13 = element("br");
        t17 = text("\u4E8C\uFF09\u53E4\u4EE3\u4F5B\u7D93\u4E3B\u8981\u662F\u5370\u5EA6\u6587\u660E\u548C\u4E2D\u83EF\u6587\u660E\uFF08\u4EE5\u53CA\u5169\u8005\u5E45\u5C04\u5340\u57DF\uFF09\u7684\u7D50\u6676\uFF0C\u4F46\u53D7\u9650\u65BC\u5F7C\u6B64\u9AD8\u6602\u7684\u4EA4\u6D41\u6210\u672C\uFF08\u7576\u5E74\u53D6\u7D93\u672C\u8EAB\u5C31\u662F\u4E5D\u6B7B\u4E00\u751F\u7684\u5192\u96AA\uFF09\uFF0C\u5176\u7DE8\u88FD\u9AD4\u4F8B\u4E0D\u53EF\u80FD\u6709\u4E8B\u5148\u5546\u8B70\u597D\u7684\u898F\u7BC4\uFF0C\u9019\u5C31\u9020\u6210\u5404\u7A2E\u7248\u672C\u548C\u8A9E\u7CFB\u7684\u4F5B\u7D93\u5F88\u96E3\u5F7C\u6B64\u53C3\u7167\u9A57\u8B49\uFF0C\u4E5F\u8B93\u9B5A\u76EE\u6DF7\u73E0\u7684\u73FE\u8C61\u96E3\u4EE5\u675C\u7D55\u8207\u9632\u72AF\u3002\n");
        br14 = element("br");
        t18 = text("\u4E09\uFF09\u5C07\u6240\u6709\u7248\u672C\u548C\u8B6F\u672C\u7684\u4F5B\u7D93\u6574\u5408\uFF0C\u7D71\u4E00\u53C3\u7167\u7CFB\u7D71\u7684\u5DE5\u4F5C\uFF0C\u6211\u5011\u7A31\u4E4B\u70BA\u300C\u7D93\u540C\u8ECC\u300D\uFF0C\u4E0D\u6B62\u662F\u7D93\u6587\u76EE\u9304\u5C64\u7D1A\u7684\u5C0D\u7167\uFF08\u76EE\u9304\u63D0\u4F9B\u67D0\u6A19\u984C\u7684\u5404\u7A2E\u7248\u672C\u548C\u8B6F\u672C\u7684\u6536\u9304\u60C5\u6CC1\u53CA\u6240\u5728\u4F4D\u7F6E\uFF09\uFF0C\u800C\u662F\u66F4\u9032\u4E00\u6B65\u505A\u5230\u6BCF\u500B\u53E5\u5B50\u7684\u7CBE\u6E96\u5C0D\u61C9\u3002\n");
        br15 = element("br");
        t19 = text("\u8209\u4F8B\u4F86\u8AAA\uFF0C\u7D66\u5B9A\u4EFB\u4F55\u4E00\u53E5\u7D93\u6587\uFF0C\u96FB\u8166\u5C07\u6709\u80FD\u529B\u544A\u77E5\u5C0D\u61C9\u7684\u539F\u6587\u4EE5\u53CA\u5404\u7A2E\u8B6F\u6587\uFF0C\u53CD\u4E4B\u4EA6\u7136\u3002\u5373\u6240\u8B02\u7684\u300C\u5E73\u884C\u8A9E\u6599\u5EAB\u300D\uFF0C\u9019\u4E5F\u662F\u81EA\u7136\u8A9E\u8A00\u8655\u7406\uFF08\u5982\u6A5F\u5668\u7FFB\u8B6F\uFF09\u7684\u57FA\u790E\u6750\u6599\u3002\n");
        br16 = element("br");
        t20 = text("\u56DB\uFF09\u300C\u7D93\u540C\u8ECC\u300D\uFF0C\u5373\u4F5B\u7D93\u53E5\u5B50\u5C64\u7D1A\u7684\u5C0D\u61C9\uFF0C\u63D0\u4F9B\u4E86\u6BD4\u8FAD\u5178\u66F4\u6709\u6548\u7684\u5B78\u7FD2\u6750\u6599\uFF0C\u4E5F\u53EF\u4EE5\u5316\u89E3\u8FAD\u5178\u7121\u6CD5\u8655\u7406\u7684\u8A9E\u5883(context)\u548C\u591A\u7FA9(ambiguity) \u95DC\u4FC2\u3002\n");
        br17 = element("br");
        t21 = text("\u95B1\u8B80\u53E4\u6587\u96E3\u9EDE\u4E0D\u5728\u67E5\u5B57\u5178\u672C\u8EAB\uFF0C\u800C\u662F\u67E5\u5230\u4E4B\u5F8C\uFF0C\u7FA9\u9805(senses)\u592A\u591A\uFF0C\u6311\u9078\u56F0\u96E3\uFF0C\u4E00\u500B\u53E5\u5B50\u53EA\u8981\u6709\u5E7E\u500B\u751F\u5B57\uFF0C\u6BCF\u500B\u751F\u5B57\u53C8\u6709\u5E7E\u500B\u53EF\u80FD\u7684\u89E3\u91CB\uFF0C\u7522\u751F\u6B67\u7FA9\u7684\u73FE\u8C61\u5C07\u5448\u6307\u6578\u4E0A\u5347\u3002\n");
        br18 = element("br");
        t22 = text("\u4E94\uFF09\u8FD1\u5E74\u4F86\u96FB\u8166\u8D8A\u4F86\u8D8A\u5FEB\uFF0C\u5373\u4F7F\u662F\u624B\u6A5F\u4E5F\u80FD\u4EE5\u4E0D\u5230\u4E00\u79D2\u4EE5\u67E5\u627E\u6574\u90E8\u5927\u85CF\u7D93\u3002\u65BC\u662F\u74F6\u9838\u662F\u4F7F\u7528\u8005\u8F38\u5165\u6587\u5B57\u7684\u901F\u5EA6\uFF0C\u4EE5\u524D\u662F\u4EBA\u7B49\u96FB\u8166\uFF0C\u5982\u4ECA\u5247\u662F\u53CD\u904E\u4F86\u3002\n");
        br19 = element("br");
        t23 = text("\u56E0\u6B64\uFF0C\u8EDF\u4EF6\u7684\u91CD\u9EDE\u61C9\u8A72\u76E1\u91CF\u638C\u63E1\u8B80\u8005\u6240\u5728\u7684\u8A9E\u5883\uFF0C\u505A\u4E00\u4E9B\u80CC\u666F\u5DE5\u4F5C\u3002\u8209\u4F8B\u800C\u8A00\uFF0C\u8B80\u8005\u5361\u505C\u5728\u67D0\u500B\u9801\u9762\uFF0C\u80CC\u666F\u7A0B\u5F0F\u5C31\u958B\u59CB\u641C\u7F85\u5F59\u6574\u8A72\u9801\u7684\u76F8\u95DC\u8A0A\u606F\uFF0C\n");
        br20 = element("br");
        t24 = text("\u5373\uFF1A\u9019\u4E00\u9801\u6709\u54EA\u4E9B\u8271\u6F80\u540D\u8A5E\uFF1F\u54EA\u4E9B\u6CD5\u5E2B\u8B1B\u904E\u9019\u6BB5\u7D93\u6587\uFF1F\u54EA\u4E9B\u5176\u4ED6\u7D93\u6587\u53EF\u4EE5\u5E6B\u52A9\u95B1\u8B80\u7406\u89E3\u9019\u9801\u7D93\u6587\uFF1F\n");
        br21 = element("br");
        t25 = text("\u516D\uFF09\u53E4\u4EE3\u85CF\u7D93\u96D5\u523B\u8017\u8CBB\u7684\u4EBA\u529B\u7269\u529B\u6975\u70BA\u9A5A\u4EBA\uFF0C\u5F9E\u8B6F\u7D93\u3001\u7DE8\u8F2F\u5718\u968A\uFF0C\u5230\u5A92\u6750\u7684\u6E96\u5099\uFF0C\u6284\u5BEB\u523B\u5B57\u5DE5\uFF0C\u5370\u5237\u53CA\u767C\u884C\u6D41\u901A\uFF0C\u662F\u975E\u5E38\u9F90\u5927\u7684\u751F\u7522\u93C8\u3002\n");
        br22 = element("br");
        br23 = element("br");
        t26 = text("\u6210\u529F\u7684\u85CF\u7D93\uFF0C\u81F3\u5C11\u6709\u5169\u500B\u5FC5\u8981\u689D\u4EF6\uFF0C\u4E00\u662F\u653F\u6B0A\u7684\u540C\u610F\uFF0C\u4E8C\u662F\u8DB3\u5920\u7684\u7D93\u8CBB\u3002\u7687\u5E1D\u672A\u5FC5\u771F\u5FC3\u4FE1\u4F5B\uFF0C\u548C\u5C1A\u4E5F\u672A\u5FC5\u670D\u81BA\u7D71\u6CBB\uFF0C\u4F46\u4F5B\u7D93\u60F3\u8981\u5B58\u6D3B\uFF0C\u5377\u9996\u5C11\u4E0D\u4E86\u6B4C\u529F\u980C\u5FB7\u3002\n");
        br24 = element("br");
        t27 = text("\u8D0A\u52A9\u523B\u7D93\u7684\uFF0C\u5A66\u5973\u662F\u4E3B\u529B\uFF0C\u5F8C\u5BAE\u5983\u5973\u7684\u6350\u737B\u8A18\u9304\uFF0C\u5728\u85CF\u7D93\u4E2D\u4FDD\u7559\u5F88\u591A\u3002\n");
        br25 = element("br");
        t28 = text("\u53F0\u7063\u7B2C\u4E00\u90E8\u5927\u6B63\u85CF\uFF0C\u662F\u5B6B\u5F35\u6E05\u63DA\uFF08\u5B6B\u7ACB\u4EBA\u5C07\u8ECD\u592B\u4EBA\uFF09\u8B8A\u8CE3\u9996\u98FE\uFF0C\u5F9E\u65E5\u672C\u904B\u4F86\u7684\u3002\n");
        br26 = element("br");
        t29 = text("\u5982\u4ECA\u6211\u5011\u505A\u624B\u6A5F\u7248\uFF0C\u4E5F\u61C9\u8A72\u6BD4\u7167\u53E4\u4EBA\u7684\u8FA6\u6CD5\uFF0C\u5C07\u7DC7\u7D20\u4E8C\u773E\u7684\u8B77\u6301\u4E8B\u8E5F\u7DE8\u5165\u85CF\u7D93\uFF0C\u6211\u5011\u9019\u4E00\u4EE3\u4E5F\u4F5C\u51FA\u4E86\u7121\u6127\u5148\u4EBA\u3001\u8B93\u5F8C\u4EBA\u611F\u5FF5\u7684\u8CA2\u737B\u3002\n");
        br27 = element("br");
        br28 = element("br");
        t30 = text("\u56E0\u6B64\uFF0C\u6211\u5011\u6C7A\u5FC3\u4EE5\u5DF2\u6210\u70BA\u4EBA\u985E\u516C\u5171\u8CA1\u7522\u7684\u4E2D\u571F\u5927\u85CF\u7D93\u70BA\u57FA\u790E\u6750\u6599\uFF0C\u5F9E\u982D\u505A\u8D77\uFF0C\u521D\u6B65\u8A08\u5283\u662F\uFF1A\n");
        br29 = element("br");
        t31 = text("\u4E00\uFF09\u4EE5\u5C71\u6771\u5716\u66F8\u9928\u516C\u5E03\u4E4B\u5341\u4E03\u842C\u62CD\u300C\u9AD8\u6E05\u6C38\u6A02\u5317\u85CF\u5F69\u5716\u300D\u70BA\u57FA\u790E\uFF0C\u88C1\u5207\u6210\u9069\u5408\u624B\u6A5F\u95B1\u8B80\u768450\u842C\u6298\uFF08\u6BCF\u62CD\u4E09\u6298\uFF09\u3002\u6BCF\u62985\u884C\uFF0C\u6BCF\u884C17\u5B57\uFF0C\u517185\u500B\u5B57\u3002\n");
        br30 = element("br");
        t32 = text("\u4E8C\uFF09\u4EE5CBETA\u6821\u5C0D\u904E\u7684\u5927\u6B63\u85CF\u6587\u5B57\u6A94\u70BA\u5DE5\u4F5C\u5E95\u672C\uFF0C\u6309\u6C38\u6A02\u5317\u85CF\u7684\u7248\u5F0F\u9010\u53E5\u91CD\u6392\uFF0C\u9019\u6A23\u5C31\u5B8C\u5168\u64FA\u812B\u5927\u6B63\u85CF\u7684\u88FD\u7248\u6B0A\u3002\u52A0\u5DE5\u6210\u54C1\u63A1\u7528\u6700\u5BEC\u9B06\u7684\u6388\u6B0A\u65B9\u5F0F(CC0)\uFF0C\u9084\u4F5B\u7D93\u4EE5\u6700\u5927\u7684\u81EA\u7531\u3002\n");
        br31 = element("br");
        t33 = text("\u4E09\uFF09\u4F7F\u7528\u8005\u9EDE\u64CA\u7684\u5716\u6A94\u4EFB\u4F55\u4E00\u8655\u3001\u7ACB\u5373\u7531\u8EDF\u9AD4\u63DB\u7B97\u70BA\u5C0D\u61C9\u7684\u6587\u5B57\uFF0C\u53EF\u641C\u5C0B\u3001\u67E5\u5B57\u5178\u3001\u9023\u7D50\u539F\u6587\u3001\u8AA6\u8B80\u3001\u986F\u793A\u76F8\u95DC\u7684\u958B\u793A\u9304\u5F71\u7B49\u3002\n");
        br32 = element("br");
        t34 = text("\u56DB\uFF09\u53D6\u5F97\u8AF8\u5C71\u9577\u8001\u7684\u795D\u798F\uFF0C\u6211\u5011\u7684\u76EE\u6A19\u662F\u53EA\u8981\u6703\u6309\u624B\u6A5F\uFF0C\u90FD\u53EF\u4EE5\u60A0\u904A\u6CD5\u6D77\u3002\n");
        br33 = element("br");
        t35 = text("\u4E94\uFF09\u7531\u65BC\u6C92\u6709\u7248\u6B0A\u7684\u9650\u5236\uFF0C\u53EF\u4EE5\u5C07\u6B64\u6210\u679C\u8207\u7F6E\u5165\u5546\u54C1\u5E73\u677F\u96FB\u8166\uFF0C\u8D08\u8207\u7D93\u6FDF\u6B20\u767C\u9054\u5730\u5340\u7684\u50E7\u4EBA\uFF0C\u4EE5\u505A\u70BA\u570B\u969B\u6587\u5316\u4EA4\u6D41\u7684\u62CC\u624B\u79AE\u3002\n");
        create_component(endmarker.$$.fragment);
        attr(a0, "target", "_new");
        attr(a0, "href", "https://docs.google.com/document/d/16m-DGbSTMpM67WSWHaojbRRWtUi2FfovgkdeWhFitKk/edit?usp=sharing");
        attr(a1, "href", "https://www.daizoshuppan.jp/");
        attr(a1, "target", "_new");
        attr(a2, "href", "https://www.cbeta.org/copyright.php");
        attr(a2, "target", "_new");
      },
      m(target, anchor) {
        insert(target, div, anchor);
        append(div, a0);
        append(div, t1);
        append(div, br0);
        append(div, t2);
        append(div, br1);
        append(div, t3);
        append(div, br2);
        append(div, t4);
        append(div, br3);
        append(div, t5);
        append(div, br4);
        append(div, t6);
        append(div, br5);
        append(div, a1);
        append(div, t8);
        append(div, br6);
        append(div, t9);
        append(div, a2);
        append(div, t11);
        append(div, br7);
        append(div, t12);
        append(div, br8);
        append(div, t13);
        append(div, br9);
        append(div, br10);
        append(div, t14);
        append(div, br11);
        append(div, t15);
        append(div, br12);
        append(div, t16);
        append(div, br13);
        append(div, t17);
        append(div, br14);
        append(div, t18);
        append(div, br15);
        append(div, t19);
        append(div, br16);
        append(div, t20);
        append(div, br17);
        append(div, t21);
        append(div, br18);
        append(div, t22);
        append(div, br19);
        append(div, t23);
        append(div, br20);
        append(div, t24);
        append(div, br21);
        append(div, t25);
        append(div, br22);
        append(div, br23);
        append(div, t26);
        append(div, br24);
        append(div, t27);
        append(div, br25);
        append(div, t28);
        append(div, br26);
        append(div, t29);
        append(div, br27);
        append(div, br28);
        append(div, t30);
        append(div, br29);
        append(div, t31);
        append(div, br30);
        append(div, t32);
        append(div, br31);
        append(div, t33);
        append(div, br32);
        append(div, t34);
        append(div, br33);
        append(div, t35);
        mount_component(endmarker, div, null);
        current = true;
      },
      p: noop,
      i(local) {
        if (current)
          return;
        transition_in(endmarker.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(endmarker.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(div);
        destroy_component(endmarker);
      }
    };
  }
  var Project = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, null, create_fragment19, safe_not_equal, {});
    }
  };
  var project_default = Project;

  // src/styleintro.svelte
  function get_each_context9(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[2] = list[i];
    return child_ctx;
  }
  function create_each_block9(ctx) {
    let div;
    let t_value = (
      /*line*/
      ctx[2] + ""
    );
    let t;
    return {
      c() {
        div = element("div");
        t = text(t_value);
      },
      m(target, anchor) {
        insert(target, div, anchor);
        append(div, t);
      },
      p(ctx2, dirty) {
        if (dirty & /*lines*/
        1 && t_value !== (t_value = /*line*/
        ctx2[2] + ""))
          set_data(t, t_value);
      },
      d(detaching) {
        if (detaching)
          detach(div);
      }
    };
  }
  function create_fragment20(ctx) {
    let div;
    let each_value = (
      /*lines*/
      ctx[0]
    );
    let each_blocks = [];
    for (let i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block9(get_each_context9(ctx, each_value, i));
    }
    return {
      c() {
        div = element("div");
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
      },
      m(target, anchor) {
        insert(target, div, anchor);
        for (let i = 0; i < each_blocks.length; i += 1) {
          if (each_blocks[i]) {
            each_blocks[i].m(div, null);
          }
        }
      },
      p(ctx2, [dirty]) {
        if (dirty & /*lines*/
        1) {
          each_value = /*lines*/
          ctx2[0];
          let i;
          for (i = 0; i < each_value.length; i += 1) {
            const child_ctx = get_each_context9(ctx2, each_value, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
            } else {
              each_blocks[i] = create_each_block9(child_ctx);
              each_blocks[i].c();
              each_blocks[i].m(div, null);
            }
          }
          for (; i < each_blocks.length; i += 1) {
            each_blocks[i].d(1);
          }
          each_blocks.length = each_value.length;
        }
      },
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching)
          detach(div);
        destroy_each(each_blocks, detaching);
      }
    };
  }
  function instance17($$self, $$props, $$invalidate) {
    let lines;
    let $tosim;
    component_subscribe($$self, tosim, ($$value) => $$invalidate(1, $tosim = $$value));
    $$self.$$.update = () => {
      if ($$self.$$.dirty & /*$tosim*/
      2) {
        $:
          $$invalidate(0, lines = _(
            `\u6C38\u6A02\u85CF\uFF1A\u53EA\u662F\u7522\u54C1\u540D\u7A31\uFF0C\u4E0D\u662F\u6587\u737B\u5B78\u610F\u7FA9\u7684\u85CF\u7D93\u7248\u672C\u3002
\u5716\u7248\uFF1A\u4EE5\u5C71\u6771\u5716\u66F8\u9928\u85CF\u6C38\u6A02\u5317\u85CF\u70BA\u4E3B\uFF0C\u6574\u5377\u7F3A\u6F0F\u6216\u56B4\u91CD\u932F\u7248\uFF08\u5982\u589E\u58F9\u963F\u542B\u537723\uFF09\u6539\u7528\u540C\u9928\u6C38\u6A02\u5357\u85CF\uFF0C\u7F3A\u6F0F\u5E7E\u9801\u4EE5\u4E7E\u9686\u5927\u85CF\u7D93\u88DC\u4E4B\u3002
\u6587\u5B57\uFF1A\u4EE5CBETA\u70BA\u5E95\u672C\uFF0C\u53EA\u6709\u5B57\u6578\u4E0D\u4E00\u81F4\u7684\u60C5\u6CC1\u624D\u6703\u4FEE\u6539\uFF0C\u4E0D\u4FDD\u8B49\u8207\u5716\u7248\u4E00\u81F4\u3002
\u4E0D\u662F\u6C38\u6A02\u5317\u85CF\u3001\u4E5F\u4E0D\u662F\u5927\u6B63\u85CF\u7684\u96FB\u5B50\u7248\uFF0C\u53EA\u662F\u70BA\u4E86\u65B9\u4FBF\u641C\u5C0B\uFF0C\u4E0D\u9069\u5408\u5B78\u8853\u5F15\u7528\u3002
\u6A19\u9EDE\uFF1A\u4F7F\u7528CBETA bookcase_v074_20221027 \u7248\u7D93\u6587\u7684\u6A19\u9EDE\u3002
\u8072\u97F3\uFF1A\u70BA\u7BC0\u7D04\u5E36\u5BEC\u964D\u70BA48~96kpbs\uFF0C\u9700\u8981\u539F\u59CB\u97F3\u8CEA\uFF0C\u8ACB\u6253\u958B\u300C\u986F\u793A\u6CB9\u7BA1\u5F71\u7247\u9023\u7D50\u300D\u3002
\u552F\u540D\uFF1A\u6027\u7A7A\u552F\u540D\u7CFB\u7D93\u5178\u3002
\u552F\u5FC3\uFF1A\u771F\u5E38\u552F\u5FC3\u7CFB\u7D93\u5178\u3002
\u7D93\u865F\uFF1A\u56DB\u90E8\u963F\u542B\u4F7F\u7528\u5927\u6B63\u85CF\u7D93\u865F\u3002\u5916\u9023\u5DF4\u5229\u85CF\u4F7F\u7528\u7DEC\u7538\u7248\u7DE8\u865F\u3002
\u6587\u4EF6\u7D50\u69CB\uFF1A
\u66F8\u865F\uFF1A\u82F1\u6587\u5B57\uFF0Cagmm \uFF08\u4E2D\u963F\u542B\u7D93\uFF09
\u5377\u865F\uFF1A\u82F1\u6587\u5B57\u52A0\u5377\u6578\uFF0C\u5982agmm1\u3002\u6BCF\u5377\u5C0D\u61C9\u4E00\u500B\u5716\u7248\u58D3\u7E2E\u6A94\u3002
\u9805\u865F\uFF1A\u5C0D\u61C9\u5230\u76EE\u6B21\u7684\u4E00\u500B\u9805\u76EE\u3002
\u6BB5\u865F\uFF1A\u4E00\u6BB5\u7D93\u6587\u3002\u4E5F\u662F\u96DC\u963F\u542B\u7684\u4E00\u7D93\u3002
\u6587\u5B57\u6A94\u7684\u4E00\u884C\u70BA\u4E00\u53E5\u7D93\u6587\u3001\u641C\u5C0B\u7D50\u679C\u7684\u6700\u5C0F\u986F\u793A\u55AE\u5143\u3002

\u7121\u91CF\u58FD\u7D93\u53E5\u5B50\u5C0D\u9F4A\u672A\u5B8C\u6210\u3002`,
            $tosim
          ).split(/\r?\n/));
      }
    };
    return [lines, $tosim];
  }
  var Styleintro = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance17, create_fragment20, safe_not_equal, {});
    }
  };
  var styleintro_default = Styleintro;

  // src/materials.svelte
  function create_fragment21(ctx) {
    let t0_value = _("\u57FA\u65BC\u4EE5\u4E0B\u516C\u958B\u7D20\u6750\uFF1A") + "";
    let t0;
    let t1;
    let br0;
    let t2_value = _("\u6C38\u6A02\u5317\u85CF\u3001\u5357\u85CF\u5716\u6A94(\u5C71\u6771\u7701\u5716\u66F8\u9928)") + "";
    let t2;
    let t3;
    let br1;
    let t4_value = _("\u7D93\u6587\u53CA\u65B0\u5F0F\u6A19\u9EDE(CBETA)") + "";
    let t4;
    let t5;
    let br2;
    let t6_value = _("\u91D1\u525B\u7D93\u96C6\u8A3B(\u6731\u68E3)") + "";
    let t6;
    let t7;
    let br3;
    let t8;
    let a0;
    let t10;
    let br4;
    let t11_value = _("\u68B5\u6F22\u4F5B\u7D93\u5C0D\u52D8\u53E2\u66F8(\u9EC3\u5BF6\u751F\uFF0C\u4E2D\u570B\u793E\u6703\u79D1\u5B78\u51FA\u7248\u793E)") + "";
    let t11;
    let t12;
    let br5;
    let t13_value = _("\u56DB\u90E8\u963F\u542B\u76F8\u4F3C\u7D93\u6587\u5C0D\u7167\u8868") + "";
    let t13;
    let a1;
    let t15;
    let br6;
    let t16_value = _("\u4E00\u884C\u4F5B\u5B78\u8A5E\u5178\u4E4B\u8A5E\u689D") + "";
    let t16;
    let t17;
    let br7;
    let t18_value = _("\u6CB9\u7BA1\u516C\u958B\u8AA6\u7D93\u5F71\u7247") + "";
    let t18;
    let t19;
    let hr0;
    let t20;
    let t21_value = _("\u9032\u884C\u4EE5\u4E0B\u52A0\u5DE5\uFF1A") + "";
    let t21;
    let t22;
    let br8;
    let t23_value = _("\u6309\u624B\u6A5F\u6BD4\u4F8B\u88C1\u5716\u53CA\u4FEE\u5716") + "";
    let t23;
    let t24;
    let br9;
    let t25_value = _("\u6587\u5B57\u8207\u5716\u7247\u9010\u9801\u9010\u884C\u5C0D\u9F4A") + "";
    let t25;
    let t26;
    let br10;
    let t27_value = _("\u539F\u6587\u53CA\u5404\u7A2E\u8B6F\u672C\u9010\u53E5\u5C0D\u9F4A") + "";
    let t27;
    let t28;
    let br11;
    let t29_value = _("\u8AA6\u7D93\u8207\u5716\u7247\u540C\u6B65\u6642\u9593\u8EF8") + "";
    let t29;
    let t30;
    let hr1;
    let t31;
    let br12;
    let t32_value = _("\u6210\u54C1\u6578\u64DA\u5EAB\u5206\u4EAB\u65B9\u5F0F") + "";
    let t32;
    let t33;
    let br13;
    let a2;
    let t35;
    let endmarker;
    let current;
    endmarker = new endmarker_default({});
    return {
      c() {
        t0 = text(t0_value);
        t1 = space();
        br0 = element("br");
        t2 = text(t2_value);
        t3 = space();
        br1 = element("br");
        t4 = text(t4_value);
        t5 = space();
        br2 = element("br");
        t6 = text(t6_value);
        t7 = space();
        br3 = element("br");
        t8 = text("\u68B5\u6587\u539F\u5178 ");
        a0 = element("a");
        a0.textContent = "Digital Sanskrit Buddhist Canon";
        t10 = space();
        br4 = element("br");
        t11 = text(t11_value);
        t12 = space();
        br5 = element("br");
        t13 = text(t13_value);
        a1 = element("a");
        a1.textContent = "SuttaCentral";
        t15 = space();
        br6 = element("br");
        t16 = text(t16_value);
        t17 = space();
        br7 = element("br");
        t18 = text(t18_value);
        t19 = space();
        hr0 = element("hr");
        t20 = space();
        t21 = text(t21_value);
        t22 = space();
        br8 = element("br");
        t23 = text(t23_value);
        t24 = space();
        br9 = element("br");
        t25 = text(t25_value);
        t26 = space();
        br10 = element("br");
        t27 = text(t27_value);
        t28 = space();
        br11 = element("br");
        t29 = text(t29_value);
        t30 = space();
        hr1 = element("hr");
        t31 = space();
        br12 = element("br");
        t32 = text(t32_value);
        t33 = space();
        br13 = element("br");
        a2 = element("a");
        a2.textContent = `${_("CC0 1.0 \u901A\u7528\u516C\u5171\u9818\u57DF\u8CA2\u737B")}`;
        t35 = space();
        create_component(endmarker.$$.fragment);
        attr(a0, "target", "_new");
        attr(a0, "href", "https://www.dsbcproject.org/");
        attr(a1, "target", "_new");
        attr(a1, "href", "https://suttacentral.net/");
        attr(a2, "target", "_new");
        attr(a2, "href", "https://creativecommons.org/publicdomain/zero/1.0/deed.zh");
      },
      m(target, anchor) {
        insert(target, t0, anchor);
        insert(target, t1, anchor);
        insert(target, br0, anchor);
        insert(target, t2, anchor);
        insert(target, t3, anchor);
        insert(target, br1, anchor);
        insert(target, t4, anchor);
        insert(target, t5, anchor);
        insert(target, br2, anchor);
        insert(target, t6, anchor);
        insert(target, t7, anchor);
        insert(target, br3, anchor);
        insert(target, t8, anchor);
        insert(target, a0, anchor);
        insert(target, t10, anchor);
        insert(target, br4, anchor);
        insert(target, t11, anchor);
        insert(target, t12, anchor);
        insert(target, br5, anchor);
        insert(target, t13, anchor);
        insert(target, a1, anchor);
        insert(target, t15, anchor);
        insert(target, br6, anchor);
        insert(target, t16, anchor);
        insert(target, t17, anchor);
        insert(target, br7, anchor);
        insert(target, t18, anchor);
        insert(target, t19, anchor);
        insert(target, hr0, anchor);
        insert(target, t20, anchor);
        insert(target, t21, anchor);
        insert(target, t22, anchor);
        insert(target, br8, anchor);
        insert(target, t23, anchor);
        insert(target, t24, anchor);
        insert(target, br9, anchor);
        insert(target, t25, anchor);
        insert(target, t26, anchor);
        insert(target, br10, anchor);
        insert(target, t27, anchor);
        insert(target, t28, anchor);
        insert(target, br11, anchor);
        insert(target, t29, anchor);
        insert(target, t30, anchor);
        insert(target, hr1, anchor);
        insert(target, t31, anchor);
        insert(target, br12, anchor);
        insert(target, t32, anchor);
        insert(target, t33, anchor);
        insert(target, br13, anchor);
        insert(target, a2, anchor);
        insert(target, t35, anchor);
        mount_component(endmarker, target, anchor);
        current = true;
      },
      p: noop,
      i(local) {
        if (current)
          return;
        transition_in(endmarker.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(endmarker.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(t0);
        if (detaching)
          detach(t1);
        if (detaching)
          detach(br0);
        if (detaching)
          detach(t2);
        if (detaching)
          detach(t3);
        if (detaching)
          detach(br1);
        if (detaching)
          detach(t4);
        if (detaching)
          detach(t5);
        if (detaching)
          detach(br2);
        if (detaching)
          detach(t6);
        if (detaching)
          detach(t7);
        if (detaching)
          detach(br3);
        if (detaching)
          detach(t8);
        if (detaching)
          detach(a0);
        if (detaching)
          detach(t10);
        if (detaching)
          detach(br4);
        if (detaching)
          detach(t11);
        if (detaching)
          detach(t12);
        if (detaching)
          detach(br5);
        if (detaching)
          detach(t13);
        if (detaching)
          detach(a1);
        if (detaching)
          detach(t15);
        if (detaching)
          detach(br6);
        if (detaching)
          detach(t16);
        if (detaching)
          detach(t17);
        if (detaching)
          detach(br7);
        if (detaching)
          detach(t18);
        if (detaching)
          detach(t19);
        if (detaching)
          detach(hr0);
        if (detaching)
          detach(t20);
        if (detaching)
          detach(t21);
        if (detaching)
          detach(t22);
        if (detaching)
          detach(br8);
        if (detaching)
          detach(t23);
        if (detaching)
          detach(t24);
        if (detaching)
          detach(br9);
        if (detaching)
          detach(t25);
        if (detaching)
          detach(t26);
        if (detaching)
          detach(br10);
        if (detaching)
          detach(t27);
        if (detaching)
          detach(t28);
        if (detaching)
          detach(br11);
        if (detaching)
          detach(t29);
        if (detaching)
          detach(t30);
        if (detaching)
          detach(hr1);
        if (detaching)
          detach(t31);
        if (detaching)
          detach(br12);
        if (detaching)
          detach(t32);
        if (detaching)
          detach(t33);
        if (detaching)
          detach(br13);
        if (detaching)
          detach(a2);
        if (detaching)
          detach(t35);
        destroy_component(endmarker, detaching);
      }
    };
  }
  var Materials = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, null, create_fragment21, safe_not_equal, {});
    }
  };
  var materials_default = Materials;

  // src/checkupdate.svelte
  function get_each_context10(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[8] = list[i][0];
    child_ctx[9] = list[i][1];
    child_ctx[11] = i;
    return child_ctx;
  }
  function create_if_block_16(ctx) {
    let span;
    let t_value = _(
      "\u66F4\u65B0",
      /*$tosim*/
      ctx[2]
    ) + /*ptkname*/
    ctx[8] + "";
    let t;
    let mounted;
    let dispose;
    function click_handler() {
      return (
        /*click_handler*/
        ctx[5](
          /*idx*/
          ctx[11]
        )
      );
    }
    return {
      c() {
        span = element("span");
        t = text(t_value);
        attr(span, "aria-hidden", "true");
        attr(span, "class", "clickable hyperlink needupdate");
      },
      m(target, anchor) {
        insert(target, span, anchor);
        append(span, t);
        if (!mounted) {
          dispose = listen(span, "click", click_handler);
          mounted = true;
        }
      },
      p(new_ctx, dirty) {
        ctx = new_ctx;
        if (dirty & /*$tosim, updatestatus*/
        5 && t_value !== (t_value = _(
          "\u66F4\u65B0",
          /*$tosim*/
          ctx[2]
        ) + /*ptkname*/
        ctx[8] + ""))
          set_data(t, t_value);
      },
      d(detaching) {
        if (detaching)
          detach(span);
        mounted = false;
        dispose();
      }
    };
  }
  function create_each_block10(ctx) {
    let if_block_anchor;
    let if_block = (
      /*status*/
      ctx[9] == "hasupdate" && create_if_block_16(ctx)
    );
    return {
      c() {
        if (if_block)
          if_block.c();
        if_block_anchor = empty();
      },
      m(target, anchor) {
        if (if_block)
          if_block.m(target, anchor);
        insert(target, if_block_anchor, anchor);
      },
      p(ctx2, dirty) {
        if (
          /*status*/
          ctx2[9] == "hasupdate"
        ) {
          if (if_block) {
            if_block.p(ctx2, dirty);
          } else {
            if_block = create_if_block_16(ctx2);
            if_block.c();
            if_block.m(if_block_anchor.parentNode, if_block_anchor);
          }
        } else if (if_block) {
          if_block.d(1);
          if_block = null;
        }
      },
      d(detaching) {
        if (if_block)
          if_block.d(detaching);
        if (detaching)
          detach(if_block_anchor);
      }
    };
  }
  function create_if_block9(ctx) {
    let t_value = _(
      "\u6578\u64DA\u5EAB\u662F\u6700\u65B0\u7248",
      /*$tosim*/
      ctx[2]
    ) + "";
    let t;
    return {
      c() {
        t = text(t_value);
      },
      m(target, anchor) {
        insert(target, t, anchor);
      },
      p(ctx2, dirty) {
        if (dirty & /*$tosim*/
        4 && t_value !== (t_value = _(
          "\u6578\u64DA\u5EAB\u662F\u6700\u65B0\u7248",
          /*$tosim*/
          ctx2[2]
        ) + ""))
          set_data(t, t_value);
      },
      d(detaching) {
        if (detaching)
          detach(t);
      }
    };
  }
  function create_fragment22(ctx) {
    let t0;
    let t1;
    let t2;
    let if_block_anchor;
    let each_value = (
      /*updatestatus*/
      ctx[0]
    );
    let each_blocks = [];
    for (let i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block10(get_each_context10(ctx, each_value, i));
    }
    let if_block = !/*$hasupdate*/
    ctx[3] && create_if_block9(ctx);
    return {
      c() {
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        t0 = space();
        t1 = text(
          /*downloadmsg*/
          ctx[1]
        );
        t2 = space();
        if (if_block)
          if_block.c();
        if_block_anchor = empty();
      },
      m(target, anchor) {
        for (let i = 0; i < each_blocks.length; i += 1) {
          if (each_blocks[i]) {
            each_blocks[i].m(target, anchor);
          }
        }
        insert(target, t0, anchor);
        insert(target, t1, anchor);
        insert(target, t2, anchor);
        if (if_block)
          if_block.m(target, anchor);
        insert(target, if_block_anchor, anchor);
      },
      p(ctx2, [dirty]) {
        if (dirty & /*updateptk, _, $tosim, updatestatus*/
        21) {
          each_value = /*updatestatus*/
          ctx2[0];
          let i;
          for (i = 0; i < each_value.length; i += 1) {
            const child_ctx = get_each_context10(ctx2, each_value, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
            } else {
              each_blocks[i] = create_each_block10(child_ctx);
              each_blocks[i].c();
              each_blocks[i].m(t0.parentNode, t0);
            }
          }
          for (; i < each_blocks.length; i += 1) {
            each_blocks[i].d(1);
          }
          each_blocks.length = each_value.length;
        }
        if (dirty & /*downloadmsg*/
        2)
          set_data(
            t1,
            /*downloadmsg*/
            ctx2[1]
          );
        if (!/*$hasupdate*/
        ctx2[3]) {
          if (if_block) {
            if_block.p(ctx2, dirty);
          } else {
            if_block = create_if_block9(ctx2);
            if_block.c();
            if_block.m(if_block_anchor.parentNode, if_block_anchor);
          }
        } else if (if_block) {
          if_block.d(1);
          if_block = null;
        }
      },
      i: noop,
      o: noop,
      d(detaching) {
        destroy_each(each_blocks, detaching);
        if (detaching)
          detach(t0);
        if (detaching)
          detach(t1);
        if (detaching)
          detach(t2);
        if (if_block)
          if_block.d(detaching);
        if (detaching)
          detach(if_block_anchor);
      }
    };
  }
  function instance18($$self, $$props, $$invalidate) {
    let $tosim;
    let $hasupdate;
    component_subscribe($$self, tosim, ($$value) => $$invalidate(2, $tosim = $$value));
    component_subscribe($$self, hasupdate, ($$value) => $$invalidate(3, $hasupdate = $$value));
    let updatestatus = [];
    let needupdate = 0;
    onMount(async () => {
      $$invalidate(0, updatestatus = allptks.map((it) => [it, "checking"]));
      needupdate = allptks.length;
      for (let i = 0; i < allptks.length; i++) {
        const same = await isLatest(allptks[i] + ".ptk", CacheName);
        $$invalidate(0, updatestatus[i][1] = same ? "" : "hasupdate", updatestatus);
        if (same)
          needupdate--;
      }
      hasupdate.set(needupdate > 0);
      $$invalidate(0, updatestatus);
    });
    let downloading2 = false, downloadmsg = "";
    const updateptk = async (idx2) => {
      const name2 = updatestatus[idx2][0];
      if (downloading2)
        return;
      downloading2 = true;
      const res = await downloadToCache(CacheName, name2 + ".ptk?" + (/* @__PURE__ */ new Date()).toISOString(), (msg) => {
        $$invalidate(1, downloadmsg = msg);
      });
      poolDel(name2);
      const buf = await res.arrayBuffer();
      await openPtk(name2, new Uint8Array(buf));
      downloading2 = false;
      $$invalidate(0, updatestatus[idx2][1] = "", updatestatus);
      $$invalidate(0, updatestatus);
      $$invalidate(1, downloadmsg = "");
      needupdate--;
      hasupdate.set(needupdate > 0);
    };
    const click_handler = (idx2) => updateptk(idx2);
    return [updatestatus, downloadmsg, $tosim, $hasupdate, updateptk, click_handler];
  }
  var Checkupdate = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance18, create_fragment22, safe_not_equal, {});
    }
  };
  var checkupdate_default = Checkupdate;

  // src/comps/statebutton.svelte
  function create_fragment23(ctx) {
    let span1;
    let span0;
    let raw_value = (
      /*highlight*/
      ctx[4](
        /*caption*/
        ctx[1],
        /*selectedIndex*/
        ctx[0]
      ) + ""
    );
    let span1_aria_hidden_value;
    let mounted;
    let dispose;
    return {
      c() {
        span1 = element("span");
        span0 = element("span");
        attr(span1, "class", "statebutton");
        attr(
          span1,
          "title",
          /*title*/
          ctx[3]
        );
        attr(span1, "aria-hidden", span1_aria_hidden_value = true);
        toggle_class(
          span1,
          "disabled",
          /*disabled*/
          ctx[2]
        );
        toggle_class(
          span1,
          "unselected",
          /*selectedIndex*/
          ctx[0] == -1
        );
      },
      m(target, anchor) {
        insert(target, span1, anchor);
        append(span1, span0);
        span0.innerHTML = raw_value;
        if (!mounted) {
          dispose = listen(
            span1,
            "click",
            /*click*/
            ctx[5]
          );
          mounted = true;
        }
      },
      p(ctx2, [dirty]) {
        if (dirty & /*caption, selectedIndex*/
        3 && raw_value !== (raw_value = /*highlight*/
        ctx2[4](
          /*caption*/
          ctx2[1],
          /*selectedIndex*/
          ctx2[0]
        ) + ""))
          span0.innerHTML = raw_value;
        ;
        if (dirty & /*title*/
        8) {
          attr(
            span1,
            "title",
            /*title*/
            ctx2[3]
          );
        }
        if (dirty & /*disabled*/
        4) {
          toggle_class(
            span1,
            "disabled",
            /*disabled*/
            ctx2[2]
          );
        }
        if (dirty & /*selectedIndex*/
        1) {
          toggle_class(
            span1,
            "unselected",
            /*selectedIndex*/
            ctx2[0] == -1
          );
        }
      },
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching)
          detach(span1);
        mounted = false;
        dispose();
      }
    };
  }
  function instance19($$self, $$props, $$invalidate) {
    let { onclick = null } = $$props;
    let { disabled = false } = $$props;
    let { title = "" } = $$props;
    let { states = {} } = $$props;
    let { storeid = null } = $$props;
    let { styles = null } = $$props;
    let { caption: caption3 = "" } = $$props;
    let unselectedcaption = caption3;
    let { unselectable = false } = $$props;
    const statekeys = Object.keys(states);
    let { selectedIndex = storeid && statekeys.indexOf(get_store_value(storeid).toString()) || -1 } = $$props;
    if (selectedIndex == -1 && !unselectable) {
      selectedIndex = 0;
      if (storeid && get_store_value(storeid).toString() !== statekeys[selectedIndex])
        storeid.set(statekeys[selectedIndex]);
    }
    const setcaption = () => {
      if (storeid)
        $$invalidate(1, caption3 = states[get_store_value(storeid)]);
      else
        $$invalidate(1, caption3 = selectedIndex == -1 ? unselectedcaption : states[selectedIndex]);
    };
    const highlight = (str, selectedIndex2) => {
      if (!styles)
        return str;
      return str.replace(/\$(\w+)/g, (m4, m1) => {
        if (typeof styles[m1] == "string") {
          return styles[m1];
        } else if (typeof styles == "function") {
          return styles(m1);
        } else {
          return get_store_value(styles[m1]) || "auto";
        }
      });
    };
    const click = (evt) => {
      if (disabled)
        return;
      $$invalidate(0, selectedIndex++, selectedIndex);
      if (selectedIndex >= statekeys.length) {
        if (unselectable) {
          if (selectedIndex == -1)
            $$invalidate(0, selectedIndex = 0);
          else
            $$invalidate(0, selectedIndex = -1);
        } else
          $$invalidate(0, selectedIndex = 0);
      }
      if (storeid)
        storeid.set(statekeys[selectedIndex]);
      onclick && onclick(selectedIndex);
    };
    onMount(() => setcaption());
    $$self.$$set = ($$props2) => {
      if ("onclick" in $$props2)
        $$invalidate(6, onclick = $$props2.onclick);
      if ("disabled" in $$props2)
        $$invalidate(2, disabled = $$props2.disabled);
      if ("title" in $$props2)
        $$invalidate(3, title = $$props2.title);
      if ("states" in $$props2)
        $$invalidate(7, states = $$props2.states);
      if ("storeid" in $$props2)
        $$invalidate(8, storeid = $$props2.storeid);
      if ("styles" in $$props2)
        $$invalidate(9, styles = $$props2.styles);
      if ("caption" in $$props2)
        $$invalidate(1, caption3 = $$props2.caption);
      if ("unselectable" in $$props2)
        $$invalidate(10, unselectable = $$props2.unselectable);
      if ("selectedIndex" in $$props2)
        $$invalidate(0, selectedIndex = $$props2.selectedIndex);
    };
    $$self.$$.update = () => {
      if ($$self.$$.dirty & /*selectedIndex*/
      1) {
        $:
          setcaption(selectedIndex);
      }
    };
    return [
      selectedIndex,
      caption3,
      disabled,
      title,
      highlight,
      click,
      onclick,
      states,
      storeid,
      styles,
      unselectable
    ];
  }
  var Statebutton = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance19, create_fragment23, safe_not_equal, {
        onclick: 6,
        disabled: 2,
        title: 3,
        states: 7,
        storeid: 8,
        styles: 9,
        caption: 1,
        unselectable: 10,
        selectedIndex: 0
      });
    }
  };
  var statebutton_default = Statebutton;

  // src/about.svelte
  function create_else_block_12(ctx) {
    let span;
    let mounted;
    let dispose;
    return {
      c() {
        span = element("span");
        span.textContent = `${_("\u95DC\u65BC")}`;
        attr(span, "aria-hidden", "true");
        attr(span, "class", "clickable");
        toggle_class(
          span,
          "selected",
          /*show*/
          ctx[0] == 5
        );
      },
      m(target, anchor) {
        insert(target, span, anchor);
        if (!mounted) {
          dispose = listen(
            span,
            "click",
            /*toggleshowproject*/
            ctx[15]
          );
          mounted = true;
        }
      },
      p(ctx2, dirty) {
        if (dirty & /*show*/
        1) {
          toggle_class(
            span,
            "selected",
            /*show*/
            ctx2[0] == 5
          );
        }
      },
      d(detaching) {
        if (detaching)
          detach(span);
        mounted = false;
        dispose();
      }
    };
  }
  function create_if_block_64(ctx) {
    let span;
    let mounted;
    let dispose;
    return {
      c() {
        span = element("span");
        span.textContent = `${_("\u9805\u76EE")}`;
        attr(span, "aria-hidden", "true");
        attr(span, "class", "clickable");
        toggle_class(
          span,
          "selected",
          /*show*/
          ctx[0] == 6
        );
      },
      m(target, anchor) {
        insert(target, span, anchor);
        if (!mounted) {
          dispose = listen(
            span,
            "click",
            /*toggleshowstyle*/
            ctx[14]
          );
          mounted = true;
        }
      },
      p(ctx2, dirty) {
        if (dirty & /*show*/
        1) {
          toggle_class(
            span,
            "selected",
            /*show*/
            ctx2[0] == 6
          );
        }
      },
      d(detaching) {
        if (detaching)
          detach(span);
        mounted = false;
        dispose();
      }
    };
  }
  function create_key_block_22(ctx) {
    let span0;
    let t1;
    let span1;
    let t3;
    let span2;
    let t5;
    let span3;
    let t7;
    let show_if;
    let if_block_anchor;
    let mounted;
    let dispose;
    function select_block_type(ctx2, dirty) {
      if (dirty & /*$vip*/
      16)
        show_if = null;
      if (show_if == null)
        show_if = !!/*$vip*/
        (ctx2[4] && getVip("title"));
      if (show_if)
        return create_if_block_64;
      return create_else_block_12;
    }
    let current_block_type = select_block_type(ctx, -1);
    let if_block = current_block_type(ctx);
    return {
      c() {
        span0 = element("span");
        span0.textContent = `${_("\u8B77\u6301")}`;
        t1 = space();
        span1 = element("span");
        span1.textContent = "\u82B3\u540D";
        t3 = space();
        span2 = element("span");
        span2.textContent = "\u4F19\u4F34";
        t5 = space();
        span3 = element("span");
        span3.textContent = "\u7D20\u6750";
        t7 = space();
        if_block.c();
        if_block_anchor = empty();
        attr(span0, "aria-hidden", "true");
        attr(span0, "class", "clickable");
        toggle_class(
          span0,
          "selected",
          /*show*/
          ctx[0] == 1
        );
        attr(span1, "aria-hidden", "true");
        attr(span1, "class", "clickable");
        toggle_class(
          span1,
          "selected",
          /*show*/
          ctx[0] == 2
        );
        attr(span2, "aria-hidden", "true");
        attr(span2, "class", "clickable");
        toggle_class(
          span2,
          "selected",
          /*show*/
          ctx[0] == 3
        );
        attr(span3, "aria-hidden", "true");
        attr(span3, "class", "clickable");
        toggle_class(
          span3,
          "selected",
          /*show*/
          ctx[0] == 4
        );
      },
      m(target, anchor) {
        insert(target, span0, anchor);
        insert(target, t1, anchor);
        insert(target, span1, anchor);
        insert(target, t3, anchor);
        insert(target, span2, anchor);
        insert(target, t5, anchor);
        insert(target, span3, anchor);
        insert(target, t7, anchor);
        if_block.m(target, anchor);
        insert(target, if_block_anchor, anchor);
        if (!mounted) {
          dispose = [
            listen(
              span0,
              "click",
              /*toggleshowsponsoring*/
              ctx[10]
            ),
            listen(
              span1,
              "click",
              /*toggleshowdonors*/
              ctx[11]
            ),
            listen(
              span2,
              "click",
              /*toggleshowworkers*/
              ctx[12]
            ),
            listen(
              span3,
              "click",
              /*toggleshowmaterials*/
              ctx[13]
            )
          ];
          mounted = true;
        }
      },
      p(ctx2, dirty) {
        if (dirty & /*show*/
        1) {
          toggle_class(
            span0,
            "selected",
            /*show*/
            ctx2[0] == 1
          );
        }
        if (dirty & /*show*/
        1) {
          toggle_class(
            span1,
            "selected",
            /*show*/
            ctx2[0] == 2
          );
        }
        if (dirty & /*show*/
        1) {
          toggle_class(
            span2,
            "selected",
            /*show*/
            ctx2[0] == 3
          );
        }
        if (dirty & /*show*/
        1) {
          toggle_class(
            span3,
            "selected",
            /*show*/
            ctx2[0] == 4
          );
        }
        if (current_block_type === (current_block_type = select_block_type(ctx2, dirty)) && if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block.d(1);
          if_block = current_block_type(ctx2);
          if (if_block) {
            if_block.c();
            if_block.m(if_block_anchor.parentNode, if_block_anchor);
          }
        }
      },
      d(detaching) {
        if (detaching)
          detach(span0);
        if (detaching)
          detach(t1);
        if (detaching)
          detach(span1);
        if (detaching)
          detach(t3);
        if (detaching)
          detach(span2);
        if (detaching)
          detach(t5);
        if (detaching)
          detach(span3);
        if (detaching)
          detach(t7);
        if_block.d(detaching);
        if (detaching)
          detach(if_block_anchor);
        mounted = false;
        run_all(dispose);
      }
    };
  }
  function create_else_block5(ctx) {
    let span;
    let t0_value = _(
      "\u6C38\u6A02\u85CF",
      /*$tosim*/
      ctx[5]
    ) + "";
    let t0;
    let t1;
    let checkupdate;
    let t2;
    let previous_key = (
      /*$tosim*/
      ctx[5]
    );
    let t3;
    let hr;
    let t4;
    let slider0;
    let updating_value;
    let t5;
    let br0;
    let t6_value = _(
      "\u770B\u4E0D\u5230\u5716\u7248\u6700\u5E95\u4E0B\u7684\u884C\u624D\u9700\u8981\u8ABF\u6574",
      /*$tosim*/
      ctx[5]
    ) + "";
    let t6;
    let t7;
    let slider1;
    let updating_value_1;
    let t8;
    let br1;
    let t9;
    let previous_key_1 = (
      /*$tosim*/
      ctx[5]
    );
    let t10;
    let endmarker;
    let current;
    checkupdate = new checkupdate_default({});
    let key_block0 = create_key_block_12(ctx);
    function slider0_value_binding(value) {
      ctx[20](value);
    }
    let slider0_props = {
      max: 250,
      min: 80,
      $$slots: { caption: [create_caption_slot_1] },
      $$scope: { ctx }
    };
    if (
      /*textsz*/
      ctx[3] !== void 0
    ) {
      slider0_props.value = /*textsz*/
      ctx[3];
    }
    slider0 = new rangeslider_default({ props: slider0_props });
    binding_callbacks.push(() => bind(slider0, "value", slider0_value_binding));
    slider0.$on("input", debounce(
      /*setTextsize*/
      ctx[17],
      300
    ));
    function slider1_value_binding(value) {
      ctx[21](value);
    }
    let slider1_props = {
      max: 100,
      min: 1,
      $$slots: { caption: [create_caption_slot2] },
      $$scope: { ctx }
    };
    if (
      /*hratio*/
      ctx[2] !== void 0
    ) {
      slider1_props.value = /*hratio*/
      ctx[2];
    }
    slider1 = new rangeslider_default({ props: slider1_props });
    binding_callbacks.push(() => bind(slider1, "value", slider1_value_binding));
    slider1.$on("input", debounce(
      /*setRatio*/
      ctx[16],
      300
    ));
    let key_block1 = create_key_block4(ctx);
    endmarker = new endmarker_default({});
    return {
      c() {
        span = element("span");
        t0 = text(t0_value);
        t1 = space();
        create_component(checkupdate.$$.fragment);
        t2 = space();
        key_block0.c();
        t3 = space();
        hr = element("hr");
        t4 = space();
        create_component(slider0.$$.fragment);
        t5 = space();
        br0 = element("br");
        t6 = text(t6_value);
        t7 = space();
        create_component(slider1.$$.fragment);
        t8 = space();
        br1 = element("br");
        t9 = space();
        key_block1.c();
        t10 = space();
        create_component(endmarker.$$.fragment);
        attr(span, "class", "logotitle");
      },
      m(target, anchor) {
        insert(target, span, anchor);
        append(span, t0);
        insert(target, t1, anchor);
        mount_component(checkupdate, target, anchor);
        insert(target, t2, anchor);
        key_block0.m(target, anchor);
        insert(target, t3, anchor);
        insert(target, hr, anchor);
        insert(target, t4, anchor);
        mount_component(slider0, target, anchor);
        insert(target, t5, anchor);
        insert(target, br0, anchor);
        insert(target, t6, anchor);
        insert(target, t7, anchor);
        mount_component(slider1, target, anchor);
        insert(target, t8, anchor);
        insert(target, br1, anchor);
        insert(target, t9, anchor);
        key_block1.m(target, anchor);
        insert(target, t10, anchor);
        mount_component(endmarker, target, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        if ((!current || dirty & /*$tosim*/
        32) && t0_value !== (t0_value = _(
          "\u6C38\u6A02\u85CF",
          /*$tosim*/
          ctx2[5]
        ) + ""))
          set_data(t0, t0_value);
        if (dirty & /*$tosim*/
        32 && safe_not_equal(previous_key, previous_key = /*$tosim*/
        ctx2[5])) {
          group_outros();
          transition_out(key_block0, 1, 1, noop);
          check_outros();
          key_block0 = create_key_block_12(ctx2);
          key_block0.c();
          transition_in(key_block0, 1);
          key_block0.m(t3.parentNode, t3);
        } else {
          key_block0.p(ctx2, dirty);
        }
        const slider0_changes = {};
        if (dirty & /*$$scope, $tosim, textsz*/
        536870952) {
          slider0_changes.$$scope = { dirty, ctx: ctx2 };
        }
        if (!updating_value && dirty & /*textsz*/
        8) {
          updating_value = true;
          slider0_changes.value = /*textsz*/
          ctx2[3];
          add_flush_callback(() => updating_value = false);
        }
        slider0.$set(slider0_changes);
        if ((!current || dirty & /*$tosim*/
        32) && t6_value !== (t6_value = _(
          "\u770B\u4E0D\u5230\u5716\u7248\u6700\u5E95\u4E0B\u7684\u884C\u624D\u9700\u8981\u8ABF\u6574",
          /*$tosim*/
          ctx2[5]
        ) + ""))
          set_data(t6, t6_value);
        const slider1_changes = {};
        if (dirty & /*$$scope, hratio*/
        536870916) {
          slider1_changes.$$scope = { dirty, ctx: ctx2 };
        }
        if (!updating_value_1 && dirty & /*hratio*/
        4) {
          updating_value_1 = true;
          slider1_changes.value = /*hratio*/
          ctx2[2];
          add_flush_callback(() => updating_value_1 = false);
        }
        slider1.$set(slider1_changes);
        if (dirty & /*$tosim*/
        32 && safe_not_equal(previous_key_1, previous_key_1 = /*$tosim*/
        ctx2[5])) {
          group_outros();
          transition_out(key_block1, 1, 1, noop);
          check_outros();
          key_block1 = create_key_block4(ctx2);
          key_block1.c();
          transition_in(key_block1, 1);
          key_block1.m(t10.parentNode, t10);
        } else {
          key_block1.p(ctx2, dirty);
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(checkupdate.$$.fragment, local);
        transition_in(key_block0);
        transition_in(slider0.$$.fragment, local);
        transition_in(slider1.$$.fragment, local);
        transition_in(key_block1);
        transition_in(endmarker.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(checkupdate.$$.fragment, local);
        transition_out(key_block0);
        transition_out(slider0.$$.fragment, local);
        transition_out(slider1.$$.fragment, local);
        transition_out(key_block1);
        transition_out(endmarker.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(span);
        if (detaching)
          detach(t1);
        destroy_component(checkupdate, detaching);
        if (detaching)
          detach(t2);
        key_block0.d(detaching);
        if (detaching)
          detach(t3);
        if (detaching)
          detach(hr);
        if (detaching)
          detach(t4);
        destroy_component(slider0, detaching);
        if (detaching)
          detach(t5);
        if (detaching)
          detach(br0);
        if (detaching)
          detach(t6);
        if (detaching)
          detach(t7);
        destroy_component(slider1, detaching);
        if (detaching)
          detach(t8);
        if (detaching)
          detach(br1);
        if (detaching)
          detach(t9);
        key_block1.d(detaching);
        if (detaching)
          detach(t10);
        destroy_component(endmarker, detaching);
      }
    };
  }
  function create_if_block_54(ctx) {
    let projectintro;
    let current;
    projectintro = new project_default({});
    return {
      c() {
        create_component(projectintro.$$.fragment);
      },
      m(target, anchor) {
        mount_component(projectintro, target, anchor);
        current = true;
      },
      p: noop,
      i(local) {
        if (current)
          return;
        transition_in(projectintro.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(projectintro.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(projectintro, detaching);
      }
    };
  }
  function create_if_block_44(ctx) {
    let styleintro;
    let current;
    styleintro = new styleintro_default({});
    return {
      c() {
        create_component(styleintro.$$.fragment);
      },
      m(target, anchor) {
        mount_component(styleintro, target, anchor);
        current = true;
      },
      p: noop,
      i(local) {
        if (current)
          return;
        transition_in(styleintro.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(styleintro.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(styleintro, detaching);
      }
    };
  }
  function create_if_block_34(ctx) {
    let materials;
    let current;
    materials = new materials_default({});
    return {
      c() {
        create_component(materials.$$.fragment);
      },
      m(target, anchor) {
        mount_component(materials, target, anchor);
        current = true;
      },
      p: noop,
      i(local) {
        if (current)
          return;
        transition_in(materials.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(materials.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(materials, detaching);
      }
    };
  }
  function create_if_block_25(ctx) {
    let workers;
    let current;
    workers = new workers_default({});
    return {
      c() {
        create_component(workers.$$.fragment);
      },
      m(target, anchor) {
        mount_component(workers, target, anchor);
        current = true;
      },
      p: noop,
      i(local) {
        if (current)
          return;
        transition_in(workers.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(workers.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(workers, detaching);
      }
    };
  }
  function create_if_block_17(ctx) {
    let hof;
    let current;
    hof = new hof_default({});
    return {
      c() {
        create_component(hof.$$.fragment);
      },
      m(target, anchor) {
        mount_component(hof, target, anchor);
        current = true;
      },
      p: noop,
      i(local) {
        if (current)
          return;
        transition_in(hof.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(hof.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(hof, detaching);
      }
    };
  }
  function create_if_block10(ctx) {
    let sponsoring;
    let current;
    sponsoring = new sponsoring_default({});
    return {
      c() {
        create_component(sponsoring.$$.fragment);
      },
      m(target, anchor) {
        mount_component(sponsoring, target, anchor);
        current = true;
      },
      p: noop,
      i(local) {
        if (current)
          return;
        transition_in(sponsoring.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(sponsoring.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(sponsoring, detaching);
      }
    };
  }
  function create_key_block_12(ctx) {
    let br0;
    let t0_value = _("\u6F22\u5B57\u986F\u793A") + "";
    let t0;
    let t1;
    let statebtn;
    let t2;
    let br1;
    let t3;
    let t4;
    let t5_value = (getVip(
      "title",
      /*$vip*/
      ctx[4]
    ) || /*$vip*/
    (ctx[4] ? _("\u67E5\u7121\u6B64\u78BC") : "")) + "";
    let t5;
    let t6;
    let br2;
    let t7_value = _("VIP\u78BC") + "";
    let t7;
    let input;
    let input_placeholder_value;
    let t8;
    let br3;
    let t9;
    let br4;
    let a0;
    let t11;
    let br5;
    let t12;
    let a1;
    let t14;
    let br6;
    let t15_value = _("\u9EDE\u7126\u9EDE\u6587\u5B57\uFF08\u7D05\u8272\u80CC\u666F\uFF09\u5206\u4EAB") + "";
    let t15;
    let current;
    let mounted;
    let dispose;
    statebtn = new statebutton_default({
      props: {
        states: { 0: "\u539F\u8C8C", 1: _("\u7B80\u9AD4\uFF08\u300C\u4E7E\u5F8C\u767C\u300D\u7B49\u4E0D\u8B8A\uFF09"), 2: "\u7B80\u4F53" },
        storeid: tosim
      }
    });
    return {
      c() {
        br0 = element("br");
        t0 = text(t0_value);
        t1 = text("\uFF1A");
        create_component(statebtn.$$.fragment);
        t2 = space();
        br1 = element("br");
        t3 = text("\u7248\u672C ");
        t4 = text(APPVER);
        t5 = text(t5_value);
        t6 = space();
        br2 = element("br");
        t7 = text(t7_value);
        input = element("input");
        t8 = space();
        br3 = element("br");
        t9 = text("\u5FAE\u4FE1 Sukhanika\n");
        br4 = element("br");
        a0 = element("a");
        a0.textContent = "dharmacloudpublishing[at]gmail";
        t11 = space();
        br5 = element("br");
        t12 = text("LINE\u5B98\u865F");
        a1 = element("a");
        a1.textContent = "@dharmacloud";
        t14 = space();
        br6 = element("br");
        t15 = text(t15_value);
        attr(input, "placeholder", input_placeholder_value = _("\u6C92\u6709\u4E5F\u53EF\u6B63\u5E38\u4F7F\u7528"));
        attr(input, "size", "12");
        attr(input, "type", "text");
        attr(a0, "href", "mailto:dharmacloudpublishing@gmail.com");
        attr(a1, "href", "https://lin.ee/1tmTKXi");
        attr(a1, "target", "_new");
      },
      m(target, anchor) {
        insert(target, br0, anchor);
        insert(target, t0, anchor);
        insert(target, t1, anchor);
        mount_component(statebtn, target, anchor);
        insert(target, t2, anchor);
        insert(target, br1, anchor);
        insert(target, t3, anchor);
        insert(target, t4, anchor);
        insert(target, t5, anchor);
        insert(target, t6, anchor);
        insert(target, br2, anchor);
        insert(target, t7, anchor);
        insert(target, input, anchor);
        set_input_value(
          input,
          /*vipcode*/
          ctx[1]
        );
        insert(target, t8, anchor);
        insert(target, br3, anchor);
        insert(target, t9, anchor);
        insert(target, br4, anchor);
        insert(target, a0, anchor);
        insert(target, t11, anchor);
        insert(target, br5, anchor);
        insert(target, t12, anchor);
        insert(target, a1, anchor);
        insert(target, t14, anchor);
        insert(target, br6, anchor);
        insert(target, t15, anchor);
        current = true;
        if (!mounted) {
          dispose = [
            listen(
              input,
              "keyup",
              /*onkeyup*/
              ctx[18]
            ),
            listen(
              input,
              "input",
              /*input_input_handler*/
              ctx[19]
            )
          ];
          mounted = true;
        }
      },
      p(ctx2, dirty) {
        if ((!current || dirty & /*$vip*/
        16) && t5_value !== (t5_value = (getVip(
          "title",
          /*$vip*/
          ctx2[4]
        ) || /*$vip*/
        (ctx2[4] ? _("\u67E5\u7121\u6B64\u78BC") : "")) + ""))
          set_data(t5, t5_value);
        if (dirty & /*vipcode*/
        2 && input.value !== /*vipcode*/
        ctx2[1]) {
          set_input_value(
            input,
            /*vipcode*/
            ctx2[1]
          );
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(statebtn.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(statebtn.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(br0);
        if (detaching)
          detach(t0);
        if (detaching)
          detach(t1);
        destroy_component(statebtn, detaching);
        if (detaching)
          detach(t2);
        if (detaching)
          detach(br1);
        if (detaching)
          detach(t3);
        if (detaching)
          detach(t4);
        if (detaching)
          detach(t5);
        if (detaching)
          detach(t6);
        if (detaching)
          detach(br2);
        if (detaching)
          detach(t7);
        if (detaching)
          detach(input);
        if (detaching)
          detach(t8);
        if (detaching)
          detach(br3);
        if (detaching)
          detach(t9);
        if (detaching)
          detach(br4);
        if (detaching)
          detach(a0);
        if (detaching)
          detach(t11);
        if (detaching)
          detach(br5);
        if (detaching)
          detach(t12);
        if (detaching)
          detach(a1);
        if (detaching)
          detach(t14);
        if (detaching)
          detach(br6);
        if (detaching)
          detach(t15);
        mounted = false;
        run_all(dispose);
      }
    };
  }
  function create_caption_slot_1(ctx) {
    let span;
    let t0_value = (
      /*textsz*/
      ctx[3][0] + ""
    );
    let t0;
    let t1;
    let t2_value = _(
      "\u5B57\u9AD4\u5927\u5C0F",
      /*$tosim*/
      ctx[5]
    ) + "";
    let t2;
    return {
      c() {
        span = element("span");
        t0 = text(t0_value);
        t1 = text("% ");
        t2 = text(t2_value);
        attr(span, "slot", "caption");
        set_style(span, "float", "right");
      },
      m(target, anchor) {
        insert(target, span, anchor);
        append(span, t0);
        append(span, t1);
        append(span, t2);
      },
      p(ctx2, dirty) {
        if (dirty & /*textsz*/
        8 && t0_value !== (t0_value = /*textsz*/
        ctx2[3][0] + ""))
          set_data(t0, t0_value);
        if (dirty & /*$tosim*/
        32 && t2_value !== (t2_value = _(
          "\u5B57\u9AD4\u5927\u5C0F",
          /*$tosim*/
          ctx2[5]
        ) + ""))
          set_data(t2, t2_value);
      },
      d(detaching) {
        if (detaching)
          detach(span);
      }
    };
  }
  function create_caption_slot2(ctx) {
    let span;
    let t0_value = (
      /*hratio*/
      ctx[2][0] + ""
    );
    let t0;
    let t1;
    return {
      c() {
        span = element("span");
        t0 = text(t0_value);
        t1 = text("% \u5168\u5C4F\u9AD8\u5EA6");
        attr(span, "slot", "caption");
        set_style(span, "float", "right");
      },
      m(target, anchor) {
        insert(target, span, anchor);
        append(span, t0);
        append(span, t1);
      },
      p(ctx2, dirty) {
        if (dirty & /*hratio*/
        4 && t0_value !== (t0_value = /*hratio*/
        ctx2[2][0] + ""))
          set_data(t0, t0_value);
      },
      d(detaching) {
        if (detaching)
          detach(span);
      }
    };
  }
  function create_key_block4(ctx) {
    let switch0;
    let updating_value;
    let t0;
    let switch1;
    let updating_value_1;
    let t1;
    let switch2;
    let updating_value_2;
    let t2;
    let switch3;
    let updating_value_3;
    let current;
    function switch0_value_binding(value) {
      ctx[22](value);
    }
    let switch0_props = {
      label: _("\u986F\u793A\u6A19\u9EDE\u7B26\u865F"),
      design: "slider",
      fontSize: "24"
    };
    if (
      /*$showpunc*/
      ctx[6] !== void 0
    ) {
      switch0_props.value = /*$showpunc*/
      ctx[6];
    }
    switch0 = new switch_default({ props: switch0_props });
    binding_callbacks.push(() => bind(switch0, "value", switch0_value_binding));
    function switch1_value_binding(value) {
      ctx[23](value);
    }
    let switch1_props = {
      label: _("\u975C\u7F6E\u6642\u986F\u793A\u65BD\u4E3B"),
      design: "slider",
      fontSize: "24"
    };
    if (
      /*$showsponsor*/
      ctx[7] !== void 0
    ) {
      switch1_props.value = /*$showsponsor*/
      ctx[7];
    }
    switch1 = new switch_default({ props: switch1_props });
    binding_callbacks.push(() => bind(switch1, "value", switch1_value_binding));
    function switch2_value_binding(value) {
      ctx[24](value);
    }
    let switch2_props = {
      label: _("\u986F\u793A\u6CB9\u7BA1\u5F71\u7247\u9023\u7D50"),
      design: "slider",
      fontSize: "24"
    };
    if (
      /*$showyoutube*/
      ctx[8] !== void 0
    ) {
      switch2_props.value = /*$showyoutube*/
      ctx[8];
    }
    switch2 = new switch_default({ props: switch2_props });
    binding_callbacks.push(() => bind(switch2, "value", switch2_value_binding));
    function switch3_value_binding(value) {
      ctx[25](value);
    }
    let switch3_props = {
      label: _("\u555F\u52D5\u6642\u986F\u793A\u6B61\u8FCE\u756B\u9762"),
      design: "slider",
      fontSize: "24"
    };
    if (
      /*$newbie*/
      ctx[9] !== void 0
    ) {
      switch3_props.value = /*$newbie*/
      ctx[9];
    }
    switch3 = new switch_default({ props: switch3_props });
    binding_callbacks.push(() => bind(switch3, "value", switch3_value_binding));
    return {
      c() {
        create_component(switch0.$$.fragment);
        t0 = space();
        create_component(switch1.$$.fragment);
        t1 = space();
        create_component(switch2.$$.fragment);
        t2 = space();
        create_component(switch3.$$.fragment);
      },
      m(target, anchor) {
        mount_component(switch0, target, anchor);
        insert(target, t0, anchor);
        mount_component(switch1, target, anchor);
        insert(target, t1, anchor);
        mount_component(switch2, target, anchor);
        insert(target, t2, anchor);
        mount_component(switch3, target, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        const switch0_changes = {};
        if (!updating_value && dirty & /*$showpunc*/
        64) {
          updating_value = true;
          switch0_changes.value = /*$showpunc*/
          ctx2[6];
          add_flush_callback(() => updating_value = false);
        }
        switch0.$set(switch0_changes);
        const switch1_changes = {};
        if (!updating_value_1 && dirty & /*$showsponsor*/
        128) {
          updating_value_1 = true;
          switch1_changes.value = /*$showsponsor*/
          ctx2[7];
          add_flush_callback(() => updating_value_1 = false);
        }
        switch1.$set(switch1_changes);
        const switch2_changes = {};
        if (!updating_value_2 && dirty & /*$showyoutube*/
        256) {
          updating_value_2 = true;
          switch2_changes.value = /*$showyoutube*/
          ctx2[8];
          add_flush_callback(() => updating_value_2 = false);
        }
        switch2.$set(switch2_changes);
        const switch3_changes = {};
        if (!updating_value_3 && dirty & /*$newbie*/
        512) {
          updating_value_3 = true;
          switch3_changes.value = /*$newbie*/
          ctx2[9];
          add_flush_callback(() => updating_value_3 = false);
        }
        switch3.$set(switch3_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(switch0.$$.fragment, local);
        transition_in(switch1.$$.fragment, local);
        transition_in(switch2.$$.fragment, local);
        transition_in(switch3.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(switch0.$$.fragment, local);
        transition_out(switch1.$$.fragment, local);
        transition_out(switch2.$$.fragment, local);
        transition_out(switch3.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(switch0, detaching);
        if (detaching)
          detach(t0);
        destroy_component(switch1, detaching);
        if (detaching)
          detach(t1);
        destroy_component(switch2, detaching);
        if (detaching)
          detach(t2);
        destroy_component(switch3, detaching);
      }
    };
  }
  function create_fragment24(ctx) {
    let div0;
    let previous_key = (
      /*$tosim*/
      ctx[5]
    );
    let t;
    let div1;
    let current_block_type_index;
    let if_block;
    let current;
    let key_block = create_key_block_22(ctx);
    const if_block_creators = [
      create_if_block10,
      create_if_block_17,
      create_if_block_25,
      create_if_block_34,
      create_if_block_44,
      create_if_block_54,
      create_else_block5
    ];
    const if_blocks = [];
    function select_block_type_1(ctx2, dirty) {
      if (
        /*show*/
        ctx2[0] == 1
      )
        return 0;
      if (
        /*show*/
        ctx2[0] == 2
      )
        return 1;
      if (
        /*show*/
        ctx2[0] == 3
      )
        return 2;
      if (
        /*show*/
        ctx2[0] == 4
      )
        return 3;
      if (
        /*show*/
        ctx2[0] == 5
      )
        return 4;
      if (
        /*show*/
        ctx2[0] == 6
      )
        return 5;
      return 6;
    }
    current_block_type_index = select_block_type_1(ctx, -1);
    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    return {
      c() {
        div0 = element("div");
        key_block.c();
        t = space();
        div1 = element("div");
        if_block.c();
        attr(div0, "class", "tabs");
        attr(div1, "class", "bodytext");
      },
      m(target, anchor) {
        insert(target, div0, anchor);
        key_block.m(div0, null);
        insert(target, t, anchor);
        insert(target, div1, anchor);
        if_blocks[current_block_type_index].m(div1, null);
        current = true;
      },
      p(ctx2, [dirty]) {
        if (dirty & /*$tosim*/
        32 && safe_not_equal(previous_key, previous_key = /*$tosim*/
        ctx2[5])) {
          key_block.d(1);
          key_block = create_key_block_22(ctx2);
          key_block.c();
          key_block.m(div0, null);
        } else {
          key_block.p(ctx2, dirty);
        }
        let previous_block_index = current_block_type_index;
        current_block_type_index = select_block_type_1(ctx2, dirty);
        if (current_block_type_index === previous_block_index) {
          if_blocks[current_block_type_index].p(ctx2, dirty);
        } else {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, () => {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
          if_block = if_blocks[current_block_type_index];
          if (!if_block) {
            if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
            if_block.c();
          } else {
            if_block.p(ctx2, dirty);
          }
          transition_in(if_block, 1);
          if_block.m(div1, null);
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(if_block);
        current = true;
      },
      o(local) {
        transition_out(if_block);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(div0);
        key_block.d(detaching);
        if (detaching)
          detach(t);
        if (detaching)
          detach(div1);
        if_blocks[current_block_type_index].d();
      }
    };
  }
  function instance20($$self, $$props, $$invalidate) {
    let $textsize;
    let $heightratio;
    let $vip;
    let $tosim;
    let $showpunc;
    let $showsponsor;
    let $showyoutube;
    let $newbie;
    component_subscribe($$self, textsize, ($$value) => $$invalidate(27, $textsize = $$value));
    component_subscribe($$self, heightratio, ($$value) => $$invalidate(28, $heightratio = $$value));
    component_subscribe($$self, vip, ($$value) => $$invalidate(4, $vip = $$value));
    component_subscribe($$self, tosim, ($$value) => $$invalidate(5, $tosim = $$value));
    component_subscribe($$self, showpunc, ($$value) => $$invalidate(6, $showpunc = $$value));
    component_subscribe($$self, showsponsor, ($$value) => $$invalidate(7, $showsponsor = $$value));
    component_subscribe($$self, showyoutube, ($$value) => $$invalidate(8, $showyoutube = $$value));
    component_subscribe($$self, newbie, ($$value) => $$invalidate(9, $newbie = $$value));
    let show = 0, vipcode = $vip;
    let hratio = [Math.floor(($heightratio * 100 - 90) * 10), 0];
    let textsz = [$textsize, 0];
    const toggleshowsponsoring = () => $$invalidate(0, show = show == 1 ? 0 : 1);
    const toggleshowdonors = () => $$invalidate(0, show = show == 2 ? 0 : 2);
    const toggleshowworkers = () => $$invalidate(0, show = show == 3 ? 0 : 3);
    const toggleshowmaterials = () => $$invalidate(0, show = show == 4 ? 0 : 4);
    const toggleshowstyle = () => $$invalidate(0, show = show == 6 ? 0 : 6);
    const toggleshowproject = () => $$invalidate(0, show = show == 5 ? 0 : 5);
    const setRatio = (e) => {
      const j2 = e.detail[0] || 100;
      heightratio.set((j2 / 10 + 90) / 100);
      documentHeight();
    };
    const setTextsize = (e) => {
      const j2 = e.detail[0] || 100;
      textsize.set(j2);
    };
    let timer = 0;
    const onkeyup = (e) => {
      const ele = e.target;
      const start = ele.selectionStart;
      const end = ele.selectionEnd;
      ele.value = ele.value.toUpperCase().replace(/[^a-zA-Z\d]/g, "");
      ele.setSelectionRange(start, end);
      clearTimeout(timer);
      timer = setTimeout(
        () => {
          vip.set(ele.value);
        },
        1e3
      );
    };
    function input_input_handler() {
      vipcode = this.value;
      $$invalidate(1, vipcode);
    }
    function slider0_value_binding(value) {
      textsz = value;
      $$invalidate(3, textsz);
    }
    function slider1_value_binding(value) {
      hratio = value;
      $$invalidate(2, hratio);
    }
    function switch0_value_binding(value) {
      $showpunc = value;
      showpunc.set($showpunc);
    }
    function switch1_value_binding(value) {
      $showsponsor = value;
      showsponsor.set($showsponsor);
    }
    function switch2_value_binding(value) {
      $showyoutube = value;
      showyoutube.set($showyoutube);
    }
    function switch3_value_binding(value) {
      $newbie = value;
      newbie.set($newbie);
    }
    return [
      show,
      vipcode,
      hratio,
      textsz,
      $vip,
      $tosim,
      $showpunc,
      $showsponsor,
      $showyoutube,
      $newbie,
      toggleshowsponsoring,
      toggleshowdonors,
      toggleshowworkers,
      toggleshowmaterials,
      toggleshowstyle,
      toggleshowproject,
      setRatio,
      setTextsize,
      onkeyup,
      input_input_handler,
      slider0_value_binding,
      slider1_value_binding,
      switch0_value_binding,
      switch1_value_binding,
      switch2_value_binding,
      switch3_value_binding
    ];
  }
  var About = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance20, create_fragment24, safe_not_equal, {});
    }
  };
  var about_default = About;

  // src/comps/swipeshapes.js
  var swipeprev = '<svg width="150px" height="150px" viewBox="0 0 1024 1024" fill="#1f1f1f"><path d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z" fill="#1f1f1f"></path></svg>';
  var swipenext = '<svg width="150px" height="150px" viewBox="0 0 1024 1024" fill="#1f1f1f" ><path d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z"></path></svg>';

  // src/comps/swipeview.svelte
  function create_if_block11(ctx) {
    let span;
    let raw_value = (
      /*swipeshapes*/
      ctx[3][
        /*direction*/
        ctx[2] + 1
      ] + ""
    );
    return {
      c() {
        span = element("span");
        attr(span, "class", "swipe svelte-1un901g");
      },
      m(target, anchor) {
        insert(target, span, anchor);
        span.innerHTML = raw_value;
      },
      p(ctx2, dirty) {
        if (dirty & /*direction*/
        4 && raw_value !== (raw_value = /*swipeshapes*/
        ctx2[3][
          /*direction*/
          ctx2[2] + 1
        ] + ""))
          span.innerHTML = raw_value;
        ;
      },
      d(detaching) {
        if (detaching)
          detach(span);
      }
    };
  }
  function create_fragment25(ctx) {
    let t0;
    let div;
    let span;
    let t1;
    let t2;
    let current;
    let mounted;
    let dispose;
    let if_block = (
      /*touching*/
      ctx[1] > -1 && /*direction*/
      ctx[2] && create_if_block11(ctx)
    );
    const default_slot_template = (
      /*#slots*/
      ctx[10].default
    );
    const default_slot = create_slot(
      default_slot_template,
      ctx,
      /*$$scope*/
      ctx[9],
      null
    );
    return {
      c() {
        if (if_block)
          if_block.c();
        t0 = space();
        div = element("div");
        span = element("span");
        t1 = text(
          /*caption*/
          ctx[0]
        );
        t2 = space();
        if (default_slot)
          default_slot.c();
        attr(span, "aria-hidden", "true");
        attr(div, "class", "container svelte-1un901g");
      },
      m(target, anchor) {
        if (if_block)
          if_block.m(target, anchor);
        insert(target, t0, anchor);
        insert(target, div, anchor);
        append(div, span);
        append(span, t1);
        append(div, t2);
        if (default_slot) {
          default_slot.m(div, null);
        }
        current = true;
        if (!mounted) {
          dispose = [
            listen(
              span,
              "click",
              /*next*/
              ctx[7]
            ),
            listen(
              div,
              "touchstart",
              /*ontouchstart*/
              ctx[4],
              { passive: true }
            ),
            listen(
              div,
              "touchmove",
              /*ontouchmove*/
              ctx[5],
              { passive: true }
            ),
            listen(
              div,
              "touchend",
              /*ontouchend*/
              ctx[6],
              { passive: true }
            )
          ];
          mounted = true;
        }
      },
      p(ctx2, [dirty]) {
        if (
          /*touching*/
          ctx2[1] > -1 && /*direction*/
          ctx2[2]
        ) {
          if (if_block) {
            if_block.p(ctx2, dirty);
          } else {
            if_block = create_if_block11(ctx2);
            if_block.c();
            if_block.m(t0.parentNode, t0);
          }
        } else if (if_block) {
          if_block.d(1);
          if_block = null;
        }
        if (!current || dirty & /*caption*/
        1)
          set_data(
            t1,
            /*caption*/
            ctx2[0]
          );
        if (default_slot) {
          if (default_slot.p && (!current || dirty & /*$$scope*/
          512)) {
            update_slot_base(
              default_slot,
              default_slot_template,
              ctx2,
              /*$$scope*/
              ctx2[9],
              !current ? get_all_dirty_from_scope(
                /*$$scope*/
                ctx2[9]
              ) : get_slot_changes(
                default_slot_template,
                /*$$scope*/
                ctx2[9],
                dirty,
                null
              ),
              null
            );
          }
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(default_slot, local);
        current = true;
      },
      o(local) {
        transition_out(default_slot, local);
        current = false;
      },
      d(detaching) {
        if (if_block)
          if_block.d(detaching);
        if (detaching)
          detach(t0);
        if (detaching)
          detach(div);
        if (default_slot)
          default_slot.d(detaching);
        mounted = false;
        run_all(dispose);
      }
    };
  }
  function instance21($$self, $$props, $$invalidate) {
    let { $$slots: slots = {}, $$scope } = $$props;
    const swipeshapes = [swipeprev, , swipenext];
    let { onSwipe } = $$props;
    let { caption: caption3 = "" } = $$props;
    let touching = -1;
    let touchx = 0, touchy = 0, startx = 0, starty = 0, direction = 0;
    const ontouchstart = (e) => {
      $$invalidate(2, direction = 0);
      if (e.touches.length == 1) {
        startx = e.touches[0].pageX;
        starty = e.touches[0].pageY;
        touchx = startx;
        touchy = starty;
        $$invalidate(1, touching = 1);
      }
    };
    const getDirection = () => {
      const deltax = touchx - startx;
      const deltay = touchy - starty;
      if (deltax > 30 && Math.abs(deltay) < Math.abs(deltax) / 2) {
        return 1;
      } else if (deltax < -30 && Math.abs(deltay) < Math.abs(deltax) / 2) {
        return -1;
      }
      return 0;
    };
    const ontouchmove = (e) => {
      if (touching == -1)
        return;
      if (touching > -1) {
        touchx = e.touches[0].pageX;
        touchy = e.touches[0].pageY;
        $$invalidate(2, direction = getDirection());
      }
    };
    const ontouchend = (e) => {
      if (touching !== -1 && direction !== 0) {
        onSwipe && onSwipe(direction);
      } else {
      }
      $$invalidate(1, touching = -1);
      $$invalidate(2, direction = 0);
    };
    const next = () => {
      onSwipe && onSwipe(1);
    };
    $$self.$$set = ($$props2) => {
      if ("onSwipe" in $$props2)
        $$invalidate(8, onSwipe = $$props2.onSwipe);
      if ("caption" in $$props2)
        $$invalidate(0, caption3 = $$props2.caption);
      if ("$$scope" in $$props2)
        $$invalidate(9, $$scope = $$props2.$$scope);
    };
    return [
      caption3,
      touching,
      direction,
      swipeshapes,
      ontouchstart,
      ontouchmove,
      ontouchend,
      next,
      onSwipe,
      $$scope,
      slots
    ];
  }
  var Swipeview = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance21, create_fragment25, safe_not_equal, { onSwipe: 8, caption: 0 });
    }
  };
  var swipeview_default = Swipeview;

  // src/comps/pager.svelte
  var get_default_slot_changes_2 = (dirty) => ({
    active: dirty & /*last, now*/
    18,
    caption: dirty & /*last*/
    16,
    idx: dirty & /*last*/
    16,
    id: dirty & /*last*/
    16
  });
  var get_default_slot_context_2 = (ctx) => ({
    active: (
      /*last*/
      ctx[4].idx == /*now*/
      ctx[1]
    ),
    caption: (
      /*last*/
      ctx[4].caption + "]"
    ),
    idx: (
      /*last*/
      ctx[4].idx
    ),
    id: (
      /*last*/
      ctx[4].id
    )
  });
  function get_each_context11(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[16] = list[i];
    return child_ctx;
  }
  var get_default_slot_changes_1 = (dirty) => ({
    active: dirty & /*neighbors, now*/
    10,
    caption: dirty & /*neighbors*/
    8,
    idx: dirty & /*neighbors*/
    8,
    id: dirty & /*neighbors*/
    8
  });
  var get_default_slot_context_1 = (ctx) => ({
    active: (
      /*page*/
      ctx[16].idx == /*now*/
      ctx[1]
    ),
    caption: (
      /*page*/
      ctx[16].caption + " "
    ),
    idx: (
      /*page*/
      ctx[16].idx
    ),
    id: (
      /*page*/
      ctx[16].id
    )
  });
  var get_default_slot_changes = (dirty) => ({
    active: dirty & /*pages, now*/
    3,
    caption: dirty & /*pages*/
    1,
    id: dirty & /*pages*/
    1
  });
  var get_default_slot_context = (ctx) => ({
    active: (
      /*pages*/
      ctx[0][0].idx == /*now*/
      ctx[1]
    ),
    caption: "[" + /*pages*/
    ctx[0][0].caption,
    idx: "0",
    id: (
      /*pages*/
      ctx[0][0].id
    )
  });
  function create_if_block_18(ctx) {
    let current;
    const default_slot_template = (
      /*#slots*/
      ctx[10].default
    );
    const default_slot = create_slot(
      default_slot_template,
      ctx,
      /*$$scope*/
      ctx[11],
      get_default_slot_context
    );
    return {
      c() {
        if (default_slot)
          default_slot.c();
      },
      m(target, anchor) {
        if (default_slot) {
          default_slot.m(target, anchor);
        }
        current = true;
      },
      p(ctx2, dirty) {
        if (default_slot) {
          if (default_slot.p && (!current || dirty & /*$$scope, pages, now*/
          2051)) {
            update_slot_base(
              default_slot,
              default_slot_template,
              ctx2,
              /*$$scope*/
              ctx2[11],
              !current ? get_all_dirty_from_scope(
                /*$$scope*/
                ctx2[11]
              ) : get_slot_changes(
                default_slot_template,
                /*$$scope*/
                ctx2[11],
                dirty,
                get_default_slot_changes
              ),
              get_default_slot_context
            );
          }
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(default_slot, local);
        current = true;
      },
      o(local) {
        transition_out(default_slot, local);
        current = false;
      },
      d(detaching) {
        if (default_slot)
          default_slot.d(detaching);
      }
    };
  }
  function create_each_block11(ctx) {
    let current;
    const default_slot_template = (
      /*#slots*/
      ctx[10].default
    );
    const default_slot = create_slot(
      default_slot_template,
      ctx,
      /*$$scope*/
      ctx[11],
      get_default_slot_context_1
    );
    return {
      c() {
        if (default_slot)
          default_slot.c();
      },
      m(target, anchor) {
        if (default_slot) {
          default_slot.m(target, anchor);
        }
        current = true;
      },
      p(ctx2, dirty) {
        if (default_slot) {
          if (default_slot.p && (!current || dirty & /*$$scope, neighbors, now*/
          2058)) {
            update_slot_base(
              default_slot,
              default_slot_template,
              ctx2,
              /*$$scope*/
              ctx2[11],
              !current ? get_all_dirty_from_scope(
                /*$$scope*/
                ctx2[11]
              ) : get_slot_changes(
                default_slot_template,
                /*$$scope*/
                ctx2[11],
                dirty,
                get_default_slot_changes_1
              ),
              get_default_slot_context_1
            );
          }
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(default_slot, local);
        current = true;
      },
      o(local) {
        transition_out(default_slot, local);
        current = false;
      },
      d(detaching) {
        if (default_slot)
          default_slot.d(detaching);
      }
    };
  }
  function create_if_block12(ctx) {
    let current;
    const default_slot_template = (
      /*#slots*/
      ctx[10].default
    );
    const default_slot = create_slot(
      default_slot_template,
      ctx,
      /*$$scope*/
      ctx[11],
      get_default_slot_context_2
    );
    return {
      c() {
        if (default_slot)
          default_slot.c();
      },
      m(target, anchor) {
        if (default_slot) {
          default_slot.m(target, anchor);
        }
        current = true;
      },
      p(ctx2, dirty) {
        if (default_slot) {
          if (default_slot.p && (!current || dirty & /*$$scope, last, now*/
          2066)) {
            update_slot_base(
              default_slot,
              default_slot_template,
              ctx2,
              /*$$scope*/
              ctx2[11],
              !current ? get_all_dirty_from_scope(
                /*$$scope*/
                ctx2[11]
              ) : get_slot_changes(
                default_slot_template,
                /*$$scope*/
                ctx2[11],
                dirty,
                get_default_slot_changes_2
              ),
              get_default_slot_context_2
            );
          }
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(default_slot, local);
        current = true;
      },
      o(local) {
        transition_out(default_slot, local);
        current = false;
      },
      d(detaching) {
        if (default_slot)
          default_slot.d(detaching);
      }
    };
  }
  function create_default_slot3(ctx) {
    let t0;
    let t1;
    let if_block1_anchor;
    let current;
    let if_block0 = (
      /*pages*/
      ctx[0].length && create_if_block_18(ctx)
    );
    let each_value = (
      /*neighbors*/
      ctx[3]
    );
    let each_blocks = [];
    for (let i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block11(get_each_context11(ctx, each_value, i));
    }
    const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
      each_blocks[i] = null;
    });
    let if_block1 = (
      /*last*/
      ctx[4] && create_if_block12(ctx)
    );
    return {
      c() {
        if (if_block0)
          if_block0.c();
        t0 = space();
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        t1 = space();
        if (if_block1)
          if_block1.c();
        if_block1_anchor = empty();
      },
      m(target, anchor) {
        if (if_block0)
          if_block0.m(target, anchor);
        insert(target, t0, anchor);
        for (let i = 0; i < each_blocks.length; i += 1) {
          if (each_blocks[i]) {
            each_blocks[i].m(target, anchor);
          }
        }
        insert(target, t1, anchor);
        if (if_block1)
          if_block1.m(target, anchor);
        insert(target, if_block1_anchor, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        if (
          /*pages*/
          ctx2[0].length
        ) {
          if (if_block0) {
            if_block0.p(ctx2, dirty);
            if (dirty & /*pages*/
            1) {
              transition_in(if_block0, 1);
            }
          } else {
            if_block0 = create_if_block_18(ctx2);
            if_block0.c();
            transition_in(if_block0, 1);
            if_block0.m(t0.parentNode, t0);
          }
        } else if (if_block0) {
          group_outros();
          transition_out(if_block0, 1, 1, () => {
            if_block0 = null;
          });
          check_outros();
        }
        if (dirty & /*$$scope, neighbors, now*/
        2058) {
          each_value = /*neighbors*/
          ctx2[3];
          let i;
          for (i = 0; i < each_value.length; i += 1) {
            const child_ctx = get_each_context11(ctx2, each_value, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
              transition_in(each_blocks[i], 1);
            } else {
              each_blocks[i] = create_each_block11(child_ctx);
              each_blocks[i].c();
              transition_in(each_blocks[i], 1);
              each_blocks[i].m(t1.parentNode, t1);
            }
          }
          group_outros();
          for (i = each_value.length; i < each_blocks.length; i += 1) {
            out(i);
          }
          check_outros();
        }
        if (
          /*last*/
          ctx2[4]
        ) {
          if (if_block1) {
            if_block1.p(ctx2, dirty);
            if (dirty & /*last*/
            16) {
              transition_in(if_block1, 1);
            }
          } else {
            if_block1 = create_if_block12(ctx2);
            if_block1.c();
            transition_in(if_block1, 1);
            if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
          }
        } else if (if_block1) {
          group_outros();
          transition_out(if_block1, 1, 1, () => {
            if_block1 = null;
          });
          check_outros();
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(if_block0);
        for (let i = 0; i < each_value.length; i += 1) {
          transition_in(each_blocks[i]);
        }
        transition_in(if_block1);
        current = true;
      },
      o(local) {
        transition_out(if_block0);
        each_blocks = each_blocks.filter(Boolean);
        for (let i = 0; i < each_blocks.length; i += 1) {
          transition_out(each_blocks[i]);
        }
        transition_out(if_block1);
        current = false;
      },
      d(detaching) {
        if (if_block0)
          if_block0.d(detaching);
        if (detaching)
          detach(t0);
        destroy_each(each_blocks, detaching);
        if (detaching)
          detach(t1);
        if (if_block1)
          if_block1.d(detaching);
        if (detaching)
          detach(if_block1_anchor);
      }
    };
  }
  function create_fragment26(ctx) {
    let swipeview;
    let current;
    swipeview = new swipeview_default({
      props: {
        onSwipe: (
          /*onswipe*/
          ctx[5]
        ),
        caption: (
          /*caption*/
          ctx[2] ? "\u2192" + /*caption*/
          ctx[2] : ""
        ),
        $$slots: { default: [create_default_slot3] },
        $$scope: { ctx }
      }
    });
    return {
      c() {
        create_component(swipeview.$$.fragment);
      },
      m(target, anchor) {
        mount_component(swipeview, target, anchor);
        current = true;
      },
      p(ctx2, [dirty]) {
        const swipeview_changes = {};
        if (dirty & /*caption*/
        4)
          swipeview_changes.caption = /*caption*/
          ctx2[2] ? "\u2192" + /*caption*/
          ctx2[2] : "";
        if (dirty & /*$$scope, last, now, neighbors, pages*/
        2075) {
          swipeview_changes.$$scope = { dirty, ctx: ctx2 };
        }
        swipeview.$set(swipeview_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(swipeview.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(swipeview.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(swipeview, detaching);
      }
    };
  }
  function instance22($$self, $$props, $$invalidate) {
    let { $$slots: slots = {}, $$scope } = $$props;
    let { pages = [] } = $$props;
    let { count = 0 } = $$props;
    let { now = 0 } = $$props;
    let { previtems = 1 } = $$props;
    let { nextitems = 3 } = $$props;
    let { onselect } = $$props;
    let { caption: caption3 = "" } = $$props;
    let left = now - previtems;
    let right = now + nextitems + 1;
    const neighbors = [];
    let last = null;
    const makeNeighbors = () => {
      $$invalidate(1, now = parseInt(now));
      if (now >= pages.length)
        $$invalidate(1, now = 0);
      left = now - previtems;
      right = now + nextitems + 1;
      if (left < 2)
        left = 1;
      if (right >= pages.length)
        right = pages.length - 1;
      $$invalidate(3, neighbors.length = 0, neighbors);
      for (let j2 = left; j2 < right; j2++) {
        neighbors.push(pages[j2]);
      }
      right += 10;
      if (right < pages.length - 2)
        neighbors.push(pages[right]);
      right += 30;
      if (right < pages.length - 2)
        neighbors.push(pages[right]);
      if (pages.length > 1)
        $$invalidate(4, last = pages[pages.length - 1]);
      else
        $$invalidate(4, last = null);
    };
    const makepages = () => {
      if (count && pages.length !== count) {
        $$invalidate(0, pages.length = 0, pages);
        for (let i = 0; i < count; i++) {
          pages.push({ caption: i + 1, id: i + 1, idx: i });
        }
        makeNeighbors();
      }
    };
    const onswipe = (direction) => {
      $$invalidate(1, now += direction);
      if (now < 0)
        $$invalidate(1, now = 0);
      if (now >= pages.length - 1)
        $$invalidate(1, now = pages.length - 1);
      onselect && onselect(now);
    };
    $$self.$$set = ($$props2) => {
      if ("pages" in $$props2)
        $$invalidate(0, pages = $$props2.pages);
      if ("count" in $$props2)
        $$invalidate(6, count = $$props2.count);
      if ("now" in $$props2)
        $$invalidate(1, now = $$props2.now);
      if ("previtems" in $$props2)
        $$invalidate(7, previtems = $$props2.previtems);
      if ("nextitems" in $$props2)
        $$invalidate(8, nextitems = $$props2.nextitems);
      if ("onselect" in $$props2)
        $$invalidate(9, onselect = $$props2.onselect);
      if ("caption" in $$props2)
        $$invalidate(2, caption3 = $$props2.caption);
      if ("$$scope" in $$props2)
        $$invalidate(11, $$scope = $$props2.$$scope);
    };
    $$self.$$.update = () => {
      if ($$self.$$.dirty & /*now, pages*/
      3) {
        $:
          makeNeighbors(now, pages);
      }
      if ($$self.$$.dirty & /*pages, count*/
      65) {
        $:
          makepages(pages, count);
      }
    };
    return [
      pages,
      now,
      caption3,
      neighbors,
      last,
      onswipe,
      count,
      previtems,
      nextitems,
      onselect,
      slots,
      $$scope
    ];
  }
  var Pager = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance22, create_fragment26, safe_not_equal, {
        pages: 0,
        count: 6,
        now: 1,
        previtems: 7,
        nextitems: 8,
        onselect: 9,
        caption: 2
      });
    }
  };
  var pager_default = Pager;

  // src/sentencenav.svelte
  function create_default_slot4(ctx) {
    let span;
    let t_value = _(
      /*caption*/
      ctx[2]
    ) + "";
    let t;
    let mounted;
    let dispose;
    function click_handler() {
      return (
        /*click_handler*/
        ctx[6](
          /*idx*/
          ctx[10]
        )
      );
    }
    return {
      c() {
        span = element("span");
        t = text(t_value);
        attr(span, "aria-hidden", "true");
        attr(span, "class", "clickable");
        toggle_class(
          span,
          "selected",
          /*active*/
          ctx[9]
        );
      },
      m(target, anchor) {
        insert(target, span, anchor);
        append(span, t);
        if (!mounted) {
          dispose = listen(span, "click", click_handler);
          mounted = true;
        }
      },
      p(new_ctx, dirty) {
        ctx = new_ctx;
        if (dirty & /*caption*/
        4 && t_value !== (t_value = _(
          /*caption*/
          ctx[2]
        ) + ""))
          set_data(t, t_value);
        if (dirty & /*active*/
        512) {
          toggle_class(
            span,
            "selected",
            /*active*/
            ctx[9]
          );
        }
      },
      d(detaching) {
        if (detaching)
          detach(span);
        mounted = false;
        dispose();
      }
    };
  }
  function create_fragment27(ctx) {
    let pager;
    let current;
    pager = new pager_default({
      props: {
        caption: (
          /*caption*/
          ctx[2]
        ),
        count: (
          /*linecount*/
          ctx[1]
        ),
        nextitems: 5,
        previtems: 4,
        now: (
          /*sentnow*/
          ctx[0]
        ),
        onselect: (
          /*gosent*/
          ctx[3]
        ),
        $$slots: {
          default: [
            create_default_slot4,
            ({ active, caption: caption3, idx: idx2 }) => ({ 9: active, 2: caption3, 10: idx2 }),
            ({ active, caption: caption3, idx: idx2 }) => (active ? 512 : 0) | (caption3 ? 4 : 0) | (idx2 ? 1024 : 0)
          ]
        },
        $$scope: { ctx }
      }
    });
    return {
      c() {
        create_component(pager.$$.fragment);
      },
      m(target, anchor) {
        mount_component(pager, target, anchor);
        current = true;
      },
      p(ctx2, [dirty]) {
        const pager_changes = {};
        if (dirty & /*caption*/
        4)
          pager_changes.caption = /*caption*/
          ctx2[2];
        if (dirty & /*linecount*/
        2)
          pager_changes.count = /*linecount*/
          ctx2[1];
        if (dirty & /*sentnow*/
        1)
          pager_changes.now = /*sentnow*/
          ctx2[0];
        if (dirty & /*$$scope, active, idx, caption*/
        3588) {
          pager_changes.$$scope = { dirty, ctx: ctx2 };
        }
        pager.$set(pager_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(pager.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(pager.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(pager, detaching);
      }
    };
  }
  function instance23($$self, $$props, $$invalidate) {
    let $tapmark;
    let $foliotext;
    component_subscribe($$self, tapmark, ($$value) => $$invalidate(5, $tapmark = $$value));
    component_subscribe($$self, foliotext, ($$value) => $$invalidate(7, $foliotext = $$value));
    let { ptk: ptk3 } = $$props;
    let sentnow = 0;
    const gosent = (idx2) => {
      const ft = $foliotext;
      if (!ft)
        return;
      const fpos = ft.toFolioPos($foliotext?.fromFolioPos($tapmark).ckid, idx2);
      activepb.set(fpos[0]);
      tapmark.set(fpos);
      $$invalidate(0, sentnow = idx2);
    };
    let linecount = 0, caption3 = "";
    const humancaption = () => {
      const ft = $foliotext;
      if (!ft || !ft.fromFolioPos)
        return;
      const cl = ft.fromFolioPos($tapmark);
      if (!cl || !cl.ckid)
        return "";
      $$invalidate(1, linecount = cl.linecount || 0);
      const styled = parseInt(cl.ckid).toString() == cl.ckid ? styledNumber(parseInt(cl.ckid), "\u2460") : (cl.ckid || "") + ".";
      $$invalidate(2, caption3 = styled + ptk3.caption(cl.at));
    };
    const click_handler = (idx2) => gosent(idx2);
    $$self.$$set = ($$props2) => {
      if ("ptk" in $$props2)
        $$invalidate(4, ptk3 = $$props2.ptk);
    };
    $$self.$$.update = () => {
      if ($$self.$$.dirty & /*$tapmark*/
      32) {
        $:
          humancaption($tapmark);
      }
    };
    return [sentnow, linecount, caption3, gosent, ptk3, $tapmark, click_handler];
  }
  var Sentencenav = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance23, create_fragment27, safe_not_equal, { ptk: 4 });
    }
  };
  var sentencenav_default = Sentencenav;

  // src/translations.svelte
  function get_each_context12(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[13] = list[i];
    return child_ctx;
  }
  function create_if_block13(ctx) {
    let div;
    let span;
    let t0_value = _(
      /*getBookTitle*/
      ctx[3](
        /*item*/
        ctx[13].ptk,
        /*item*/
        ctx[13].heading?.bk?.at
      )
    ) + "";
    let t0;
    let t1;
    let t2_value = (
      /*hasfolio*/
      ctx[5](
        /*item*/
        ctx[13].ptk
      ) ? "\u2190" : " "
    );
    let t2;
    let t3_value = _(
      /*puretext*/
      ctx[6](
        /*item*/
        ctx[13].linetext
      )
    ) + "";
    let t3;
    let mounted;
    let dispose;
    function click_handler() {
      return (
        /*click_handler*/
        ctx[10](
          /*item*/
          ctx[13]
        )
      );
    }
    return {
      c() {
        div = element("div");
        span = element("span");
        t0 = text(t0_value);
        t1 = space();
        t2 = text(t2_value);
        t3 = text(t3_value);
        attr(span, "aria-hidden", "true");
        attr(span, "class", "clickable author");
        toggle_class(
          div,
          "selecteditem",
          /*item*/
          ctx[13].heading?.bkid == /*$activefolioid*/
          ctx[2]
        );
      },
      m(target, anchor) {
        insert(target, div, anchor);
        append(div, span);
        append(span, t0);
        append(span, t1);
        append(span, t2);
        append(div, t3);
        if (!mounted) {
          dispose = listen(span, "click", click_handler);
          mounted = true;
        }
      },
      p(new_ctx, dirty) {
        ctx = new_ctx;
        if (dirty & /*translations*/
        2 && t0_value !== (t0_value = _(
          /*getBookTitle*/
          ctx[3](
            /*item*/
            ctx[13].ptk,
            /*item*/
            ctx[13].heading?.bk?.at
          )
        ) + ""))
          set_data(t0, t0_value);
        if (dirty & /*translations*/
        2 && t2_value !== (t2_value = /*hasfolio*/
        ctx[5](
          /*item*/
          ctx[13].ptk
        ) ? "\u2190" : " "))
          set_data(t2, t2_value);
        if (dirty & /*translations*/
        2 && t3_value !== (t3_value = _(
          /*puretext*/
          ctx[6](
            /*item*/
            ctx[13].linetext
          )
        ) + ""))
          set_data(t3, t3_value);
        if (dirty & /*translations, $activefolioid*/
        6) {
          toggle_class(
            div,
            "selecteditem",
            /*item*/
            ctx[13].heading?.bkid == /*$activefolioid*/
            ctx[2]
          );
        }
      },
      d(detaching) {
        if (detaching)
          detach(div);
        mounted = false;
        dispose();
      }
    };
  }
  function create_each_block12(ctx) {
    let show_if = !~/*item*/
    ctx[13].heading?.bkid?.indexOf("_variorum");
    let t;
    let div;
    let if_block = show_if && create_if_block13(ctx);
    return {
      c() {
        if (if_block)
          if_block.c();
        t = space();
        div = element("div");
        attr(div, "class", "hr");
      },
      m(target, anchor) {
        if (if_block)
          if_block.m(target, anchor);
        insert(target, t, anchor);
        insert(target, div, anchor);
      },
      p(ctx2, dirty) {
        if (dirty & /*translations*/
        2)
          show_if = !~/*item*/
          ctx2[13].heading?.bkid?.indexOf("_variorum");
        if (show_if) {
          if (if_block) {
            if_block.p(ctx2, dirty);
          } else {
            if_block = create_if_block13(ctx2);
            if_block.c();
            if_block.m(t.parentNode, t);
          }
        } else if (if_block) {
          if_block.d(1);
          if_block = null;
        }
      },
      d(detaching) {
        if (if_block)
          if_block.d(detaching);
        if (detaching)
          detach(t);
        if (detaching)
          detach(div);
      }
    };
  }
  function create_fragment28(ctx) {
    let div1;
    let sentencenav;
    let t0;
    let div0;
    let t1;
    let t2;
    let endmarker;
    let current;
    sentencenav = new sentencenav_default({ props: { ptk: (
      /*ptk*/
      ctx[0]
    ) } });
    let each_value = (
      /*translations*/
      ctx[1]
    );
    let each_blocks = [];
    for (let i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block12(get_each_context12(ctx, each_value, i));
    }
    endmarker = new endmarker_default({});
    return {
      c() {
        div1 = element("div");
        create_component(sentencenav.$$.fragment);
        t0 = space();
        div0 = element("div");
        t1 = space();
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        t2 = space();
        create_component(endmarker.$$.fragment);
        attr(div0, "class", "hr");
        attr(div1, "class", "bodytext");
      },
      m(target, anchor) {
        insert(target, div1, anchor);
        mount_component(sentencenav, div1, null);
        append(div1, t0);
        append(div1, div0);
        append(div1, t1);
        for (let i = 0; i < each_blocks.length; i += 1) {
          if (each_blocks[i]) {
            each_blocks[i].m(div1, null);
          }
        }
        append(div1, t2);
        mount_component(endmarker, div1, null);
        current = true;
      },
      p(ctx2, [dirty]) {
        const sentencenav_changes = {};
        if (dirty & /*ptk*/
        1)
          sentencenav_changes.ptk = /*ptk*/
          ctx2[0];
        sentencenav.$set(sentencenav_changes);
        if (dirty & /*translations, $activefolioid, _, puretext, goFolioByLine, hasfolio, getBookTitle*/
        126) {
          each_value = /*translations*/
          ctx2[1];
          let i;
          for (i = 0; i < each_value.length; i += 1) {
            const child_ctx = get_each_context12(ctx2, each_value, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
            } else {
              each_blocks[i] = create_each_block12(child_ctx);
              each_blocks[i].c();
              each_blocks[i].m(div1, t2);
            }
          }
          for (; i < each_blocks.length; i += 1) {
            each_blocks[i].d(1);
          }
          each_blocks.length = each_value.length;
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(sentencenav.$$.fragment, local);
        transition_in(endmarker.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(sentencenav.$$.fragment, local);
        transition_out(endmarker.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(div1);
        destroy_component(sentencenav);
        destroy_each(each_blocks, detaching);
        destroy_component(endmarker);
      }
    };
  }
  function instance24($$self, $$props, $$invalidate) {
    let $loadingfolio;
    let $tapmark;
    let $foliotext;
    let $activefolioid;
    component_subscribe($$self, loadingfolio, ($$value) => $$invalidate(8, $loadingfolio = $$value));
    component_subscribe($$self, tapmark, ($$value) => $$invalidate(9, $tapmark = $$value));
    component_subscribe($$self, foliotext, ($$value) => $$invalidate(11, $foliotext = $$value));
    component_subscribe($$self, activefolioid, ($$value) => $$invalidate(2, $activefolioid = $$value));
    let { closePopup = function() {
    } } = $$props;
    let { ptk: ptk3 } = $$props;
    let translations = [];
    const getBookTitle = (ptk4, nbk) => {
      const bk2 = ptk4.defines.bk;
      const line = bk2.linepos[nbk];
      const folio = ptk4.defines.folio;
      const at = bsearchNumber(folio.linepos, line + 1) - 1;
      if (folio.linepos[at] !== line) {
        return bk2.innertext.get(nbk);
      } else {
        return ~at ? folio.innertext.get(at) : bk2.innertext.get(nbk);
      }
    };
    const goFolioByLine = (ptk4, line) => {
      const pb2 = ptk4.defines.pb;
      const folio = ptk4.defines.folio;
      if (!pb2)
        return;
      const pbat = ptk4.nearestTag(line, "pb");
      const folioat = ptk4.nearestTag(line, "folio");
      const pbid = pb2.fields.id.values[pbat];
      const newfolio = folio.fields.id.values[folioat];
      loadFolio(newfolio, () => {
        activePtk.set(ptk4.name);
        activepb.set((parseInt(pbid) || 1) - 1);
        marktap(pbid, line);
      });
      closePopup();
    };
    const hasfolio = (ptk4, line) => {
      const folioat = ptk4.nearestTag(line + 1, "folio");
      return folioat > -1;
    };
    const puretext = (_text) => {
      const [text2] = parseOfftext(_text);
      return text2;
    };
    const updateTranslation = async (mark, loading) => {
      if (loading)
        return [];
      const cl = $foliotext?.fromFolioPos(mark);
      if (!cl)
        return;
      $$invalidate(1, translations = await getParallelLines(ptk3, cl.ptkline, null, { local: true, remote: false }));
    };
    const click_handler = (item) => goFolioByLine(item.ptk, item.line);
    $$self.$$set = ($$props2) => {
      if ("closePopup" in $$props2)
        $$invalidate(7, closePopup = $$props2.closePopup);
      if ("ptk" in $$props2)
        $$invalidate(0, ptk3 = $$props2.ptk);
    };
    $$self.$$.update = () => {
      if ($$self.$$.dirty & /*$tapmark, $loadingfolio*/
      768) {
        $:
          updateTranslation($tapmark, $loadingfolio);
      }
    };
    return [
      ptk3,
      translations,
      $activefolioid,
      getBookTitle,
      goFolioByLine,
      hasfolio,
      puretext,
      closePopup,
      $loadingfolio,
      $tapmark,
      click_handler
    ];
  }
  var Translations = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance24, create_fragment28, safe_not_equal, { closePopup: 7, ptk: 0 });
    }
  };
  var translations_default = Translations;

  // src/chunknav.svelte
  function create_default_slot5(ctx) {
    let span;
    let t_value = _(
      /*caption*/
      ctx[10]
    ) + "";
    let t;
    let mounted;
    let dispose;
    function click_handler() {
      return (
        /*click_handler*/
        ctx[5](
          /*idx*/
          ctx[11]
        )
      );
    }
    return {
      c() {
        span = element("span");
        t = text(t_value);
        attr(span, "aria-hidden", "true");
        attr(span, "class", "clickable");
        toggle_class(
          span,
          "selected",
          /*active*/
          ctx[9]
        );
      },
      m(target, anchor) {
        insert(target, span, anchor);
        append(span, t);
        if (!mounted) {
          dispose = listen(span, "click", click_handler);
          mounted = true;
        }
      },
      p(new_ctx, dirty) {
        ctx = new_ctx;
        if (dirty & /*caption*/
        1024 && t_value !== (t_value = _(
          /*caption*/
          ctx[10]
        ) + ""))
          set_data(t, t_value);
        if (dirty & /*active*/
        512) {
          toggle_class(
            span,
            "selected",
            /*active*/
            ctx[9]
          );
        }
      },
      d(detaching) {
        if (detaching)
          detach(span);
        mounted = false;
        dispose();
      }
    };
  }
  function create_fragment29(ctx) {
    let pager;
    let current;
    pager = new pager_default({
      props: {
        onselect: (
          /*gochunk*/
          ctx[2]
        ),
        pages: (
          /*chunks*/
          ctx[1]
        ),
        nextitems: 2,
        now: (
          /*cknow*/
          ctx[0]
        ),
        $$slots: {
          default: [
            create_default_slot5,
            ({ active, caption: caption3, idx: idx2 }) => ({ 9: active, 10: caption3, 11: idx2 }),
            ({ active, caption: caption3, idx: idx2 }) => (active ? 512 : 0) | (caption3 ? 1024 : 0) | (idx2 ? 2048 : 0)
          ]
        },
        $$scope: { ctx }
      }
    });
    return {
      c() {
        create_component(pager.$$.fragment);
      },
      m(target, anchor) {
        mount_component(pager, target, anchor);
        current = true;
      },
      p(ctx2, [dirty]) {
        const pager_changes = {};
        if (dirty & /*chunks*/
        2)
          pager_changes.pages = /*chunks*/
          ctx2[1];
        if (dirty & /*cknow*/
        1)
          pager_changes.now = /*cknow*/
          ctx2[0];
        if (dirty & /*$$scope, active, idx, caption*/
        7680) {
          pager_changes.$$scope = { dirty, ctx: ctx2 };
        }
        pager.$set(pager_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(pager.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(pager.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(pager, detaching);
      }
    };
  }
  function instance25($$self, $$props, $$invalidate) {
    let $tapmark;
    let $activefolioid;
    let $foliotext;
    component_subscribe($$self, tapmark, ($$value) => $$invalidate(4, $tapmark = $$value));
    component_subscribe($$self, activefolioid, ($$value) => $$invalidate(6, $activefolioid = $$value));
    component_subscribe($$self, foliotext, ($$value) => $$invalidate(7, $foliotext = $$value));
    let { ptk: ptk3 } = $$props;
    let cknow = 0;
    const chunks = [];
    const loadChunks = () => {
      const ft = $foliotext;
      if (!ft || !ft.fromFolioPos)
        return;
      const { ckid } = ft.fromFolioPos($tapmark);
      const book = bookByFolio($activefolioid);
      const [from, to] = ptk3.rangeOfAddress("bk#" + book);
      const [start, end] = ptk3.tagInRange("ck", from, to);
      const ck = ptk3.defines.ck;
      let idx2 = 0;
      $$invalidate(1, chunks.length = 0, chunks);
      const tapckid = ckid;
      for (let ckat = start; ckat <= end; ckat++) {
        const ckid2 = ck.fields.id.values[ckat];
        const styled = parseInt(ckid2) ? styledNumber(parseInt(ckid2), "\u2460") : ckid2 + ".";
        chunks.push({
          caption: styled + ck.innertext.get(ckat),
          idx: idx2,
          id: ckat,
          ckid: ckid2
        });
        if (ckid2 == tapckid)
          $$invalidate(0, cknow = idx2);
        idx2++;
      }
    };
    const gochunk = (idx2) => {
      const ckat = chunks[idx2].id;
      const ck = ptk3.defines.ck;
      const ckid = ck.fields.id.values[ckat];
      goChunk(ptk3, bookByFolio($activefolioid), ckid);
      $$invalidate(0, cknow = idx2);
    };
    const click_handler = (idx2) => gochunk(idx2);
    $$self.$$set = ($$props2) => {
      if ("ptk" in $$props2)
        $$invalidate(3, ptk3 = $$props2.ptk);
    };
    $$self.$$.update = () => {
      if ($$self.$$.dirty & /*$tapmark*/
      16) {
        $:
          loadChunks($tapmark);
      }
    };
    return [cknow, chunks, gochunk, ptk3, $tapmark, click_handler];
  }
  var Chunknav = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance25, create_fragment29, safe_not_equal, { ptk: 3 });
    }
  };
  var chunknav_default = Chunknav;

  // src/chunktext.svelte
  function get_each_context13(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[23] = list[i];
    child_ctx[25] = i;
    return child_ctx;
  }
  function create_if_block14(ctx) {
    let slider;
    let updating_value;
    let current;
    function slider_value_binding(value) {
      ctx[15](value);
    }
    let slider_props = {
      max: (
        /*sutras*/
        ctx[4].length - 2
      ),
      min: 0,
      $$slots: { caption: [create_caption_slot3] },
      $$scope: { ctx }
    };
    if (
      /*sutra*/
      ctx[3] !== void 0
    ) {
      slider_props.value = /*sutra*/
      ctx[3];
    }
    slider = new rangeslider_default({ props: slider_props });
    binding_callbacks.push(() => bind(slider, "value", slider_value_binding));
    slider.$on("input", debounce(
      /*setSutra*/
      ctx[12],
      100
    ));
    return {
      c() {
        create_component(slider.$$.fragment);
      },
      m(target, anchor) {
        mount_component(slider, target, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        const slider_changes = {};
        if (dirty & /*sutras*/
        16)
          slider_changes.max = /*sutras*/
          ctx2[4].length - 2;
        if (dirty & /*$$scope, maxsutra, minsutra, sutra*/
        67108968) {
          slider_changes.$$scope = { dirty, ctx: ctx2 };
        }
        if (!updating_value && dirty & /*sutra*/
        8) {
          updating_value = true;
          slider_changes.value = /*sutra*/
          ctx2[3];
          add_flush_callback(() => updating_value = false);
        }
        slider.$set(slider_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(slider.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(slider.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(slider, detaching);
      }
    };
  }
  function create_caption_slot3(ctx) {
    let span;
    let t0;
    let t1_value = (
      /*minsutra*/
      (ctx[5] + /*sutra*/
      ctx[3][0] || 0) + ""
    );
    let t1;
    let t2;
    let t3;
    return {
      c() {
        span = element("span");
        t0 = text("\u7D93");
        t1 = text(t1_value);
        t2 = text("/");
        t3 = text(
          /*maxsutra*/
          ctx[6]
        );
        attr(span, "slot", "caption");
        set_style(span, "float", "right");
      },
      m(target, anchor) {
        insert(target, span, anchor);
        append(span, t0);
        append(span, t1);
        append(span, t2);
        append(span, t3);
      },
      p(ctx2, dirty) {
        if (dirty & /*minsutra, sutra*/
        40 && t1_value !== (t1_value = /*minsutra*/
        (ctx2[5] + /*sutra*/
        ctx2[3][0] || 0) + ""))
          set_data(t1, t1_value);
        if (dirty & /*maxsutra*/
        64)
          set_data(
            t3,
            /*maxsutra*/
            ctx2[6]
          );
      },
      d(detaching) {
        if (detaching)
          detach(span);
      }
    };
  }
  function create_each_block13(ctx) {
    let div;
    let raw_value = (
      /*renderLine*/
      ctx[8](
        /*line*/
        ctx[23]
      ) + ""
    );
    let mounted;
    let dispose;
    function click_handler() {
      return (
        /*click_handler*/
        ctx[16](
          /*idx*/
          ctx[25]
        )
      );
    }
    return {
      c() {
        div = element("div");
        attr(div, "aria-hidden", "true");
        toggle_class(
          div,
          "activeline",
          /*activeline*/
          ctx[7] == /*idx*/
          ctx[25]
        );
      },
      m(target, anchor) {
        insert(target, div, anchor);
        div.innerHTML = raw_value;
        if (!mounted) {
          dispose = listen(div, "click", click_handler);
          mounted = true;
        }
      },
      p(new_ctx, dirty) {
        ctx = new_ctx;
        if (dirty & /*lines*/
        4 && raw_value !== (raw_value = /*renderLine*/
        ctx[8](
          /*line*/
          ctx[23]
        ) + ""))
          div.innerHTML = raw_value;
        ;
        if (dirty & /*activeline*/
        128) {
          toggle_class(
            div,
            "activeline",
            /*activeline*/
            ctx[7] == /*idx*/
            ctx[25]
          );
        }
      },
      d(detaching) {
        if (detaching)
          detach(div);
        mounted = false;
        dispose();
      }
    };
  }
  function create_key_block5(ctx) {
    let each_1_anchor;
    let each_value = (
      /*lines*/
      ctx[2]
    );
    let each_blocks = [];
    for (let i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block13(get_each_context13(ctx, each_value, i));
    }
    return {
      c() {
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        each_1_anchor = empty();
      },
      m(target, anchor) {
        for (let i = 0; i < each_blocks.length; i += 1) {
          if (each_blocks[i]) {
            each_blocks[i].m(target, anchor);
          }
        }
        insert(target, each_1_anchor, anchor);
      },
      p(ctx2, dirty) {
        if (dirty & /*activeline, setAddress, displayline, renderLine, lines*/
        902) {
          each_value = /*lines*/
          ctx2[2];
          let i;
          for (i = 0; i < each_value.length; i += 1) {
            const child_ctx = get_each_context13(ctx2, each_value, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
            } else {
              each_blocks[i] = create_each_block13(child_ctx);
              each_blocks[i].c();
              each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
            }
          }
          for (; i < each_blocks.length; i += 1) {
            each_blocks[i].d(1);
          }
          each_blocks.length = each_value.length;
        }
      },
      d(detaching) {
        destroy_each(each_blocks, detaching);
        if (detaching)
          detach(each_1_anchor);
      }
    };
  }
  function create_fragment30(ctx) {
    let div;
    let span0;
    let t1;
    let span1;
    let t3;
    let chunknav;
    let t4;
    let t5;
    let hr;
    let t6;
    let previous_key = (
      /*activeline*/
      ctx[7]
    );
    let t7;
    let endmarker;
    let current;
    let mounted;
    let dispose;
    chunknav = new chunknav_default({ props: { ptk: (
      /*ptk*/
      ctx[0]
    ) } });
    let if_block = (
      /*sutras*/
      ctx[4].length && create_if_block14(ctx)
    );
    let key_block = create_key_block5(ctx);
    endmarker = new endmarker_default({});
    return {
      c() {
        div = element("div");
        span0 = element("span");
        span0.textContent = "\u2191";
        t1 = space();
        span1 = element("span");
        span1.textContent = "\u2583";
        t3 = space();
        create_component(chunknav.$$.fragment);
        t4 = space();
        if (if_block)
          if_block.c();
        t5 = space();
        hr = element("hr");
        t6 = space();
        key_block.c();
        t7 = space();
        create_component(endmarker.$$.fragment);
        attr(span0, "aria-hidden", "true");
        attr(span0, "class", "clickable gotop");
        attr(span1, "aria-hidden", "true");
        attr(span1, "class", "clickable goactiveline");
        attr(div, "class", "bodytext");
      },
      m(target, anchor) {
        insert(target, div, anchor);
        append(div, span0);
        append(div, t1);
        append(div, span1);
        append(div, t3);
        mount_component(chunknav, div, null);
        append(div, t4);
        if (if_block)
          if_block.m(div, null);
        append(div, t5);
        append(div, hr);
        append(div, t6);
        key_block.m(div, null);
        append(div, t7);
        mount_component(endmarker, div, null);
        current = true;
        if (!mounted) {
          dispose = [
            listen(
              span0,
              "click",
              /*gotop*/
              ctx[11]
            ),
            listen(
              span1,
              "click",
              /*goactiveline*/
              ctx[10]
            )
          ];
          mounted = true;
        }
      },
      p(ctx2, [dirty]) {
        const chunknav_changes = {};
        if (dirty & /*ptk*/
        1)
          chunknav_changes.ptk = /*ptk*/
          ctx2[0];
        chunknav.$set(chunknav_changes);
        if (
          /*sutras*/
          ctx2[4].length
        ) {
          if (if_block) {
            if_block.p(ctx2, dirty);
            if (dirty & /*sutras*/
            16) {
              transition_in(if_block, 1);
            }
          } else {
            if_block = create_if_block14(ctx2);
            if_block.c();
            transition_in(if_block, 1);
            if_block.m(div, t5);
          }
        } else if (if_block) {
          group_outros();
          transition_out(if_block, 1, 1, () => {
            if_block = null;
          });
          check_outros();
        }
        if (dirty & /*activeline*/
        128 && safe_not_equal(previous_key, previous_key = /*activeline*/
        ctx2[7])) {
          key_block.d(1);
          key_block = create_key_block5(ctx2);
          key_block.c();
          key_block.m(div, t7);
        } else {
          key_block.p(ctx2, dirty);
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(chunknav.$$.fragment, local);
        transition_in(if_block);
        transition_in(endmarker.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(chunknav.$$.fragment, local);
        transition_out(if_block);
        transition_out(endmarker.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(div);
        destroy_component(chunknav);
        if (if_block)
          if_block.d();
        key_block.d(detaching);
        destroy_component(endmarker);
        mounted = false;
        run_all(dispose);
      }
    };
  }
  function instance26($$self, $$props, $$invalidate) {
    let activeline;
    let $loadingfolio;
    let $tapmark;
    component_subscribe($$self, loadingfolio, ($$value) => $$invalidate(13, $loadingfolio = $$value));
    component_subscribe($$self, tapmark, ($$value) => $$invalidate(14, $tapmark = $$value));
    let { ptk: ptk3 } = $$props;
    let ck, loff, displayline = 0, settingaddress = false, alllines = [], lines = [], sutra = [0, 0], sutras = [], minsutra = 0, maxsutra = 0;
    const loadChunkText = (mark, loading) => {
      if (loading)
        return;
      const ft = get_store_value(foliotext);
      if (!ft || !ft.fromFolioPos)
        return;
      let nsutra = 0;
      const { ckid, lineoff } = ft.fromFolioPos(mark);
      if (settingaddress && ck == ckid) {
        settingaddress = false;
        return;
      }
      loff = lineoff;
      $$invalidate(4, sutras.length = 0, sutras);
      alllines = [];
      $$invalidate(1, displayline = 0);
      alllines = ft.chunkText(ckid).split("\n");
      $$invalidate(5, minsutra = 0), $$invalidate(6, maxsutra = 0);
      for (let i = 0; i < alllines.length; i++) {
        const m4 = alllines[i].match(/\^n(\d+)/);
        if (m4) {
          const n = parseInt(m4[1]);
          if (minsutra == 0 && n) {
            $$invalidate(5, minsutra = n);
          }
          $$invalidate(6, maxsutra = n);
          if (i < lineoff)
            nsutra = sutras.length;
          sutras.push(i);
        }
      }
      if (nsutra !== sutra[0])
        $$invalidate(3, sutra[0] = nsutra, sutra);
      $$invalidate(7, activeline = lineoff - sutras[nsutra]);
      updateText();
      if (ck == ckid) {
        idx = sutra[0];
        $$invalidate(2, lines = alllines.slice(sutras[idx], sutras[idx + 1]));
        $$invalidate(1, displayline = sutras[idx] || 0);
      } else {
        $$invalidate(3, sutra[0] = 0, sutra);
        $$invalidate(1, displayline = sutras[0] || 0);
      }
      ck = ckid;
    };
    const updateText = () => {
      if (sutras.length) {
        sutras.push(alllines.length - 1);
        $$invalidate(2, lines = alllines.slice(sutras[0], sutras[1]));
      } else {
        $$invalidate(2, lines = alllines);
      }
    };
    const renderLine = (line) => {
      return _(line.replace(/\^[a-z_]#?[a-z\d]*/g, ""));
    };
    const setAddress = (lineoff) => {
      const ft = get_store_value(foliotext);
      if (!ft || !ft.fromFolioPos)
        return;
      const [pbid, line, ch] = ft.toFolioPos(ck, lineoff);
      goPb(pbid, ck, line);
      settingaddress = true;
      tapmark.set([pbid, line, ch]);
      $$invalidate(7, activeline = lineoff - displayline);
      updateUrl(tapAddress());
    };
    const goactiveline = () => {
      const ele = document.querySelector(".bodytext .activeline");
      if (!ele)
        return;
      ele.parentElement.parentElement.parentElement.scrollTop = ele.offsetTop;
    };
    const gotop = () => {
      const ele = document.querySelector(".bodytext .activeline");
      if (!ele)
        return;
      ele.parentElement.parentElement.parentElement.scrollTop = 0;
    };
    const setSutra = (e) => {
      const idx2 = e.detail[0];
      $$invalidate(2, lines = alllines.slice(sutras[idx2], sutras[idx2 + 1]));
      $$invalidate(1, displayline = sutras[idx2]);
      $$invalidate(7, activeline = 0);
    };
    function slider_value_binding(value) {
      sutra = value;
      $$invalidate(3, sutra);
    }
    const click_handler = (idx2) => setAddress(displayline + idx2);
    $$self.$$set = ($$props2) => {
      if ("ptk" in $$props2)
        $$invalidate(0, ptk3 = $$props2.ptk);
    };
    $$self.$$.update = () => {
      if ($$self.$$.dirty & /*$tapmark, $loadingfolio*/
      24576) {
        $:
          loadChunkText($tapmark, $loadingfolio);
      }
    };
    $:
      $$invalidate(7, activeline = 0);
    return [
      ptk3,
      displayline,
      lines,
      sutra,
      sutras,
      minsutra,
      maxsutra,
      activeline,
      renderLine,
      setAddress,
      goactiveline,
      gotop,
      setSutra,
      $loadingfolio,
      $tapmark,
      slider_value_binding,
      click_handler
    ];
  }
  var Chunktext = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance26, create_fragment30, safe_not_equal, { ptk: 0 });
    }
  };
  var chunktext_default = Chunktext;

  // src/sourcetext.svelte
  function get_each_context14(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[7] = list[i];
    return child_ctx;
  }
  function create_each_block14(ctx) {
    let div0;
    let t0_value = _(
      /*puretext*/
      ctx[2](
        /*item*/
        ctx[7].linetext
      )
    ) + "";
    let t0;
    let t1;
    let div1;
    return {
      c() {
        div0 = element("div");
        t0 = text(t0_value);
        t1 = space();
        div1 = element("div");
        attr(div1, "class", "hr");
      },
      m(target, anchor) {
        insert(target, div0, anchor);
        append(div0, t0);
        insert(target, t1, anchor);
        insert(target, div1, anchor);
      },
      p(ctx2, dirty) {
        if (dirty & /*sourcetexts*/
        2 && t0_value !== (t0_value = _(
          /*puretext*/
          ctx2[2](
            /*item*/
            ctx2[7].linetext
          )
        ) + ""))
          set_data(t0, t0_value);
      },
      d(detaching) {
        if (detaching)
          detach(div0);
        if (detaching)
          detach(t1);
        if (detaching)
          detach(div1);
      }
    };
  }
  function create_fragment31(ctx) {
    let div;
    let sentencenav;
    let t0;
    let t1;
    let endmarker;
    let current;
    sentencenav = new sentencenav_default({ props: { ptk: (
      /*ptk*/
      ctx[0]
    ) } });
    let each_value = (
      /*sourcetexts*/
      ctx[1]
    );
    let each_blocks = [];
    for (let i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block14(get_each_context14(ctx, each_value, i));
    }
    endmarker = new endmarker_default({});
    return {
      c() {
        div = element("div");
        create_component(sentencenav.$$.fragment);
        t0 = space();
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        t1 = space();
        create_component(endmarker.$$.fragment);
        attr(div, "class", "bodytext");
      },
      m(target, anchor) {
        insert(target, div, anchor);
        mount_component(sentencenav, div, null);
        append(div, t0);
        for (let i = 0; i < each_blocks.length; i += 1) {
          if (each_blocks[i]) {
            each_blocks[i].m(div, null);
          }
        }
        append(div, t1);
        mount_component(endmarker, div, null);
        current = true;
      },
      p(ctx2, [dirty]) {
        const sentencenav_changes = {};
        if (dirty & /*ptk*/
        1)
          sentencenav_changes.ptk = /*ptk*/
          ctx2[0];
        sentencenav.$set(sentencenav_changes);
        if (dirty & /*_, puretext, sourcetexts*/
        6) {
          each_value = /*sourcetexts*/
          ctx2[1];
          let i;
          for (i = 0; i < each_value.length; i += 1) {
            const child_ctx = get_each_context14(ctx2, each_value, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
            } else {
              each_blocks[i] = create_each_block14(child_ctx);
              each_blocks[i].c();
              each_blocks[i].m(div, t1);
            }
          }
          for (; i < each_blocks.length; i += 1) {
            each_blocks[i].d(1);
          }
          each_blocks.length = each_value.length;
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(sentencenav.$$.fragment, local);
        transition_in(endmarker.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(sentencenav.$$.fragment, local);
        transition_out(endmarker.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(div);
        destroy_component(sentencenav);
        destroy_each(each_blocks, detaching);
        destroy_component(endmarker);
      }
    };
  }
  function instance27($$self, $$props, $$invalidate) {
    let $loadingfolio;
    let $tapmark;
    let $foliotext;
    component_subscribe($$self, loadingfolio, ($$value) => $$invalidate(3, $loadingfolio = $$value));
    component_subscribe($$self, tapmark, ($$value) => $$invalidate(4, $tapmark = $$value));
    component_subscribe($$self, foliotext, ($$value) => $$invalidate(5, $foliotext = $$value));
    let { ptk: ptk3 } = $$props;
    let sourcetexts = [];
    const updateParallels = async (mark, loading) => {
      if (loading)
        return;
      const cl = $foliotext?.fromFolioPos($tapmark);
      if (!cl)
        return;
      $$invalidate(1, sourcetexts = await getParallelLines(ptk3, cl.ptkline, null, { remote: true, local: false }));
    };
    const puretext = (_text) => {
      const [text2] = parseOfftext(_text);
      return text2;
    };
    $$self.$$set = ($$props2) => {
      if ("ptk" in $$props2)
        $$invalidate(0, ptk3 = $$props2.ptk);
    };
    $$self.$$.update = () => {
      if ($$self.$$.dirty & /*$tapmark, $loadingfolio*/
      24) {
        $:
          updateParallels($tapmark, $loadingfolio);
      }
    };
    return [ptk3, sourcetexts, puretext, $loadingfolio, $tapmark];
  }
  var Sourcetext = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance27, create_fragment31, safe_not_equal, { ptk: 0 });
    }
  };
  var sourcetext_default = Sourcetext;

  // src/variorum.svelte
  function create_fragment32(ctx) {
    let div;
    let sentencenav0;
    let t0;
    let html_tag;
    let raw_value = _(
      /*text*/
      ctx[0]
    ) + "";
    let t1;
    let sentencenav1;
    let t2;
    let endmarker;
    let current;
    sentencenav0 = new sentencenav_default({ props: { ptk: usePtk("dc") } });
    sentencenav1 = new sentencenav_default({ props: { ptk: usePtk("dc") } });
    endmarker = new endmarker_default({});
    return {
      c() {
        div = element("div");
        create_component(sentencenav0.$$.fragment);
        t0 = space();
        html_tag = new HtmlTag(false);
        t1 = space();
        create_component(sentencenav1.$$.fragment);
        t2 = space();
        create_component(endmarker.$$.fragment);
        html_tag.a = t1;
        attr(div, "class", "bodytext");
      },
      m(target, anchor) {
        insert(target, div, anchor);
        mount_component(sentencenav0, div, null);
        append(div, t0);
        html_tag.m(raw_value, div);
        append(div, t1);
        mount_component(sentencenav1, div, null);
        append(div, t2);
        mount_component(endmarker, div, null);
        current = true;
      },
      p(ctx2, [dirty]) {
        if ((!current || dirty & /*text*/
        1) && raw_value !== (raw_value = _(
          /*text*/
          ctx2[0]
        ) + ""))
          html_tag.p(raw_value);
      },
      i(local) {
        if (current)
          return;
        transition_in(sentencenav0.$$.fragment, local);
        transition_in(sentencenav1.$$.fragment, local);
        transition_in(endmarker.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(sentencenav0.$$.fragment, local);
        transition_out(sentencenav1.$$.fragment, local);
        transition_out(endmarker.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(div);
        destroy_component(sentencenav0);
        destroy_component(sentencenav1);
        destroy_component(endmarker);
      }
    };
  }
  function instance28($$self, $$props, $$invalidate) {
    let $loadingfolio;
    component_subscribe($$self, loadingfolio, ($$value) => $$invalidate(1, $loadingfolio = $$value));
    let text2 = "";
    const updateVariorum = async (address, loading) => {
      const ptk3 = usePtk("dc");
      const r = ptk3.defines.r;
      if (!r || loading)
        return;
      const addr = parseAddress(address);
      const obj = parseAction(addr.action, true);
      if (!obj)
        return;
      const id = obj.ck + ":" + addr.highlightline;
      let at = r.fields.id.values.indexOf(id);
      if (~at) {
        const from = r.linepos[at];
        let to = r.linepos[at + 1];
        at++;
        while (to == from) {
          at++;
          to = r.linepos[at];
        }
        await ptk3.loadLines([[from, to + 1]]);
        const lines = ptk3.slice(from, to + 1);
        if (lines[lines.length - 1].indexOf("^ck"))
          lines.pop();
        if (lines.length) {
          lines[0] = '<div class="sourcetext">' + lines[0].replace(/\^r(\d+):/g, (m4, m1) => styledNumber(m1)) + "</div>";
        }
        $$invalidate(0, text2 = lines.join("<br/>"));
      }
    };
    $$self.$$.update = () => {
      if ($$self.$$.dirty & /*$loadingfolio*/
      2) {
        $:
          updateVariorum(tapAddress(), $loadingfolio);
      }
    };
    return [text2, $loadingfolio];
  }
  var Variorum = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance28, create_fragment32, safe_not_equal, {});
    }
  };
  var variorum_default = Variorum;

  // src/tofindhistory.svelte
  function get_each_context15(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[6] = list[i];
    return child_ctx;
  }
  function create_each_block15(ctx) {
    let span0;
    let t0_value = (
      /*item*/
      ctx[6] + ""
    );
    let t0;
    let span1;
    let mounted;
    let dispose;
    function click_handler() {
      return (
        /*click_handler*/
        ctx[4](
          /*item*/
          ctx[6]
        )
      );
    }
    function click_handler_1() {
      return (
        /*click_handler_1*/
        ctx[5](
          /*item*/
          ctx[6]
        )
      );
    }
    return {
      c() {
        span0 = element("span");
        t0 = text(t0_value);
        span1 = element("span");
        span1.textContent = "\u2715";
        attr(span0, "aria-hidden", "true");
        attr(span0, "class", "clickable");
        attr(span1, "aria-hidden", "true");
        attr(span1, "class", "delete clickable");
      },
      m(target, anchor) {
        insert(target, span0, anchor);
        append(span0, t0);
        insert(target, span1, anchor);
        if (!mounted) {
          dispose = [
            listen(span0, "click", click_handler),
            listen(span1, "click", click_handler_1)
          ];
          mounted = true;
        }
      },
      p(new_ctx, dirty) {
        ctx = new_ctx;
        if (dirty & /*items*/
        2 && t0_value !== (t0_value = /*item*/
        ctx[6] + ""))
          set_data(t0, t0_value);
      },
      d(detaching) {
        if (detaching)
          detach(span0);
        if (detaching)
          detach(span1);
        mounted = false;
        run_all(dispose);
      }
    };
  }
  function create_fragment33(ctx) {
    let div;
    let each_value = (
      /*items*/
      ctx[1]
    );
    let each_blocks = [];
    for (let i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block15(get_each_context15(ctx, each_value, i));
    }
    return {
      c() {
        div = element("div");
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        attr(div, "class", "bodytext");
      },
      m(target, anchor) {
        insert(target, div, anchor);
        for (let i = 0; i < each_blocks.length; i += 1) {
          if (each_blocks[i]) {
            each_blocks[i].m(div, null);
          }
        }
      },
      p(ctx2, [dirty]) {
        if (dirty & /*removeTofind, items, setTofind*/
        3) {
          each_value = /*items*/
          ctx2[1];
          let i;
          for (i = 0; i < each_value.length; i += 1) {
            const child_ctx = get_each_context15(ctx2, each_value, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
            } else {
              each_blocks[i] = create_each_block15(child_ctx);
              each_blocks[i].c();
              each_blocks[i].m(div, null);
            }
          }
          for (; i < each_blocks.length; i += 1) {
            each_blocks[i].d(1);
          }
          each_blocks.length = each_value.length;
        }
      },
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching)
          detach(div);
        destroy_each(each_blocks, detaching);
      }
    };
  }
  function instance29($$self, $$props, $$invalidate) {
    let items;
    let $tofind;
    let $tofindhistory;
    component_subscribe($$self, tofind, ($$value) => $$invalidate(2, $tofind = $$value));
    component_subscribe($$self, tofindhistory, ($$value) => $$invalidate(3, $tofindhistory = $$value));
    const setTofind = (tf) => {
      tofind.set(tf);
    };
    const click_handler = (item) => setTofind(item);
    const click_handler_1 = (item) => removeTofind(item);
    $$self.$$.update = () => {
      if ($$self.$$.dirty & /*$tofindhistory*/
      8) {
        $:
          $$invalidate(1, items = $tofindhistory.slice(0, $tofindhistory.length));
      }
      if ($$self.$$.dirty & /*$tofind*/
      4) {
        $:
          console.log("tofind", $tofind);
      }
    };
    return [setTofind, items, $tofind, $tofindhistory, click_handler, click_handler_1];
  }
  var Tofindhistory = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance29, create_fragment33, safe_not_equal, { setTofind: 0 });
    }
    get setTofind() {
      return this.$$.ctx[0];
    }
  };
  var tofindhistory_default = Tofindhistory;

  // src/searchhelp.svelte
  function create_fragment34(ctx) {
    let tofindhistory2;
    let t0;
    let hr;
    let t1;
    let div;
    let t2_value = _("\u9EDE\u5716\u7247\u4EFB\u4F55\u4E00\u5B57\uFF0C\u5C07\u77ED\u53E5\u5E36\u5165\u5019\u9078\u5340\uFF0C\u9810\u8A2D\u524D\u4E09\u500B\u5B57\u70BA\u95DC\u9375\u5B57\u3002") + "";
    let t2;
    let t3;
    let br0;
    let t4_value = _("\u9EDE\u7D05\u8272\u80CC\u666F\u7684\u5B57\uFF0C\u5206\u4EAB\u8A72\u6BB5\u7D93\u6587\u3002") + "";
    let t4;
    let t5;
    let br1;
    let t6_value = _("\u2661\u66F8\u7C64\u3002\u9583\u720D\u6642\u518D\u9EDE\u64CA\u6539\u8B8A\u984F\u8272\uFF0C\u4E0D\u9583\u720D\u6642\u518D\u9EDE\u53D6\u6D88\u3002") + "";
    let t6;
    let t7;
    let br2;
    let t8_value = _("\u9EDE\u5019\u9078\u5340\u6539\u8B8A\u95DC\u9375\u7684\u9577\u5EA6\uFF0C\u540C\u500B\u4F4D\u7F6E\u518D\u9EDE\u4E00\u6B21\uFF0C\u8CBC\u5230\u8F38\u5165\u5340\u3002") + "";
    let t8;
    let t9;
    let br3;
    let t10_value = _("\u5019\u9078\u5340\u8207\u8F38\u5165\u5340\u6587\u5B57\u76F8\u540C\uFF0C\u518D\u9EDE\u5019\u9078\u5340\u6E05\u9664\u8F38\u5165\u5340\u3002") + "";
    let t10;
    let t11;
    let br4;
    let t12_value = _("\u641C\u5C0B\u7D50\u679C\uFF1A") + "";
    let t12;
    let t13;
    let br5;
    let t14_value = _("\u641C\u5C0B\u5206\u9801\u70BA\u958B\u982D\u70BA\u2192\u7684\u884C\uFF0C\u53EF\u4EE5\u5DE6\u53F3\u6ED1\u52D5\u7FFB\u9801\uFF0C\u9EDE\u64CA\u7FFB\u4E0B\u4E00\u9801\u3002") + "";
    let t14;
    let t15;
    let br6;
    let t16_value = _("\u90E8\u985E\u540D\u53F3\u908A\u7684\u7D05\u8272\u6578\u5B57\u8868\u793A\u95DC\u9375\u5B57\u51FA\u73FE\u6B21\u6578\uFF0C\u9EDE\u64CA\u986F\u793A\u6240\u6709\u6458\u8981\u884C\u3002") + "";
    let t16;
    let t17;
    let br7;
    let t18_value = _("\u9EDE\u90E8\u985E\u540D\u7D71\u8A08\u6A19\u984C\u5167\u95DC\u9375\u5B57\u51FA\u73FE\u6B21\u6578\uFF0C\u9EDE\u51FA\u73FE\u6B21\u6578\u986F\u793A\u8A72\u7AE0\u7BC0\u5167\u4E4B\u6458\u8981\u884C\u3002") + "";
    let t18;
    let t19;
    let br8;
    let t20_value = _("\u8F38\u5165\u6642\u6703\u986F\u793A\u958B\u982D\u7B26\u5408\u3001\u7D50\u5C3E\u7B26\u5408\u6216\u4E2D\u9593\u7B26\u5408\u7684\u63A8\u85A6\u8A5E\uFF0C\u9EDE\u4E00\u4E0B\u5E36\u5165\u5019\u9078\u5340\u3002") + "";
    let t20;
    let t21;
    let br9;
    let t22_value = _("\u5F9E\u641C\u5C0B\u7D50\u679C\u8DF3\u8F49\u5230\u672C\u6587\uFF0C\u641C\u5C0B\u6587\u5B57\u6703\u52A0\u5165\u8A18\u61B6\uFF0C\u6700\u591A\u4E8C\u5341\u7D44\uFF0C\u8D85\u904E\u522A\u53BB\u6700\u521D\u7684\u8A18\u61B6\u3002\u6309\u65C1\u908A\u7684\u7D05\u8272\u53C9\u53EF\u522A\u9664\u3002") + "";
    let t22;
    let current;
    tofindhistory2 = new tofindhistory_default({});
    return {
      c() {
        create_component(tofindhistory2.$$.fragment);
        t0 = space();
        hr = element("hr");
        t1 = space();
        div = element("div");
        t2 = text(t2_value);
        t3 = space();
        br0 = element("br");
        t4 = text(t4_value);
        t5 = space();
        br1 = element("br");
        t6 = text(t6_value);
        t7 = space();
        br2 = element("br");
        t8 = text(t8_value);
        t9 = space();
        br3 = element("br");
        t10 = text(t10_value);
        t11 = space();
        br4 = element("br");
        t12 = text(t12_value);
        t13 = space();
        br5 = element("br");
        t14 = text(t14_value);
        t15 = space();
        br6 = element("br");
        t16 = text(t16_value);
        t17 = space();
        br7 = element("br");
        t18 = text(t18_value);
        t19 = space();
        br8 = element("br");
        t20 = text(t20_value);
        t21 = space();
        br9 = element("br");
        t22 = text(t22_value);
        attr(div, "class", "bodytext");
      },
      m(target, anchor) {
        mount_component(tofindhistory2, target, anchor);
        insert(target, t0, anchor);
        insert(target, hr, anchor);
        insert(target, t1, anchor);
        insert(target, div, anchor);
        append(div, t2);
        append(div, t3);
        append(div, br0);
        append(div, t4);
        append(div, t5);
        append(div, br1);
        append(div, t6);
        append(div, t7);
        append(div, br2);
        append(div, t8);
        append(div, t9);
        append(div, br3);
        append(div, t10);
        append(div, t11);
        append(div, br4);
        append(div, t12);
        append(div, t13);
        append(div, br5);
        append(div, t14);
        append(div, t15);
        append(div, br6);
        append(div, t16);
        append(div, t17);
        append(div, br7);
        append(div, t18);
        append(div, t19);
        append(div, br8);
        append(div, t20);
        append(div, t21);
        append(div, br9);
        append(div, t22);
        current = true;
      },
      p: noop,
      i(local) {
        if (current)
          return;
        transition_in(tofindhistory2.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(tofindhistory2.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(tofindhistory2, detaching);
        if (detaching)
          detach(t0);
        if (detaching)
          detach(hr);
        if (detaching)
          detach(t1);
        if (detaching)
          detach(div);
      }
    };
  }
  var Searchhelp = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, null, create_fragment34, safe_not_equal, {});
    }
  };
  var searchhelp_default = Searchhelp;

  // src/address.js
  var makeAddressFromLine = (line, _ptk) => {
    const ptk3 = _ptk || curPtk();
    const bk2 = ptk3.nearestTag(line + 1, "bk", "id");
    const ck = ptk3.nearestTag(line + 1, "ck", "id");
    const n = ptk3.nearestTag(line + 1, "n", "id");
    if (typeof bk2 == "undefined" || typeof ck == "undefined" || typeof n == "undefined")
      return "";
    const addr = "bk#" + bk2 + ".ck#" + ck + ".n" + n;
    const [start] = ptk3.rangeOfAddress(addr);
    return line - start > 0 ? addr + ":" + (line - start) : addr;
  };
  var humanAddress = (addr) => {
    const ptk3 = curPtk();
    let out = "";
    const [start] = ptk3.rangeOfAddress(addr);
    const ck = ptk3.nearestChunk(start);
    out += ck?.caption.replace(/\d+$/g, "") || "";
    return out;
  };

  // src/comps/simplebutton.svelte
  function create_fragment35(ctx) {
    let span;
    let span_class_value;
    let current;
    let mounted;
    let dispose;
    const default_slot_template = (
      /*#slots*/
      ctx[5].default
    );
    const default_slot = create_slot(
      default_slot_template,
      ctx,
      /*$$scope*/
      ctx[4],
      null
    );
    return {
      c() {
        span = element("span");
        if (default_slot)
          default_slot.c();
        attr(span, "class", span_class_value = /*className*/
        ctx[1] + /*clicked*/
        (ctx[3] ? " clicked" : ""));
        attr(
          span,
          "title",
          /*title*/
          ctx[2]
        );
        attr(span, "aria-hidden", "true");
      },
      m(target, anchor) {
        insert(target, span, anchor);
        if (default_slot) {
          default_slot.m(span, null);
        }
        current = true;
        if (!mounted) {
          dispose = listen(
            span,
            "click",
            /*click_handler*/
            ctx[6]
          );
          mounted = true;
        }
      },
      p(ctx2, [dirty]) {
        if (default_slot) {
          if (default_slot.p && (!current || dirty & /*$$scope*/
          16)) {
            update_slot_base(
              default_slot,
              default_slot_template,
              ctx2,
              /*$$scope*/
              ctx2[4],
              !current ? get_all_dirty_from_scope(
                /*$$scope*/
                ctx2[4]
              ) : get_slot_changes(
                default_slot_template,
                /*$$scope*/
                ctx2[4],
                dirty,
                null
              ),
              null
            );
          }
        }
        if (!current || dirty & /*className, clicked*/
        10 && span_class_value !== (span_class_value = /*className*/
        ctx2[1] + /*clicked*/
        (ctx2[3] ? " clicked" : ""))) {
          attr(span, "class", span_class_value);
        }
        if (!current || dirty & /*title*/
        4) {
          attr(
            span,
            "title",
            /*title*/
            ctx2[2]
          );
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(default_slot, local);
        current = true;
      },
      o(local) {
        transition_out(default_slot, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(span);
        if (default_slot)
          default_slot.d(detaching);
        mounted = false;
        dispose();
      }
    };
  }
  function instance30($$self, $$props, $$invalidate) {
    let { $$slots: slots = {}, $$scope } = $$props;
    let { onclick = () => {
    } } = $$props;
    let { className = "clickable" } = $$props;
    let { title = "" } = $$props;
    let { clicked = false } = $$props;
    const click_handler = () => onclick();
    $$self.$$set = ($$props2) => {
      if ("onclick" in $$props2)
        $$invalidate(0, onclick = $$props2.onclick);
      if ("className" in $$props2)
        $$invalidate(1, className = $$props2.className);
      if ("title" in $$props2)
        $$invalidate(2, title = $$props2.title);
      if ("clicked" in $$props2)
        $$invalidate(3, clicked = $$props2.clicked);
      if ("$$scope" in $$props2)
        $$invalidate(4, $$scope = $$props2.$$scope);
    };
    return [onclick, className, title, clicked, $$scope, slots, click_handler];
  }
  var Simplebutton = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance30, create_fragment35, safe_not_equal, {
        onclick: 0,
        className: 1,
        title: 2,
        clicked: 3
      });
    }
  };
  var simplebutton_default = Simplebutton;

  // src/comps/abridge.svelte
  function get_each_context16(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[12] = list[i];
    child_ctx[14] = i;
    return child_ctx;
  }
  var get_default_slot_changes2 = (dirty) => ({ tk: dirty & /*abridges*/
  2 });
  var get_default_slot_context2 = (ctx) => ({ tk: (
    /*ab*/
    ctx[12]
  ) });
  function create_else_block6(ctx) {
    let current;
    const default_slot_template = (
      /*#slots*/
      ctx[7].default
    );
    const default_slot = create_slot(
      default_slot_template,
      ctx,
      /*$$scope*/
      ctx[11],
      get_default_slot_context2
    );
    const default_slot_or_fallback = default_slot || fallback_block2(ctx);
    return {
      c() {
        if (default_slot_or_fallback)
          default_slot_or_fallback.c();
      },
      m(target, anchor) {
        if (default_slot_or_fallback) {
          default_slot_or_fallback.m(target, anchor);
        }
        current = true;
      },
      p(ctx2, dirty) {
        if (default_slot) {
          if (default_slot.p && (!current || dirty & /*$$scope, abridges*/
          2050)) {
            update_slot_base(
              default_slot,
              default_slot_template,
              ctx2,
              /*$$scope*/
              ctx2[11],
              !current ? get_all_dirty_from_scope(
                /*$$scope*/
                ctx2[11]
              ) : get_slot_changes(
                default_slot_template,
                /*$$scope*/
                ctx2[11],
                dirty,
                get_default_slot_changes2
              ),
              get_default_slot_context2
            );
          }
        } else {
          if (default_slot_or_fallback && default_slot_or_fallback.p && (!current || dirty & /*abridges*/
          2)) {
            default_slot_or_fallback.p(ctx2, !current ? -1 : dirty);
          }
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(default_slot_or_fallback, local);
        current = true;
      },
      o(local) {
        transition_out(default_slot_or_fallback, local);
        current = false;
      },
      d(detaching) {
        if (default_slot_or_fallback)
          default_slot_or_fallback.d(detaching);
      }
    };
  }
  function create_if_block15(ctx) {
    let if_block0_anchor;
    let simplebutton;
    let if_block1_anchor;
    let current;
    let if_block0 = (
      /*ab*/
      ctx[12][1] && /*ab*/
      ctx[12][0] > 10 && create_if_block_26(ctx)
    );
    function func_1() {
      return (
        /*func_1*/
        ctx[9](
          /*idx*/
          ctx[14]
        )
      );
    }
    simplebutton = new simplebutton_default({
      props: {
        className: "abridged",
        onclick: func_1,
        $$slots: { default: [create_default_slot_12] },
        $$scope: { ctx }
      }
    });
    let if_block1 = !/*ab*/
    ctx[12][2] && create_if_block_19(ctx);
    return {
      c() {
        if (if_block0)
          if_block0.c();
        if_block0_anchor = empty();
        create_component(simplebutton.$$.fragment);
        if (if_block1)
          if_block1.c();
        if_block1_anchor = empty();
      },
      m(target, anchor) {
        if (if_block0)
          if_block0.m(target, anchor);
        insert(target, if_block0_anchor, anchor);
        mount_component(simplebutton, target, anchor);
        if (if_block1)
          if_block1.m(target, anchor);
        insert(target, if_block1_anchor, anchor);
        current = true;
      },
      p(new_ctx, dirty) {
        ctx = new_ctx;
        if (
          /*ab*/
          ctx[12][1] && /*ab*/
          ctx[12][0] > 10
        ) {
          if (if_block0) {
            if_block0.p(ctx, dirty);
            if (dirty & /*abridges*/
            2) {
              transition_in(if_block0, 1);
            }
          } else {
            if_block0 = create_if_block_26(ctx);
            if_block0.c();
            transition_in(if_block0, 1);
            if_block0.m(if_block0_anchor.parentNode, if_block0_anchor);
          }
        } else if (if_block0) {
          group_outros();
          transition_out(if_block0, 1, 1, () => {
            if_block0 = null;
          });
          check_outros();
        }
        const simplebutton_changes = {};
        if (dirty & /*$$scope, abridges*/
        2050) {
          simplebutton_changes.$$scope = { dirty, ctx };
        }
        simplebutton.$set(simplebutton_changes);
        if (!/*ab*/
        ctx[12][2]) {
          if (if_block1) {
            if_block1.p(ctx, dirty);
            if (dirty & /*abridges*/
            2) {
              transition_in(if_block1, 1);
            }
          } else {
            if_block1 = create_if_block_19(ctx);
            if_block1.c();
            transition_in(if_block1, 1);
            if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
          }
        } else if (if_block1) {
          group_outros();
          transition_out(if_block1, 1, 1, () => {
            if_block1 = null;
          });
          check_outros();
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(if_block0);
        transition_in(simplebutton.$$.fragment, local);
        transition_in(if_block1);
        current = true;
      },
      o(local) {
        transition_out(if_block0);
        transition_out(simplebutton.$$.fragment, local);
        transition_out(if_block1);
        current = false;
      },
      d(detaching) {
        if (if_block0)
          if_block0.d(detaching);
        if (detaching)
          detach(if_block0_anchor);
        destroy_component(simplebutton, detaching);
        if (if_block1)
          if_block1.d(detaching);
        if (detaching)
          detach(if_block1_anchor);
      }
    };
  }
  function fallback_block2(ctx) {
    let t_value = (
      /*ab*/
      ctx[12].text + ""
    );
    let t;
    return {
      c() {
        t = text(t_value);
      },
      m(target, anchor) {
        insert(target, t, anchor);
      },
      p(ctx2, dirty) {
        if (dirty & /*abridges*/
        2 && t_value !== (t_value = /*ab*/
        ctx2[12].text + ""))
          set_data(t, t_value);
      },
      d(detaching) {
        if (detaching)
          detach(t);
      }
    };
  }
  function create_if_block_26(ctx) {
    let simplebutton;
    let current;
    function func2() {
      return (
        /*func*/
        ctx[8](
          /*idx*/
          ctx[14]
        )
      );
    }
    simplebutton = new simplebutton_default({
      props: {
        onclick: func2,
        $$slots: { default: [create_default_slot_22] },
        $$scope: { ctx }
      }
    });
    return {
      c() {
        create_component(simplebutton.$$.fragment);
      },
      m(target, anchor) {
        mount_component(simplebutton, target, anchor);
        current = true;
      },
      p(new_ctx, dirty) {
        ctx = new_ctx;
        const simplebutton_changes = {};
        if (dirty & /*$$scope*/
        2048) {
          simplebutton_changes.$$scope = { dirty, ctx };
        }
        simplebutton.$set(simplebutton_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(simplebutton.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(simplebutton.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(simplebutton, detaching);
      }
    };
  }
  function create_default_slot_22(ctx) {
    let t;
    return {
      c() {
        t = text("\u2026");
      },
      m(target, anchor) {
        insert(target, t, anchor);
      },
      d(detaching) {
        if (detaching)
          detach(t);
      }
    };
  }
  function create_default_slot_12(ctx) {
    let t_value = (
      /*ab*/
      ctx[12][0] + ""
    );
    let t;
    return {
      c() {
        t = text(t_value);
      },
      m(target, anchor) {
        insert(target, t, anchor);
      },
      p(ctx2, dirty) {
        if (dirty & /*abridges*/
        2 && t_value !== (t_value = /*ab*/
        ctx2[12][0] + ""))
          set_data(t, t_value);
      },
      d(detaching) {
        if (detaching)
          detach(t);
      }
    };
  }
  function create_if_block_19(ctx) {
    let simplebutton;
    let current;
    function func_2() {
      return (
        /*func_2*/
        ctx[10](
          /*idx*/
          ctx[14]
        )
      );
    }
    simplebutton = new simplebutton_default({
      props: {
        onclick: func_2,
        $$slots: { default: [create_default_slot6] },
        $$scope: { ctx }
      }
    });
    return {
      c() {
        create_component(simplebutton.$$.fragment);
      },
      m(target, anchor) {
        mount_component(simplebutton, target, anchor);
        current = true;
      },
      p(new_ctx, dirty) {
        ctx = new_ctx;
        const simplebutton_changes = {};
        if (dirty & /*$$scope*/
        2048) {
          simplebutton_changes.$$scope = { dirty, ctx };
        }
        simplebutton.$set(simplebutton_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(simplebutton.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(simplebutton.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(simplebutton, detaching);
      }
    };
  }
  function create_default_slot6(ctx) {
    let t;
    return {
      c() {
        t = text("\u2026");
      },
      m(target, anchor) {
        insert(target, t, anchor);
      },
      d(detaching) {
        if (detaching)
          detach(t);
      }
    };
  }
  function create_each_block16(ctx) {
    let show_if;
    let current_block_type_index;
    let if_block;
    let if_block_anchor;
    let current;
    const if_block_creators = [create_if_block15, create_else_block6];
    const if_blocks = [];
    function select_block_type(ctx2, dirty) {
      if (dirty & /*abridges*/
      2)
        show_if = null;
      if (show_if == null)
        show_if = !!Array.isArray(
          /*ab*/
          ctx2[12]
        );
      if (show_if)
        return 0;
      return 1;
    }
    current_block_type_index = select_block_type(ctx, -1);
    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    return {
      c() {
        if_block.c();
        if_block_anchor = empty();
      },
      m(target, anchor) {
        if_blocks[current_block_type_index].m(target, anchor);
        insert(target, if_block_anchor, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        let previous_block_index = current_block_type_index;
        current_block_type_index = select_block_type(ctx2, dirty);
        if (current_block_type_index === previous_block_index) {
          if_blocks[current_block_type_index].p(ctx2, dirty);
        } else {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, () => {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
          if_block = if_blocks[current_block_type_index];
          if (!if_block) {
            if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
            if_block.c();
          } else {
            if_block.p(ctx2, dirty);
          }
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(if_block);
        current = true;
      },
      o(local) {
        transition_out(if_block);
        current = false;
      },
      d(detaching) {
        if_blocks[current_block_type_index].d(detaching);
        if (detaching)
          detach(if_block_anchor);
      }
    };
  }
  function create_key_block6(ctx) {
    let each_1_anchor;
    let current;
    let each_value = (
      /*abridges*/
      ctx[1]
    );
    let each_blocks = [];
    for (let i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block16(get_each_context16(ctx, each_value, i));
    }
    const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
      each_blocks[i] = null;
    });
    return {
      c() {
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        each_1_anchor = empty();
      },
      m(target, anchor) {
        for (let i = 0; i < each_blocks.length; i += 1) {
          if (each_blocks[i]) {
            each_blocks[i].m(target, anchor);
          }
        }
        insert(target, each_1_anchor, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        if (dirty & /*expand, abridges, Array, $$scope*/
        2054) {
          each_value = /*abridges*/
          ctx2[1];
          let i;
          for (i = 0; i < each_value.length; i += 1) {
            const child_ctx = get_each_context16(ctx2, each_value, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
              transition_in(each_blocks[i], 1);
            } else {
              each_blocks[i] = create_each_block16(child_ctx);
              each_blocks[i].c();
              transition_in(each_blocks[i], 1);
              each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
            }
          }
          group_outros();
          for (i = each_value.length; i < each_blocks.length; i += 1) {
            out(i);
          }
          check_outros();
        }
      },
      i(local) {
        if (current)
          return;
        for (let i = 0; i < each_value.length; i += 1) {
          transition_in(each_blocks[i]);
        }
        current = true;
      },
      o(local) {
        each_blocks = each_blocks.filter(Boolean);
        for (let i = 0; i < each_blocks.length; i += 1) {
          transition_out(each_blocks[i]);
        }
        current = false;
      },
      d(detaching) {
        destroy_each(each_blocks, detaching);
        if (detaching)
          detach(each_1_anchor);
      }
    };
  }
  function create_fragment36(ctx) {
    let previous_key = (
      /*refreshcount*/
      ctx[0]
    );
    let key_block_anchor;
    let current;
    let key_block = create_key_block6(ctx);
    return {
      c() {
        key_block.c();
        key_block_anchor = empty();
      },
      m(target, anchor) {
        key_block.m(target, anchor);
        insert(target, key_block_anchor, anchor);
        current = true;
      },
      p(ctx2, [dirty]) {
        if (dirty & /*refreshcount*/
        1 && safe_not_equal(previous_key, previous_key = /*refreshcount*/
        ctx2[0])) {
          group_outros();
          transition_out(key_block, 1, 1, noop);
          check_outros();
          key_block = create_key_block6(ctx2);
          key_block.c();
          transition_in(key_block, 1);
          key_block.m(key_block_anchor.parentNode, key_block_anchor);
        } else {
          key_block.p(ctx2, dirty);
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(key_block);
        current = true;
      },
      o(local) {
        transition_out(key_block);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(key_block_anchor);
        key_block.d(detaching);
      }
    };
  }
  function instance31($$self, $$props, $$invalidate) {
    let runits;
    let abridges;
    let { $$slots: slots = {}, $$scope } = $$props;
    let { hits = [] } = $$props;
    if (!hits.length)
      hits = [0];
    let { phraselength = [5] } = $$props;
    let { text: text2 = "" } = $$props;
    let refreshcount = 1;
    const expand = (idx2, direction = 0) => {
      const R = runits;
      const [len, from] = abridges[idx2];
      const start = from + (direction == -1 ? len : 0);
      let j2 = start;
      if (direction == -1) {
        while (j2 > 0 && (R[j2].token.type >= 16 /* SEARCHABLE */ || start - j2 < MIN_ABRIDGE))
          j2--;
        for (let i = j2; i < start; i++)
          R[i].luminate++;
      } else if (direction == 1) {
        while (j2 < R.length && (R[j2].token.type >= 16 /* SEARCHABLE */ || j2 - start < MIN_ABRIDGE))
          j2++;
        for (let i = start; i < j2; i++)
          R[i].luminate++;
      } else {
        for (let i = from; i < from + len; i++)
          R[i].luminate++;
      }
      $$invalidate(0, refreshcount++, refreshcount);
    };
    const func2 = (idx2) => expand(idx2, 1);
    const func_1 = (idx2) => expand(idx2);
    const func_2 = (idx2) => expand(idx2, -1);
    $$self.$$set = ($$props2) => {
      if ("hits" in $$props2)
        $$invalidate(3, hits = $$props2.hits);
      if ("phraselength" in $$props2)
        $$invalidate(4, phraselength = $$props2.phraselength);
      if ("text" in $$props2)
        $$invalidate(5, text2 = $$props2.text);
      if ("$$scope" in $$props2)
        $$invalidate(11, $$scope = $$props2.$$scope);
    };
    $$self.$$.update = () => {
      if ($$self.$$.dirty & /*text, hits, phraselength*/
      56) {
        $:
          $$invalidate(6, [runits] = renderOfftext(text2, { hits, phraselength }), runits);
      }
      if ($$self.$$.dirty & /*runits, refreshcount*/
      65) {
        $:
          $$invalidate(1, abridges = abridgeRenderUnits(runits, 20, refreshcount));
      }
    };
    return [
      refreshcount,
      abridges,
      expand,
      hits,
      phraselength,
      text2,
      runits,
      slots,
      func2,
      func_1,
      func_2,
      $$scope
    ];
  }
  var Abridge = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance31, create_fragment36, safe_not_equal, { hits: 3, phraselength: 4, text: 5 });
    }
  };
  var abridge_default = Abridge;

  // src/excerptline.svelte
  function create_else_block7(ctx) {
    let t_value = (
      /*tk*/
      ctx[6].text + ""
    );
    let t;
    return {
      c() {
        t = text(t_value);
      },
      m(target, anchor) {
        insert(target, t, anchor);
      },
      p(ctx2, dirty) {
        if (dirty & /*tk*/
        64 && t_value !== (t_value = /*tk*/
        ctx2[6].text + ""))
          set_data(t, t_value);
      },
      d(detaching) {
        if (detaching)
          detach(t);
      }
    };
  }
  function create_if_block16(ctx) {
    let span;
    let t_value = (
      /*tk*/
      ctx[6].text + ""
    );
    let t;
    let mounted;
    let dispose;
    function click_handler() {
      return (
        /*click_handler*/
        ctx[5](
          /*tk*/
          ctx[6]
        )
      );
    }
    return {
      c() {
        span = element("span");
        t = text(t_value);
        attr(span, "aria-hidden", "true");
        attr(span, "class", "clickable hl0");
      },
      m(target, anchor) {
        insert(target, span, anchor);
        append(span, t);
        if (!mounted) {
          dispose = listen(span, "click", click_handler);
          mounted = true;
        }
      },
      p(new_ctx, dirty) {
        ctx = new_ctx;
        if (dirty & /*tk*/
        64 && t_value !== (t_value = /*tk*/
        ctx[6].text + ""))
          set_data(t, t_value);
      },
      d(detaching) {
        if (detaching)
          detach(span);
        mounted = false;
        dispose();
      }
    };
  }
  function create_default_slot7(ctx) {
    let if_block_anchor;
    function select_block_type(ctx2, dirty) {
      if (
        /*tk*/
        ctx2[6].highlight
      )
        return create_if_block16;
      return create_else_block7;
    }
    let current_block_type = select_block_type(ctx, -1);
    let if_block = current_block_type(ctx);
    return {
      c() {
        if_block.c();
        if_block_anchor = empty();
      },
      m(target, anchor) {
        if_block.m(target, anchor);
        insert(target, if_block_anchor, anchor);
      },
      p(ctx2, dirty) {
        if (current_block_type === (current_block_type = select_block_type(ctx2, dirty)) && if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block.d(1);
          if_block = current_block_type(ctx2);
          if (if_block) {
            if_block.c();
            if_block.m(if_block_anchor.parentNode, if_block_anchor);
          }
        }
      },
      d(detaching) {
        if_block.d(detaching);
        if (detaching)
          detach(if_block_anchor);
      }
    };
  }
  function create_fragment37(ctx) {
    let abridge;
    let current;
    abridge = new abridge_default({
      props: {
        phraselength: (
          /*phraselength*/
          ctx[3]
        ),
        text: (
          /*linetext*/
          ctx[0]
        ),
        hits: (
          /*hits*/
          ctx[2]
        ),
        $$slots: {
          default: [create_default_slot7, ({ tk }) => ({ 6: tk }), ({ tk }) => tk ? 64 : 0]
        },
        $$scope: { ctx }
      }
    });
    return {
      c() {
        create_component(abridge.$$.fragment);
      },
      m(target, anchor) {
        mount_component(abridge, target, anchor);
        current = true;
      },
      p(ctx2, [dirty]) {
        const abridge_changes = {};
        if (dirty & /*phraselength*/
        8)
          abridge_changes.phraselength = /*phraselength*/
          ctx2[3];
        if (dirty & /*linetext*/
        1)
          abridge_changes.text = /*linetext*/
          ctx2[0];
        if (dirty & /*hits*/
        4)
          abridge_changes.hits = /*hits*/
          ctx2[2];
        if (dirty & /*$$scope, gochar, line, tk*/
        210) {
          abridge_changes.$$scope = { dirty, ctx: ctx2 };
        }
        abridge.$set(abridge_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(abridge.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(abridge.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(abridge, detaching);
      }
    };
  }
  function instance32($$self, $$props, $$invalidate) {
    let { linetext = "" } = $$props;
    let { line = 0 } = $$props;
    let { hits = [] } = $$props;
    let { phraselength = [] } = $$props;
    let { gochar = function(choff) {
    } } = $$props;
    const click_handler = (tk) => gochar(line, tk.choff);
    $$self.$$set = ($$props2) => {
      if ("linetext" in $$props2)
        $$invalidate(0, linetext = $$props2.linetext);
      if ("line" in $$props2)
        $$invalidate(1, line = $$props2.line);
      if ("hits" in $$props2)
        $$invalidate(2, hits = $$props2.hits);
      if ("phraselength" in $$props2)
        $$invalidate(3, phraselength = $$props2.phraselength);
      if ("gochar" in $$props2)
        $$invalidate(4, gochar = $$props2.gochar);
    };
    return [linetext, line, hits, phraselength, gochar, click_handler];
  }
  var Excerptline = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance32, create_fragment37, safe_not_equal, {
        linetext: 0,
        line: 1,
        hits: 2,
        phraselength: 3,
        gochar: 4
      });
    }
  };
  var excerptline_default = Excerptline;

  // src/excerpt.svelte
  function get_each_context17(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[32] = list[i];
    child_ctx[34] = i;
    return child_ctx;
  }
  function get_each_context_12(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[35] = list[i];
    child_ctx[34] = i;
    return child_ctx;
  }
  function get_each_context_2(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[39] = list[i];
    child_ctx[34] = i;
    return child_ctx;
  }
  function create_each_block_2(ctx) {
    let span0;
    let t0_value = _(
      /*scope*/
      ctx[39].caption
    ) + "";
    let t0;
    let span1;
    let t1_value = "(" + /*scope*/
    ctx[39].count + ")";
    let t1;
    let mounted;
    let dispose;
    function click_handler() {
      return (
        /*click_handler*/
        ctx[19](
          /*idx*/
          ctx[34]
        )
      );
    }
    function click_handler_1() {
      return (
        /*click_handler_1*/
        ctx[20](
          /*idx*/
          ctx[34]
        )
      );
    }
    return {
      c() {
        span0 = element("span");
        t0 = text(t0_value);
        span1 = element("span");
        t1 = text(t1_value);
        attr(span0, "aria-hidden", "true");
        attr(span0, "class", "clickable scopebtn");
        toggle_class(
          span0,
          "selected",
          /*idx*/
          ctx[34] * 2 == /*selected*/
          ctx[5]
        );
        attr(span1, "aria-hidden", "true");
        attr(span1, "class", "clickable hitbtn");
        toggle_class(span1, "selected", 1 + /*idx*/
        ctx[34] * 2 == /*selected*/
        ctx[5]);
      },
      m(target, anchor) {
        insert(target, span0, anchor);
        append(span0, t0);
        insert(target, span1, anchor);
        append(span1, t1);
        if (!mounted) {
          dispose = [
            listen(span0, "click", click_handler),
            listen(span1, "click", click_handler_1)
          ];
          mounted = true;
        }
      },
      p(new_ctx, dirty) {
        ctx = new_ctx;
        if (dirty[0] & /*scopes*/
        8 && t0_value !== (t0_value = _(
          /*scope*/
          ctx[39].caption
        ) + ""))
          set_data(t0, t0_value);
        if (dirty[0] & /*selected*/
        32) {
          toggle_class(
            span0,
            "selected",
            /*idx*/
            ctx[34] * 2 == /*selected*/
            ctx[5]
          );
        }
        if (dirty[0] & /*scopes*/
        8 && t1_value !== (t1_value = "(" + /*scope*/
        ctx[39].count + ")"))
          set_data(t1, t1_value);
        if (dirty[0] & /*selected*/
        32) {
          toggle_class(span1, "selected", 1 + /*idx*/
          ctx[34] * 2 == /*selected*/
          ctx[5]);
        }
      },
      d(detaching) {
        if (detaching)
          detach(span0);
        if (detaching)
          detach(span1);
        mounted = false;
        run_all(dispose);
      }
    };
  }
  function create_default_slot_23(ctx) {
    let span;
    let t_value = _(
      /*caption*/
      ctx[37]
    ) + "";
    let t;
    let mounted;
    let dispose;
    function click_handler_2() {
      return (
        /*click_handler_2*/
        ctx[21](
          /*idx*/
          ctx[34]
        )
      );
    }
    return {
      c() {
        span = element("span");
        t = text(t_value);
        attr(span, "aria-hidden", "true");
        attr(span, "class", "clickable");
        toggle_class(
          span,
          "selected",
          /*active*/
          ctx[38]
        );
      },
      m(target, anchor) {
        insert(target, span, anchor);
        append(span, t);
        if (!mounted) {
          dispose = listen(span, "click", click_handler_2);
          mounted = true;
        }
      },
      p(new_ctx, dirty) {
        ctx = new_ctx;
        if (dirty[1] & /*caption*/
        64 && t_value !== (t_value = _(
          /*caption*/
          ctx[37]
        ) + ""))
          set_data(t, t_value);
        if (dirty[1] & /*active*/
        128) {
          toggle_class(
            span,
            "selected",
            /*active*/
            ctx[38]
          );
        }
      },
      d(detaching) {
        if (detaching)
          detach(span);
        mounted = false;
        dispose();
      }
    };
  }
  function create_each_block_12(ctx) {
    let div;
    let span0;
    let t0_value = (
      /*idx*/
      ctx[34] + /*now*/
      ctx[2] * ITEMPERPAGE + 1 + ""
    );
    let t0;
    let excerptline;
    let t1;
    let span1;
    let t2_value = humanAddress(makeAddressFromLine(
      /*excerpt*/
      ctx[35].line
    )) + "";
    let t2;
    let t3;
    let current;
    let mounted;
    let dispose;
    const excerptline_spread_levels = [
      { gochar: (
        /*gochar*/
        ctx[14]
      ) },
      /*excerpt*/
      ctx[35]
    ];
    let excerptline_props = {};
    for (let i = 0; i < excerptline_spread_levels.length; i += 1) {
      excerptline_props = assign(excerptline_props, excerptline_spread_levels[i]);
    }
    excerptline = new excerptline_default({ props: excerptline_props });
    function click_handler_3() {
      return (
        /*click_handler_3*/
        ctx[23](
          /*idx*/
          ctx[34]
        )
      );
    }
    return {
      c() {
        div = element("div");
        span0 = element("span");
        t0 = text(t0_value);
        create_component(excerptline.$$.fragment);
        t1 = space();
        span1 = element("span");
        t2 = text(t2_value);
        t3 = space();
        attr(span0, "class", "excerptseq");
        attr(span1, "class", "clickable ck");
        attr(span1, "aria-hidden", "true");
        toggle_class(
          span1,
          "selected",
          /*selecteditem*/
          ctx[6] == /*idx*/
          ctx[34] + /*now*/
          ctx[2] * ITEMPERPAGE
        );
        attr(div, "class", "excerptline");
        toggle_class(
          div,
          "oddline",
          /*idx*/
          ctx[34] % 2 == 0
        );
      },
      m(target, anchor) {
        insert(target, div, anchor);
        append(div, span0);
        append(span0, t0);
        mount_component(excerptline, div, null);
        append(div, t1);
        append(div, span1);
        append(span1, t2);
        append(div, t3);
        current = true;
        if (!mounted) {
          dispose = listen(span1, "click", click_handler_3);
          mounted = true;
        }
      },
      p(new_ctx, dirty) {
        ctx = new_ctx;
        if ((!current || dirty[0] & /*now*/
        4) && t0_value !== (t0_value = /*idx*/
        ctx[34] + /*now*/
        ctx[2] * ITEMPERPAGE + 1 + ""))
          set_data(t0, t0_value);
        const excerptline_changes = dirty[0] & /*gochar, excerpts*/
        16385 ? get_spread_update(excerptline_spread_levels, [
          dirty[0] & /*gochar*/
          16384 && { gochar: (
            /*gochar*/
            ctx[14]
          ) },
          dirty[0] & /*excerpts*/
          1 && get_spread_object(
            /*excerpt*/
            ctx[35]
          )
        ]) : {};
        excerptline.$set(excerptline_changes);
        if ((!current || dirty[0] & /*excerpts*/
        1) && t2_value !== (t2_value = humanAddress(makeAddressFromLine(
          /*excerpt*/
          ctx[35].line
        )) + ""))
          set_data(t2, t2_value);
        if (!current || dirty[0] & /*selecteditem, now*/
        68) {
          toggle_class(
            span1,
            "selected",
            /*selecteditem*/
            ctx[6] == /*idx*/
            ctx[34] + /*now*/
            ctx[2] * ITEMPERPAGE
          );
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(excerptline.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(excerptline.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(div);
        destroy_component(excerptline);
        mounted = false;
        dispose();
      }
    };
  }
  function create_default_slot_13(ctx) {
    let each_1_anchor;
    let current;
    let each_value_1 = (
      /*excerpts*/
      ctx[0]
    );
    let each_blocks = [];
    for (let i = 0; i < each_value_1.length; i += 1) {
      each_blocks[i] = create_each_block_12(get_each_context_12(ctx, each_value_1, i));
    }
    const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
      each_blocks[i] = null;
    });
    return {
      c() {
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        each_1_anchor = empty();
      },
      m(target, anchor) {
        for (let i = 0; i < each_blocks.length; i += 1) {
          if (each_blocks[i]) {
            each_blocks[i].m(target, anchor);
          }
        }
        insert(target, each_1_anchor, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        if (dirty[0] & /*selecteditem, now, go, excerpts, gochar*/
        20549) {
          each_value_1 = /*excerpts*/
          ctx2[0];
          let i;
          for (i = 0; i < each_value_1.length; i += 1) {
            const child_ctx = get_each_context_12(ctx2, each_value_1, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
              transition_in(each_blocks[i], 1);
            } else {
              each_blocks[i] = create_each_block_12(child_ctx);
              each_blocks[i].c();
              transition_in(each_blocks[i], 1);
              each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
            }
          }
          group_outros();
          for (i = each_value_1.length; i < each_blocks.length; i += 1) {
            out(i);
          }
          check_outros();
        }
      },
      i(local) {
        if (current)
          return;
        for (let i = 0; i < each_value_1.length; i += 1) {
          transition_in(each_blocks[i]);
        }
        current = true;
      },
      o(local) {
        each_blocks = each_blocks.filter(Boolean);
        for (let i = 0; i < each_blocks.length; i += 1) {
          transition_out(each_blocks[i]);
        }
        current = false;
      },
      d(detaching) {
        destroy_each(each_blocks, detaching);
        if (detaching)
          detach(each_1_anchor);
      }
    };
  }
  function create_each_block17(ctx) {
    let div;
    let span0;
    let t0_value = (
      /*idx*/
      ctx[34] + /*now*/
      ctx[2] * ITEMPERPAGE + 1 + ""
    );
    let t0;
    let t1;
    let t2_value = _(
      /*chit*/
      ctx[32].ck.bk?.caption
    ) + "";
    let t2;
    let t3;
    let t4_value = _(
      /*chit*/
      ctx[32].ck.caption
    ) + "";
    let t4;
    let t5;
    let span1;
    let t6_value = " " + /*chit*/
    ctx[32].hits;
    let t6;
    let mounted;
    let dispose;
    function click_handler_4() {
      return (
        /*click_handler_4*/
        ctx[24](
          /*idx*/
          ctx[34]
        )
      );
    }
    function click_handler_5() {
      return (
        /*click_handler_5*/
        ctx[25](
          /*chit*/
          ctx[32]
        )
      );
    }
    return {
      c() {
        div = element("div");
        span0 = element("span");
        t0 = text(t0_value);
        t1 = space();
        t2 = text(t2_value);
        t3 = text("/");
        t4 = text(t4_value);
        t5 = space();
        span1 = element("span");
        t6 = text(t6_value);
        attr(span0, "aria-hidden", "true");
        attr(span0, "class", "excerptseq clickable");
        toggle_class(
          span0,
          "selected",
          /*selecteditem*/
          ctx[6] == /*idx*/
          ctx[34]
        );
        attr(span1, "aria-hidden", "true");
        attr(span1, "class", "clickable hit");
        attr(div, "class", "excerptline");
        toggle_class(
          div,
          "oddline",
          /*idx*/
          ctx[34] % 2 == 0
        );
      },
      m(target, anchor) {
        insert(target, div, anchor);
        append(div, span0);
        append(span0, t0);
        append(span0, t1);
        append(span0, t2);
        append(span0, t3);
        append(span0, t4);
        append(div, t5);
        append(div, span1);
        append(span1, t6);
        if (!mounted) {
          dispose = [
            listen(span0, "click", click_handler_4),
            listen(span1, "click", click_handler_5)
          ];
          mounted = true;
        }
      },
      p(new_ctx, dirty) {
        ctx = new_ctx;
        if (dirty[0] & /*now*/
        4 && t0_value !== (t0_value = /*idx*/
        ctx[34] + /*now*/
        ctx[2] * ITEMPERPAGE + 1 + ""))
          set_data(t0, t0_value);
        if (dirty[0] & /*chunkhits*/
        2 && t2_value !== (t2_value = _(
          /*chit*/
          ctx[32].ck.bk?.caption
        ) + ""))
          set_data(t2, t2_value);
        if (dirty[0] & /*chunkhits*/
        2 && t4_value !== (t4_value = _(
          /*chit*/
          ctx[32].ck.caption
        ) + ""))
          set_data(t4, t4_value);
        if (dirty[0] & /*selecteditem*/
        64) {
          toggle_class(
            span0,
            "selected",
            /*selecteditem*/
            ctx[6] == /*idx*/
            ctx[34]
          );
        }
        if (dirty[0] & /*chunkhits*/
        2 && t6_value !== (t6_value = " " + /*chit*/
        ctx[32].hits))
          set_data(t6, t6_value);
      },
      d(detaching) {
        if (detaching)
          detach(div);
        mounted = false;
        run_all(dispose);
      }
    };
  }
  function create_default_slot8(ctx) {
    let each_1_anchor;
    let each_value = (
      /*chunkhits*/
      ctx[1]
    );
    let each_blocks = [];
    for (let i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block17(get_each_context17(ctx, each_value, i));
    }
    return {
      c() {
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        each_1_anchor = empty();
      },
      m(target, anchor) {
        for (let i = 0; i < each_blocks.length; i += 1) {
          if (each_blocks[i]) {
            each_blocks[i].m(target, anchor);
          }
        }
        insert(target, each_1_anchor, anchor);
      },
      p(ctx2, dirty) {
        if (dirty[0] & /*setChunkScope, chunkhits, selecteditem, gock, now*/
        10310) {
          each_value = /*chunkhits*/
          ctx2[1];
          let i;
          for (i = 0; i < each_value.length; i += 1) {
            const child_ctx = get_each_context17(ctx2, each_value, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
            } else {
              each_blocks[i] = create_each_block17(child_ctx);
              each_blocks[i].c();
              each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
            }
          }
          for (; i < each_blocks.length; i += 1) {
            each_blocks[i].d(1);
          }
          each_blocks.length = each_value.length;
        }
      },
      d(detaching) {
        destroy_each(each_blocks, detaching);
        if (detaching)
          detach(each_1_anchor);
      }
    };
  }
  function create_fragment38(ctx) {
    let div1;
    let t0;
    let div0;
    let pager;
    let updating_now;
    let t1;
    let swipeview0;
    let t2;
    let swipeview1;
    let current;
    let each_value_2 = (
      /*scopes*/
      ctx[3]
    );
    let each_blocks = [];
    for (let i = 0; i < each_value_2.length; i += 1) {
      each_blocks[i] = create_each_block_2(get_each_context_2(ctx, each_value_2, i));
    }
    function pager_now_binding(value) {
      ctx[22](value);
    }
    let pager_props = {
      caption: (
        /*rangecaption*/
        ctx[7]
      ),
      count: (
        /*pagecount*/
        ctx[4]
      ),
      onselect: (
        /*gopage*/
        ctx[10]
      ),
      $$slots: {
        default: [
          create_default_slot_23,
          ({ idx: idx2, caption: caption3, active }) => ({ 34: idx2, 37: caption3, 38: active }),
          ({ idx: idx2, caption: caption3, active }) => [0, (idx2 ? 8 : 0) | (caption3 ? 64 : 0) | (active ? 128 : 0)]
        ]
      },
      $$scope: { ctx }
    };
    if (
      /*now*/
      ctx[2] !== void 0
    ) {
      pager_props.now = /*now*/
      ctx[2];
    }
    pager = new pager_default({ props: pager_props });
    binding_callbacks.push(() => bind(pager, "now", pager_now_binding));
    swipeview0 = new swipeview_default({
      props: {
        onSwipe: (
          /*onSwipe*/
          ctx[15]
        ),
        reverse: (
          /*$reverseswipe*/
          ctx[8] == "1"
        ),
        $$slots: { default: [create_default_slot_13] },
        $$scope: { ctx }
      }
    });
    swipeview1 = new swipeview_default({
      props: {
        onSwipe: (
          /*onSwipe*/
          ctx[15]
        ),
        reverse: (
          /*$reverseswipe*/
          ctx[8] == "1"
        ),
        $$slots: { default: [create_default_slot8] },
        $$scope: { ctx }
      }
    });
    return {
      c() {
        div1 = element("div");
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        t0 = space();
        div0 = element("div");
        create_component(pager.$$.fragment);
        t1 = space();
        create_component(swipeview0.$$.fragment);
        t2 = space();
        create_component(swipeview1.$$.fragment);
        attr(div0, "class", "pager");
        attr(div1, "class", "bodytextarea bodytext");
      },
      m(target, anchor) {
        insert(target, div1, anchor);
        for (let i = 0; i < each_blocks.length; i += 1) {
          if (each_blocks[i]) {
            each_blocks[i].m(div1, null);
          }
        }
        append(div1, t0);
        append(div1, div0);
        mount_component(pager, div0, null);
        append(div1, t1);
        mount_component(swipeview0, div1, null);
        append(div1, t2);
        mount_component(swipeview1, div1, null);
        current = true;
      },
      p(ctx2, dirty) {
        if (dirty[0] & /*selected, setScope, scopes*/
        552) {
          each_value_2 = /*scopes*/
          ctx2[3];
          let i;
          for (i = 0; i < each_value_2.length; i += 1) {
            const child_ctx = get_each_context_2(ctx2, each_value_2, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
            } else {
              each_blocks[i] = create_each_block_2(child_ctx);
              each_blocks[i].c();
              each_blocks[i].m(div1, t0);
            }
          }
          for (; i < each_blocks.length; i += 1) {
            each_blocks[i].d(1);
          }
          each_blocks.length = each_value_2.length;
        }
        const pager_changes = {};
        if (dirty[0] & /*rangecaption*/
        128)
          pager_changes.caption = /*rangecaption*/
          ctx2[7];
        if (dirty[0] & /*pagecount*/
        16)
          pager_changes.count = /*pagecount*/
          ctx2[4];
        if (dirty[1] & /*$$scope, active, idx, caption*/
        1224) {
          pager_changes.$$scope = { dirty, ctx: ctx2 };
        }
        if (!updating_now && dirty[0] & /*now*/
        4) {
          updating_now = true;
          pager_changes.now = /*now*/
          ctx2[2];
          add_flush_callback(() => updating_now = false);
        }
        pager.$set(pager_changes);
        const swipeview0_changes = {};
        if (dirty[0] & /*$reverseswipe*/
        256)
          swipeview0_changes.reverse = /*$reverseswipe*/
          ctx2[8] == "1";
        if (dirty[0] & /*excerpts, selecteditem, now*/
        69 | dirty[1] & /*$$scope*/
        1024) {
          swipeview0_changes.$$scope = { dirty, ctx: ctx2 };
        }
        swipeview0.$set(swipeview0_changes);
        const swipeview1_changes = {};
        if (dirty[0] & /*$reverseswipe*/
        256)
          swipeview1_changes.reverse = /*$reverseswipe*/
          ctx2[8] == "1";
        if (dirty[0] & /*chunkhits, selecteditem, now*/
        70 | dirty[1] & /*$$scope*/
        1024) {
          swipeview1_changes.$$scope = { dirty, ctx: ctx2 };
        }
        swipeview1.$set(swipeview1_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(pager.$$.fragment, local);
        transition_in(swipeview0.$$.fragment, local);
        transition_in(swipeview1.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(pager.$$.fragment, local);
        transition_out(swipeview0.$$.fragment, local);
        transition_out(swipeview1.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(div1);
        destroy_each(each_blocks, detaching);
        destroy_component(pager);
        destroy_component(swipeview0);
        destroy_component(swipeview1);
      }
    };
  }
  var ITEMPERPAGE = 5;
  function instance33($$self, $$props, $$invalidate) {
    let ptk3;
    let $activePtk;
    let $tofind;
    let $reverseswipe;
    component_subscribe($$self, activePtk, ($$value) => $$invalidate(17, $activePtk = $$value));
    component_subscribe($$self, tofind, ($$value) => $$invalidate(18, $tofind = $$value));
    component_subscribe($$self, reverseswipe, ($$value) => $$invalidate(8, $reverseswipe = $$value));
    let { goLine } = $$props;
    let allexcerpts = [], excerpts = [], allpostings = [], allchunkhits = [], chunkhits = [], allphrases = [], now = 0, scopes = [];
    let pagecount = 0, selected = 0, selecteditem = -1;
    let rangecaption = "";
    const setScope = async (idx2, range) => {
      const at = Math.floor(idx2 / 2);
      $$invalidate(4, pagecount = 0);
      if (!scopes[at]?.count)
        return;
      $$invalidate(5, selected = idx2);
      if (!range) {
        $$invalidate(7, rangecaption = "");
      }
      const { lines, chunks, phrases, postings } = await listExcerpts(ptk3, $tofind, { range: range || scopes[at].scope });
      allphrases = phrases;
      allpostings = postings;
      if (selected % 2 == 0) {
        allchunkhits = chunks.map((it) => {
          return { ck: ptk3.getChunk(it[0]), hits: it[1] };
        });
        $$invalidate(4, pagecount = Math.floor(allchunkhits.length / ITEMPERPAGE) + 1);
        gopage(0);
      } else {
        allexcerpts = lines;
        $$invalidate(4, pagecount = Math.floor(allexcerpts.length / ITEMPERPAGE) + 1);
        gopage(0);
      }
    };
    const gopage = async (idx2) => {
      $$invalidate(0, excerpts.length = 0, excerpts);
      $$invalidate(1, chunkhits.length = 0, chunkhits);
      $$invalidate(6, selecteditem = -1);
      if (selected % 2 == 0) {
        $$invalidate(1, chunkhits = allchunkhits.slice(idx2 * ITEMPERPAGE, (idx2 + 1) * ITEMPERPAGE));
        $$invalidate(4, pagecount = Math.floor(allchunkhits.length / ITEMPERPAGE) + 1);
      } else {
        const toload = [];
        for (let i = idx2 * ITEMPERPAGE; i < (idx2 + 1) * ITEMPERPAGE && i < allexcerpts.length; i++) {
          toload.push(allexcerpts[i]);
        }
        await ptk3.loadLines(toload.map((it) => it[0]));
        for (let i = 0; i < toload.length; i++) {
          const [line, occur] = toload[i];
          const linetext = ptk3.getLine(line);
          const hits = occur.map((n) => Math.floor(n / MAXPHRASELEN));
          const phraselength = occur.map((n) => n % MAXPHRASELEN);
          excerpts.push({ linetext, line, hits, phraselength });
        }
        $$invalidate(4, pagecount = Math.floor(allexcerpts.length / ITEMPERPAGE) + 1);
      }
      $$invalidate(0, excerpts);
      $$invalidate(1, chunkhits);
      $$invalidate(2, now = idx2);
    };
    const setChunkScope = (ck) => {
      const rangeaddr = "bk#" + ck.bk.id + ".ck#" + ck.id;
      $$invalidate(7, rangecaption = (ck.bk?.caption || "") + "/" + ck.caption);
      setScope(selected * 2 + 1, rangeaddr);
    };
    const go = (idx2) => {
      let line = allexcerpts[idx2][0];
      goLine(line);
      $$invalidate(6, selecteditem = idx2);
    };
    const gock = (idx2) => {
      const chit = chunkhits[idx2];
      const line = chit.ck.line;
      goLine(line);
      $$invalidate(6, selecteditem = idx2);
    };
    const gochar = (line, choff) => {
      goLine(line, choff);
    };
    const updateList = (tf) => {
      ptk3.scanText(tf).then((res) => {
        $$invalidate(3, scopes = res);
        let done = false;
        for (let i = 0; i < scopes.length; i++) {
          if (scopes[i].count) {
            setScope(i * 2 + 1);
            done = true;
            break;
          }
        }
        if (!done) {
          allexcerpts = [];
          allpostings = [];
          gopage(0);
        }
      });
    };
    const onSwipe = (direction) => {
      const pages = excerpts.length ? excerpts : chunkhits;
      $$invalidate(2, now += direction);
      if (now < 0)
        $$invalidate(2, now = 0);
      if (now >= pages.length - 1)
        $$invalidate(2, now = pages.length - 1);
      gopage(now);
    };
    const click_handler = (idx2) => setScope(idx2 * 2);
    const click_handler_1 = (idx2) => setScope(idx2 * 2 + 1);
    const click_handler_2 = (idx2) => gopage(idx2);
    function pager_now_binding(value) {
      now = value;
      $$invalidate(2, now);
    }
    const click_handler_3 = (idx2) => go(idx2 + now * ITEMPERPAGE);
    const click_handler_4 = (idx2) => gock(idx2);
    const click_handler_5 = (chit) => setChunkScope(chit.ck);
    $$self.$$set = ($$props2) => {
      if ("goLine" in $$props2)
        $$invalidate(16, goLine = $$props2.goLine);
    };
    $$self.$$.update = () => {
      if ($$self.$$.dirty[0] & /*$activePtk*/
      131072) {
        $:
          ptk3 = usePtk($activePtk);
      }
      if ($$self.$$.dirty[0] & /*$tofind, $activePtk*/
      393216) {
        $:
          updateList($tofind, $activePtk);
      }
    };
    return [
      excerpts,
      chunkhits,
      now,
      scopes,
      pagecount,
      selected,
      selecteditem,
      rangecaption,
      $reverseswipe,
      setScope,
      gopage,
      setChunkScope,
      go,
      gock,
      gochar,
      onSwipe,
      goLine,
      $activePtk,
      $tofind,
      click_handler,
      click_handler_1,
      click_handler_2,
      pager_now_binding,
      click_handler_3,
      click_handler_4,
      click_handler_5
    ];
  }
  var Excerpt = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance33, create_fragment38, safe_not_equal, { goLine: 16 }, null, [-1, -1]);
    }
  };
  var excerpt_default = Excerpt;

  // src/searchmain.svelte
  function get_each_context18(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[18] = list[i];
    child_ctx[20] = i;
    return child_ctx;
  }
  function create_each_block18(ctx) {
    let span;
    let t_value = _(
      /*item*/
      ctx[18]
    ) + "";
    let t;
    let mounted;
    let dispose;
    function click_handler() {
      return (
        /*click_handler*/
        ctx[14](
          /*idx*/
          ctx[20]
        )
      );
    }
    return {
      c() {
        span = element("span");
        t = text(t_value);
        attr(span, "aria-hidden", "true");
        attr(span, "class", "searchable");
        toggle_class(
          span,
          "selectedsearchable",
          /*idx*/
          ctx[20] <= /*activeidx*/
          ctx[2]
        );
      },
      m(target, anchor) {
        insert(target, span, anchor);
        append(span, t);
        if (!mounted) {
          dispose = listen(span, "click", click_handler);
          mounted = true;
        }
      },
      p(new_ctx, dirty) {
        ctx = new_ctx;
        if (dirty & /*items*/
        1 && t_value !== (t_value = _(
          /*item*/
          ctx[18]
        ) + ""))
          set_data(t, t_value);
        if (dirty & /*activeidx*/
        4) {
          toggle_class(
            span,
            "selectedsearchable",
            /*idx*/
            ctx[20] <= /*activeidx*/
            ctx[2]
          );
        }
      },
      d(detaching) {
        if (detaching)
          detach(span);
        mounted = false;
        dispose();
      }
    };
  }
  function create_if_block_110(ctx) {
    let t0;
    let t1_value = _("\u5019\u9078\u5340") + "";
    let t1;
    let t2;
    return {
      c() {
        t0 = text("\u3010");
        t1 = text(t1_value);
        t2 = text("\u3011");
      },
      m(target, anchor) {
        insert(target, t0, anchor);
        insert(target, t1, anchor);
        insert(target, t2, anchor);
      },
      p: noop,
      d(detaching) {
        if (detaching)
          detach(t0);
        if (detaching)
          detach(t1);
        if (detaching)
          detach(t2);
      }
    };
  }
  function create_else_block8(ctx) {
    let div;
    let excerpt;
    let t;
    let endmarker;
    let current;
    excerpt = new excerpt_default({ props: { goLine: (
      /*goLine*/
      ctx[7]
    ) } });
    endmarker = new endmarker_default({});
    return {
      c() {
        div = element("div");
        create_component(excerpt.$$.fragment);
        t = space();
        create_component(endmarker.$$.fragment);
        attr(div, "class", "bodytext");
      },
      m(target, anchor) {
        insert(target, div, anchor);
        mount_component(excerpt, div, null);
        insert(target, t, anchor);
        mount_component(endmarker, target, anchor);
        current = true;
      },
      p: noop,
      i(local) {
        if (current)
          return;
        transition_in(excerpt.$$.fragment, local);
        transition_in(endmarker.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(excerpt.$$.fragment, local);
        transition_out(endmarker.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(div);
        destroy_component(excerpt);
        if (detaching)
          detach(t);
        destroy_component(endmarker, detaching);
      }
    };
  }
  function create_if_block17(ctx) {
    let searchhelp;
    let t;
    let endmarker;
    let current;
    searchhelp = new searchhelp_default({});
    endmarker = new endmarker_default({});
    return {
      c() {
        create_component(searchhelp.$$.fragment);
        t = space();
        create_component(endmarker.$$.fragment);
      },
      m(target, anchor) {
        mount_component(searchhelp, target, anchor);
        insert(target, t, anchor);
        mount_component(endmarker, target, anchor);
        current = true;
      },
      p: noop,
      i(local) {
        if (current)
          return;
        transition_in(searchhelp.$$.fragment, local);
        transition_in(endmarker.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(searchhelp.$$.fragment, local);
        transition_out(endmarker.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(searchhelp, detaching);
        if (detaching)
          detach(t);
        destroy_component(endmarker, detaching);
      }
    };
  }
  function create_fragment39(ctx) {
    let div;
    let input;
    let input_placeholder_value;
    let input_size_value;
    let t0;
    let t1;
    let t2;
    let show_if;
    let current_block_type_index;
    let if_block1;
    let if_block1_anchor;
    let current;
    let mounted;
    let dispose;
    let each_value = (
      /*items*/
      ctx[0]
    );
    let each_blocks = [];
    for (let i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block18(get_each_context18(ctx, each_value, i));
    }
    let if_block0 = !/*items*/
    ctx[0].length && create_if_block_110(ctx);
    const if_block_creators = [create_if_block17, create_else_block8];
    const if_blocks = [];
    function select_block_type(ctx2, dirty) {
      if (dirty & /*$leftmode, value*/
      24)
        show_if = null;
      if (show_if == null)
        show_if = !!/*$leftmode*/
        (ctx2[4] == "input" && /*value*/
        ctx2[3].trim() == "");
      if (show_if)
        return 0;
      return 1;
    }
    current_block_type_index = select_block_type(ctx, -1);
    if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    return {
      c() {
        div = element("div");
        input = element("input");
        t0 = space();
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        t1 = space();
        if (if_block0)
          if_block0.c();
        t2 = space();
        if_block1.c();
        if_block1_anchor = empty();
        attr(input, "class", "tofind svelte-a8ib29");
        attr(input, "placeholder", input_placeholder_value = _("\u8F38\u5165\u5340"));
        attr(input, "size", input_size_value = 8);
        attr(input, "id", "tofind");
        toggle_class(
          input,
          "diminput",
          /*activeidx*/
          ctx[2] > -1
        );
        attr(div, "class", "bodytext");
      },
      m(target, anchor) {
        insert(target, div, anchor);
        append(div, input);
        ctx[12](input);
        set_input_value(
          input,
          /*value*/
          ctx[3]
        );
        append(div, t0);
        for (let i = 0; i < each_blocks.length; i += 1) {
          if (each_blocks[i]) {
            each_blocks[i].m(div, null);
          }
        }
        append(div, t1);
        if (if_block0)
          if_block0.m(div, null);
        insert(target, t2, anchor);
        if_blocks[current_block_type_index].m(target, anchor);
        insert(target, if_block1_anchor, anchor);
        current = true;
        if (!mounted) {
          dispose = [
            listen(
              input,
              "focus",
              /*onfocus*/
              ctx[9]
            ),
            listen(
              input,
              "blur",
              /*onblur*/
              ctx[8]
            ),
            listen(
              input,
              "input",
              /*onchange*/
              ctx[6]
            ),
            listen(
              input,
              "input",
              /*input_input_handler*/
              ctx[13]
            )
          ];
          mounted = true;
        }
      },
      p(ctx2, [dirty]) {
        if (dirty & /*value*/
        8 && input.value !== /*value*/
        ctx2[3]) {
          set_input_value(
            input,
            /*value*/
            ctx2[3]
          );
        }
        if (!current || dirty & /*activeidx*/
        4) {
          toggle_class(
            input,
            "diminput",
            /*activeidx*/
            ctx2[2] > -1
          );
        }
        if (dirty & /*activeidx, setInput, _, items*/
        37) {
          each_value = /*items*/
          ctx2[0];
          let i;
          for (i = 0; i < each_value.length; i += 1) {
            const child_ctx = get_each_context18(ctx2, each_value, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
            } else {
              each_blocks[i] = create_each_block18(child_ctx);
              each_blocks[i].c();
              each_blocks[i].m(div, t1);
            }
          }
          for (; i < each_blocks.length; i += 1) {
            each_blocks[i].d(1);
          }
          each_blocks.length = each_value.length;
        }
        if (!/*items*/
        ctx2[0].length) {
          if (if_block0) {
            if_block0.p(ctx2, dirty);
          } else {
            if_block0 = create_if_block_110(ctx2);
            if_block0.c();
            if_block0.m(div, null);
          }
        } else if (if_block0) {
          if_block0.d(1);
          if_block0 = null;
        }
        let previous_block_index = current_block_type_index;
        current_block_type_index = select_block_type(ctx2, dirty);
        if (current_block_type_index === previous_block_index) {
          if_blocks[current_block_type_index].p(ctx2, dirty);
        } else {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, () => {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
          if_block1 = if_blocks[current_block_type_index];
          if (!if_block1) {
            if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
            if_block1.c();
          } else {
            if_block1.p(ctx2, dirty);
          }
          transition_in(if_block1, 1);
          if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(if_block1);
        current = true;
      },
      o(local) {
        transition_out(if_block1);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(div);
        ctx[12](null);
        destroy_each(each_blocks, detaching);
        if (if_block0)
          if_block0.d();
        if (detaching)
          detach(t2);
        if_blocks[current_block_type_index].d(detaching);
        if (detaching)
          detach(if_block1_anchor);
        mounted = false;
        run_all(dispose);
      }
    };
  }
  function instance34($$self, $$props, $$invalidate) {
    let $searchable;
    let $leftmode;
    component_subscribe($$self, searchable, ($$value) => $$invalidate(11, $searchable = $$value));
    component_subscribe($$self, leftmode, ($$value) => $$invalidate(4, $leftmode = $$value));
    let { ptk: ptk3 } = $$props;
    let items = [], theinput, activeidx = -1, value = "";
    const makeSearchable = (t) => {
      $$invalidate(0, items.length = 0, items);
      const chars = splitUTF32Char(t);
      for (let i = 0; i < chars.length; i++) {
        items.push(chars[i]);
      }
      if (items.length >= 2)
        $$invalidate(2, activeidx = 2);
      else if (items.length == 1)
        $$invalidate(2, activeidx = 0);
      else if (items.length == 0)
        $$invalidate(2, activeidx = -1);
    };
    let tf = "";
    const setInput = (idx2) => {
      tf = "";
      for (let i = 0; i <= idx2; i++) {
        tf += items[i] || "";
      }
      if (idx2 == activeidx) {
        if (value == tf) {
          $$invalidate(3, value = "");
        } else {
          $$invalidate(3, value = tf);
          $$invalidate(2, activeidx = -1);
        }
      } else {
        $$invalidate(2, activeidx = idx2);
      }
      tofind.set(tf);
    };
    let inputtimer = 0;
    const onchange = () => {
      $$invalidate(2, activeidx = -1);
      clearTimeout(inputtimer);
      inputtimer = setTimeout(
        () => {
          tofind.set(value);
        },
        250
      );
    };
    const goLine = (line, choff = 0) => {
      goPtkLine(ptk3, line, choff);
      leftmode.set("folio");
      addTofind(value);
    };
    const onblur = () => {
      setTimeout(
        () => {
          leftmode.set("folio");
        },
        200
      );
    };
    const onfocus = () => {
      $$invalidate(2, activeidx = -1);
      leftmode.set("input");
    };
    function input_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](() => {
        theinput = $$value;
        $$invalidate(1, theinput);
      });
    }
    function input_input_handler() {
      value = this.value;
      $$invalidate(3, value);
    }
    const click_handler = (idx2) => setInput(idx2);
    $$self.$$set = ($$props2) => {
      if ("ptk" in $$props2)
        $$invalidate(10, ptk3 = $$props2.ptk);
    };
    $$self.$$.update = () => {
      if ($$self.$$.dirty & /*$searchable*/
      2048) {
        $:
          makeSearchable($searchable);
      }
    };
    return [
      items,
      theinput,
      activeidx,
      value,
      $leftmode,
      setInput,
      onchange,
      goLine,
      onblur,
      onfocus,
      ptk3,
      $searchable,
      input_binding,
      input_input_handler,
      click_handler
    ];
  }
  var Searchmain = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance34, create_fragment39, safe_not_equal, { ptk: 10 });
    }
  };
  var searchmain_default = Searchmain;

  // src/externals.svelte
  function get_each_context19(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[1] = list[i][0];
    child_ctx[2] = list[i][1];
    return child_ctx;
  }
  function create_each_block19(ctx) {
    let a;
    let t0_value = (
      /*caption*/
      ctx[1] + ""
    );
    let t0;
    let a_href_value;
    let t1_value = " ";
    let t1;
    return {
      c() {
        a = element("a");
        t0 = text(t0_value);
        t1 = text(t1_value);
        attr(a, "href", a_href_value = /*url*/
        ctx[2]);
        attr(a, "target", "_new");
      },
      m(target, anchor) {
        insert(target, a, anchor);
        append(a, t0);
        insert(target, t1, anchor);
      },
      p(ctx2, dirty) {
        if (dirty & /*links*/
        1 && t0_value !== (t0_value = /*caption*/
        ctx2[1] + ""))
          set_data(t0, t0_value);
        if (dirty & /*links*/
        1 && a_href_value !== (a_href_value = /*url*/
        ctx2[2])) {
          attr(a, "href", a_href_value);
        }
      },
      d(detaching) {
        if (detaching)
          detach(a);
        if (detaching)
          detach(t1);
      }
    };
  }
  function create_fragment40(ctx) {
    let each_1_anchor;
    let each_value = (
      /*links*/
      ctx[0]
    );
    let each_blocks = [];
    for (let i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block19(get_each_context19(ctx, each_value, i));
    }
    return {
      c() {
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        each_1_anchor = empty();
      },
      m(target, anchor) {
        for (let i = 0; i < each_blocks.length; i += 1) {
          if (each_blocks[i]) {
            each_blocks[i].m(target, anchor);
          }
        }
        insert(target, each_1_anchor, anchor);
      },
      p(ctx2, [dirty]) {
        if (dirty & /*links*/
        1) {
          each_value = /*links*/
          ctx2[0];
          let i;
          for (i = 0; i < each_value.length; i += 1) {
            const child_ctx = get_each_context19(ctx2, each_value, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
            } else {
              each_blocks[i] = create_each_block19(child_ctx);
              each_blocks[i].c();
              each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
            }
          }
          for (; i < each_blocks.length; i += 1) {
            each_blocks[i].d(1);
          }
          each_blocks.length = each_value.length;
        }
      },
      i: noop,
      o: noop,
      d(detaching) {
        destroy_each(each_blocks, detaching);
        if (detaching)
          detach(each_1_anchor);
      }
    };
  }
  function instance35($$self, $$props, $$invalidate) {
    let { links = [] } = $$props;
    $$self.$$set = ($$props2) => {
      if ("links" in $$props2)
        $$invalidate(0, links = $$props2.links);
    };
    return [links];
  }
  var Externals = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance35, create_fragment40, safe_not_equal, { links: 0 });
    }
  };
  var externals_default = Externals;

  // src/partext.svelte
  function get_each_context20(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[6] = list[i];
    return child_ctx;
  }
  function create_each_block20(ctx) {
    let div;
    let t_value = parseOfftext(
      /*line*/
      ctx[6]
    )[0] + "";
    let t;
    return {
      c() {
        div = element("div");
        t = text(t_value);
      },
      m(target, anchor) {
        insert(target, div, anchor);
        append(div, t);
      },
      p(ctx2, dirty) {
        if (dirty & /*lines*/
        2 && t_value !== (t_value = parseOfftext(
          /*line*/
          ctx2[6]
        )[0] + ""))
          set_data(t, t_value);
      },
      d(detaching) {
        if (detaching)
          detach(div);
      }
    };
  }
  function create_fragment41(ctx) {
    let div;
    let span;
    let t0;
    let t1;
    let t2;
    let mounted;
    let dispose;
    let each_value = (
      /*lines*/
      ctx[1]
    );
    let each_blocks = [];
    for (let i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block20(get_each_context20(ctx, each_value, i));
    }
    return {
      c() {
        div = element("div");
        span = element("span");
        t0 = text("\u2190");
        t1 = text(
          /*caption*/
          ctx[0]
        );
        t2 = space();
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        attr(span, "aria-hidden", "true");
        attr(span, "class", "clickable");
        attr(div, "class", "bodytext");
      },
      m(target, anchor) {
        insert(target, div, anchor);
        append(div, span);
        append(span, t0);
        append(span, t1);
        append(div, t2);
        for (let i = 0; i < each_blocks.length; i += 1) {
          if (each_blocks[i]) {
            each_blocks[i].m(div, null);
          }
        }
        if (!mounted) {
          dispose = listen(
            span,
            "click",
            /*gofolio*/
            ctx[2]
          );
          mounted = true;
        }
      },
      p(ctx2, [dirty]) {
        if (dirty & /*caption*/
        1)
          set_data(
            t1,
            /*caption*/
            ctx2[0]
          );
        if (dirty & /*parseOfftext, lines*/
        2) {
          each_value = /*lines*/
          ctx2[1];
          let i;
          for (i = 0; i < each_value.length; i += 1) {
            const child_ctx = get_each_context20(ctx2, each_value, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
            } else {
              each_blocks[i] = create_each_block20(child_ctx);
              each_blocks[i].c();
              each_blocks[i].m(div, null);
            }
          }
          for (; i < each_blocks.length; i += 1) {
            each_blocks[i].d(1);
          }
          each_blocks.length = each_value.length;
        }
      },
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching)
          detach(div);
        destroy_each(each_blocks, detaching);
        mounted = false;
        dispose();
      }
    };
  }
  function instance36($$self, $$props, $$invalidate) {
    let { address } = $$props;
    let { ptk: ptk3 } = $$props;
    let { caption: caption3 } = $$props;
    let lines = [];
    const fetchContent = async () => {
      $$invalidate(1, lines = await ptk3.fetchAddress(address));
    };
    const gofolio = () => {
      loadAddress(ptk3, address);
    };
    $$self.$$set = ($$props2) => {
      if ("address" in $$props2)
        $$invalidate(3, address = $$props2.address);
      if ("ptk" in $$props2)
        $$invalidate(4, ptk3 = $$props2.ptk);
      if ("caption" in $$props2)
        $$invalidate(0, caption3 = $$props2.caption);
    };
    $$self.$$.update = () => {
      if ($$self.$$.dirty & /*address*/
      8) {
        $:
          fetchContent(address);
      }
    };
    return [caption3, lines, gofolio, address, ptk3];
  }
  var Partext = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance36, create_fragment41, safe_not_equal, { address: 3, ptk: 4, caption: 0 });
    }
  };
  var partext_default = Partext;

  // src/textual.svelte
  function get_each_context21(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[19] = list[i];
    child_ctx[21] = i;
    return child_ctx;
  }
  function get_each_context_13(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[19] = list[i];
    child_ctx[21] = i;
    return child_ctx;
  }
  function create_if_block_27(ctx) {
    let span;
    let mounted;
    let dispose;
    return {
      c() {
        span = element("span");
        span.textContent = "\u539F\u6587";
        attr(span, "aria-hidden", "true");
        attr(span, "class", "clickable");
        toggle_class(
          span,
          "selected",
          /*thetab*/
          ctx[2] == "sourcetext"
        );
      },
      m(target, anchor) {
        insert(target, span, anchor);
        if (!mounted) {
          dispose = listen(
            span,
            "click",
            /*click_handler_2*/
            ctx[12]
          );
          mounted = true;
        }
      },
      p(ctx2, dirty) {
        if (dirty & /*thetab*/
        4) {
          toggle_class(
            span,
            "selected",
            /*thetab*/
            ctx2[2] == "sourcetext"
          );
        }
      },
      d(detaching) {
        if (detaching)
          detach(span);
        mounted = false;
        dispose();
      }
    };
  }
  function create_if_block_111(ctx) {
    let span;
    let t_value = _(
      "\u5225\u8B6F",
      /*$tosim*/
      ctx[6]
    ) + "";
    let t;
    let mounted;
    let dispose;
    return {
      c() {
        span = element("span");
        t = text(t_value);
        attr(span, "aria-hidden", "true");
        attr(span, "class", "clickable");
        toggle_class(
          span,
          "selected",
          /*thetab*/
          ctx[2] == "translations"
        );
      },
      m(target, anchor) {
        insert(target, span, anchor);
        append(span, t);
        if (!mounted) {
          dispose = listen(
            span,
            "click",
            /*click_handler_3*/
            ctx[13]
          );
          mounted = true;
        }
      },
      p(ctx2, dirty) {
        if (dirty & /*$tosim*/
        64 && t_value !== (t_value = _(
          "\u5225\u8B6F",
          /*$tosim*/
          ctx2[6]
        ) + ""))
          set_data(t, t_value);
        if (dirty & /*thetab*/
        4) {
          toggle_class(
            span,
            "selected",
            /*thetab*/
            ctx2[2] == "translations"
          );
        }
      },
      d(detaching) {
        if (detaching)
          detach(span);
        mounted = false;
        dispose();
      }
    };
  }
  function create_if_block18(ctx) {
    let span;
    let t_value = _(
      "\u96C6\u8A3B",
      /*$tosim*/
      ctx[6]
    ) + "";
    let t;
    let mounted;
    let dispose;
    return {
      c() {
        span = element("span");
        t = text(t_value);
        attr(span, "aria-hidden", "true");
        attr(span, "class", "clickable");
        toggle_class(
          span,
          "selected",
          /*thetab*/
          ctx[2] == "variorum"
        );
      },
      m(target, anchor) {
        insert(target, span, anchor);
        append(span, t);
        if (!mounted) {
          dispose = listen(
            span,
            "click",
            /*click_handler_4*/
            ctx[14]
          );
          mounted = true;
        }
      },
      p(ctx2, dirty) {
        if (dirty & /*$tosim*/
        64 && t_value !== (t_value = _(
          "\u96C6\u8A3B",
          /*$tosim*/
          ctx2[6]
        ) + ""))
          set_data(t, t_value);
        if (dirty & /*thetab*/
        4) {
          toggle_class(
            span,
            "selected",
            /*thetab*/
            ctx2[2] == "variorum"
          );
        }
      },
      d(detaching) {
        if (detaching)
          detach(span);
        mounted = false;
        dispose();
      }
    };
  }
  function create_each_block_13(ctx) {
    let span;
    let t_value = (
      /*internal*/
      ctx[19][0] + ""
    );
    let t;
    let mounted;
    let dispose;
    function click_handler_5() {
      return (
        /*click_handler_5*/
        ctx[15](
          /*idx*/
          ctx[21]
        )
      );
    }
    return {
      c() {
        span = element("span");
        t = text(t_value);
        attr(span, "aria-hidden", "true");
        attr(span, "class", "clickable");
        toggle_class(
          span,
          "selected",
          /*thetab*/
          ctx[2] == "link" + /*idx*/
          ctx[21]
        );
      },
      m(target, anchor) {
        insert(target, span, anchor);
        append(span, t);
        if (!mounted) {
          dispose = listen(span, "click", click_handler_5);
          mounted = true;
        }
      },
      p(new_ctx, dirty) {
        ctx = new_ctx;
        if (dirty & /*internals*/
        8 && t_value !== (t_value = /*internal*/
        ctx[19][0] + ""))
          set_data(t, t_value);
        if (dirty & /*thetab*/
        4) {
          toggle_class(
            span,
            "selected",
            /*thetab*/
            ctx[2] == "link" + /*idx*/
            ctx[21]
          );
        }
      },
      d(detaching) {
        if (detaching)
          detach(span);
        mounted = false;
        dispose();
      }
    };
  }
  function create_key_block7(ctx) {
    let externals_1;
    let current;
    externals_1 = new externals_default({
      props: {
        closePopup: (
          /*closePopup*/
          ctx[0]
        ),
        links: (
          /*externals*/
          ctx[4]
        )
      }
    });
    return {
      c() {
        create_component(externals_1.$$.fragment);
      },
      m(target, anchor) {
        mount_component(externals_1, target, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        const externals_1_changes = {};
        if (dirty & /*closePopup*/
        1)
          externals_1_changes.closePopup = /*closePopup*/
          ctx2[0];
        if (dirty & /*externals*/
        16)
          externals_1_changes.links = /*externals*/
          ctx2[4];
        externals_1.$set(externals_1_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(externals_1.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(externals_1.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(externals_1, detaching);
      }
    };
  }
  function create_each_block21(ctx) {
    let div;
    let partext;
    let current;
    partext = new partext_default({
      props: {
        closePopup: (
          /*closePopup*/
          ctx[0]
        ),
        caption: (
          /*internal*/
          ctx[19][0]
        ),
        ptk: (
          /*ptk*/
          ctx[5]
        ),
        address: (
          /*internal*/
          ctx[19][1]
        )
      }
    });
    return {
      c() {
        div = element("div");
        create_component(partext.$$.fragment);
        attr(div, "class", "subtab-content");
        toggle_class(
          div,
          "visible",
          /*thetab*/
          ctx[2] == "link" + /*idx*/
          ctx[21]
        );
      },
      m(target, anchor) {
        insert(target, div, anchor);
        mount_component(partext, div, null);
        current = true;
      },
      p(ctx2, dirty) {
        const partext_changes = {};
        if (dirty & /*closePopup*/
        1)
          partext_changes.closePopup = /*closePopup*/
          ctx2[0];
        if (dirty & /*internals*/
        8)
          partext_changes.caption = /*internal*/
          ctx2[19][0];
        if (dirty & /*ptk*/
        32)
          partext_changes.ptk = /*ptk*/
          ctx2[5];
        if (dirty & /*internals*/
        8)
          partext_changes.address = /*internal*/
          ctx2[19][1];
        partext.$set(partext_changes);
        if (!current || dirty & /*thetab*/
        4) {
          toggle_class(
            div,
            "visible",
            /*thetab*/
            ctx2[2] == "link" + /*idx*/
            ctx2[21]
          );
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(partext.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(partext.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(div);
        destroy_component(partext);
      }
    };
  }
  function create_fragment42(ctx) {
    let div0;
    let span0;
    let t0_value = _(
      "\u641C\u5C0B",
      /*$tosim*/
      ctx[6]
    ) + "";
    let t0;
    let t1;
    let span1;
    let t3;
    let show_if_2 = hasSanskrit(bookByFolio(
      /*$activefolioid*/
      ctx[1]
    ));
    let t4;
    let show_if_1 = hasTranslation(
      /*ptk*/
      ctx[5],
      bookByFolio(
        /*$activefolioid*/
        ctx[1]
      )
    );
    let t5;
    let show_if = hasVariorum(bookByFolio(
      /*$activefolioid*/
      ctx[1]
    ));
    let t6;
    let t7;
    let previous_key = (
      /*externals*/
      ctx[4]
    );
    let t8;
    let div1;
    let searchmain;
    let t9;
    let div2;
    let chunktext;
    let t10;
    let div3;
    let sourcetext;
    let t11;
    let div4;
    let translations;
    let t12;
    let div5;
    let variorum;
    let t13;
    let each1_anchor;
    let current;
    let mounted;
    let dispose;
    let if_block0 = show_if_2 && create_if_block_27(ctx);
    let if_block1 = show_if_1 && create_if_block_111(ctx);
    let if_block2 = show_if && create_if_block18(ctx);
    let each_value_1 = (
      /*internals*/
      ctx[3]
    );
    let each_blocks_1 = [];
    for (let i = 0; i < each_value_1.length; i += 1) {
      each_blocks_1[i] = create_each_block_13(get_each_context_13(ctx, each_value_1, i));
    }
    let key_block = create_key_block7(ctx);
    searchmain = new searchmain_default({ props: { ptk: (
      /*ptk*/
      ctx[5]
    ) } });
    chunktext = new chunktext_default({ props: { ptk: (
      /*ptk*/
      ctx[5]
    ) } });
    sourcetext = new sourcetext_default({ props: { ptk: (
      /*ptk*/
      ctx[5]
    ) } });
    translations = new translations_default({
      props: {
        closePopup: (
          /*closePopup*/
          ctx[0]
        ),
        ptk: (
          /*ptk*/
          ctx[5]
        )
      }
    });
    variorum = new variorum_default({
      props: { closePopup: (
        /*closePopup*/
        ctx[0]
      ) }
    });
    let each_value = (
      /*internals*/
      ctx[3]
    );
    let each_blocks = [];
    for (let i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block21(get_each_context21(ctx, each_value, i));
    }
    const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
      each_blocks[i] = null;
    });
    return {
      c() {
        div0 = element("div");
        span0 = element("span");
        t0 = text(t0_value);
        t1 = space();
        span1 = element("span");
        span1.textContent = "\u5168\u6587";
        t3 = space();
        if (if_block0)
          if_block0.c();
        t4 = space();
        if (if_block1)
          if_block1.c();
        t5 = space();
        if (if_block2)
          if_block2.c();
        t6 = space();
        for (let i = 0; i < each_blocks_1.length; i += 1) {
          each_blocks_1[i].c();
        }
        t7 = space();
        key_block.c();
        t8 = space();
        div1 = element("div");
        create_component(searchmain.$$.fragment);
        t9 = space();
        div2 = element("div");
        create_component(chunktext.$$.fragment);
        t10 = space();
        div3 = element("div");
        create_component(sourcetext.$$.fragment);
        t11 = space();
        div4 = element("div");
        create_component(translations.$$.fragment);
        t12 = space();
        div5 = element("div");
        create_component(variorum.$$.fragment);
        t13 = space();
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        each1_anchor = empty();
        attr(span0, "aria-hidden", "true");
        attr(span0, "class", "clickable");
        toggle_class(
          span0,
          "selected",
          /*thetab*/
          ctx[2] == "search"
        );
        attr(span1, "aria-hidden", "true");
        attr(span1, "class", "clickable");
        toggle_class(
          span1,
          "selected",
          /*thetab*/
          ctx[2] == "chunktext"
        );
        attr(div0, "class", "tabs");
        attr(div1, "class", "subtab-content");
        toggle_class(
          div1,
          "visible",
          /*thetab*/
          ctx[2] == "search"
        );
        attr(div2, "class", "subtab-content");
        toggle_class(
          div2,
          "visible",
          /*thetab*/
          ctx[2] == "chunktext"
        );
        attr(div3, "class", "subtab-content");
        toggle_class(
          div3,
          "visible",
          /*thetab*/
          ctx[2] == "sourcetext"
        );
        attr(div4, "class", "subtab-content");
        toggle_class(
          div4,
          "visible",
          /*thetab*/
          ctx[2] == "translations"
        );
        attr(div5, "class", "subtab-content");
        toggle_class(
          div5,
          "visible",
          /*thetab*/
          ctx[2] == "variorum"
        );
      },
      m(target, anchor) {
        insert(target, div0, anchor);
        append(div0, span0);
        append(span0, t0);
        append(div0, t1);
        append(div0, span1);
        append(div0, t3);
        if (if_block0)
          if_block0.m(div0, null);
        append(div0, t4);
        if (if_block1)
          if_block1.m(div0, null);
        append(div0, t5);
        if (if_block2)
          if_block2.m(div0, null);
        append(div0, t6);
        for (let i = 0; i < each_blocks_1.length; i += 1) {
          if (each_blocks_1[i]) {
            each_blocks_1[i].m(div0, null);
          }
        }
        append(div0, t7);
        key_block.m(div0, null);
        insert(target, t8, anchor);
        insert(target, div1, anchor);
        mount_component(searchmain, div1, null);
        insert(target, t9, anchor);
        insert(target, div2, anchor);
        mount_component(chunktext, div2, null);
        insert(target, t10, anchor);
        insert(target, div3, anchor);
        mount_component(sourcetext, div3, null);
        insert(target, t11, anchor);
        insert(target, div4, anchor);
        mount_component(translations, div4, null);
        insert(target, t12, anchor);
        insert(target, div5, anchor);
        mount_component(variorum, div5, null);
        insert(target, t13, anchor);
        for (let i = 0; i < each_blocks.length; i += 1) {
          if (each_blocks[i]) {
            each_blocks[i].m(target, anchor);
          }
        }
        insert(target, each1_anchor, anchor);
        current = true;
        if (!mounted) {
          dispose = [
            listen(
              span0,
              "click",
              /*click_handler*/
              ctx[10]
            ),
            listen(
              span1,
              "click",
              /*click_handler_1*/
              ctx[11]
            )
          ];
          mounted = true;
        }
      },
      p(ctx2, [dirty]) {
        if ((!current || dirty & /*$tosim*/
        64) && t0_value !== (t0_value = _(
          "\u641C\u5C0B",
          /*$tosim*/
          ctx2[6]
        ) + ""))
          set_data(t0, t0_value);
        if (!current || dirty & /*thetab*/
        4) {
          toggle_class(
            span0,
            "selected",
            /*thetab*/
            ctx2[2] == "search"
          );
        }
        if (!current || dirty & /*thetab*/
        4) {
          toggle_class(
            span1,
            "selected",
            /*thetab*/
            ctx2[2] == "chunktext"
          );
        }
        if (dirty & /*$activefolioid*/
        2)
          show_if_2 = hasSanskrit(bookByFolio(
            /*$activefolioid*/
            ctx2[1]
          ));
        if (show_if_2) {
          if (if_block0) {
            if_block0.p(ctx2, dirty);
          } else {
            if_block0 = create_if_block_27(ctx2);
            if_block0.c();
            if_block0.m(div0, t4);
          }
        } else if (if_block0) {
          if_block0.d(1);
          if_block0 = null;
        }
        if (dirty & /*ptk, $activefolioid*/
        34)
          show_if_1 = hasTranslation(
            /*ptk*/
            ctx2[5],
            bookByFolio(
              /*$activefolioid*/
              ctx2[1]
            )
          );
        if (show_if_1) {
          if (if_block1) {
            if_block1.p(ctx2, dirty);
          } else {
            if_block1 = create_if_block_111(ctx2);
            if_block1.c();
            if_block1.m(div0, t5);
          }
        } else if (if_block1) {
          if_block1.d(1);
          if_block1 = null;
        }
        if (dirty & /*$activefolioid*/
        2)
          show_if = hasVariorum(bookByFolio(
            /*$activefolioid*/
            ctx2[1]
          ));
        if (show_if) {
          if (if_block2) {
            if_block2.p(ctx2, dirty);
          } else {
            if_block2 = create_if_block18(ctx2);
            if_block2.c();
            if_block2.m(div0, t6);
          }
        } else if (if_block2) {
          if_block2.d(1);
          if_block2 = null;
        }
        if (dirty & /*thetab, selecttab, internals*/
        140) {
          each_value_1 = /*internals*/
          ctx2[3];
          let i;
          for (i = 0; i < each_value_1.length; i += 1) {
            const child_ctx = get_each_context_13(ctx2, each_value_1, i);
            if (each_blocks_1[i]) {
              each_blocks_1[i].p(child_ctx, dirty);
            } else {
              each_blocks_1[i] = create_each_block_13(child_ctx);
              each_blocks_1[i].c();
              each_blocks_1[i].m(div0, t7);
            }
          }
          for (; i < each_blocks_1.length; i += 1) {
            each_blocks_1[i].d(1);
          }
          each_blocks_1.length = each_value_1.length;
        }
        if (dirty & /*externals*/
        16 && safe_not_equal(previous_key, previous_key = /*externals*/
        ctx2[4])) {
          group_outros();
          transition_out(key_block, 1, 1, noop);
          check_outros();
          key_block = create_key_block7(ctx2);
          key_block.c();
          transition_in(key_block, 1);
          key_block.m(div0, null);
        } else {
          key_block.p(ctx2, dirty);
        }
        const searchmain_changes = {};
        if (dirty & /*ptk*/
        32)
          searchmain_changes.ptk = /*ptk*/
          ctx2[5];
        searchmain.$set(searchmain_changes);
        if (!current || dirty & /*thetab*/
        4) {
          toggle_class(
            div1,
            "visible",
            /*thetab*/
            ctx2[2] == "search"
          );
        }
        const chunktext_changes = {};
        if (dirty & /*ptk*/
        32)
          chunktext_changes.ptk = /*ptk*/
          ctx2[5];
        chunktext.$set(chunktext_changes);
        if (!current || dirty & /*thetab*/
        4) {
          toggle_class(
            div2,
            "visible",
            /*thetab*/
            ctx2[2] == "chunktext"
          );
        }
        const sourcetext_changes = {};
        if (dirty & /*ptk*/
        32)
          sourcetext_changes.ptk = /*ptk*/
          ctx2[5];
        sourcetext.$set(sourcetext_changes);
        if (!current || dirty & /*thetab*/
        4) {
          toggle_class(
            div3,
            "visible",
            /*thetab*/
            ctx2[2] == "sourcetext"
          );
        }
        const translations_changes = {};
        if (dirty & /*closePopup*/
        1)
          translations_changes.closePopup = /*closePopup*/
          ctx2[0];
        if (dirty & /*ptk*/
        32)
          translations_changes.ptk = /*ptk*/
          ctx2[5];
        translations.$set(translations_changes);
        if (!current || dirty & /*thetab*/
        4) {
          toggle_class(
            div4,
            "visible",
            /*thetab*/
            ctx2[2] == "translations"
          );
        }
        const variorum_changes = {};
        if (dirty & /*closePopup*/
        1)
          variorum_changes.closePopup = /*closePopup*/
          ctx2[0];
        variorum.$set(variorum_changes);
        if (!current || dirty & /*thetab*/
        4) {
          toggle_class(
            div5,
            "visible",
            /*thetab*/
            ctx2[2] == "variorum"
          );
        }
        if (dirty & /*thetab, closePopup, internals, ptk*/
        45) {
          each_value = /*internals*/
          ctx2[3];
          let i;
          for (i = 0; i < each_value.length; i += 1) {
            const child_ctx = get_each_context21(ctx2, each_value, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
              transition_in(each_blocks[i], 1);
            } else {
              each_blocks[i] = create_each_block21(child_ctx);
              each_blocks[i].c();
              transition_in(each_blocks[i], 1);
              each_blocks[i].m(each1_anchor.parentNode, each1_anchor);
            }
          }
          group_outros();
          for (i = each_value.length; i < each_blocks.length; i += 1) {
            out(i);
          }
          check_outros();
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(key_block);
        transition_in(searchmain.$$.fragment, local);
        transition_in(chunktext.$$.fragment, local);
        transition_in(sourcetext.$$.fragment, local);
        transition_in(translations.$$.fragment, local);
        transition_in(variorum.$$.fragment, local);
        for (let i = 0; i < each_value.length; i += 1) {
          transition_in(each_blocks[i]);
        }
        current = true;
      },
      o(local) {
        transition_out(key_block);
        transition_out(searchmain.$$.fragment, local);
        transition_out(chunktext.$$.fragment, local);
        transition_out(sourcetext.$$.fragment, local);
        transition_out(translations.$$.fragment, local);
        transition_out(variorum.$$.fragment, local);
        each_blocks = each_blocks.filter(Boolean);
        for (let i = 0; i < each_blocks.length; i += 1) {
          transition_out(each_blocks[i]);
        }
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(div0);
        if (if_block0)
          if_block0.d();
        if (if_block1)
          if_block1.d();
        if (if_block2)
          if_block2.d();
        destroy_each(each_blocks_1, detaching);
        key_block.d(detaching);
        if (detaching)
          detach(t8);
        if (detaching)
          detach(div1);
        destroy_component(searchmain);
        if (detaching)
          detach(t9);
        if (detaching)
          detach(div2);
        destroy_component(chunktext);
        if (detaching)
          detach(t10);
        if (detaching)
          detach(div3);
        destroy_component(sourcetext);
        if (detaching)
          detach(t11);
        if (detaching)
          detach(div4);
        destroy_component(translations);
        if (detaching)
          detach(t12);
        if (detaching)
          detach(div5);
        destroy_component(variorum);
        if (detaching)
          detach(t13);
        destroy_each(each_blocks, detaching);
        if (detaching)
          detach(each1_anchor);
        mounted = false;
        run_all(dispose);
      }
    };
  }
  function instance37($$self, $$props, $$invalidate) {
    let ptk3;
    let externals;
    let internals;
    let $activepb;
    let $activefolioid;
    let $tapmark;
    let $foliotext;
    let $activePtk;
    let $tosim;
    component_subscribe($$self, activepb, ($$value) => $$invalidate(8, $activepb = $$value));
    component_subscribe($$self, activefolioid, ($$value) => $$invalidate(1, $activefolioid = $$value));
    component_subscribe($$self, tapmark, ($$value) => $$invalidate(16, $tapmark = $$value));
    component_subscribe($$self, foliotext, ($$value) => $$invalidate(17, $foliotext = $$value));
    component_subscribe($$self, activePtk, ($$value) => $$invalidate(9, $activePtk = $$value));
    component_subscribe($$self, tosim, ($$value) => $$invalidate(6, $tosim = $$value));
    let { closePopup } = $$props;
    const getLinks = (folioid) => {
      const dcptk = usePtk("dc");
      const [from, to] = ptk3.rangeOfAddress("folio#" + folioid + ".pb#" + $activepb);
      const externals2 = [], internals2 = [];
      const agmsjuan = folioid.match(/agms(\d+)$/);
      const ft = $foliotext;
      if (!ft)
        return [[], []];
      let col, key;
      if (agmsjuan) {
        const at = ptk3.nearestTag(to + 1, "n");
        const n = ptk3.defines.n;
        key = parseInt(n.fields.id.values[at]);
        caption = _("\u96DC") + key + _("\u5C0E\u8B80");
        url = "https://buddhaspace.org/agama/" + agmsjuan[1] + ".html#" + toChineseNumber(key);
        externals2.push([caption, url]);
        col = dcptk.columns["par_agms"];
      }
      const agmssjuan = folioid.match(/agmss(\d+)$/);
      if (agmssjuan) {
        const at = ptk3.nearestTag(to + 1, "n");
        const n = ptk3.defines.n;
        key = parseInt(n.fields.id.values[at]);
        col = dcptk.columns["par_agmss"];
      }
      const agmdjuan = folioid.match(/agmd(\d+)$/);
      if (agmdjuan) {
        const cl = ft.fromFolioPos($tapmark);
        if (cl && cl.ckid) {
          caption = "\u9577" + parseInt(cl.ckid) + _("\u5C0E\u8B80");
          url = "https://buddhaspace.org/agama3/" + parseInt(cl.ckid) + ".html";
          key = cl.ckid;
          externals2.push([caption, url]);
        }
        col = dcptk.columns["par_agmd"];
      }
      const agmmjuan = folioid.match(/agmm(\d+)$/);
      if (agmmjuan) {
        const cl = ft.fromFolioPos($tapmark);
        if (cl && cl.ckid) {
          key = cl.ckid;
          caption = "\u4E2D" + parseInt(cl.ckid) + _("\u5C0E\u8B80");
          url = "https://buddhaspace.org/agama2/sub/" + cl.ckid + ".html";
          externals2.push([caption, url]);
        }
        col = dcptk.columns["par_agmm"];
      }
      const agmujuan = folioid.match(/agmu(\d+)$/);
      if (agmujuan) {
        col = dcptk.columns["par_agmu"];
        const cl = ft.fromFolioPos($tapmark);
        if (cl && cl.ckid) {
          key = cl.ckid;
        }
      }
      if (col && key) {
        const at2 = col.keys.indexOf(key.toString());
        const pars = (col.parallels[at2] || "").split(",");
        for (let i = 0; i < pars.length; i++) {
          const par = pars[i];
          if (par.match(/ak#[dmsa]n/)) {
            const host = location.host.replace("5000", "5080");
            const url2 = location.protocol + "//" + host + location.pathname.replace("ylz", "sz") + "#" + par;
            externals2.push([humanAddress(par), url2]);
          } else {
            internals2.push([humanAddress(par), par]);
          }
        }
      }
      if (thetab.startsWith("link")) {
        $$invalidate(2, thetab = "chunktext");
      }
      return [externals2, internals2];
    };
    const selecttab = (tabname) => {
      leftmode.set("folio");
      $$invalidate(2, thetab = tabname);
    };
    let thetab = "search";
    const click_handler = () => selecttab("search");
    const click_handler_1 = () => selecttab("chunktext");
    const click_handler_2 = () => selecttab("sourcetext");
    const click_handler_3 = () => selecttab("translations");
    const click_handler_4 = () => selecttab("variorum");
    const click_handler_5 = (idx2) => selecttab("link" + idx2);
    $$self.$$set = ($$props2) => {
      if ("closePopup" in $$props2)
        $$invalidate(0, closePopup = $$props2.closePopup);
    };
    $$self.$$.update = () => {
      if ($$self.$$.dirty & /*$activePtk*/
      512) {
        $:
          $$invalidate(5, ptk3 = usePtk($activePtk));
      }
      if ($$self.$$.dirty & /*$activefolioid, $activepb*/
      258) {
        $:
          $$invalidate(4, [externals, internals] = getLinks($activefolioid, $activepb), externals, ($$invalidate(3, internals), $$invalidate(1, $activefolioid), $$invalidate(8, $activepb)));
      }
    };
    return [
      closePopup,
      $activefolioid,
      thetab,
      internals,
      externals,
      ptk3,
      $tosim,
      selecttab,
      $activepb,
      $activePtk,
      click_handler,
      click_handler_1,
      click_handler_2,
      click_handler_3,
      click_handler_4,
      click_handler_5
    ];
  }
  var Textual = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance37, create_fragment42, safe_not_equal, { closePopup: 0 });
    }
  };
  var textual_default = Textual;

  // src/sharing.svelte
  var import_qrcode = __toESM(require_browser());
  function create_fragment43(ctx) {
    let div;
    let t0_value = _(
      /*msg*/
      ctx[4]
    ) + "";
    let t0;
    let br;
    let t1_value = _(
      /*linetext*/
      ctx[1]
    ) + "";
    let t1;
    let t2;
    let t3_value = _(
      /*title*/
      ctx[2]
    ) + "";
    let t3;
    let t4;
    let t5_value = _(
      /*caption*/
      ctx[3]
    ) + "";
    let t5;
    let t6;
    let button0;
    let t8;
    let button1;
    let t10;
    let button2;
    let t12;
    let button3;
    let t14;
    let span;
    let t15;
    let t16_value = shareAddress() + "";
    let t16;
    let mounted;
    let dispose;
    return {
      c() {
        div = element("div");
        t0 = text(t0_value);
        br = element("br");
        t1 = text(t1_value);
        t2 = text("\u300A");
        t3 = text(t3_value);
        t4 = text("\u300B");
        t5 = text(t5_value);
        t6 = space();
        button0 = element("button");
        button0.textContent = `${_("\u8907\u88FD\u9023\u7D50")}`;
        t8 = space();
        button1 = element("button");
        button1.textContent = `${_("\u8907\u88FD\u7D93\u6587\u53CA\u9023\u7D50")}`;
        t10 = space();
        button2 = element("button");
        button2.textContent = `${_("HTML\u683C\u5F0F\u9023\u7D50")}`;
        t12 = space();
        button3 = element("button");
        button3.textContent = `${_("MarkDown\u683C\u5F0F\u9023\u7D50")}`;
        t14 = space();
        span = element("span");
        t15 = space();
        t16 = text(t16_value);
        attr(div, "class", "bodytext");
        attr(button0, "class", "svelte-1o0xp9s");
        attr(button1, "class", "svelte-1o0xp9s");
        attr(button2, "class", "svelte-1o0xp9s");
        attr(button3, "class", "svelte-1o0xp9s");
      },
      m(target, anchor) {
        insert(target, div, anchor);
        append(div, t0);
        append(div, br);
        append(div, t1);
        append(div, t2);
        append(div, t3);
        append(div, t4);
        append(div, t5);
        insert(target, t6, anchor);
        insert(target, button0, anchor);
        insert(target, t8, anchor);
        insert(target, button1, anchor);
        insert(target, t10, anchor);
        insert(target, button2, anchor);
        insert(target, t12, anchor);
        insert(target, button3, anchor);
        insert(target, t14, anchor);
        insert(target, span, anchor);
        span.innerHTML = /*qrcode*/
        ctx[0];
        insert(target, t15, anchor);
        insert(target, t16, anchor);
        if (!mounted) {
          dispose = [
            listen(
              button0,
              "click",
              /*copylink*/
              ctx[6]
            ),
            listen(
              button1,
              "click",
              /*excerptcopy*/
              ctx[5]
            ),
            listen(
              button2,
              "click",
              /*htmlcopy*/
              ctx[8]
            ),
            listen(
              button3,
              "click",
              /*markdowncopy*/
              ctx[7]
            )
          ];
          mounted = true;
        }
      },
      p(ctx2, [dirty]) {
        if (dirty & /*msg*/
        16 && t0_value !== (t0_value = _(
          /*msg*/
          ctx2[4]
        ) + ""))
          set_data(t0, t0_value);
        if (dirty & /*linetext*/
        2 && t1_value !== (t1_value = _(
          /*linetext*/
          ctx2[1]
        ) + ""))
          set_data(t1, t1_value);
        if (dirty & /*title*/
        4 && t3_value !== (t3_value = _(
          /*title*/
          ctx2[2]
        ) + ""))
          set_data(t3, t3_value);
        if (dirty & /*caption*/
        8 && t5_value !== (t5_value = _(
          /*caption*/
          ctx2[3]
        ) + ""))
          set_data(t5, t5_value);
        if (dirty & /*qrcode*/
        1)
          span.innerHTML = /*qrcode*/
          ctx2[0];
        ;
      },
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching)
          detach(div);
        if (detaching)
          detach(t6);
        if (detaching)
          detach(button0);
        if (detaching)
          detach(t8);
        if (detaching)
          detach(button1);
        if (detaching)
          detach(t10);
        if (detaching)
          detach(button2);
        if (detaching)
          detach(t12);
        if (detaching)
          detach(button3);
        if (detaching)
          detach(t14);
        if (detaching)
          detach(span);
        if (detaching)
          detach(t15);
        if (detaching)
          detach(t16);
        mounted = false;
        run_all(dispose);
      }
    };
  }
  var copylinkmsg = "\u5DF2\u8907\u88FD\u9023\u7D50\u5230\u526A\u8CBC\u8584";
  function instance38($$self, $$props, $$invalidate) {
    let $tapmark;
    let $foliotext;
    component_subscribe($$self, tapmark, ($$value) => $$invalidate(9, $tapmark = $$value));
    component_subscribe($$self, foliotext, ($$value) => $$invalidate(10, $foliotext = $$value));
    let qrcode = "", linetext, title = "", caption3 = "", msg = copylinkmsg;
    onMount(async () => {
      const cl = $foliotext.fromFolioPos($tapmark);
      $$invalidate(1, linetext = parseOfftext(cl?.linetext || "")[0]);
      $$invalidate(2, title = cl?.ck.bk.heading || "");
      $$invalidate(3, caption3 = cl?.ck.caption);
      $$invalidate(0, qrcode = await import_qrcode.default.toString(shareAddress(), { type: "svg" }));
    });
    let timer;
    const showmessage = (_msg) => {
      $$invalidate(4, msg = _msg);
      clearTimeout(timer);
    };
    const excerptcopy = async () => {
      const text2 = shareAddress() + "	\u300C" + linetext + "\u300D\u300A" + title + "\u300B" + caption3;
      await navigator.clipboard.writeText(text2);
      showmessage("\u5DF2\u8907\u88FD\u7D93\u6587\u53CA\u9023\u7D50\u5230\u526A\u8CBC\u8584");
    };
    const copylink = async () => {
      navigator.clipboard.writeText(shareAddress());
      showmessage(copylinkmsg);
    };
    const markdowncopy = async () => {
      const text2 = "[" + linetext + "\u300A" + title + "\u300B" + caption3 + "](" + shareAddress() + ")";
      await navigator.clipboard.writeText(text2);
      showmessage("\u5DF2\u8907\u88FDMarkdown\u683C\u5F0F\u5230\u526A\u8CBC\u8584");
    };
    const htmlcopy = async () => {
      const text2 = linetext + '<a href="' + shareAddress() + '">\u300A' + title + "\u300B" + caption3 + "</a>";
      await navigator.clipboard.writeText(text2);
      showmessage("\u5DF2\u8907\u88FDHTML\u683C\u5F0F\u5230\u526A\u8CBC\u8584");
    };
    return [
      qrcode,
      linetext,
      title,
      caption3,
      msg,
      excerptcopy,
      copylink,
      markdowncopy,
      htmlcopy
    ];
  }
  var Sharing = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance38, create_fragment43, safe_not_equal, {});
    }
  };
  var sharing_default = Sharing;

  // src/juan.svelte
  function create_else_block9(ctx) {
    let slider;
    let updating_value;
    let current;
    function slider_value_binding(value) {
      ctx[11](value);
    }
    let slider_props = {
      max: (
        /*juans*/
        ctx[0].length
      ),
      min: 1,
      $$slots: { caption: [create_caption_slot4] },
      $$scope: { ctx }
    };
    if (
      /*juan*/
      ctx[1] !== void 0
    ) {
      slider_props.value = /*juan*/
      ctx[1];
    }
    slider = new rangeslider_default({ props: slider_props });
    binding_callbacks.push(() => bind(slider, "value", slider_value_binding));
    slider.$on("input", debounce(
      /*gotojuan*/
      ctx[4],
      300
    ));
    return {
      c() {
        create_component(slider.$$.fragment);
      },
      m(target, anchor) {
        mount_component(slider, target, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        const slider_changes = {};
        if (dirty & /*juans*/
        1)
          slider_changes.max = /*juans*/
          ctx2[0].length;
        if (dirty & /*$$scope, juans, juan*/
        262147) {
          slider_changes.$$scope = { dirty, ctx: ctx2 };
        }
        if (!updating_value && dirty & /*juan*/
        2) {
          updating_value = true;
          slider_changes.value = /*juan*/
          ctx2[1];
          add_flush_callback(() => updating_value = false);
        }
        slider.$set(slider_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(slider.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(slider.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(slider, detaching);
      }
    };
  }
  function create_if_block_112(ctx) {
    let pager;
    let current;
    pager = new pager_default({
      props: {
        pages: (
          /*juans*/
          ctx[0]
        ),
        caption: "\u5377",
        now: (
          /*currentjuan*/
          ctx[2] - 1
        ),
        onselect: (
          /*func*/
          ctx[10]
        ),
        $$slots: {
          default: [
            create_default_slot9,
            ({ active, caption: caption3, id }) => ({ 15: active, 16: caption3, 17: id }),
            ({ active, caption: caption3, id }) => (active ? 32768 : 0) | (caption3 ? 65536 : 0) | (id ? 131072 : 0)
          ]
        },
        $$scope: { ctx }
      }
    });
    return {
      c() {
        create_component(pager.$$.fragment);
      },
      m(target, anchor) {
        mount_component(pager, target, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        const pager_changes = {};
        if (dirty & /*juans*/
        1)
          pager_changes.pages = /*juans*/
          ctx2[0];
        if (dirty & /*$$scope, active, id, caption*/
        491520) {
          pager_changes.$$scope = { dirty, ctx: ctx2 };
        }
        pager.$set(pager_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(pager.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(pager.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(pager, detaching);
      }
    };
  }
  function create_if_block19(ctx) {
    let span;
    return {
      c() {
        span = element("span");
      },
      m(target, anchor) {
        insert(target, span, anchor);
      },
      p: noop,
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching)
          detach(span);
      }
    };
  }
  function create_caption_slot4(ctx) {
    let span;
    let t0;
    let t1_value = (
      /*juan*/
      (ctx[1][0] || 1) + ""
    );
    let t1;
    let t2;
    let t3_value = (
      /*juans*/
      ctx[0].length + ""
    );
    let t3;
    return {
      c() {
        span = element("span");
        t0 = text("\u5377");
        t1 = text(t1_value);
        t2 = text("/");
        t3 = text(t3_value);
        attr(span, "slot", "caption");
        set_style(span, "float", "right");
      },
      m(target, anchor) {
        insert(target, span, anchor);
        append(span, t0);
        append(span, t1);
        append(span, t2);
        append(span, t3);
      },
      p(ctx2, dirty) {
        if (dirty & /*juan*/
        2 && t1_value !== (t1_value = /*juan*/
        (ctx2[1][0] || 1) + ""))
          set_data(t1, t1_value);
        if (dirty & /*juans*/
        1 && t3_value !== (t3_value = /*juans*/
        ctx2[0].length + ""))
          set_data(t3, t3_value);
      },
      d(detaching) {
        if (detaching)
          detach(span);
      }
    };
  }
  function create_default_slot9(ctx) {
    let span;
    let t_value = (
      /*caption*/
      ctx[16] + ""
    );
    let t;
    let mounted;
    let dispose;
    function click_handler() {
      return (
        /*click_handler*/
        ctx[9](
          /*id*/
          ctx[17]
        )
      );
    }
    return {
      c() {
        span = element("span");
        t = text(t_value);
        attr(span, "aria-hidden", "true");
        attr(span, "class", "clickable");
        toggle_class(
          span,
          "selected",
          /*active*/
          ctx[15]
        );
      },
      m(target, anchor) {
        insert(target, span, anchor);
        append(span, t);
        if (!mounted) {
          dispose = listen(span, "click", click_handler);
          mounted = true;
        }
      },
      p(new_ctx, dirty) {
        ctx = new_ctx;
        if (dirty & /*caption*/
        65536 && t_value !== (t_value = /*caption*/
        ctx[16] + ""))
          set_data(t, t_value);
        if (dirty & /*active*/
        32768) {
          toggle_class(
            span,
            "selected",
            /*active*/
            ctx[15]
          );
        }
      },
      d(detaching) {
        if (detaching)
          detach(span);
        mounted = false;
        dispose();
      }
    };
  }
  function create_fragment44(ctx) {
    let current_block_type_index;
    let if_block;
    let if_block_anchor;
    let current;
    const if_block_creators = [create_if_block19, create_if_block_112, create_else_block9];
    const if_blocks = [];
    function select_block_type(ctx2, dirty) {
      if (
        /*juans*/
        ctx2[0].length == 0
      )
        return 0;
      if (
        /*juans*/
        ctx2[0].length < 10
      )
        return 1;
      return 2;
    }
    current_block_type_index = select_block_type(ctx, -1);
    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    return {
      c() {
        if_block.c();
        if_block_anchor = empty();
      },
      m(target, anchor) {
        if_blocks[current_block_type_index].m(target, anchor);
        insert(target, if_block_anchor, anchor);
        current = true;
      },
      p(ctx2, [dirty]) {
        let previous_block_index = current_block_type_index;
        current_block_type_index = select_block_type(ctx2, dirty);
        if (current_block_type_index === previous_block_index) {
          if_blocks[current_block_type_index].p(ctx2, dirty);
        } else {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, () => {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
          if_block = if_blocks[current_block_type_index];
          if (!if_block) {
            if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
            if_block.c();
          } else {
            if_block.p(ctx2, dirty);
          }
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(if_block);
        current = true;
      },
      o(local) {
        transition_out(if_block);
        current = false;
      },
      d(detaching) {
        if_blocks[current_block_type_index].d(detaching);
        if (detaching)
          detach(if_block_anchor);
      }
    };
  }
  function instance39($$self, $$props, $$invalidate) {
    let ptk3;
    let $loadingfolio;
    let $activefolioid;
    let $activePtk;
    component_subscribe($$self, loadingfolio, ($$value) => $$invalidate(6, $loadingfolio = $$value));
    component_subscribe($$self, activefolioid, ($$value) => $$invalidate(7, $activefolioid = $$value));
    component_subscribe($$self, activePtk, ($$value) => $$invalidate(8, $activePtk = $$value));
    let { closePopup } = $$props;
    let juans = [];
    const m4 = $activefolioid.match(/([a-z_]+)(\d+$)/);
    let currentjuan = m4 ? parseInt(m4[2]) : 1;
    let juan = [1, 0];
    const gojuan = (juan2) => {
      const fid = $activefolioid;
      const newid = fid.replace(/\d+$/, juan2);
      if (newid == fid)
        return;
      loadFolio(newid, function() {
        activepb.set("1");
        tapmark.set(["1", 0, 0]);
        updateUrl(tapAddress());
        closePopup();
        loadJuan(newid);
      });
    };
    const loadJuan = (folioid, loading) => {
      if (!ptk3 || loading)
        return [];
      const m5 = folioid.match(/([a-z_]+)(\d+$)/);
      if (!m5)
        return [];
      $$invalidate(1, juan[0] = currentjuan, juan);
      const juans2 = allJuan(ptk3, folioid).map((it, idx2) => {
        return {
          caption: it,
          idx: parseInt(idx2),
          id: (idx2 + 1).toString()
        };
      });
      return juans2;
    };
    const gotojuan = (e) => {
      const j2 = (e.detail[0] || 1).toString();
      gojuan(j2);
    };
    const click_handler = (id) => gojuan(id);
    const func2 = (idx2) => gojuan(idx2 + 1);
    function slider_value_binding(value) {
      juan = value;
      $$invalidate(1, juan);
    }
    $$self.$$set = ($$props2) => {
      if ("closePopup" in $$props2)
        $$invalidate(5, closePopup = $$props2.closePopup);
    };
    $$self.$$.update = () => {
      if ($$self.$$.dirty & /*$activePtk*/
      256) {
        $:
          ptk3 = usePtk($activePtk);
      }
      if ($$self.$$.dirty & /*$activefolioid, $loadingfolio*/
      192) {
        $:
          $$invalidate(0, juans = loadJuan($activefolioid, $loadingfolio));
      }
    };
    return [
      juans,
      juan,
      currentjuan,
      gojuan,
      gotojuan,
      closePopup,
      $loadingfolio,
      $activefolioid,
      $activePtk,
      click_handler,
      func2,
      slider_value_binding
    ];
  }
  var Juan = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance39, create_fragment44, safe_not_equal, { closePopup: 5 });
    }
  };
  var juan_default = Juan;

  // src/toc.svelte
  function get_each_context22(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[18] = list[i];
    return child_ctx;
  }
  function create_else_block10(ctx) {
    let t;
    return {
      c() {
        t = text("\u8F09\u5165\u4E2D");
      },
      m(target, anchor) {
        insert(target, t, anchor);
      },
      p: noop,
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching)
          detach(t);
      }
    };
  }
  function create_if_block20(ctx) {
    let juan;
    let t0;
    let slider;
    let updating_value;
    let t1;
    let div;
    let previous_key = (
      /*$tosim*/
      ctx[7]
    );
    let t2;
    let endmarker;
    let current;
    juan = new juan_default({
      props: { closePopup: (
        /*closePopup*/
        ctx[0]
      ) }
    });
    function slider_value_binding(value) {
      ctx[13](value);
    }
    let slider_props = {
      max: (
        /*$maxfolio*/
        ctx[6]
      ),
      min: 1,
      $$slots: { caption: [create_caption_slot5] },
      $$scope: { ctx }
    };
    if (
      /*folio*/
      ctx[5] !== void 0
    ) {
      slider_props.value = /*folio*/
      ctx[5];
    }
    slider = new rangeslider_default({ props: slider_props });
    binding_callbacks.push(() => bind(slider, "value", slider_value_binding));
    slider.$on("input", debounce(
      /*setFolio*/
      ctx[8],
      800
    ));
    let key_block = create_key_block8(ctx);
    endmarker = new endmarker_default({});
    return {
      c() {
        create_component(juan.$$.fragment);
        t0 = space();
        create_component(slider.$$.fragment);
        t1 = space();
        div = element("div");
        key_block.c();
        t2 = space();
        create_component(endmarker.$$.fragment);
        attr(div, "class", "toc svelte-1ubc3jc");
      },
      m(target, anchor) {
        mount_component(juan, target, anchor);
        insert(target, t0, anchor);
        mount_component(slider, target, anchor);
        insert(target, t1, anchor);
        insert(target, div, anchor);
        key_block.m(div, null);
        append(div, t2);
        mount_component(endmarker, div, null);
        current = true;
      },
      p(ctx2, dirty) {
        const juan_changes = {};
        if (dirty & /*closePopup*/
        1)
          juan_changes.closePopup = /*closePopup*/
          ctx2[0];
        juan.$set(juan_changes);
        const slider_changes = {};
        if (dirty & /*$maxfolio*/
        64)
          slider_changes.max = /*$maxfolio*/
          ctx2[6];
        if (dirty & /*$$scope, $maxfolio, folio*/
        2097248) {
          slider_changes.$$scope = { dirty, ctx: ctx2 };
        }
        if (!updating_value && dirty & /*folio*/
        32) {
          updating_value = true;
          slider_changes.value = /*folio*/
          ctx2[5];
          add_flush_callback(() => updating_value = false);
        }
        slider.$set(slider_changes);
        if (dirty & /*$tosim*/
        128 && safe_not_equal(previous_key, previous_key = /*$tosim*/
        ctx2[7])) {
          key_block.d(1);
          key_block = create_key_block8(ctx2);
          key_block.c();
          key_block.m(div, t2);
        } else {
          key_block.p(ctx2, dirty);
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(juan.$$.fragment, local);
        transition_in(slider.$$.fragment, local);
        transition_in(endmarker.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(juan.$$.fragment, local);
        transition_out(slider.$$.fragment, local);
        transition_out(endmarker.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(juan, detaching);
        if (detaching)
          detach(t0);
        destroy_component(slider, detaching);
        if (detaching)
          detach(t1);
        if (detaching)
          detach(div);
        key_block.d(detaching);
        destroy_component(endmarker);
      }
    };
  }
  function create_caption_slot5(ctx) {
    let span;
    let t0;
    let t1_value = (
      /*folio*/
      (ctx[5][0] || 1) + ""
    );
    let t1;
    let t2;
    let t3;
    return {
      c() {
        span = element("span");
        t0 = text("\u6298");
        t1 = text(t1_value);
        t2 = text("/");
        t3 = text(
          /*$maxfolio*/
          ctx[6]
        );
        attr(span, "slot", "caption");
        set_style(span, "float", "right");
      },
      m(target, anchor) {
        insert(target, span, anchor);
        append(span, t0);
        append(span, t1);
        append(span, t2);
        append(span, t3);
      },
      p(ctx2, dirty) {
        if (dirty & /*folio*/
        32 && t1_value !== (t1_value = /*folio*/
        (ctx2[5][0] || 1) + ""))
          set_data(t1, t1_value);
        if (dirty & /*$maxfolio*/
        64)
          set_data(
            t3,
            /*$maxfolio*/
            ctx2[6]
          );
      },
      d(detaching) {
        if (detaching)
          detach(span);
      }
    };
  }
  function create_each_block22(ctx) {
    let div;
    let t_value = styledNumber(
      /*item*/
      ctx[18].id,
      "\u2460"
    ) + _(
      /*item*/
      ctx[18].caption
    ) + "";
    let t;
    let mounted;
    let dispose;
    function click_handler() {
      return (
        /*click_handler*/
        ctx[14](
          /*item*/
          ctx[18]
        )
      );
    }
    return {
      c() {
        div = element("div");
        t = text(t_value);
        attr(div, "aria-hidden", "true");
        attr(div, "class", "tocitem");
        toggle_class(
          div,
          "selecteditem",
          /*cknow*/
          ctx[3] == /*item*/
          ctx[18].id
        );
      },
      m(target, anchor) {
        insert(target, div, anchor);
        append(div, t);
        if (!mounted) {
          dispose = listen(div, "click", click_handler);
          mounted = true;
        }
      },
      p(new_ctx, dirty) {
        ctx = new_ctx;
        if (dirty & /*tocitems*/
        4 && t_value !== (t_value = styledNumber(
          /*item*/
          ctx[18].id,
          "\u2460"
        ) + _(
          /*item*/
          ctx[18].caption
        ) + ""))
          set_data(t, t_value);
        if (dirty & /*cknow, tocitems*/
        12) {
          toggle_class(
            div,
            "selecteditem",
            /*cknow*/
            ctx[3] == /*item*/
            ctx[18].id
          );
        }
      },
      d(detaching) {
        if (detaching)
          detach(div);
        mounted = false;
        dispose();
      }
    };
  }
  function create_key_block8(ctx) {
    let each_1_anchor;
    let each_value = (
      /*tocitems*/
      ctx[2]
    );
    let each_blocks = [];
    for (let i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block22(get_each_context22(ctx, each_value, i));
    }
    return {
      c() {
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        each_1_anchor = empty();
      },
      m(target, anchor) {
        for (let i = 0; i < each_blocks.length; i += 1) {
          if (each_blocks[i]) {
            each_blocks[i].m(target, anchor);
          }
        }
        insert(target, each_1_anchor, anchor);
      },
      p(ctx2, dirty) {
        if (dirty & /*cknow, tocitems, goBookPb, ptk, styledNumber, _*/
        540) {
          each_value = /*tocitems*/
          ctx2[2];
          let i;
          for (i = 0; i < each_value.length; i += 1) {
            const child_ctx = get_each_context22(ctx2, each_value, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
            } else {
              each_blocks[i] = create_each_block22(child_ctx);
              each_blocks[i].c();
              each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
            }
          }
          for (; i < each_blocks.length; i += 1) {
            each_blocks[i].d(1);
          }
          each_blocks.length = each_value.length;
        }
      },
      d(detaching) {
        destroy_each(each_blocks, detaching);
        if (detaching)
          detach(each_1_anchor);
      }
    };
  }
  function create_fragment45(ctx) {
    let div;
    let current_block_type_index;
    let if_block;
    let current;
    const if_block_creators = [create_if_block20, create_else_block10];
    const if_blocks = [];
    function select_block_type(ctx2, dirty) {
      if (!/*$loadingfolio*/
      ctx2[1])
        return 0;
      return 1;
    }
    current_block_type_index = select_block_type(ctx, -1);
    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    return {
      c() {
        div = element("div");
        if_block.c();
        attr(div, "class", "bodytext");
      },
      m(target, anchor) {
        insert(target, div, anchor);
        if_blocks[current_block_type_index].m(div, null);
        current = true;
      },
      p(ctx2, [dirty]) {
        let previous_block_index = current_block_type_index;
        current_block_type_index = select_block_type(ctx2, dirty);
        if (current_block_type_index === previous_block_index) {
          if_blocks[current_block_type_index].p(ctx2, dirty);
        } else {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, () => {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
          if_block = if_blocks[current_block_type_index];
          if (!if_block) {
            if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
            if_block.c();
          } else {
            if_block.p(ctx2, dirty);
          }
          transition_in(if_block, 1);
          if_block.m(div, null);
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(if_block);
        current = true;
      },
      o(local) {
        transition_out(if_block);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(div);
        if_blocks[current_block_type_index].d();
      }
    };
  }
  function instance40($$self, $$props, $$invalidate) {
    let folio;
    let ptk3;
    let $loadingfolio;
    let $activepb;
    let $activefolioid;
    let $foliotext;
    let $activePtk;
    let $maxfolio;
    let $tosim;
    component_subscribe($$self, loadingfolio, ($$value) => $$invalidate(1, $loadingfolio = $$value));
    component_subscribe($$self, activepb, ($$value) => $$invalidate(10, $activepb = $$value));
    component_subscribe($$self, activefolioid, ($$value) => $$invalidate(11, $activefolioid = $$value));
    component_subscribe($$self, foliotext, ($$value) => $$invalidate(15, $foliotext = $$value));
    component_subscribe($$self, activePtk, ($$value) => $$invalidate(12, $activePtk = $$value));
    component_subscribe($$self, maxfolio, ($$value) => $$invalidate(6, $maxfolio = $$value));
    component_subscribe($$self, tosim, ($$value) => $$invalidate(7, $tosim = $$value));
    let { closePopup } = $$props;
    const setFolio = async (e) => {
      if ($loadingfolio)
        return;
      const v = (e.detail[0] || 1).toString();
      if ($activepb !== v) {
        activepb.set(v);
      }
    };
    let tocitems = [], cknow;
    const getTocItems = (folioid, loading) => {
      if (loading)
        return [];
      const out = [];
      const bk2 = bookByFolio(folioid);
      const bookaddr = "bk#" + bk2;
      const [from, to] = ptk3.rangeOfAddress(bookaddr);
      const ck = ptk3.defines.ck;
      const at = bsearchNumber(ck.linepos, from);
      const at2 = bsearchNumber(ck.linepos, to);
      for (let i = at; i < at2; i++) {
        out.push({
          caption: ck.innertext.get(i),
          at: i,
          id: ck.fields.id.values[i]
        });
      }
      return out;
    };
    const goBookPb = (ptk4, at) => {
      const ck = ptk4.defines.ck;
      const folioid = ptk4.nearestTag(ck.linepos[at] + 1, "folio", "id");
      if (folioid !== $activefolioid) {
        loadFolio(folioid, () => {
          goPbAt(ptk4, at);
        });
      } else {
        goPbAt(ptk4, at);
      }
    };
    const getCk = (pb2, loading) => {
      if (loading)
        return "";
      const ft = $foliotext;
      if (!ft || !ft.fromFolioPos)
        return "";
      const { ckid } = ft.fromFolioPos($activepb);
      return ckid;
    };
    function slider_value_binding(value) {
      folio = value;
      $$invalidate(5, folio), $$invalidate(10, $activepb);
    }
    const click_handler = (item) => goBookPb(ptk3, item.at);
    $$self.$$set = ($$props2) => {
      if ("closePopup" in $$props2)
        $$invalidate(0, closePopup = $$props2.closePopup);
    };
    $$self.$$.update = () => {
      if ($$self.$$.dirty & /*$activepb*/
      1024) {
        $:
          $$invalidate(5, folio = [parseInt($activepb), 0]);
      }
      if ($$self.$$.dirty & /*$activePtk*/
      4096) {
        $:
          $$invalidate(4, ptk3 = usePtk($activePtk));
      }
      if ($$self.$$.dirty & /*$activefolioid, $loadingfolio*/
      2050) {
        $:
          $$invalidate(2, tocitems = getTocItems($activefolioid, $loadingfolio));
      }
      if ($$self.$$.dirty & /*$activepb, $loadingfolio*/
      1026) {
        $:
          $$invalidate(3, cknow = getCk($activepb, $loadingfolio));
      }
    };
    return [
      closePopup,
      $loadingfolio,
      tocitems,
      cknow,
      ptk3,
      folio,
      $maxfolio,
      $tosim,
      setFolio,
      goBookPb,
      $activepb,
      $activefolioid,
      $activePtk,
      slider_value_binding,
      click_handler
    ];
  }
  var Toc = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance40, create_fragment45, safe_not_equal, { closePopup: 0 });
    }
  };
  var toc_default = Toc;

  // src/taptext.svelte
  function create_if_block_10(ctx) {
    let html_tag;
    let raw_value = "&nbsp;";
    let t;
    return {
      c() {
        html_tag = new HtmlTag(false);
        t = space();
        html_tag.a = t;
      },
      m(target, anchor) {
        html_tag.m(raw_value, target, anchor);
        insert(target, t, anchor);
      },
      d(detaching) {
        if (detaching)
          html_tag.d();
        if (detaching)
          detach(t);
      }
    };
  }
  function create_if_block_9(ctx) {
    let t;
    return {
      c() {
        t = text("\u9996");
      },
      m(target, anchor) {
        insert(target, t, anchor);
      },
      d(detaching) {
        if (detaching)
          detach(t);
      }
    };
  }
  function create_if_block_8(ctx) {
    let t_value = _(
      "\u9304",
      /*$tosim*/
      ctx[8]
    ) + "";
    let t;
    return {
      c() {
        t = text(t_value);
      },
      m(target, anchor) {
        insert(target, t, anchor);
      },
      p(ctx2, dirty) {
        if (dirty & /*$tosim*/
        256 && t_value !== (t_value = _(
          "\u9304",
          /*$tosim*/
          ctx2[8]
        ) + ""))
          set_data(t, t_value);
      },
      d(detaching) {
        if (detaching)
          detach(t);
      }
    };
  }
  function create_if_block_72(ctx) {
    let t;
    return {
      c() {
        t = text("\u6B21");
      },
      m(target, anchor) {
        insert(target, t, anchor);
      },
      d(detaching) {
        if (detaching)
          detach(t);
      }
    };
  }
  function create_if_block_65(ctx) {
    let t;
    return {
      c() {
        t = text("\u6587");
      },
      m(target, anchor) {
        insert(target, t, anchor);
      },
      d(detaching) {
        if (detaching)
          detach(t);
      }
    };
  }
  function create_else_block_13(ctx) {
    let t;
    let if_block_anchor;
    let if_block = (
      /*ls*/
      ctx[5] && create_if_block_55(ctx)
    );
    return {
      c() {
        t = text("\u{1F520}");
        if (if_block)
          if_block.c();
        if_block_anchor = empty();
      },
      m(target, anchor) {
        insert(target, t, anchor);
        if (if_block)
          if_block.m(target, anchor);
        insert(target, if_block_anchor, anchor);
      },
      p(ctx2, dirty) {
        if (
          /*ls*/
          ctx2[5]
        ) {
          if (if_block) {
            if_block.p(ctx2, dirty);
          } else {
            if_block = create_if_block_55(ctx2);
            if_block.c();
            if_block.m(if_block_anchor.parentNode, if_block_anchor);
          }
        } else if (if_block) {
          if_block.d(1);
          if_block = null;
        }
      },
      d(detaching) {
        if (detaching)
          detach(t);
        if (if_block)
          if_block.d(detaching);
        if (detaching)
          detach(if_block_anchor);
      }
    };
  }
  function create_if_block_35(ctx) {
    let t;
    let if_block_anchor;
    let if_block = (
      /*ls*/
      ctx[5] && create_if_block_45(ctx)
    );
    return {
      c() {
        t = text("\u{1F517}");
        if (if_block)
          if_block.c();
        if_block_anchor = empty();
      },
      m(target, anchor) {
        insert(target, t, anchor);
        if (if_block)
          if_block.m(target, anchor);
        insert(target, if_block_anchor, anchor);
      },
      p(ctx2, dirty) {
        if (
          /*ls*/
          ctx2[5]
        ) {
          if (if_block) {
            if_block.p(ctx2, dirty);
          } else {
            if_block = create_if_block_45(ctx2);
            if_block.c();
            if_block.m(if_block_anchor.parentNode, if_block_anchor);
          }
        } else if (if_block) {
          if_block.d(1);
          if_block = null;
        }
      },
      d(detaching) {
        if (detaching)
          detach(t);
        if (if_block)
          if_block.d(detaching);
        if (detaching)
          detach(if_block_anchor);
      }
    };
  }
  function create_if_block_55(ctx) {
    let t_value = _(
      "\u8A5E",
      /*$tosim*/
      ctx[8]
    ) + "";
    let t;
    return {
      c() {
        t = text(t_value);
      },
      m(target, anchor) {
        insert(target, t, anchor);
      },
      p(ctx2, dirty) {
        if (dirty & /*$tosim*/
        256 && t_value !== (t_value = _(
          "\u8A5E",
          /*$tosim*/
          ctx2[8]
        ) + ""))
          set_data(t, t_value);
      },
      d(detaching) {
        if (detaching)
          detach(t);
      }
    };
  }
  function create_if_block_45(ctx) {
    let t_value = _(
      "\u93C8",
      /*$tosim*/
      ctx[8]
    ) + "";
    let t;
    return {
      c() {
        t = text(t_value);
      },
      m(target, anchor) {
        insert(target, t, anchor);
      },
      p(ctx2, dirty) {
        if (dirty & /*$tosim*/
        256 && t_value !== (t_value = _(
          "\u93C8",
          /*$tosim*/
          ctx2[8]
        ) + ""))
          set_data(t, t_value);
      },
      d(detaching) {
        if (detaching)
          detach(t);
      }
    };
  }
  function create_if_block_113(ctx) {
    let span;
    let t;
    let mounted;
    let dispose;
    let if_block = (
      /*ls*/
      ctx[5] && create_if_block_28(ctx)
    );
    return {
      c() {
        span = element("span");
        t = text("\u{1F3B5}");
        if (if_block)
          if_block.c();
        attr(span, "aria-hidden", "true");
        attr(span, "class", "clickable");
        toggle_class(
          span,
          "selected",
          /*thetab*/
          ctx[2] == "audio"
        );
      },
      m(target, anchor) {
        insert(target, span, anchor);
        append(span, t);
        if (if_block)
          if_block.m(span, null);
        if (!mounted) {
          dispose = listen(
            span,
            "click",
            /*click_handler_5*/
            ctx[16]
          );
          mounted = true;
        }
      },
      p(ctx2, dirty) {
        if (
          /*ls*/
          ctx2[5]
        ) {
          if (if_block) {
            if_block.p(ctx2, dirty);
          } else {
            if_block = create_if_block_28(ctx2);
            if_block.c();
            if_block.m(span, null);
          }
        } else if (if_block) {
          if_block.d(1);
          if_block = null;
        }
        if (dirty & /*thetab*/
        4) {
          toggle_class(
            span,
            "selected",
            /*thetab*/
            ctx2[2] == "audio"
          );
        }
      },
      d(detaching) {
        if (detaching)
          detach(span);
        if (if_block)
          if_block.d();
        mounted = false;
        dispose();
      }
    };
  }
  function create_if_block_28(ctx) {
    let t_value = _(
      "\u8AA6",
      /*$tosim*/
      ctx[8]
    ) + "";
    let t;
    return {
      c() {
        t = text(t_value);
      },
      m(target, anchor) {
        insert(target, t, anchor);
      },
      p(ctx2, dirty) {
        if (dirty & /*$tosim*/
        256 && t_value !== (t_value = _(
          "\u8AA6",
          /*$tosim*/
          ctx2[8]
        ) + ""))
          set_data(t, t_value);
      },
      d(detaching) {
        if (detaching)
          detach(t);
      }
    };
  }
  function create_else_block11(ctx) {
    let div;
    let dictpopup;
    let current;
    dictpopup = new dictpopup_default({
      props: {
        entries: (
          /*entries*/
          ctx[4]
        ),
        address: (
          /*address*/
          ctx[0]
        )
      }
    });
    return {
      c() {
        div = element("div");
        create_component(dictpopup.$$.fragment);
        attr(div, "class", "tab-content");
        toggle_class(
          div,
          "visible",
          /*thetab*/
          ctx[2] == "dict"
        );
      },
      m(target, anchor) {
        insert(target, div, anchor);
        mount_component(dictpopup, div, null);
        current = true;
      },
      p(ctx2, dirty) {
        const dictpopup_changes = {};
        if (dirty & /*entries*/
        16)
          dictpopup_changes.entries = /*entries*/
          ctx2[4];
        if (dirty & /*address*/
        1)
          dictpopup_changes.address = /*address*/
          ctx2[0];
        dictpopup.$set(dictpopup_changes);
        if (!current || dirty & /*thetab*/
        4) {
          toggle_class(
            div,
            "visible",
            /*thetab*/
            ctx2[2] == "dict"
          );
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(dictpopup.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(dictpopup.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(div);
        destroy_component(dictpopup);
      }
    };
  }
  function create_if_block21(ctx) {
    let div;
    let sharing_1;
    let current;
    sharing_1 = new sharing_default({});
    return {
      c() {
        div = element("div");
        create_component(sharing_1.$$.fragment);
        attr(div, "class", "tab-content");
        toggle_class(
          div,
          "visible",
          /*thetab*/
          ctx[2] == "dict"
        );
      },
      m(target, anchor) {
        insert(target, div, anchor);
        mount_component(sharing_1, div, null);
        current = true;
      },
      p(ctx2, dirty) {
        if (!current || dirty & /*thetab*/
        4) {
          toggle_class(
            div,
            "visible",
            /*thetab*/
            ctx2[2] == "dict"
          );
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(sharing_1.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(sharing_1.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(div);
        destroy_component(sharing_1);
      }
    };
  }
  function create_key_block9(ctx) {
    let div6;
    let div0;
    let span0;
    let t0;
    let t1;
    let span1;
    let t2;
    let t3;
    let span2;
    let t4;
    let t5;
    let span3;
    let t6;
    let t7;
    let span4;
    let t8;
    let t9;
    let div1;
    let foliolist;
    let updating_thetab;
    let t10;
    let div2;
    let toc;
    let t11;
    let div3;
    let textual;
    let t12;
    let current_block_type_index;
    let if_block7;
    let t13;
    let div4;
    let audio;
    let t14;
    let div5;
    let about;
    let div6_style_value;
    let current;
    let mounted;
    let dispose;
    let if_block0 = !/*ls*/
    ctx[5] && create_if_block_10(ctx);
    let if_block1 = (
      /*ls*/
      ctx[5] && create_if_block_9(ctx)
    );
    let if_block2 = (
      /*ls*/
      ctx[5] && create_if_block_8(ctx)
    );
    let if_block3 = (
      /*ls*/
      ctx[5] && create_if_block_72(ctx)
    );
    let if_block4 = (
      /*ls*/
      ctx[5] && create_if_block_65(ctx)
    );
    function select_block_type(ctx2, dirty) {
      if (
        /*$sharing*/
        ctx2[3]
      )
        return create_if_block_35;
      return create_else_block_13;
    }
    let current_block_type = select_block_type(ctx, -1);
    let if_block5 = current_block_type(ctx);
    let if_block6 = (
      /*$mediaurls*/
      ctx[9].length > 1 && create_if_block_113(ctx)
    );
    function foliolist_thetab_binding(value) {
      ctx[17](value);
    }
    let foliolist_props = { closePopup: (
      /*closePopup*/
      ctx[1]
    ) };
    if (
      /*thetab*/
      ctx[2] !== void 0
    ) {
      foliolist_props.thetab = /*thetab*/
      ctx[2];
    }
    foliolist = new foliolist_default({ props: foliolist_props });
    binding_callbacks.push(() => bind(foliolist, "thetab", foliolist_thetab_binding));
    toc = new toc_default({
      props: { closePopup: (
        /*closePopup*/
        ctx[1]
      ) }
    });
    textual = new textual_default({
      props: { closePopup: (
        /*closePopup*/
        ctx[1]
      ) }
    });
    const if_block_creators = [create_if_block21, create_else_block11];
    const if_blocks = [];
    function select_block_type_1(ctx2, dirty) {
      if (
        /*$sharing*/
        ctx2[3]
      )
        return 0;
      return 1;
    }
    current_block_type_index = select_block_type_1(ctx, -1);
    if_block7 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    audio = new audio_default({});
    about = new about_default({});
    return {
      c() {
        div6 = element("div");
        div0 = element("div");
        span0 = element("span");
        if (if_block0)
          if_block0.c();
        t0 = text("\u2699\uFE0F");
        if (if_block1)
          if_block1.c();
        t1 = space();
        span1 = element("span");
        t2 = text("\u{1F4DA}");
        if (if_block2)
          if_block2.c();
        t3 = space();
        span2 = element("span");
        t4 = text("\u{1F9ED}");
        if (if_block3)
          if_block3.c();
        t5 = space();
        span3 = element("span");
        t6 = text("\u{1F4DC}");
        if (if_block4)
          if_block4.c();
        t7 = space();
        span4 = element("span");
        if_block5.c();
        t8 = space();
        if (if_block6)
          if_block6.c();
        t9 = space();
        div1 = element("div");
        create_component(foliolist.$$.fragment);
        t10 = space();
        div2 = element("div");
        create_component(toc.$$.fragment);
        t11 = space();
        div3 = element("div");
        create_component(textual.$$.fragment);
        t12 = space();
        if_block7.c();
        t13 = space();
        div4 = element("div");
        create_component(audio.$$.fragment);
        t14 = space();
        div5 = element("div");
        create_component(about.$$.fragment);
        attr(span0, "aria-hidden", "true");
        attr(span0, "class", "clickable");
        toggle_class(
          span0,
          "needupdate",
          /*$hasupdate*/
          ctx[7]
        );
        toggle_class(
          span0,
          "selected",
          /*thetab*/
          ctx[2] == "about"
        );
        attr(span1, "aria-hidden", "true");
        attr(span1, "class", "clickable");
        toggle_class(
          span1,
          "selected",
          /*thetab*/
          ctx[2] == "list"
        );
        attr(span2, "aria-hidden", "true");
        attr(span2, "class", "clickable");
        toggle_class(
          span2,
          "selected",
          /*thetab*/
          ctx[2] == "toc"
        );
        attr(span3, "aria-hidden", "true");
        attr(span3, "class", "clickable");
        toggle_class(
          span3,
          "selected",
          /*thetab*/
          ctx[2] == "textual"
        );
        attr(span4, "aria-hidden", "true");
        attr(span4, "class", "clickable");
        toggle_class(
          span4,
          "selected",
          /*thetab*/
          ctx[2] == "dict"
        );
        attr(div0, "class", "tabs");
        attr(div1, "class", "tab-content");
        toggle_class(
          div1,
          "visible",
          /*thetab*/
          ctx[2] == "list"
        );
        attr(div2, "class", "tab-content");
        toggle_class(
          div2,
          "visible",
          /*thetab*/
          ctx[2] == "toc"
        );
        attr(div3, "class", "tab-content");
        toggle_class(
          div3,
          "visible",
          /*thetab*/
          ctx[2] == "textual"
        );
        attr(div4, "class", "tab-content");
        toggle_class(
          div4,
          "visible",
          /*thetab*/
          ctx[2] == "audio"
        );
        attr(div5, "class", "tab-content");
        toggle_class(
          div5,
          "visible",
          /*thetab*/
          ctx[2] == "about"
        );
        attr(div6, "class", "popup");
        attr(div6, "style", div6_style_value = /*ls*/
        ctx[5] ? sideWidth(
          /*ls*/
          ctx[5]
        ) : "");
      },
      m(target, anchor) {
        insert(target, div6, anchor);
        append(div6, div0);
        append(div0, span0);
        if (if_block0)
          if_block0.m(span0, null);
        append(span0, t0);
        if (if_block1)
          if_block1.m(span0, null);
        append(div0, t1);
        append(div0, span1);
        append(span1, t2);
        if (if_block2)
          if_block2.m(span1, null);
        append(div0, t3);
        append(div0, span2);
        append(span2, t4);
        if (if_block3)
          if_block3.m(span2, null);
        append(div0, t5);
        append(div0, span3);
        append(span3, t6);
        if (if_block4)
          if_block4.m(span3, null);
        append(div0, t7);
        append(div0, span4);
        if_block5.m(span4, null);
        append(div0, t8);
        if (if_block6)
          if_block6.m(div0, null);
        append(div6, t9);
        append(div6, div1);
        mount_component(foliolist, div1, null);
        append(div6, t10);
        append(div6, div2);
        mount_component(toc, div2, null);
        append(div6, t11);
        append(div6, div3);
        mount_component(textual, div3, null);
        append(div6, t12);
        if_blocks[current_block_type_index].m(div6, null);
        append(div6, t13);
        append(div6, div4);
        mount_component(audio, div4, null);
        append(div6, t14);
        append(div6, div5);
        mount_component(about, div5, null);
        current = true;
        if (!mounted) {
          dispose = [
            listen(
              span0,
              "click",
              /*click_handler*/
              ctx[11]
            ),
            listen(
              span1,
              "click",
              /*click_handler_1*/
              ctx[12]
            ),
            listen(
              span2,
              "click",
              /*click_handler_2*/
              ctx[13]
            ),
            listen(
              span3,
              "click",
              /*click_handler_3*/
              ctx[14]
            ),
            listen(
              span4,
              "click",
              /*click_handler_4*/
              ctx[15]
            )
          ];
          mounted = true;
        }
      },
      p(ctx2, dirty) {
        if (!/*ls*/
        ctx2[5]) {
          if (if_block0) {
          } else {
            if_block0 = create_if_block_10(ctx2);
            if_block0.c();
            if_block0.m(span0, t0);
          }
        } else if (if_block0) {
          if_block0.d(1);
          if_block0 = null;
        }
        if (
          /*ls*/
          ctx2[5]
        ) {
          if (if_block1) {
          } else {
            if_block1 = create_if_block_9(ctx2);
            if_block1.c();
            if_block1.m(span0, null);
          }
        } else if (if_block1) {
          if_block1.d(1);
          if_block1 = null;
        }
        if (!current || dirty & /*$hasupdate*/
        128) {
          toggle_class(
            span0,
            "needupdate",
            /*$hasupdate*/
            ctx2[7]
          );
        }
        if (!current || dirty & /*thetab*/
        4) {
          toggle_class(
            span0,
            "selected",
            /*thetab*/
            ctx2[2] == "about"
          );
        }
        if (
          /*ls*/
          ctx2[5]
        ) {
          if (if_block2) {
            if_block2.p(ctx2, dirty);
          } else {
            if_block2 = create_if_block_8(ctx2);
            if_block2.c();
            if_block2.m(span1, null);
          }
        } else if (if_block2) {
          if_block2.d(1);
          if_block2 = null;
        }
        if (!current || dirty & /*thetab*/
        4) {
          toggle_class(
            span1,
            "selected",
            /*thetab*/
            ctx2[2] == "list"
          );
        }
        if (
          /*ls*/
          ctx2[5]
        ) {
          if (if_block3) {
          } else {
            if_block3 = create_if_block_72(ctx2);
            if_block3.c();
            if_block3.m(span2, null);
          }
        } else if (if_block3) {
          if_block3.d(1);
          if_block3 = null;
        }
        if (!current || dirty & /*thetab*/
        4) {
          toggle_class(
            span2,
            "selected",
            /*thetab*/
            ctx2[2] == "toc"
          );
        }
        if (
          /*ls*/
          ctx2[5]
        ) {
          if (if_block4) {
          } else {
            if_block4 = create_if_block_65(ctx2);
            if_block4.c();
            if_block4.m(span3, null);
          }
        } else if (if_block4) {
          if_block4.d(1);
          if_block4 = null;
        }
        if (!current || dirty & /*thetab*/
        4) {
          toggle_class(
            span3,
            "selected",
            /*thetab*/
            ctx2[2] == "textual"
          );
        }
        if (current_block_type === (current_block_type = select_block_type(ctx2, dirty)) && if_block5) {
          if_block5.p(ctx2, dirty);
        } else {
          if_block5.d(1);
          if_block5 = current_block_type(ctx2);
          if (if_block5) {
            if_block5.c();
            if_block5.m(span4, null);
          }
        }
        if (!current || dirty & /*thetab*/
        4) {
          toggle_class(
            span4,
            "selected",
            /*thetab*/
            ctx2[2] == "dict"
          );
        }
        if (
          /*$mediaurls*/
          ctx2[9].length > 1
        ) {
          if (if_block6) {
            if_block6.p(ctx2, dirty);
          } else {
            if_block6 = create_if_block_113(ctx2);
            if_block6.c();
            if_block6.m(div0, null);
          }
        } else if (if_block6) {
          if_block6.d(1);
          if_block6 = null;
        }
        const foliolist_changes = {};
        if (dirty & /*closePopup*/
        2)
          foliolist_changes.closePopup = /*closePopup*/
          ctx2[1];
        if (!updating_thetab && dirty & /*thetab*/
        4) {
          updating_thetab = true;
          foliolist_changes.thetab = /*thetab*/
          ctx2[2];
          add_flush_callback(() => updating_thetab = false);
        }
        foliolist.$set(foliolist_changes);
        if (!current || dirty & /*thetab*/
        4) {
          toggle_class(
            div1,
            "visible",
            /*thetab*/
            ctx2[2] == "list"
          );
        }
        const toc_changes = {};
        if (dirty & /*closePopup*/
        2)
          toc_changes.closePopup = /*closePopup*/
          ctx2[1];
        toc.$set(toc_changes);
        if (!current || dirty & /*thetab*/
        4) {
          toggle_class(
            div2,
            "visible",
            /*thetab*/
            ctx2[2] == "toc"
          );
        }
        const textual_changes = {};
        if (dirty & /*closePopup*/
        2)
          textual_changes.closePopup = /*closePopup*/
          ctx2[1];
        textual.$set(textual_changes);
        if (!current || dirty & /*thetab*/
        4) {
          toggle_class(
            div3,
            "visible",
            /*thetab*/
            ctx2[2] == "textual"
          );
        }
        let previous_block_index = current_block_type_index;
        current_block_type_index = select_block_type_1(ctx2, dirty);
        if (current_block_type_index === previous_block_index) {
          if_blocks[current_block_type_index].p(ctx2, dirty);
        } else {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, () => {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
          if_block7 = if_blocks[current_block_type_index];
          if (!if_block7) {
            if_block7 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
            if_block7.c();
          } else {
            if_block7.p(ctx2, dirty);
          }
          transition_in(if_block7, 1);
          if_block7.m(div6, t13);
        }
        if (!current || dirty & /*thetab*/
        4) {
          toggle_class(
            div4,
            "visible",
            /*thetab*/
            ctx2[2] == "audio"
          );
        }
        if (!current || dirty & /*thetab*/
        4) {
          toggle_class(
            div5,
            "visible",
            /*thetab*/
            ctx2[2] == "about"
          );
        }
        if (!current || dirty & /*ls*/
        32 && div6_style_value !== (div6_style_value = /*ls*/
        ctx2[5] ? sideWidth(
          /*ls*/
          ctx2[5]
        ) : "")) {
          attr(div6, "style", div6_style_value);
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(foliolist.$$.fragment, local);
        transition_in(toc.$$.fragment, local);
        transition_in(textual.$$.fragment, local);
        transition_in(if_block7);
        transition_in(audio.$$.fragment, local);
        transition_in(about.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(foliolist.$$.fragment, local);
        transition_out(toc.$$.fragment, local);
        transition_out(textual.$$.fragment, local);
        transition_out(if_block7);
        transition_out(audio.$$.fragment, local);
        transition_out(about.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(div6);
        if (if_block0)
          if_block0.d();
        if (if_block1)
          if_block1.d();
        if (if_block2)
          if_block2.d();
        if (if_block3)
          if_block3.d();
        if (if_block4)
          if_block4.d();
        if_block5.d();
        if (if_block6)
          if_block6.d();
        destroy_component(foliolist);
        destroy_component(toc);
        destroy_component(textual);
        if_blocks[current_block_type_index].d();
        destroy_component(audio);
        destroy_component(about);
        mounted = false;
        run_all(dispose);
      }
    };
  }
  function create_fragment46(ctx) {
    let previous_key = (
      /*$landscape*/
      ctx[6]
    );
    let key_block_anchor;
    let current;
    let key_block = create_key_block9(ctx);
    return {
      c() {
        key_block.c();
        key_block_anchor = empty();
      },
      m(target, anchor) {
        key_block.m(target, anchor);
        insert(target, key_block_anchor, anchor);
        current = true;
      },
      p(ctx2, [dirty]) {
        if (dirty & /*$landscape*/
        64 && safe_not_equal(previous_key, previous_key = /*$landscape*/
        ctx2[6])) {
          group_outros();
          transition_out(key_block, 1, 1, noop);
          check_outros();
          key_block = create_key_block9(ctx2);
          key_block.c();
          transition_in(key_block, 1);
          key_block.m(key_block_anchor.parentNode, key_block_anchor);
        } else {
          key_block.p(ctx2, dirty);
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(key_block);
        current = true;
      },
      o(local) {
        transition_out(key_block);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(key_block_anchor);
        key_block.d(detaching);
      }
    };
  }
  function instance41($$self, $$props, $$invalidate) {
    let ls;
    let $sharing;
    let $activePtk;
    let $landscape;
    let $hasupdate;
    let $tosim;
    let $mediaurls;
    component_subscribe($$self, sharing, ($$value) => $$invalidate(3, $sharing = $$value));
    component_subscribe($$self, activePtk, ($$value) => $$invalidate(18, $activePtk = $$value));
    component_subscribe($$self, landscape, ($$value) => $$invalidate(6, $landscape = $$value));
    component_subscribe($$self, hasupdate, ($$value) => $$invalidate(7, $hasupdate = $$value));
    component_subscribe($$self, tosim, ($$value) => $$invalidate(8, $tosim = $$value));
    component_subscribe($$self, mediaurls, ($$value) => $$invalidate(9, $mediaurls = $$value));
    let { tofind: tofind2 = "" } = $$props;
    let { address = "" } = $$props;
    let { closePopup } = $$props;
    let thetab = get_store_value(landscape) || !tofind2 ? "textual" : "dict";
    let entries = [];
    const onDict = (t) => {
      const tap_at = t.indexOf(CURSORMARK);
      const ptk3 = usePtk($activePtk);
      $$invalidate(4, entries = ptk3.columns.entries.keys.findMatches(t.replace(CURSORMARK, "")).map((it) => [Math.abs(it[0] - tap_at - 1), it[1], it[2]]));
      entries.sort((a, b) => a[0] - b[0]);
      showdict = true;
    };
    const setSearchable = (t) => {
      const tap_at = t.indexOf(CURSORMARK);
      searchable.set(t.slice(tap_at + 1));
    };
    const click_handler = () => $$invalidate(2, thetab = "about");
    const click_handler_1 = () => $$invalidate(2, thetab = "list");
    const click_handler_2 = () => $$invalidate(2, thetab = "toc");
    const click_handler_3 = () => $$invalidate(2, thetab = "textual");
    const click_handler_4 = () => $$invalidate(2, thetab = "dict");
    const click_handler_5 = () => $$invalidate(2, thetab = "audio");
    function foliolist_thetab_binding(value) {
      thetab = value;
      $$invalidate(2, thetab), $$invalidate(3, $sharing);
    }
    $$self.$$set = ($$props2) => {
      if ("tofind" in $$props2)
        $$invalidate(10, tofind2 = $$props2.tofind);
      if ("address" in $$props2)
        $$invalidate(0, address = $$props2.address);
      if ("closePopup" in $$props2)
        $$invalidate(1, closePopup = $$props2.closePopup);
    };
    $$self.$$.update = () => {
      if ($$self.$$.dirty & /*tofind*/
      1024) {
        $:
          setSearchable(tofind2);
      }
      if ($$self.$$.dirty & /*$sharing*/
      8) {
        $:
          if ($sharing)
            $$invalidate(2, thetab = "dict");
      }
      if ($$self.$$.dirty & /*thetab, tofind*/
      1028) {
        $:
          thetab == "dict" && onDict(tofind2);
      }
    };
    $:
      $$invalidate(5, ls = get_store_value(landscape));
    return [
      address,
      closePopup,
      thetab,
      $sharing,
      entries,
      ls,
      $landscape,
      $hasupdate,
      $tosim,
      $mediaurls,
      tofind2,
      click_handler,
      click_handler_1,
      click_handler_2,
      click_handler_3,
      click_handler_4,
      click_handler_5,
      foliolist_thetab_binding
    ];
  }
  var Taptext = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance41, create_fragment46, safe_not_equal, { tofind: 10, address: 0, closePopup: 1 });
    }
  };
  var taptext_default = Taptext;

  // src/player.svelte
  function create_if_block22(ctx) {
    let source;
    let source_src_value;
    return {
      c() {
        source = element("source");
        if (!src_url_equal(source.src, source_src_value = audiofolder + /*$audioid*/
        ctx[1].replace(/\^\d+$/, "") + ".mp3"))
          attr(source, "src", source_src_value);
      },
      m(target, anchor) {
        insert(target, source, anchor);
      },
      p(ctx2, dirty) {
        if (dirty & /*$audioid*/
        2 && !src_url_equal(source.src, source_src_value = audiofolder + /*$audioid*/
        ctx2[1].replace(/\^\d+$/, "") + ".mp3")) {
          attr(source, "src", source_src_value);
        }
      },
      d(detaching) {
        if (detaching)
          detach(source);
      }
    };
  }
  function create_key_block10(ctx) {
    let audio;
    let if_block = (
      /*$audioid*/
      ctx[1] && create_if_block22(ctx)
    );
    return {
      c() {
        audio = element("audio");
        if (if_block)
          if_block.c();
      },
      m(target, anchor) {
        insert(target, audio, anchor);
        if (if_block)
          if_block.m(audio, null);
        ctx[3](audio);
      },
      p(ctx2, dirty) {
        if (
          /*$audioid*/
          ctx2[1]
        ) {
          if (if_block) {
            if_block.p(ctx2, dirty);
          } else {
            if_block = create_if_block22(ctx2);
            if_block.c();
            if_block.m(audio, null);
          }
        } else if (if_block) {
          if_block.d(1);
          if_block = null;
        }
      },
      d(detaching) {
        if (detaching)
          detach(audio);
        if (if_block)
          if_block.d();
        ctx[3](null);
      }
    };
  }
  function create_fragment47(ctx) {
    let previous_key = (
      /*$audioid*/
      ctx[1]
    );
    let key_block_anchor;
    let key_block = create_key_block10(ctx);
    return {
      c() {
        key_block.c();
        key_block_anchor = empty();
      },
      m(target, anchor) {
        key_block.m(target, anchor);
        insert(target, key_block_anchor, anchor);
      },
      p(ctx2, [dirty]) {
        if (dirty & /*$audioid*/
        2 && safe_not_equal(previous_key, previous_key = /*$audioid*/
        ctx2[1])) {
          key_block.d(1);
          key_block = create_key_block10(ctx2);
          key_block.c();
          key_block.m(key_block_anchor.parentNode, key_block_anchor);
        } else {
          key_block.p(ctx2, dirty);
        }
      },
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching)
          detach(key_block_anchor);
        key_block.d(detaching);
      }
    };
  }
  function instance42($$self, $$props, $$invalidate) {
    let $audioid;
    let $activepb;
    let $activefolioid;
    let $playing;
    let $continueplay;
    component_subscribe($$self, audioid, ($$value) => $$invalidate(1, $audioid = $$value));
    component_subscribe($$self, activepb, ($$value) => $$invalidate(2, $activepb = $$value));
    component_subscribe($$self, activefolioid, ($$value) => $$invalidate(5, $activefolioid = $$value));
    component_subscribe($$self, playing, ($$value) => $$invalidate(6, $playing = $$value));
    component_subscribe($$self, continueplay, ($$value) => $$invalidate(7, $continueplay = $$value));
    let audioplayer;
    const seekToPb = (pbid, audioid2) => {
      if (!audioid2 || $continueplay || !$playing)
        return;
      const { timestamp, bookid } = findByAudioId(audioid2);
      if (bookid !== $activefolioid) {
        stopAudio();
      }
      if (!timestamp)
        return;
      const line = (parseInt(pbid) - 1) * folioLines();
      const t = timestamp[line];
      setTimeout(
        () => {
          if (player)
            player.currentTime = t / 100;
        },
        100
      );
    };
    function audio_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](() => {
        audioplayer = $$value;
        $$invalidate(0, audioplayer);
      });
    }
    $$self.$$.update = () => {
      if ($$self.$$.dirty & /*audioplayer*/
      1) {
        $:
          setplayer(audioplayer);
      }
      if ($$self.$$.dirty & /*$activepb, $audioid*/
      6) {
        $:
          seekToPb($activepb, $audioid);
      }
    };
    return [audioplayer, $audioid, $activepb, audio_binding];
  }
  var Player = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance42, create_fragment47, safe_not_equal, {});
    }
  };
  var player_default = Player;

  // src/newbie.svelte
  function create_key_block11(ctx) {
    let span;
    let t3;
    let br0;
    let t4_value = _("\u50C5\u4F9B\u975E\u4F5B\u5B78\u5C08\u696D\u4EBA\u58EB\u4F7F\u7528") + "";
    let t4;
    let t5;
    let br1;
    let t6_value = _("\u6F22\u5B57\u986F\u793A") + "";
    let t6;
    let t7;
    let statebtn;
    let t8;
    let br2;
    let t9_value = _("\u5168\u5C4F\u6A21\u5F0F\u5B89\u88DD\u6B65\u9A5F") + "";
    let t9;
    let t10;
    let br3;
    let t11_value = _("\u5B89\u5353\uFF1A\u53F3\u4E0A\u89D2\u22EE \u2192\u5B89\u88DD\u61C9\u7528\u7A0B\u5F0F") + "";
    let t11;
    let t12;
    let br4;
    let t13_value = _("iOS\uFF1A\u5206\u4EAB\u2192\u52A0\u5230\u4E3B\u756B\u9762") + "";
    let t13;
    let t14;
    let hr;
    let t15;
    let t16_value = _("\u672C\u8EDF\u4EF6\u4E0D\u6703\u4E3B\u52D5\u6536\u96C6\u500B\u4EBA\u8CC7\u8A0A") + "";
    let t16;
    let t17;
    let br5;
    let t18_value = _("\u540C\u610F\u63A5\u53D7\u4F7F\u7528\u672C\u8EDF\u4EF6\u7522\u751F\u7684\u4EFB\u4F55\u7D50\u679C") + "";
    let t18;
    let t19;
    let br6;
    let button;
    let t21;
    let switch_1;
    let updating_value;
    let current;
    let mounted;
    let dispose;
    statebtn = new statebutton_default({
      props: {
        states: { 0: "\u539F\u8C8C", 1: _("\u7B80\u9AD4\uFF08\u300C\u4E7E\u5F8C\u767C\u300D\u7B49\u4E0D\u8B8A\uFF09"), 2: "\u7B80\u4F53" },
        storeid: tosim
      }
    });
    function switch_1_value_binding(value) {
      ctx[3](value);
    }
    let switch_1_props = {
      label: _("\u555F\u7528\u6642\u518D\u5EA6\u986F\u793A\u6B64\u756B\u9762"),
      design: "slider",
      fontSize: "24"
    };
    if (
      /*value*/
      ctx[1] !== void 0
    ) {
      switch_1_props.value = /*value*/
      ctx[1];
    }
    switch_1 = new switch_default({ props: switch_1_props });
    binding_callbacks.push(() => bind(switch_1, "value", switch_1_value_binding));
    return {
      c() {
        span = element("span");
        span.textContent = `${_("\u6C38\u6A02\u85CF")}  ${APPVER}`;
        t3 = space();
        br0 = element("br");
        t4 = text(t4_value);
        t5 = space();
        br1 = element("br");
        t6 = text(t6_value);
        t7 = text("\uFF1A");
        create_component(statebtn.$$.fragment);
        t8 = space();
        br2 = element("br");
        t9 = text(t9_value);
        t10 = space();
        br3 = element("br");
        t11 = text(t11_value);
        t12 = space();
        br4 = element("br");
        t13 = text(t13_value);
        t14 = space();
        hr = element("hr");
        t15 = space();
        t16 = text(t16_value);
        t17 = space();
        br5 = element("br");
        t18 = text(t18_value);
        t19 = space();
        br6 = element("br");
        button = element("button");
        button.textContent = "\u540C\u610F";
        t21 = space();
        create_component(switch_1.$$.fragment);
        attr(span, "class", "welcome");
        set_style(button, "font-size", "150%");
        set_style(button, "width", "100%");
      },
      m(target, anchor) {
        insert(target, span, anchor);
        insert(target, t3, anchor);
        insert(target, br0, anchor);
        insert(target, t4, anchor);
        insert(target, t5, anchor);
        insert(target, br1, anchor);
        insert(target, t6, anchor);
        insert(target, t7, anchor);
        mount_component(statebtn, target, anchor);
        insert(target, t8, anchor);
        insert(target, br2, anchor);
        insert(target, t9, anchor);
        insert(target, t10, anchor);
        insert(target, br3, anchor);
        insert(target, t11, anchor);
        insert(target, t12, anchor);
        insert(target, br4, anchor);
        insert(target, t13, anchor);
        insert(target, t14, anchor);
        insert(target, hr, anchor);
        insert(target, t15, anchor);
        insert(target, t16, anchor);
        insert(target, t17, anchor);
        insert(target, br5, anchor);
        insert(target, t18, anchor);
        insert(target, t19, anchor);
        insert(target, br6, anchor);
        insert(target, button, anchor);
        insert(target, t21, anchor);
        mount_component(switch_1, target, anchor);
        current = true;
        if (!mounted) {
          dispose = listen(button, "click", function() {
            if (is_function(
              /*closePopup*/
              ctx[0]
            ))
              ctx[0].apply(this, arguments);
          });
          mounted = true;
        }
      },
      p(new_ctx, dirty) {
        ctx = new_ctx;
        const switch_1_changes = {};
        if (!updating_value && dirty & /*value*/
        2) {
          updating_value = true;
          switch_1_changes.value = /*value*/
          ctx[1];
          add_flush_callback(() => updating_value = false);
        }
        switch_1.$set(switch_1_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(statebtn.$$.fragment, local);
        transition_in(switch_1.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(statebtn.$$.fragment, local);
        transition_out(switch_1.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(span);
        if (detaching)
          detach(t3);
        if (detaching)
          detach(br0);
        if (detaching)
          detach(t4);
        if (detaching)
          detach(t5);
        if (detaching)
          detach(br1);
        if (detaching)
          detach(t6);
        if (detaching)
          detach(t7);
        destroy_component(statebtn, detaching);
        if (detaching)
          detach(t8);
        if (detaching)
          detach(br2);
        if (detaching)
          detach(t9);
        if (detaching)
          detach(t10);
        if (detaching)
          detach(br3);
        if (detaching)
          detach(t11);
        if (detaching)
          detach(t12);
        if (detaching)
          detach(br4);
        if (detaching)
          detach(t13);
        if (detaching)
          detach(t14);
        if (detaching)
          detach(hr);
        if (detaching)
          detach(t15);
        if (detaching)
          detach(t16);
        if (detaching)
          detach(t17);
        if (detaching)
          detach(br5);
        if (detaching)
          detach(t18);
        if (detaching)
          detach(t19);
        if (detaching)
          detach(br6);
        if (detaching)
          detach(button);
        if (detaching)
          detach(t21);
        destroy_component(switch_1, detaching);
        mounted = false;
        dispose();
      }
    };
  }
  function create_fragment48(ctx) {
    let div1;
    let div0;
    let previous_key = (
      /*$tosim*/
      ctx[2]
    );
    let current;
    let key_block = create_key_block11(ctx);
    return {
      c() {
        div1 = element("div");
        div0 = element("div");
        key_block.c();
        attr(div0, "class", "bodytext");
        attr(div1, "class", "popup");
      },
      m(target, anchor) {
        insert(target, div1, anchor);
        append(div1, div0);
        key_block.m(div0, null);
        current = true;
      },
      p(ctx2, [dirty]) {
        if (dirty & /*$tosim*/
        4 && safe_not_equal(previous_key, previous_key = /*$tosim*/
        ctx2[2])) {
          group_outros();
          transition_out(key_block, 1, 1, noop);
          check_outros();
          key_block = create_key_block11(ctx2);
          key_block.c();
          transition_in(key_block, 1);
          key_block.m(div0, null);
        } else {
          key_block.p(ctx2, dirty);
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(key_block);
        current = true;
      },
      o(local) {
        transition_out(key_block);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(div1);
        key_block.d(detaching);
      }
    };
  }
  function instance43($$self, $$props, $$invalidate) {
    let $newbie;
    let $tosim;
    component_subscribe($$self, newbie, ($$value) => $$invalidate(4, $newbie = $$value));
    component_subscribe($$self, tosim, ($$value) => $$invalidate(2, $tosim = $$value));
    let value = $newbie;
    let { closePopup } = $$props;
    onDestroy(() => {
      newbie.set(value);
    });
    function switch_1_value_binding(value$1) {
      value = value$1;
      $$invalidate(1, value);
    }
    $$self.$$set = ($$props2) => {
      if ("closePopup" in $$props2)
        $$invalidate(0, closePopup = $$props2.closePopup);
    };
    return [closePopup, value, $tosim, switch_1_value_binding];
  }
  var Newbie = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance43, create_fragment48, safe_not_equal, { closePopup: 0 });
    }
  };
  var newbie_default = Newbie;

  // src/paiji.svelte
  function create_if_block_114(ctx) {
    let div3;
    let img;
    let img_src_value;
    let t0;
    let div0;
    let t1;
    let div0_style_value;
    let t2;
    let div2;
    let div3_style_value;
    return {
      c() {
        div3 = element("div");
        img = element("img");
        t0 = space();
        div0 = element("div");
        t1 = text(
          /*text*/
          ctx[1]
        );
        t2 = space();
        div2 = element("div");
        div2.innerHTML = `<div class="paijitext"><br/>\u3000\u8AF8\u4F9B\u990A\u4E2D\u3000\u6CD5\u4F9B\u990A\u6700
<br/>\u9858\u4EE5\u6B64\u529F\u5FB7\u3000\u666E\u53CA\u65BC\u4E00\u5207
<br/>\u6211\u7B49\u8207\u773E\u751F\u3000\u7686\u5171\u6210\u4F5B\u9053</div>`;
        attr(img, "alt", "frame");
        if (!src_url_equal(img.src, img_src_value = "frames/red.jpg"))
          attr(img, "src", img_src_value);
        attr(img, "class", "svelte-1p857lj");
        attr(div0, "class", "sponsor");
        attr(div0, "style", div0_style_value = "padding-left:" + /*forceshow*/
        (ctx[0] ? folioHolderWidth(
          /*$landscape*/
          ctx[3],
          0.45
        ) : "45vw"));
        attr(div2, "class", "paijitextcontainer");
        attr(div3, "class", "paiji");
        attr(div3, "style", div3_style_value = "width:" + /*forceshow*/
        (ctx[0] ? folioHolderWidth() : ""));
      },
      m(target, anchor) {
        insert(target, div3, anchor);
        append(div3, img);
        append(div3, t0);
        append(div3, div0);
        append(div0, t1);
        append(div3, t2);
        append(div3, div2);
      },
      p(ctx2, dirty) {
        if (dirty & /*text*/
        2)
          set_data(
            t1,
            /*text*/
            ctx2[1]
          );
        if (dirty & /*forceshow, $landscape*/
        9 && div0_style_value !== (div0_style_value = "padding-left:" + /*forceshow*/
        (ctx2[0] ? folioHolderWidth(
          /*$landscape*/
          ctx2[3],
          0.45
        ) : "45vw"))) {
          attr(div0, "style", div0_style_value);
        }
        if (dirty & /*forceshow*/
        1 && div3_style_value !== (div3_style_value = "width:" + /*forceshow*/
        (ctx2[0] ? folioHolderWidth() : ""))) {
          attr(div3, "style", div3_style_value);
        }
      },
      d(detaching) {
        if (detaching)
          detach(div3);
      }
    };
  }
  function create_if_block23(ctx) {
    let div3;
    let div0;
    let t0;
    let t1;
    let div1;
    let t3;
    let div2;
    let div3_style_value;
    return {
      c() {
        div3 = element("div");
        div0 = element("div");
        t0 = text(
          /*text*/
          ctx[1]
        );
        t1 = space();
        div1 = element("div");
        div1.textContent = "\u6211\u7B49\u8207\u773E\u751F\u7686\u5171\u6210\u4F5B\u9053";
        t3 = space();
        div2 = element("div");
        div2.textContent = "\u9858\u4EE5\u6B64\u529F\u5FB7\u666E\u53CA\u65BC\u4E00\u5207";
        attr(div0, "class", "sidesponsor");
        attr(div1, "class", "sidesponsortext");
        attr(div2, "class", "sidesponsortext2");
        attr(div3, "class", "sidepaiji");
        attr(div3, "style", div3_style_value = sideWidth());
      },
      m(target, anchor) {
        insert(target, div3, anchor);
        append(div3, div0);
        append(div0, t0);
        append(div3, t1);
        append(div3, div1);
        append(div3, t3);
        append(div3, div2);
      },
      p(ctx2, dirty) {
        if (dirty & /*text*/
        2)
          set_data(
            t0,
            /*text*/
            ctx2[1]
          );
      },
      d(detaching) {
        if (detaching)
          detach(div3);
      }
    };
  }
  function create_fragment49(ctx) {
    let show_if;
    let if_block_anchor;
    function select_block_type(ctx2, dirty) {
      if (dirty & /*forceshow*/
      1)
        show_if = null;
      if (show_if == null)
        show_if = !!(isSidePaiji() && !/*forceshow*/
        ctx2[0]);
      if (show_if)
        return create_if_block23;
      if (!/*$playing*/
      ctx2[2])
        return create_if_block_114;
    }
    let current_block_type = select_block_type(ctx, -1);
    let if_block = current_block_type && current_block_type(ctx);
    return {
      c() {
        if (if_block)
          if_block.c();
        if_block_anchor = empty();
      },
      m(target, anchor) {
        if (if_block)
          if_block.m(target, anchor);
        insert(target, if_block_anchor, anchor);
      },
      p(ctx2, [dirty]) {
        if (current_block_type === (current_block_type = select_block_type(ctx2, dirty)) && if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if (if_block)
            if_block.d(1);
          if_block = current_block_type && current_block_type(ctx2);
          if (if_block) {
            if_block.c();
            if_block.m(if_block_anchor.parentNode, if_block_anchor);
          }
        }
      },
      i: noop,
      o: noop,
      d(detaching) {
        if (if_block) {
          if_block.d(detaching);
        }
        if (detaching)
          detach(if_block_anchor);
      }
    };
  }
  function instance44($$self, $$props, $$invalidate) {
    let $playing;
    let $landscape;
    component_subscribe($$self, playing, ($$value) => $$invalidate(2, $playing = $$value));
    component_subscribe($$self, landscape, ($$value) => $$invalidate(3, $landscape = $$value));
    let now = 0;
    let { forceshow = false } = $$props;
    let text2 = paijitexts[0];
    let timer = setInterval(
      () => {
        $$invalidate(1, text2 = paijitexts[++now % paijitexts.length]);
      },
      5e3
    );
    onDestroy(() => {
      clearInterval(timer);
    });
    $$self.$$set = ($$props2) => {
      if ("forceshow" in $$props2)
        $$invalidate(0, forceshow = $$props2.forceshow);
    };
    return [forceshow, text2, $playing, $landscape];
  }
  var Paiji = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance44, create_fragment49, safe_not_equal, { forceshow: 0 });
    }
  };
  var paiji_default = Paiji;

  // src/notification.svelte
  function create_if_block24(ctx) {
    let div;
    let t;
    return {
      c() {
        div = element("div");
        t = text(
          /*msg*/
          ctx[0]
        );
        attr(div, "class", "notification");
      },
      m(target, anchor) {
        insert(target, div, anchor);
        append(div, t);
      },
      p(ctx2, dirty) {
        if (dirty & /*msg*/
        1)
          set_data(
            t,
            /*msg*/
            ctx2[0]
          );
      },
      d(detaching) {
        if (detaching)
          detach(div);
      }
    };
  }
  function create_fragment50(ctx) {
    let if_block_anchor;
    let if_block = (
      /*msg*/
      ctx[0] && create_if_block24(ctx)
    );
    return {
      c() {
        if (if_block)
          if_block.c();
        if_block_anchor = empty();
      },
      m(target, anchor) {
        if (if_block)
          if_block.m(target, anchor);
        insert(target, if_block_anchor, anchor);
      },
      p(ctx2, [dirty]) {
        if (
          /*msg*/
          ctx2[0]
        ) {
          if (if_block) {
            if_block.p(ctx2, dirty);
          } else {
            if_block = create_if_block24(ctx2);
            if_block.c();
            if_block.m(if_block_anchor.parentNode, if_block_anchor);
          }
        } else if (if_block) {
          if_block.d(1);
          if_block = null;
        }
      },
      i: noop,
      o: noop,
      d(detaching) {
        if (if_block)
          if_block.d(detaching);
        if (detaching)
          detach(if_block_anchor);
      }
    };
  }
  function instance45($$self, $$props, $$invalidate) {
    let $notificationmessage;
    component_subscribe($$self, notificationmessage, ($$value) => $$invalidate(1, $notificationmessage = $$value));
    let msg = "", timer;
    const shownotification = (_msg) => {
      $$invalidate(0, msg = _msg);
      clearTimeout(timer);
      timer = setTimeout(
        () => {
          $$invalidate(0, msg = "");
        },
        4e3
      );
    };
    $$self.$$.update = () => {
      if ($$self.$$.dirty & /*$notificationmessage*/
      2) {
        $:
          shownotification($notificationmessage);
      }
    };
    return [msg, $notificationmessage];
  }
  var Notification = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance45, create_fragment50, safe_not_equal, {});
    }
  };
  var notification_default = Notification;

  // src/inputhelper.svelte
  function get_each_context23(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[10] = list[i];
    return child_ctx;
  }
  function get_each_context_14(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[10] = list[i];
    return child_ctx;
  }
  function get_each_context_22(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[10] = list[i];
    return child_ctx;
  }
  function create_each_block_22(ctx) {
    let span;
    let t_value = (
      /*entries*/
      ctx[0].get(
        /*i*/
        ctx[10]
      ) + " "
    );
    let t;
    let mounted;
    let dispose;
    function click_handler() {
      return (
        /*click_handler*/
        ctx[6](
          /*i*/
          ctx[10]
        )
      );
    }
    return {
      c() {
        span = element("span");
        t = text(t_value);
        attr(span, "aria-hidden", "true");
        attr(span, "class", "clickable");
      },
      m(target, anchor) {
        insert(target, span, anchor);
        append(span, t);
        if (!mounted) {
          dispose = listen(span, "click", click_handler);
          mounted = true;
        }
      },
      p(new_ctx, dirty) {
        ctx = new_ctx;
        if (dirty & /*entries, starts*/
        3 && t_value !== (t_value = /*entries*/
        ctx[0].get(
          /*i*/
          ctx[10]
        ) + " "))
          set_data(t, t_value);
      },
      d(detaching) {
        if (detaching)
          detach(span);
        mounted = false;
        dispose();
      }
    };
  }
  function create_each_block_14(ctx) {
    let span;
    let t_value = (
      /*entries*/
      ctx[0].get(
        /*i*/
        ctx[10]
      ) + " "
    );
    let t;
    let mounted;
    let dispose;
    function click_handler_1() {
      return (
        /*click_handler_1*/
        ctx[7](
          /*i*/
          ctx[10]
        )
      );
    }
    return {
      c() {
        span = element("span");
        t = text(t_value);
        attr(span, "aria-hidden", "true");
        attr(span, "class", "clickable");
      },
      m(target, anchor) {
        insert(target, span, anchor);
        append(span, t);
        if (!mounted) {
          dispose = listen(span, "click", click_handler_1);
          mounted = true;
        }
      },
      p(new_ctx, dirty) {
        ctx = new_ctx;
        if (dirty & /*entries, ends*/
        9 && t_value !== (t_value = /*entries*/
        ctx[0].get(
          /*i*/
          ctx[10]
        ) + " "))
          set_data(t, t_value);
      },
      d(detaching) {
        if (detaching)
          detach(span);
        mounted = false;
        dispose();
      }
    };
  }
  function create_each_block23(ctx) {
    let span;
    let t_value = (
      /*entries*/
      ctx[0].get(
        /*i*/
        ctx[10]
      ) + " "
    );
    let t;
    let mounted;
    let dispose;
    function click_handler_2() {
      return (
        /*click_handler_2*/
        ctx[8](
          /*i*/
          ctx[10]
        )
      );
    }
    return {
      c() {
        span = element("span");
        t = text(t_value);
        attr(span, "aria-hidden", "true");
        attr(span, "class", "clickable");
      },
      m(target, anchor) {
        insert(target, span, anchor);
        append(span, t);
        if (!mounted) {
          dispose = listen(span, "click", click_handler_2);
          mounted = true;
        }
      },
      p(new_ctx, dirty) {
        ctx = new_ctx;
        if (dirty & /*entries, middles*/
        5 && t_value !== (t_value = /*entries*/
        ctx[0].get(
          /*i*/
          ctx[10]
        ) + " "))
          set_data(t, t_value);
      },
      d(detaching) {
        if (detaching)
          detach(span);
        mounted = false;
        dispose();
      }
    };
  }
  function create_fragment51(ctx) {
    let div0;
    let t0;
    let hr0;
    let t1;
    let div1;
    let t2;
    let hr1;
    let t3;
    let div2;
    let each_value_2 = (
      /*starts*/
      ctx[1]
    );
    let each_blocks_2 = [];
    for (let i = 0; i < each_value_2.length; i += 1) {
      each_blocks_2[i] = create_each_block_22(get_each_context_22(ctx, each_value_2, i));
    }
    let each_value_1 = (
      /*ends*/
      ctx[3]
    );
    let each_blocks_1 = [];
    for (let i = 0; i < each_value_1.length; i += 1) {
      each_blocks_1[i] = create_each_block_14(get_each_context_14(ctx, each_value_1, i));
    }
    let each_value = (
      /*middles*/
      ctx[2]
    );
    let each_blocks = [];
    for (let i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block23(get_each_context23(ctx, each_value, i));
    }
    return {
      c() {
        div0 = element("div");
        for (let i = 0; i < each_blocks_2.length; i += 1) {
          each_blocks_2[i].c();
        }
        t0 = space();
        hr0 = element("hr");
        t1 = space();
        div1 = element("div");
        for (let i = 0; i < each_blocks_1.length; i += 1) {
          each_blocks_1[i].c();
        }
        t2 = space();
        hr1 = element("hr");
        t3 = space();
        div2 = element("div");
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        attr(div0, "class", "bodytext");
        attr(div1, "class", "bodytext");
        attr(div2, "class", "bodytext");
      },
      m(target, anchor) {
        insert(target, div0, anchor);
        for (let i = 0; i < each_blocks_2.length; i += 1) {
          if (each_blocks_2[i]) {
            each_blocks_2[i].m(div0, null);
          }
        }
        insert(target, t0, anchor);
        insert(target, hr0, anchor);
        insert(target, t1, anchor);
        insert(target, div1, anchor);
        for (let i = 0; i < each_blocks_1.length; i += 1) {
          if (each_blocks_1[i]) {
            each_blocks_1[i].m(div1, null);
          }
        }
        insert(target, t2, anchor);
        insert(target, hr1, anchor);
        insert(target, t3, anchor);
        insert(target, div2, anchor);
        for (let i = 0; i < each_blocks.length; i += 1) {
          if (each_blocks[i]) {
            each_blocks[i].m(div2, null);
          }
        }
      },
      p(ctx2, [dirty]) {
        if (dirty & /*searchable, entries, starts*/
        3) {
          each_value_2 = /*starts*/
          ctx2[1];
          let i;
          for (i = 0; i < each_value_2.length; i += 1) {
            const child_ctx = get_each_context_22(ctx2, each_value_2, i);
            if (each_blocks_2[i]) {
              each_blocks_2[i].p(child_ctx, dirty);
            } else {
              each_blocks_2[i] = create_each_block_22(child_ctx);
              each_blocks_2[i].c();
              each_blocks_2[i].m(div0, null);
            }
          }
          for (; i < each_blocks_2.length; i += 1) {
            each_blocks_2[i].d(1);
          }
          each_blocks_2.length = each_value_2.length;
        }
        if (dirty & /*searchable, entries, ends*/
        9) {
          each_value_1 = /*ends*/
          ctx2[3];
          let i;
          for (i = 0; i < each_value_1.length; i += 1) {
            const child_ctx = get_each_context_14(ctx2, each_value_1, i);
            if (each_blocks_1[i]) {
              each_blocks_1[i].p(child_ctx, dirty);
            } else {
              each_blocks_1[i] = create_each_block_14(child_ctx);
              each_blocks_1[i].c();
              each_blocks_1[i].m(div1, null);
            }
          }
          for (; i < each_blocks_1.length; i += 1) {
            each_blocks_1[i].d(1);
          }
          each_blocks_1.length = each_value_1.length;
        }
        if (dirty & /*searchable, entries, middles*/
        5) {
          each_value = /*middles*/
          ctx2[2];
          let i;
          for (i = 0; i < each_value.length; i += 1) {
            const child_ctx = get_each_context23(ctx2, each_value, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
            } else {
              each_blocks[i] = create_each_block23(child_ctx);
              each_blocks[i].c();
              each_blocks[i].m(div2, null);
            }
          }
          for (; i < each_blocks.length; i += 1) {
            each_blocks[i].d(1);
          }
          each_blocks.length = each_value.length;
        }
      },
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching)
          detach(div0);
        destroy_each(each_blocks_2, detaching);
        if (detaching)
          detach(t0);
        if (detaching)
          detach(hr0);
        if (detaching)
          detach(t1);
        if (detaching)
          detach(div1);
        destroy_each(each_blocks_1, detaching);
        if (detaching)
          detach(t2);
        if (detaching)
          detach(hr1);
        if (detaching)
          detach(t3);
        if (detaching)
          detach(div2);
        destroy_each(each_blocks, detaching);
      }
    };
  }
  function instance46($$self, $$props, $$invalidate) {
    let $tofind;
    component_subscribe($$self, tofind, ($$value) => $$invalidate(5, $tofind = $$value));
    let { ptk: ptk3 } = $$props;
    let entries, starts = [], middles = [], ends = [];
    const listCandidate = (tf) => {
      $$invalidate(1, starts = []);
      $$invalidate(2, middles = []);
      $$invalidate(3, ends = []);
      if (!tf.trim())
        return;
      if (tf.length > 4)
        return;
      $$invalidate(0, entries = ptk3.columns.entries.keys);
      $$invalidate(1, starts = entries.enumStart(tf, 20));
      $$invalidate(2, middles = entries.enumMiddle(tf, 20));
      $$invalidate(3, ends = entries.enumEnd(tf, 20));
    };
    const click_handler = (i) => searchable.set(entries.get(i));
    const click_handler_1 = (i) => searchable.set(entries.get(i));
    const click_handler_2 = (i) => searchable.set(entries.get(i));
    $$self.$$set = ($$props2) => {
      if ("ptk" in $$props2)
        $$invalidate(4, ptk3 = $$props2.ptk);
    };
    $$self.$$.update = () => {
      if ($$self.$$.dirty & /*$tofind*/
      32) {
        $:
          listCandidate($tofind);
      }
    };
    return [
      entries,
      starts,
      middles,
      ends,
      ptk3,
      $tofind,
      click_handler,
      click_handler_1,
      click_handler_2
    ];
  }
  var Inputhelper = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance46, create_fragment51, safe_not_equal, { ptk: 4 });
    }
  };
  var inputhelper_default = Inputhelper;

  // src/left.svelte
  function create_if_block25(ctx) {
    let inputhelper;
    let current;
    inputhelper = new inputhelper_default({ props: { ptk: (
      /*ptk*/
      ctx[0]
    ) } });
    return {
      c() {
        create_component(inputhelper.$$.fragment);
      },
      m(target, anchor) {
        mount_component(inputhelper, target, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        const inputhelper_changes = {};
        if (dirty & /*ptk*/
        1)
          inputhelper_changes.ptk = /*ptk*/
          ctx2[0];
        inputhelper.$set(inputhelper_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(inputhelper.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(inputhelper.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(inputhelper, detaching);
      }
    };
  }
  function create_fragment52(ctx) {
    let div;
    let div_style_value;
    let current;
    let if_block = (
      /*$leftmode*/
      ctx[2] == "input" && create_if_block25(ctx)
    );
    return {
      c() {
        div = element("div");
        if (if_block)
          if_block.c();
        attr(div, "class", "left svelte-1uyqkjl");
        attr(div, "style", div_style_value = "width:" + folioHolderWidth(
          /*$landscape*/
          ctx[1]
        ));
      },
      m(target, anchor) {
        insert(target, div, anchor);
        if (if_block)
          if_block.m(div, null);
        current = true;
      },
      p(ctx2, [dirty]) {
        if (
          /*$leftmode*/
          ctx2[2] == "input"
        ) {
          if (if_block) {
            if_block.p(ctx2, dirty);
            if (dirty & /*$leftmode*/
            4) {
              transition_in(if_block, 1);
            }
          } else {
            if_block = create_if_block25(ctx2);
            if_block.c();
            transition_in(if_block, 1);
            if_block.m(div, null);
          }
        } else if (if_block) {
          group_outros();
          transition_out(if_block, 1, 1, () => {
            if_block = null;
          });
          check_outros();
        }
        if (!current || dirty & /*$landscape*/
        2 && div_style_value !== (div_style_value = "width:" + folioHolderWidth(
          /*$landscape*/
          ctx2[1]
        ))) {
          attr(div, "style", div_style_value);
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(if_block);
        current = true;
      },
      o(local) {
        transition_out(if_block);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(div);
        if (if_block)
          if_block.d();
      }
    };
  }
  function instance47($$self, $$props, $$invalidate) {
    let ptk3;
    let $activePtk;
    let $landscape;
    let $leftmode;
    component_subscribe($$self, activePtk, ($$value) => $$invalidate(3, $activePtk = $$value));
    component_subscribe($$self, landscape, ($$value) => $$invalidate(1, $landscape = $$value));
    component_subscribe($$self, leftmode, ($$value) => $$invalidate(2, $leftmode = $$value));
    $$self.$$.update = () => {
      if ($$self.$$.dirty & /*$activePtk*/
      8) {
        $:
          $$invalidate(0, ptk3 = usePtk($activePtk));
      }
    };
    return [ptk3, $landscape, $leftmode, $activePtk];
  }
  var Left = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance47, create_fragment52, safe_not_equal, {});
    }
  };
  var left_default = Left;

  // src/app.svelte
  function create_else_block12(ctx) {
    let div;
    let t0;
    let t1;
    let t2;
    let a;
    let t4;
    let br;
    let t5;
    return {
      c() {
        div = element("div");
        t0 = text("\u6C38\u6A02\u85CF ");
        t1 = text(APPVER);
        t2 = space();
        a = element("a");
        a.textContent = "\u5B98\u7DB2";
        t4 = space();
        br = element("br");
        t5 = text(
          /*bootmessage*/
          ctx[4]
        );
        attr(a, "href", "https://nissaya.cn/");
        attr(a, "target", "_new");
        attr(div, "class", "bodytext");
      },
      m(target, anchor) {
        insert(target, div, anchor);
        append(div, t0);
        append(div, t1);
        append(div, t2);
        append(div, a);
        append(div, t4);
        append(div, br);
        append(div, t5);
      },
      p(ctx2, dirty) {
        if (dirty & /*bootmessage*/
        16)
          set_data(
            t5,
            /*bootmessage*/
            ctx2[4]
          );
      },
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching)
          detach(div);
      }
    };
  }
  function create_if_block26(ctx) {
    let t0;
    let previous_key = (
      /*$activefolioid*/
      ctx[9]
    );
    let t1;
    let t2;
    let t3;
    let t4;
    let t5;
    let player2;
    let t6;
    let notification;
    let current;
    let if_block0 = (
      /*$showpaiji*/
      ctx[8] && !/*showpopup*/
      ctx[5] && !/*shownewbie*/
      ctx[6] && !/*$landscape*/
      ctx[0] && /*$showsponsor*/
      ctx[7] == "on" && create_if_block_56(ctx)
    );
    let key_block = create_key_block12(ctx);
    let if_block1 = (
      /*$leftmode*/
      ctx[10] !== "folio" && create_if_block_46(ctx)
    );
    let if_block2 = (
      /*shownewbie*/
      (ctx[6] || /*showpopup*/
      ctx[5]) && !/*$landscape*/
      ctx[0] && create_if_block_36(ctx)
    );
    let if_block3 = (
      /*showpopup*/
      (ctx[5] || /*$landscape*/
      ctx[0]) && create_if_block_29(ctx)
    );
    let if_block4 = (
      /*shownewbie*/
      ctx[6] && create_if_block_115(ctx)
    );
    player2 = new player_default({});
    notification = new notification_default({});
    return {
      c() {
        if (if_block0)
          if_block0.c();
        t0 = space();
        key_block.c();
        t1 = space();
        if (if_block1)
          if_block1.c();
        t2 = space();
        if (if_block2)
          if_block2.c();
        t3 = space();
        if (if_block3)
          if_block3.c();
        t4 = space();
        if (if_block4)
          if_block4.c();
        t5 = space();
        create_component(player2.$$.fragment);
        t6 = space();
        create_component(notification.$$.fragment);
      },
      m(target, anchor) {
        if (if_block0)
          if_block0.m(target, anchor);
        insert(target, t0, anchor);
        key_block.m(target, anchor);
        insert(target, t1, anchor);
        if (if_block1)
          if_block1.m(target, anchor);
        insert(target, t2, anchor);
        if (if_block2)
          if_block2.m(target, anchor);
        insert(target, t3, anchor);
        if (if_block3)
          if_block3.m(target, anchor);
        insert(target, t4, anchor);
        if (if_block4)
          if_block4.m(target, anchor);
        insert(target, t5, anchor);
        mount_component(player2, target, anchor);
        insert(target, t6, anchor);
        mount_component(notification, target, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        if (
          /*$showpaiji*/
          ctx2[8] && !/*showpopup*/
          ctx2[5] && !/*shownewbie*/
          ctx2[6] && !/*$landscape*/
          ctx2[0] && /*$showsponsor*/
          ctx2[7] == "on"
        ) {
          if (if_block0) {
            if (dirty & /*$showpaiji, showpopup, shownewbie, $landscape, $showsponsor*/
            481) {
              transition_in(if_block0, 1);
            }
          } else {
            if_block0 = create_if_block_56(ctx2);
            if_block0.c();
            transition_in(if_block0, 1);
            if_block0.m(t0.parentNode, t0);
          }
        } else if (if_block0) {
          group_outros();
          transition_out(if_block0, 1, 1, () => {
            if_block0 = null;
          });
          check_outros();
        }
        if (dirty & /*$activefolioid*/
        512 && safe_not_equal(previous_key, previous_key = /*$activefolioid*/
        ctx2[9])) {
          group_outros();
          transition_out(key_block, 1, 1, noop);
          check_outros();
          key_block = create_key_block12(ctx2);
          key_block.c();
          transition_in(key_block, 1);
          key_block.m(t1.parentNode, t1);
        } else {
          key_block.p(ctx2, dirty);
        }
        if (
          /*$leftmode*/
          ctx2[10] !== "folio"
        ) {
          if (if_block1) {
            if (dirty & /*$leftmode*/
            1024) {
              transition_in(if_block1, 1);
            }
          } else {
            if_block1 = create_if_block_46(ctx2);
            if_block1.c();
            transition_in(if_block1, 1);
            if_block1.m(t2.parentNode, t2);
          }
        } else if (if_block1) {
          group_outros();
          transition_out(if_block1, 1, 1, () => {
            if_block1 = null;
          });
          check_outros();
        }
        if (
          /*shownewbie*/
          (ctx2[6] || /*showpopup*/
          ctx2[5]) && !/*$landscape*/
          ctx2[0]
        ) {
          if (if_block2) {
            if_block2.p(ctx2, dirty);
          } else {
            if_block2 = create_if_block_36(ctx2);
            if_block2.c();
            if_block2.m(t3.parentNode, t3);
          }
        } else if (if_block2) {
          if_block2.d(1);
          if_block2 = null;
        }
        if (
          /*showpopup*/
          ctx2[5] || /*$landscape*/
          ctx2[0]
        ) {
          if (if_block3) {
            if_block3.p(ctx2, dirty);
            if (dirty & /*showpopup, $landscape*/
            33) {
              transition_in(if_block3, 1);
            }
          } else {
            if_block3 = create_if_block_29(ctx2);
            if_block3.c();
            transition_in(if_block3, 1);
            if_block3.m(t4.parentNode, t4);
          }
        } else if (if_block3) {
          group_outros();
          transition_out(if_block3, 1, 1, () => {
            if_block3 = null;
          });
          check_outros();
        }
        if (
          /*shownewbie*/
          ctx2[6]
        ) {
          if (if_block4) {
            if_block4.p(ctx2, dirty);
            if (dirty & /*shownewbie*/
            64) {
              transition_in(if_block4, 1);
            }
          } else {
            if_block4 = create_if_block_115(ctx2);
            if_block4.c();
            transition_in(if_block4, 1);
            if_block4.m(t5.parentNode, t5);
          }
        } else if (if_block4) {
          group_outros();
          transition_out(if_block4, 1, 1, () => {
            if_block4 = null;
          });
          check_outros();
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(if_block0);
        transition_in(key_block);
        transition_in(if_block1);
        transition_in(if_block3);
        transition_in(if_block4);
        transition_in(player2.$$.fragment, local);
        transition_in(notification.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(if_block0);
        transition_out(key_block);
        transition_out(if_block1);
        transition_out(if_block3);
        transition_out(if_block4);
        transition_out(player2.$$.fragment, local);
        transition_out(notification.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (if_block0)
          if_block0.d(detaching);
        if (detaching)
          detach(t0);
        key_block.d(detaching);
        if (detaching)
          detach(t1);
        if (if_block1)
          if_block1.d(detaching);
        if (detaching)
          detach(t2);
        if (if_block2)
          if_block2.d(detaching);
        if (detaching)
          detach(t3);
        if (if_block3)
          if_block3.d(detaching);
        if (detaching)
          detach(t4);
        if (if_block4)
          if_block4.d(detaching);
        if (detaching)
          detach(t5);
        destroy_component(player2, detaching);
        if (detaching)
          detach(t6);
        destroy_component(notification, detaching);
      }
    };
  }
  function create_if_block_56(ctx) {
    let paiji;
    let current;
    paiji = new paiji_default({});
    return {
      c() {
        create_component(paiji.$$.fragment);
      },
      m(target, anchor) {
        mount_component(paiji, target, anchor);
        current = true;
      },
      i(local) {
        if (current)
          return;
        transition_in(paiji.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(paiji.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(paiji, detaching);
      }
    };
  }
  function create_key_block12(ctx) {
    let swipezipimage;
    let current;
    swipezipimage = new swipezipimage_default({
      props: {
        src: (
          /*$activefolioid*/
          ctx[9] + ".zip"
        ),
        onTapText: (
          /*onTapText*/
          ctx[13]
        ),
        onMainmenu: (
          /*onMainmenu*/
          ctx[12]
        )
      }
    });
    return {
      c() {
        create_component(swipezipimage.$$.fragment);
      },
      m(target, anchor) {
        mount_component(swipezipimage, target, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        const swipezipimage_changes = {};
        if (dirty & /*$activefolioid*/
        512)
          swipezipimage_changes.src = /*$activefolioid*/
          ctx2[9] + ".zip";
        swipezipimage.$set(swipezipimage_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(swipezipimage.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(swipezipimage.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(swipezipimage, detaching);
      }
    };
  }
  function create_if_block_46(ctx) {
    let left;
    let current;
    left = new left_default({});
    return {
      c() {
        create_component(left.$$.fragment);
      },
      m(target, anchor) {
        mount_component(left, target, anchor);
        current = true;
      },
      i(local) {
        if (current)
          return;
        transition_in(left.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(left.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(left, detaching);
      }
    };
  }
  function create_if_block_36(ctx) {
    let span;
    let mounted;
    let dispose;
    return {
      c() {
        span = element("span");
        span.textContent = "\u2716\uFE0F";
        attr(span, "aria-hidden", "true");
        attr(span, "class", "closepopup");
      },
      m(target, anchor) {
        insert(target, span, anchor);
        if (!mounted) {
          dispose = listen(
            span,
            "click",
            /*closePopup*/
            ctx[11]
          );
          mounted = true;
        }
      },
      p: noop,
      d(detaching) {
        if (detaching)
          detach(span);
        mounted = false;
        dispose();
      }
    };
  }
  function create_if_block_29(ctx) {
    let taptext;
    let current;
    taptext = new taptext_default({
      props: {
        tofind: (
          /*tofind*/
          ctx[1]
        ),
        closePopup: (
          /*closePopup*/
          ctx[11]
        )
      }
    });
    return {
      c() {
        create_component(taptext.$$.fragment);
      },
      m(target, anchor) {
        mount_component(taptext, target, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        const taptext_changes = {};
        if (dirty & /*tofind*/
        2)
          taptext_changes.tofind = /*tofind*/
          ctx2[1];
        taptext.$set(taptext_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(taptext.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(taptext.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(taptext, detaching);
      }
    };
  }
  function create_if_block_115(ctx) {
    let newbie_1;
    let current;
    newbie_1 = new newbie_default({
      props: { closePopup: (
        /*closePopup*/
        ctx[11]
      ) }
    });
    return {
      c() {
        create_component(newbie_1.$$.fragment);
      },
      m(target, anchor) {
        mount_component(newbie_1, target, anchor);
        current = true;
      },
      p: noop,
      i(local) {
        if (current)
          return;
        transition_in(newbie_1.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(newbie_1.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(newbie_1, detaching);
      }
    };
  }
  function create_fragment53(ctx) {
    let div;
    let current_block_type_index;
    let if_block;
    let current;
    const if_block_creators = [create_if_block26, create_else_block12];
    const if_blocks = [];
    function select_block_type(ctx2, dirty) {
      if (
        /*loaded*/
        ctx2[3]
      )
        return 0;
      return 1;
    }
    current_block_type_index = select_block_type(ctx, -1);
    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    return {
      c() {
        div = element("div");
        if_block.c();
        attr(div, "class", "app");
      },
      m(target, anchor) {
        insert(target, div, anchor);
        if_blocks[current_block_type_index].m(div, null);
        ctx[14](div);
        current = true;
      },
      p(ctx2, [dirty]) {
        let previous_block_index = current_block_type_index;
        current_block_type_index = select_block_type(ctx2, dirty);
        if (current_block_type_index === previous_block_index) {
          if_blocks[current_block_type_index].p(ctx2, dirty);
        } else {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, () => {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
          if_block = if_blocks[current_block_type_index];
          if (!if_block) {
            if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
            if_block.c();
          } else {
            if_block.p(ctx2, dirty);
          }
          transition_in(if_block, 1);
          if_block.m(div, null);
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(if_block);
        current = true;
      },
      o(local) {
        transition_out(if_block);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(div);
        if_blocks[current_block_type_index].d();
        ctx[14](null);
      }
    };
  }
  var idleinterval = 2;
  function instance48($$self, $$props, $$invalidate) {
    let $landscape;
    let $newbie;
    let $idlecount;
    let $showsponsor;
    let $showpaiji;
    let $activefolioid;
    let $leftmode;
    component_subscribe($$self, landscape, ($$value) => $$invalidate(0, $landscape = $$value));
    component_subscribe($$self, newbie, ($$value) => $$invalidate(16, $newbie = $$value));
    component_subscribe($$self, idlecount, ($$value) => $$invalidate(17, $idlecount = $$value));
    component_subscribe($$self, showsponsor, ($$value) => $$invalidate(7, $showsponsor = $$value));
    component_subscribe($$self, showpaiji, ($$value) => $$invalidate(8, $showpaiji = $$value));
    component_subscribe($$self, activefolioid, ($$value) => $$invalidate(9, $activefolioid = $$value));
    component_subscribe($$self, leftmode, ($$value) => $$invalidate(10, $leftmode = $$value));
    let tofind2;
    registerServiceWorker();
    isAndroid.set(!!navigator.userAgent.match(/Android/i));
    const handleConnection = () => {
      online.set(navigator.onLine);
    };
    window.addEventListener("online", handleConnection);
    window.addEventListener("offline", handleConnection);
    let app2;
    let loaded = false, timer, bootmessage = "\u555F\u52D5\u4E2D";
    onDestroy(() => clearInterval(timer));
    const installptk = async (name2) => {
      $$invalidate(4, bootmessage = "try to download " + name2 + ".ptk");
      const res = await downloadToCache(CacheName, name2 + ".ptk", (msg) => {
        $$invalidate(4, bootmessage = name2 + ".ptk " + msg);
      });
      const buf = await res.arrayBuffer();
      const ptk3 = await openPtk(name2, new Uint8Array(buf));
      return ptk3;
    };
    const init2 = async () => {
      documentHeight();
      for (let i = 0; i < ptks.length; i++) {
        const ptk3 = await installptk(ptks[i]);
        $$invalidate(4, bootmessage = "open ptk " + ptks[i]);
        if (ptks[i] == "dc")
          setTimestampPtk(ptk3);
      }
      $$invalidate(4, bootmessage = "fetching foliolist from cache");
      await fetchFolioList(folioincache);
      $$invalidate(4, bootmessage = "load folio address from url");
      await loadAddress(addressFromUrl());
      $$invalidate(4, bootmessage = "loaded");
      $$invalidate(3, loaded = true);
      timer = setInterval(
        () => {
          showpaiji.set($idlecount >= idletime);
          if (!shownewbie && !showpopup && $showsponsor == "on") {
            idlecount.set($idlecount + idleinterval);
          }
        },
        idleinterval * 1e3
      );
    };
    let showpopup = false, shownewbie = $newbie == "on";
    const closePopup = () => {
      $$invalidate(6, shownewbie = false);
      if (get_store_value(landscape))
        return;
      $$invalidate(5, showpopup = false);
    };
    const onMainmenu = () => {
      $$invalidate(5, showpopup = false);
    };
    const onTapText = (t) => {
      $$invalidate(5, showpopup = true);
      if (typeof t == "string")
        $$invalidate(1, tofind2 = t);
    };
    const orientation = (ls) => {
      $$invalidate(5, showpopup = false);
      if (ls)
        $$invalidate(6, shownewbie = false);
      idlecount.set(0);
    };
    setTimeout(init2, 500);
    function div_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](() => {
        app2 = $$value;
        $$invalidate(2, app2);
      });
    }
    $$self.$$.update = () => {
      if ($$self.$$.dirty & /*$landscape*/
      1) {
        $:
          orientation($landscape);
      }
    };
    return [
      $landscape,
      tofind2,
      app2,
      loaded,
      bootmessage,
      showpopup,
      shownewbie,
      $showsponsor,
      $showpaiji,
      $activefolioid,
      $leftmode,
      closePopup,
      onMainmenu,
      onTapText,
      div_binding
    ];
  }
  var App = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance48, create_fragment53, safe_not_equal, {});
    }
  };
  var app_default = App;

  // src/index.ts
  var app = new app_default({ target: document.body });
  document.querySelector("#bootmessage").innerHTML = "";
  var src_default = app;
})();
