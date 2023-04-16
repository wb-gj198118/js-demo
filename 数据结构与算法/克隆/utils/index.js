/**
 * 获取数据对应的类型
 * @param {*} obj 
 * @returns 数据对应的类型
 */
function getType(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1);
}

/**
 * 常见的一些类型判断, 这里只针对引用类型
 * @param {*} value 
 * @returns boolean | {
 *      isXXX: boolean, 是否是某一类型
        type: string // 类型
 * }
 */
function validateType(value) {
    const valueType = getType(value);
    if (!value) return false;
    return {
        // isArgs: 'Arguments' === valueType, // Arguments
        isArray: 'Array' === valueType, // 数组
        // isBool: 'Boolean' === valueType, // Boolean
        isDate: 'Date' === valueType, // 日期
        isError: 'Error' === valueType, // Error
        isMap: 'Map' === valueType, // Map 结构
        // isNumber: 'Number' === valueType, // 数字
        isObject: 'Object' === valueType, // Object
        isRegexp: 'RegExp' === valueType, // 正则
        isSet: 'Set' === valueType, // Set 结构
        // isString: 'String' === valueType, // 字符串
        isSymbol: 'Symbol' === valueType, // Symbol
        isWeakMap: 'WeakMap' === valueType, // WeakMap 结构
        isArrayBuffer: 'ArrayBuffer' === valueType, // 数据流
        isDataView: 'DataView' === valueType, // 二进制数据
        isFloat32: 'Float32Array' === valueType, // 字节顺序为 32 位的浮点数型数组
        isFloat64: 'Float64Array' === valueType, // 平台字节顺序为 64 位的浮点数型数组
        isInt8: 'Int8Array' === valueType, // 二进制补码 8 位有符号整数的数组
        isInt16: 'Int16Array' === valueType, // 二进制补码 16 位有符号整数的数组
        isInt32: 'Int32Array' === valueType, // 双补码 32 位有符号的整型数组
        isUint8: 'Uint8Array' === valueType, //  8 位无符号整型数组
        isUint8Clamped: 'Uint8ClampedArray' === valueType, // 8 位无符号整型固定数组
        isUint16: 'Uint16Array' === valueType, // 16 位无符号整数
        isUint32: 'Uint32Array' === valueType, // 32 位无符号字节组成的数组
        isBigInt: 'BigInt' === validateType, // 任意大的整数
        isNaN: Number.isNaN(value), // 是否NaN
        isFunction: 'Function' === valueType, // Function
        type: valueType,
    }
}

/**
 * 正择表达式的克隆
 * @param {*} regexp 
 * @returns 
 */
function cloneRegExp(regexp) {
    const reFlags = /\w*$/;
    const result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
    result.lastIndex = regexp.lastIndex;
    return result;
}

/**
 * ArrayBuffer的克隆
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer
 * @returns {ArrayBuffer} 
 */
function cloneArrayBuffer(arrayBuffer) {
    const result = new arrayBuffer.constructor(arrayBuffer.byteLength)
    new Uint8Array(result).set(new Uint8Array(arrayBuffer))
    return result
}

const allocUnsafe = globalThis.Buffer ? globalThis.Buffer.allocUnsafe : undefined

/**
 * buffer 数据的克隆
 *
 * @private
 * @param {Buffer} buffer
 * @param {boolean} [isDeep]
 * @returns {Buffer}
 */
function cloneBuffer(buffer, isDeep) {
    if (isDeep) {
        return buffer.slice()
    }
    const length = buffer.length
    const result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length)

    buffer.copy(result)
    return result
}


/**
 * dataView数据的克隆
 *
 * @private
 * @param {Object} dataView 
 * @param {boolean} [isDeep] 
 * @returns {Object}
 */
function cloneDataView(dataView, isDeep) {
    const buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer
    return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength)
}

/**
 * Symbol 数据的克隆
 * @param {*} symbol 
 * @returns 
 */
function cloneSymbol(symbol) {
    return Symbol(symbol.toString().slice(7, - 1));
}

/**
 * typedArray 数据的克隆
 *
 * @private
 * @param {Object} typedArray
 * @param {boolean} [isDeep]
 * @returns {Object}
 */
function cloneTypedArray(typedArray, isDeep) {
    const buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
    return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

/**
 * Array的克隆
 *
 * @private
 * @param {Array} array
 * @returns {Array}
 */
function initCloneArray(array) {
    const { length } = array;
    const result = new array.constructor(length);
    if (length && typeof array[0] === 'string' && hasOwnProperty.call(array, 'index')) {
        result.index = array.index;
        result.input = array.input;
    }
    return result;
}

module.exports = {
    getType,
    validateType,
    cloneRegExp,
    cloneArrayBuffer,
    cloneBuffer,
    cloneDataView,
    cloneSymbol,
    cloneTypedArray,
    initCloneArray,
}
