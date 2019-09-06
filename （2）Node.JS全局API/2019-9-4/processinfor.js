/**
 * process.pid进程的id值，唯一标识
 */
console.log(process.pid);
/**
 * process.platform返回程序运行的操作平台
 */
console.log(process.platform);
/**
 * process.argv获取命令行参数(可以传参数)
 * process.argv是一个数组，默认会有两个数组元素
 * process.argv[0]表示的node的可执行文件所在路径
 * process.argv[1]表示当前执行脚本文件所在的位置
 * process.argv[2]2以后的表示的是传入的命令参数
 * 例：传入参数
 * PS E:\大三上\node.js\3> node processinfor.js zsz
12792
win32
[
  'C:\\Program Files\\nodejs\\node.exe',
  'E:\\大三上\\node.js\\3\\processinfor.js',
  'zsz'
]
 */
console.log(process.argv);
/**
 * process.cwd()当前脚本执行所在路径
 */
console.log(process.cwd());