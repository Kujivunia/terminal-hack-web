//Отрисовать всю матрицу консоли
function DrawChars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let fx = 0; fx < TerminalWidth; fx++) {
      for (let fy = 0; fy < TerminalHeight; fy++) {
        
        ctx.beginPath();
        ctx.rect(chars[fx][fy].canvas_x, chars[fx][fy].canvas_y, char_width, char_height);
        ctx.fillStyle = chars[fx][fy].bkColor;
        ctx.fill();
        ctx.font = "32px MyFont"//"bold 28px monospace";//"bold 28px monospace";//32
        ctx.textBaseline="bottom";
        ctx.fillStyle = chars[fx][fy].color;
        ctx.fillText(chars[fx][fy].char, chars[fx][fy].canvas_x, chars[fx][fy].canvas_y+char_height);
        ctx.closePath();
      }
    }
  }