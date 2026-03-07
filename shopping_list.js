#!/usr/bin/env node

// shopping_list.js
// Simple command-line shopping list manager in Node.js

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let shopping = [];

function showMenu() {
  console.log(`\n=== DANH SÁCH ĐI CHỢ ===`);
  console.log(`1. Thêm món`);
  console.log(`2. Xoá món`);
  console.log(`3. Hiển thị danh sách`);
  console.log(`4. Thoát`);
}

function ask(question) {
  return new Promise(resolve => rl.question(question, answer => resolve(answer.trim())));
}

async function main() {
  while (true) {
    showMenu();
    const choice = await ask('Chọn (1-4): ');

    if (choice === '1') {
      const item = await ask('Nhập tên món cần mua: ');
      if (item) {
        shopping.push(item);
        console.log(`Đã thêm '${item}'.`);
      }
    } else if (choice === '2') {
      const item = await ask('Nhập tên món muốn xoá: ');
      const idx = shopping.indexOf(item);
      if (idx !== -1) {
        shopping.splice(idx, 1);
        console.log(`Đã xoá '${item}'.`);
      } else {
        console.log('Không tìm thấy món trong danh sách.');
      }
    } else if (choice === '3') {
      if (shopping.length) {
        console.log('Danh sách hiện tại:');
        shopping.forEach((it, i) => console.log(`${i + 1}. ${it}`));
      } else {
        console.log('Danh sách rỗng.');
      }
    } else if (choice === '4') {
      console.log('Kết thúc chương trình.');
      break;
    } else {
      console.log('Lựa chọn không hợp lệ, thử lại.');
    }
  }
  rl.close();
}

if (require.main === module) {
  main();
}
