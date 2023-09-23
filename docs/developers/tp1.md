
readme

a1

a2

a3
## 图片
办法一

![Alt text](images/tp1/f25a27d0d61791a37ef44de261481cc.png "test")

![ffAlttext](/img/p01.png "aa") 

<a href='/img/p01.png' target='_blank' > <img  src='/img/p01.png' width="40%" title="aaf" /> </a>

```js
function HighlightSomeText(highlight) {
  if (highlight) {
    // highlight-next-line
    return '这行被高亮了！';
  }

  return '这里不会';
}

function HighlightMoreText(highlight) {
  // highlight-start
  if (highlight) {
    return '这块被高亮了！';
  }
  // highlight-end

  return '这里不会';
}
```