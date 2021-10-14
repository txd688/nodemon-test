const chokidar = require("chokidar");
const { exec, spawn } = require("child_process");

let childProcess;
let debounceRestart = debounce(restart, 500);

// 监听文件改变
chokidar.watch(["."],{
  ignored:'node_modules'
}).on("all", (event, path) => {
  console.log(event, path);
  debounceRestart();
});

function restart() {
  console.log("restart");
  // 杀死进程
  childProcess && childProcess.kill();

  // 使用指定的命令行参数创建新进程
  childProcess = spawn("node", ["main.js"], {
    stdio: [process.stdin, process.stdout, process.stderr],
  });
}

// 优化：节流
function debounce(fn, delay) {
  let id;
  return () => {
    clearTimeout(id);

    id = setTimeout(() => {
      fn();
    }, delay);
  };
}