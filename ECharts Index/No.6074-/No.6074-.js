var path = [
    // 表扬
    "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyVpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OThFOUU2QzdEQUZEMTFFQTlDQTVDOTE4QUYyMThGOTkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OThFOUU2QzZEQUZEMTFFQTlDQTVDOTE4QUYyMThGOTkiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0MTIyNjU4QkRBRkQxMUVBOUNBNUM5MThBRjIxOEY5OSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0MTIyNjU4Q0RBRkQxMUVBOUNBNUM5MThBRjIxOEY5OSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PiP0sR0AAAQmSURBVHjatFc9aBRBFH7vbi/GCEZEjKJF/EWwENFCRWKh6URBBAPa2glKSlsLrSyCvXYpRARrUURJJRaKWPhbBBNOoybBJPez9/xmZ3Z2dnb2cgou925mZ968eT/fezPL5ztCTSI6yES70S6C0F31EfPHTCfRDuLtSYfoVxl/BdQAvYdwxroYbUP0OEWgOdCC2bzTAyUKMI2j8xj9B3i7Z0QFHyW3VqIYrQF9gZQfoCqorTRcnXZBkRtt0taAzgrTCRD51DFtnbXi7CugBgdAn/mvvDCKzQeSzZXSGGsRjbR0a6ltNpoGz9dAeK3LqqCfoLfg2O/GuSSkYDvOxhzJpG7x3aumZsD3HW1fNwXExKht+q3uGFwL4YftQgMsPP3pUMUw1kkjs1YC7sgHSsssGjJIVXgIeGJbjKRh1ruJGOGcAN2GUG08L2HwlSqgPPBRpaOJ7RBr18X5dYcUXtlFlFZ0OXX9Il5+c5e0CCmQYkE930y/CUHr0A6ytirhETqWbpzoILavgJ5oseLI+isF3JytmJCsmFRlM4a0GhGzabo5JmNo8E7xNzkDoPyLAj6DmHj2o9PHdBrdfVbTDIQxsqGmMAPLI10kM4O8DGr0rEAuNEzbW0ITSo90czahSaAidAvtZWCnBmVYeUelKKexEpudS+g+wvidnhQA40YsGAMexvGywwor+njYUCGkQnnAgkbx/9JVYAPml4WyVMJzBHQdcT2KBZtcl7uVKhkOzXGGk3Te8mqeA5FxyVXQJbhyFu1N0AvwbkXqTbaVRa6gMvPEsVS8Usrexpms9RE2GUPBue3mOGgPYr0X/MPibKziLRKwrnBO28KUK1TCeaUUBiP4+1TOlUSb0exUQEnqEgOoEjgcxA9wsS9pKogXFkdOhJxlb6KZgL6obfCEcspwGTDDhUbztCMgO/YES1LKxRSykHW+IH9utfHMqAXlgSxG5FQPyb+LE9fUtZI/CbO5sjBJvnzjNxM1fc2k7AKY57OgDBhtClNRkWL1nFYhsJcK51DJLOtinX+9IvEUcqql5c8MrSP/61ErIEwCnuAQj/PCIWdJCSw082sMzOkQFItXIWuYykPj4sN3uT0LvMzBM6VO7gSELL1njgVfiUKFBJAgRuIq01NVgqNWsT5bbg7h0gNUmfLdMhEKTOHEnFL9qJ1Pi/wlo6SAcfEmRBQ6h9gDnskQWH5X9GUrUaAqlLOaxbtNualVVn3dGpEK6YiXjvp5heHJ9I6psqCRXKMza9QddEWdVP6dsgyMrkfUV1BF8mWlknfANda3PH07gQIPY+crBvQGp+MHjM2DlsxYUq9TcsfaDikZ6VeSu8b5SrqC9+fuGo7gJ6w5A7qoPmKg3QSQ/qmjz4ILoHNG2ZgCse7xNjeLNffhiWf+TZlFehTzn54/AgwAmuwKbQQn5KgAAAAASUVORK5CYII=",
    // 建议
    "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyVpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OThFOUU2QzNEQUZEMTFFQTlDQTVDOTE4QUYyMThGOTkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OThFOUU2QzJEQUZEMTFFQTlDQTVDOTE4QUYyMThGOTkiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0MTIyNjU4QkRBRkQxMUVBOUNBNUM5MThBRjIxOEY5OSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0MTIyNjU4Q0RBRkQxMUVBOUNBNUM5MThBRjIxOEY5OSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PowUlxYAAAM5SURBVHjaxFc7a1VBEJ5JjpGoQSFNCFgpFjYRtdPCOoWvQrBTOztBEPEHiKiFdgELbXwUKQT9AcEHdnYWPhoRfMElyk0iuQ/Hb0/2nDtn7uw5KSJZ7tzds2d25tt57R4WEdrMls0JTRPTbYyny9mAiWNPcaznU626bhnjG+hfeqxfwNMJAPpEF9GfLV6wxPWeMg+UxahBCO3E/1Gr/Ku2QI9pgj1JZme5XB62SDmvACveHVbUD+PxYIHBKr1LbgblekCMy1RreTHQjYysFAkrV8T50vpsPKIAs3GTKN7f4u8j66V26VnC+F+HRCUA2bcQJS1A61DimdYqSijtSB0AGURvKV8pzwONlYlpGIgORNF8VcXbQVvU8zKom3U8kzflv7GAdUUAI8NufQg6oeStoJ/NXSBOdHBhFTa4qnnum98BpQXnMoW24el4tko1gtipcuxkhlUgg0yquFQGro7iRgcu8PwrDbnPNQFJiXpg5rKOEVKcTcx+kGllYkuwKuXsRT4rC0QLZqs1fqythKYApVxBTq3Qrhh2gWMqMVWskrLil4dkaTFMAUBX6o5XHXDS4HtbwiHbbspaJWTBY/SnQZOKdQwc4zrd7C7ww0FKy0V8DPldcuVzqStDGYSgt6A9ldJJdA7v7+utmCD/EEBvJXrXVOvDCTjhJVEUmNkF7eaYmMf/BYBsLzm3J+8e085NSruHgpwNgFbdLUsoHJxXML4D5QKBo3i+XLnKpdt+pPvBSrpGt5UAvlG6yMja6zNQ+moJ82NCEwDxBPOzXAPaXlRE3SFYxQB9ptobz0K4M+IY+74YTYndPMP7mfVUyBKMnlOpm32sd/lN0DUo7/9aO0sP4Wx/juGUu8ZkDVddWL11SepCstaCvlPY7dPiAcpPgvcRhuPUVDea2oCvxVN/06vG4q0BbR/oKmgklZdou8rz3ud5Dfqk5n6Crq8XQPosoErZO4bpe3i318YA+vOw4gO7bmSDv7QWAGIGtf0uegnu7cV6HPo/zoKNBhDaCugSFB4Bve9F5QW15f8DKNobfPQcAN0C9TWIRe3JDY4BKr4zQl98daE/jC7cAV9o/sm8QG3y5/k/AQYALf1psKOMaksAAAAASUVORK5CYII=",
    // 咨询
    "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyVpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NkUxQkIxM0NEQUZEMTFFQTlDQTVDOTE4QUYyMThGOTkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDFFQjcxN0VEQUZEMTFFQTlDQTVDOTE4QUYyMThGOTkiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0MTIyNjU4QkRBRkQxMUVBOUNBNUM5MThBRjIxOEY5OSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0MTIyNjU4Q0RBRkQxMUVBOUNBNUM5MThBRjIxOEY5OSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PiGw4UUAAAUDSURBVHjalJdbiJdFFMBnFl30pQ1T859QSCuFpAkRQnYhjG0luu2/zAdBX0LJCHwJe+kheigoiqWwopeFKKPWnrQLLZWL0JU0wi7SZUvZsi0zWVb/n3b6zTeXb+b7Zndt4PzPOXPOnDlzvnPOzF+LiHpBlFJapcPPieOt/DL4TdA3Q68GFjjpX8BB4APkryAfq63Ljm1GbBx4PtpU62hPCfTFGHoC0WaJTeY3EdghZI8g/i1ziEA+AMwxzDmnoJ2ysaCdFuwNoDfEOGHHT/DDCA4wN250cLQFXgvfhl4G3oKt9ejcCz2aHKoW4TICz+ROYxVu5Pcd6PngP+Efgt6NwX8lF1NRXehsBA/CXQRMKevIRyESkf0d2kXgrEpDI5ZYyGlehzabfw3fj+wY0TFr7gL6ULzcBBDZz9D7wPvgX8XBD+HfZe1V8LuBlfATySdwtHUgOr12n4DxOEpLYP+A7SNQJtw3Mf8yfK+S4KjNHaW2gr6Dvl/ZsJs1h6CXGFsobMsleVfpgLZRMI4UWs0tSFDozYWNzs6CzcEbgPeZ7zXzhV/j1pe8qCugR5hruzU7jU3wFmdzblgTEh03H/UHsV69iXdtd7K/3QlMqL8EupMcyZSZC8gU6BqIH5WthAtdZIeR3yNu7WM+AnirOlKepB8v2+Y07vSj0GeYfwq+O5ovoXBQnlIsbexgbz7yJ4EzrBkt7du17Y5S6330qhzQ7vSiBmpVcJTfFt73SxSlsqzi+q73BUvfxu8i8FGV9pm7sfG2ih3o+JoXtdQ3H20XGNF1IdASekOZrKqqmGbDkzK615fmddJZl8ZqwQG38al6uTIuST6wz5WoW+Y6t2Na9fxgnBJdc6Co+P1o3SdSdUKMTMYb1JtJvKvUO51S/3g6RE2r/bH9Lh8BkyTgIZJorPBzUuJvOqpKMKfnZdVaV4qedrLvvdzZHGPdkLdvRnCgsAYnEd4CHgGfBE+BPwWP+9pvbC5VFXns5MeAz42NjrU1wnpje9I7GfrAgNTqWKe3Iex28HOJXNKWKvVuai47rXbF/SLqNaXCHn8XFK4MQwJKI5l2ge4Q0//riedvT3/jWTt7oV5KbNY210kVRF4mGV6d1Nx+A+DXmLq90dLTZHwL2CTmkoqnpdZHGn2gnsW6yl7nzCTMnZAbgB3AmqgazJf8GPZpuD1JS4pC4A8X94wyB9ZKprqqx8k8Tng6c/svQLzMJfivwImMzjyMnlaSf5IdiMuwqErRl1wPuTFIZk8w9zDQ3Yl1eQeCvwB/BZxI1lpds2YCO4PgnlA1UemGCKyW6jHnEuxqcysi6o0i+TvoRffA+LaMTxQy92mvhNsIbFX+CWcj+QO47d4HoXIOegdWpCFaA7zHggua/TU4M8HUYcjjbmoxsAJY2IizTrpiH+wn3txh/yZcXlXBcn4/Y0GPzwOR2kWjq3LSKk2s/Es+GSeBa5EfMbIjOr0L5iAY5hP0ZKugfuX63SK97F+A9K4wtoc5mHmsFMllhPBBNl8pzcdpaDyNG7fWaJSawZFKZh6o2yGfDUm4WEpHfkHaik+Ze3NkrtwZxzQq48Clx7U665/lt5qXj5LzN1xv2VqpWT2JItbSds+9/hOsa7TNaTrXbH8fpYYD08yTdcEBmvaqrPVZvul0kZJc0jbHqpCE58zj8X+O8/0EM0RnUfUqjq54nXFcz+bIDHPTRdD7/p8AAwCyIJqnBYHYeAAAAABJRU5ErkJggg==",
    // 投诉
    "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyVpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTg2REExRUFEQkE3MTFFQUE3QjhCRjk4Q0FDNUI4NTUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTg2REExRTlEQkE3MTFFQUE3QjhCRjk4Q0FDNUI4NTUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5OEU5RTZDNkRBRkQxMUVBOUNBNUM5MThBRjIxOEY5OSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5OEU5RTZDN0RBRkQxMUVBOUNBNUM5MThBRjIxOEY5OSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pm8xJykAAAOnSURBVHja5Fc9aFRBEJ4xpyQmaowK/hWJBxZGBX9AK8VgEZA02ojRSpCASsDYiIWiYKNIQEFBS4sUKQQJpgko/gcEES0kiGClnPlPTHLGG799b++93X377owpUvjI3MzO7s7Mzt9uWERoIb9FtMDfghuQuVtuhYoQO2OiJYBV4K8AHgNvuI1p6p8MiBT4FZlG7AU+Lkz7WagxWq3X4SCfQb8GtxvDnjaiX39jAN9WSaj+ONavWIFNIW8fhjcx3MWGR3z2ckx/A7oCuHeGaLakAZ0FsSQFysNxFchO4FOsDYw2uUYaRpHhUHxvQLe2K++kGXBde8AJwzrQPcA7rJPqNZFSR5slI+YNgm45z/TKa8C1ogfiDRvx+wR2ZY0wWDq8YXDCaIVF6CeIpgvwSMKAywUxJIfKsSFrSaIySWp6KP0bwp7dl5i+WH0gj015CmBbXqgPkFXjGdJ80ZidcZHHxlgMLM6YqA5rey8KNVg2d4Q5cAzW30dcq6KDcqIaSoZBDJ5ZTcVBlMhCOfAO3yB6HvDPirSC+cB1oVENsWK3Grz5G69hwwi25U4Bt9xi6svMCF01jyfiJLfPC4ZxRckiVh+wjIuSVK/Xnr6D0ebMNNF38BrEKSE2ji6lWrSTnNY+9qyN4zgatGIkWwdwLyaW+VpaotbNPiD2Ol/PSJRrmFs5oPbAAHjgJVZsxcQ54APA28kThoQhsTvjLigpnoq/Toz7sf7RQ6KJQEQz+kAgg6PYiZhhMGUZCl2jinNuu4jmlZs52SmUByyBICfhomozF4RSbkwzSaXMdS406b2OZzjhpvXYsAG8NaDXAuowXYvTqbtfQS0pmqlal9RyjNXD5jdgXMsYBgxijep+A1j3CWree++CnToEZITBNCgtDMWDveX5vYi4sZgDscdOgj4KPAo8AjzG6tWjQoMGAuUTwCqBZkFPin54aEdWUgjVylvg1YJXD7oehzvyIfaQEYJkSa8GOmie1KxvcVuxxN4jT+8wKmnad1kFBjhff1r3YafLlSg3N4YDX1OeaJl8srSf4ucjhe++sg9WKXcLh8K70xbxSvdBEgrcg+EzkItTvVDi0M6XA2wZYvrhNaCmIGmeO4SZLpA180jyEQhqHve8hCI9ldqAlNNsUu0TxrSkvH5LeeIx4PS08wJKGFDh8QAn8yoLOAFoUg9VzNd4lKtSfQd4AeiaZX/jSeoqzPmf0wrVHYOOSLQUMKphBKU7Z2H83/93/EeAAQCohKszsfyvuQAAAABJRU5ErkJggg==",
    // 求助
    "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyVpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NkUxQkIxNDBEQUZEMTFFQTlDQTVDOTE4QUYyMThGOTkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NkUxQkIxM0ZEQUZEMTFFQTlDQTVDOTE4QUYyMThGOTkiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0MTIyNjU4QkRBRkQxMUVBOUNBNUM5MThBRjIxOEY5OSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0MTIyNjU4Q0RBRkQxMUVBOUNBNUM5MThBRjIxOEY5OSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PnRjrBkAAARZSURBVHja5JdfiJVFFMDPuHfbTVvFMkx8kagkRR+y6C0ocEVa9UUkllwVEcQSCYQSNOpB+vtQG0gPiWD450F8UIgebLOCKBUMQtAlTCIIalH2brh777f3jr8zM9+98333W3dXiX1o4HznzJk5Z86cc+bMfMZaKzPZZskMtxk3oPSxfiJwTaNipBO8CGoU+h9wTYfG/ZhrY9Dt0CXrRUomyPr2mNMhMgzcSsVUSUJnHLzXtHpABXYDl1F0G3wdqb/AfwPHgOcm2dAK4Igu6OSs/A7cpH8VeAt4KC9gPiIJw+6XY9BpyKeyjoiaFU3ZD2Hu017kgTbIg8bIXua0pUIF8jdgbMIDF1MPpF5/smblPIMLGpISpGMtxlFvivfg/sBto3MU3NuYqyEBm1jW00v4fgO8APwiIeyziOuX4AWNuUE4PqHZ8MrchE87iyfp4qY5z+mwOaGmK7rw1En4K6GrJRbfwODzYnMuM5GimG/lW6vxxBvs/DD93obBOs9kLXZj2TAoYynfV4CjparI1iJ3xwrVCIdFvofVw5xR8CHwFsnXMZtLoKZsgxfYr3oDwu4zsWpJVce/wHd9Y3GRnSJN5Rlvp7uP6Exo/fxVrhBVrSysajD0fCo2nq7GtJVL0N3/GhlmTj9ZvBOeG6tYf64rRk7QXwSccHxpjitdCbpSjL6HXRJWfUaXYgtjb4Rd7ELJcIfI4+DX81kJOs6nj/Ea+jbrcU1PRUNnyCcjjbwYdx5A4fVKsLSaWmublofd7NCkh3cDODRmpBx2VQYOspu+ESO1IXhljGCsD/7xSN7rTz3g9V/zIRAZqKSTcqAhUAEm7wB+greMBV4bEZlHfz6KHilb2Q9ohV0LaMn+DJk649uQP1uxQYeJNuf1f+0c2Wvts7jqYsthzx380K+5UmvkC+hLeKLWaV1xeUN8aNLS/jmwy5cKOYWadSarM4F+gtr+hxqgl8oxxnrzpTNfF6xE8TTBSVa6WoR862fCHvLiATUCWCfNQvcul847ermYnrqT6AJ+Bp4uPIJFBUlaj1+B6AdjFC0W62TRr2C9KH6zm1XsbHQXjODObnbzA8qWiEzkhqiQFIUqR6NP740q9/HbHVbWQD8DXOiMbC5Fqv/E2tXg88DijEJb6OIWL00w7wCgB6Q/ePmuL6LfiNsaMnYol7F3Bzvp3JfLE72ICnhXUNYdPDF30t3agjwwmQQZCo8cd0YfnYIB2i6rJ5AfgH4w49HJHtHZyneL7kscg0GZhgfSpoWnB6zZ29HyuinacVy+XVGUtRzDX+/nVTxApdwEJInkLinTLLPpxRRdaqOMry9Kunt5lp9B6RagHi+Y1vYkuvkCJGHx76b0LJ/i812v2NmhBE/ofePt2Uj9PTfl/4Jp/EMc5vk2B/ypFD+C6hiwjcXPTOvHZJo/Mv2JekLkvRy/Dmxv9/8O8l8aoO39cf+k1ieZlu1Bdv5Jm8iP9/JrZv73f8d3BBgAMB0AscI9kq4AAAAASUVORK5CYII=",
    // 举报
    "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyVpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NkUxQkIxNDREQUZEMTFFQTlDQTVDOTE4QUYyMThGOTkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NkUxQkIxNDNEQUZEMTFFQTlDQTVDOTE4QUYyMThGOTkiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0MTIyNjU4QkRBRkQxMUVBOUNBNUM5MThBRjIxOEY5OSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0MTIyNjU4Q0RBRkQxMUVBOUNBNUM5MThBRjIxOEY5OSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgarHAwAAAODSURBVHjaxFc7bNRAEJ2BfFCiEMRPVEhAmVAGRZSXFFQkFTSpUCgoKFNQEZoooqQFpUMg0ZzoQTmJiooiLSiiCjnCQcSdch8Y3nrXvvF6bR8BhHWjWa93Z2bfvJmzWUTof15D+uYhZNjEw0Q9stKFnA3HOIt116A3naSuXewZYmvPaBJrb4ULAsi7foanZwHefTfe/CsI5F2fEfWJEAqY58B84w8DuATZh9T15A/OsRCazwZ1BnIc8t5/cMR3jjzVekKv3abk+uT4oKUXkN2Ac2Ovx1Rzh8sPAAv3sbDRZZqGg0wQXwwSSnzneyHnsAMx9ho9i2xhCupYWCGDAIJwuqLT8Q1OxuzwaUQ+ph1z06Kwc+hprNmCrgx7aQ2lIAmiK7QVISG03PVO1uJI6pB3LaGdlvfcpWi5a0++hf0VCjgvqgKLBIxA1o1BRD8CtQi5DrkCuQg56rLxAfIW8hJSRWAd1P862Z7yBON6XhWw7oRrplngdObExmkTMsJASeg2hqswdk4cy5n7jI/8uGbjUrKK8eMOWsi4a0bDTt/jggBuKSjNhhGhUzD4HMbm4aCJpa2ImGyrr6SLv4LcxEH2Ompyg8s5kJAIHKhh8zyMvOkIXcb4btch1JZ0SXbYaUr0HHTNr6RBSBgBAANVOJmC42cwPtcm2obB05gT7cyM2/HYOVf3UxhXLYUG6ITfnUbeVwDv1QhmpknocbHoLUZpjvOu0hDNsdcJ7b2xs4LA10pJeMMOT0I+YjgeEwu/AwyPJZ2W00HkXu4hXBg+nze97EXRv6Ejy1LkXDGclPP4tNRnPSWVQQoZVshYe0u4fVSYgrZVCylD+jTKSTwmSTvNPO/bWigNoGnZMqOdUSgYXfd6XgLr+imb6XB5J5xEGiZChpK5+IF4qAQ8J+8KVk8Y++bvJJ8DjG3ik1ihoPMu6Y6YVINOQbyuH/QExgUBKM+6y7E6dSa/4pFeIyEZgg6VkpBVUuNyy5CAUxWSLkV/Un7jlayn9/sk05AGjAbgzqSwNIAODbAj78pQ/xAvpd2QAQU3S8mLqRQ4zgkqHIAHZa4xLnE6AKJ+AIYGNQ7sTeVTdUFdMX5cGR4yHRT+GY0VkSvnU2BgqriKapZ8mo1C7vzDb9EN8l7NUwiMSvQF1uAB0skU/juWAHJq7YU203ZRHzA5elD0tcWHKct+AF/9Zb8EGAAXra/76PmUlAAAAABJRU5ErkJggg=="
];

var seriesData = [7, 5, 1, 4, 5, 2]

var xAxisData = ['表扬', '建议', '咨询', '投诉', '求助', '举报']

var heightColor = {
    type: "linear",
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [{
            offset: 0,
            color: "rgba(128,255,222,1)"
        },
        {
            offset: 0.6,
            color: "rgba(128,255,222,.8)"
        },
        {
            offset: 1,
            color: "rgba(128, 255, 222,0.1)"
        }
    ],
    global: false
};
var defaultColor = {
    type: "linear",
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [{
            offset: 0,
            color: "rgba(24,180,130, 1)" //  0%  处的颜色
        },
        {
            offset: 0.6,
            color: "rgba(24,180,130, 1)" //  0%  处的颜色
        },
        {
            offset: 1,
            color: "rgba(24,180,130, .1)" //  100%  处的颜色
        }
    ],
    global: false //  缺省为  false
};
var option = {
    tooltip: {
        trigger: "axis",
        formatter: "{b}: {c}件"
    },
    grid: {
        left: "5%",
        top: "0%",
        bottom: "10%",
        right: "5%"
    },
    xAxis: {
        data: xAxisData,
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: "#E8FDFE",
                fontSize: 24,
                padding: [10, 0]
            }
        }
    },
    yAxis: [{
        splitNumber: 2,
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitArea: {
            areaStyle: {
                color: "rgba(255,255,255,.5)"
            }
        },
        splitLine: {
            show: false
        }
    }],
    series: [{
            name: "hill",
            type: "pictorialBar",
            barCategoryGap: "0%",
            barWidth: '150%',
            symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
            label: {
                show: true,
                position: "top",
                distance: 55,
                color: "#00FFEA",
                fontWeight: "bolder",
                fontSize: 23,
                formatter: function(params) {
                    return params.value + ' 件'
                },
            },

            itemStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: '#13DEF6' // 0% 处的颜色
                        }, {
                            offset: 0.9,
                            color: '#102735' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    }
                },
                emphasis: {
                    opacity: 1
                }
            },

            markLine: {
                silent: true,
                symbol: "none",
                label: {
                    position: "top",
                    formatter: ""
                },
                data: [{
                    type: "max",
                    lineStyle: {
                        color: "#7af0ff"
                    }
                }]
            },
            data: seriesData,
            z: 10
        },
        {
            name: "hill",
            type: "line",
            symbolOffset: [0, -30],
            lineStyle: {
                color: 'transparent'
            },
            barCategoryGap: "0%",
            symbol: function(data, params) {
                if (params.name == '表扬') {
                    return path[0]
                }
                if (params.name == '建议') {
                    return path[1]
                }
                if (params.name == '咨询') {
                    return path[2]
                }
                if (params.name == '投诉') {
                    return path[3]
                }
                if (params.name == '求助') {
                    return path[4]
                }
                if (params.name == '举报') {
                    return path[5]
                }

            },
            symbolSize: 40,


            data: seriesData,
            z: 10
        }
    ]
};