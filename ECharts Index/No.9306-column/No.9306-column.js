var imgDatUrl = 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAsCAYAAACkJ9JhAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjRENDQzQTlDMTcyQTExRUFBRTJEODRGQTNBQjdGRTREIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjRENDQzQTlEMTcyQTExRUFBRTJEODRGQTNBQjdGRTREIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NEQ0NDNBOUExNzJBMTFFQUFFMkQ4NEZBM0FCN0ZFNEQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NEQ0NDNBOUIxNzJBMTFFQUFFMkQ4NEZBM0FCN0ZFNEQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5LEcNnAAAANUlEQVR42mL4v5P1PxPDt/8MTAxAQDzByQgkJBhJ1UYswcUEJB7/BRKf/pNjwL//DJ8AAgwAHqYL9/AEw5wAAAAASUVORK5CYII='
var imgDatUr2 = 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAsCAYAAACkJ9JhAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjg3QkI3QzgzMTcyQTExRUE4Rjk2QTJDMjIwREEwQkU3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjg3QkI3Qzg0MTcyQTExRUE4Rjk2QTJDMjIwREEwQkU3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODdCQjdDODExNzJBMTFFQThGOTZBMkMyMjBEQTBCRTciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6ODdCQjdDODIxNzJBMTFFQThGOTZBMkMyMjBEQTBCRTciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5oJdPRAAAANUlEQVR42mL4P1H9PxPDl98MTAxAQDzBxQYkZLhJ1UYsIcAHJO6+ARJvv5JjwL//DJ8AAgwAHJ0L6/Zaau4AAAAASUVORK5CYII='
var imgDatUr3 = 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAsCAYAAACkJ9JhAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkEyNERBQkU2MTcyQTExRUE5RUEwQkQxQ0U3RDVCRUE5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkEyNERBQkU3MTcyQTExRUE5RUEwQkQxQ0U3RDVCRUE5Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QTI0REFCRTQxNzJBMTFFQTlFQTBCRDFDRTdENUJFQTkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QTI0REFCRTUxNzJBMTFFQTlFQTBCRDFDRTdENUJFQTkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6ZhOKOAAAANUlEQVR42mL4H6f2n4nh628GJgYgIJ7gYgMSEtykaiOWEOEDEnffAIm3X8kx4B8DwyeAAAMA7LcKud8lNxIAAAAASUVORK5CYII='
var imgDatUr4 = 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAsCAYAAACkJ9JhAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkIyNjQ3QjNCMTcyQTExRUFCMjk5RkU1MzFGMzBFRUQwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkIyNjQ3QjNDMTcyQTExRUFCMjk5RkU1MzFGMzBFRUQwIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QjI2NDdCMzkxNzJBMTFFQUIyOTlGRTUzMUYzMEVFRDAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QjI2NDdCM0ExNzJBMTFFQUIyOTlGRTUzMUYzMEVFRDAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4fe65uAAAANUlEQVR42mL4r6v5n4nh1y8GJgYgIJ5gYwMSfDykaiOWEOADEi9fA4nPX8kx4B8DwyeAAAMAw8QKjyff380AAAAASUVORK5CYII='
var imgDatUr5 = 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAsCAYAAACkJ9JhAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkJGNDAyQjFFMTcyQTExRUE5RUVEOEY3QkZDNDMxQzE2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkJGNDAyQjFGMTcyQTExRUE5RUVEOEY3QkZDNDMxQzE2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QkY0MDJCMUMxNzJBMTFFQTlFRUQ4RjdCRkM0MzFDMTYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QkY0MDJCMUQxNzJBMTFFQTlFRUQ4RjdCRkM0MzFDMTYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4tP1CaAAAANUlEQVR42mL4r5T9n4nh91cGJgYgIJ5g5QYS3JKkaiOW4BUBEm/vAIlvb8gx4B/D/08AAQYA9noLwTQtXCEAAAAASUVORK5CYII='
var imgDatUr6 = 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAsCAYAAACkJ9JhAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkNCNzVCQjg2MTcyQTExRUFCRjAzRjFCRkZGQjA5QjZEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkNCNzVCQjg3MTcyQTExRUFCRjAzRjFCRkZGQjA5QjZEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Q0I3NUJCODQxNzJBMTFFQUJGMDNGMUJGRkZCMDlCNkQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Q0I3NUJCODUxNzJBMTFFQUJGMDNGMUJGRkZCMDlCNkQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7pfn+VAAAAMklEQVR42mL4rfT/P9P/3wwMTAwMpBCsQIKZm2RtxBK8QOLfWyDx/xtZBvxn+PcJIMAAcaAMW+aJ6oUAAAAASUVORK5CYII='
var imgDatUr7 = 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAsCAYAAACkJ9JhAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkQ5NTEwNzE5MTcyQTExRUFBQzM0QjY3RDE0NzM2MDBFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkQ5NTEwNzFBMTcyQTExRUFBQzM0QjY3RDE0NzM2MDBFIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDk1MTA3MTcxNzJBMTFFQUFDMzRCNjdEMTQ3MzYwMEUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RDk1MTA3MTgxNzJBMTFFQUFDMzRCNjdEMTQ3MzYwMEUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7xTUIZAAAANElEQVR42mKol/v/n+nLHwYGJgYGEghuFiAhzUWqNmIJYR4gcfs9kHjznSwD/jP8+wQQYAAI7AvRlOXKZQAAAABJRU5ErkJggg=='
var imgDatUr8 = 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAsCAYAAACkJ9JhAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTgwQjNGMTcyQTExRUE4NUZFQUIyQzQxQzlCMTgyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkU1MTgwQjQwMTcyQTExRUE4NUZFQUIyQzQxQzlCMTgyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RTUxODBCM0QxNzJBMTFFQTg1RkVBQjJDNDFDOUIxODIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RTUxODBCM0UxNzJBMTFFQTg1RkVBQjJDNDFDOUIxODIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7XCxieAAAAM0lEQVR42mKQmfL/P9OfLwwMTAwMJBAsXECCU4ZUbcQSPAJA4v0dIPHjHXmm/P/3CSDAABc+C+SbSz+4AAAAAElFTkSuQmCC'
var imgDatUr9 = 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAsCAYAAACkJ9JhAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkZGODVCREFGMTcyQTExRUE5NDhDOTg0RUY5MzYzMDI2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkZGODVCREIwMTcyQTExRUE5NDhDOTg0RUY5MzYzMDI2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RkY4NUJEQUQxNzJBMTFFQTk0OEM5ODRFRjkzNjMwMjYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RkY4NUJEQUUxNzJBMTFFQTk0OEM5ODRFRjkzNjMwMjYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5KltBvAAAANElEQVR42mLI/v7/P9PXfwwMTAwMJBDcjEBCkpVUbcQSIiDj7/wGEm/+kWXA////PgEEGACx/Q2YvFy1EQAAAABJRU5ErkJggg=='
var imgDatUr10 = 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAsCAYAAACkJ9JhAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjBBM0FEMzczMTcyQjExRUFCNjA3ODcwNEUzNzVFODcxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjBBM0FEMzc0MTcyQjExRUFCNjA3ODcwNEUzNzVFODcxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MEEzQUQzNzExNzJCMTFFQUI2MDc4NzA0RTM3NUU4NzEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MEEzQUQzNzIxNzJCMTFFQUI2MDc4NzA0RTM3NUU4NzEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7TuXX2AAAAPklEQVR42mLo+3/yP9MXhu8MTAxAQDTBzcDOwLDi/53/pGkjkmDY+f/Jf6Y7DM8ZmN4yfCXHlP///n8CCDAAnbQUVVBOLMQAAAAASUVORK5CYII='

//可以自定义不同纹理背景

var dimensions = ['J', 'I', 'H', 'G', 'F', 'E', 'D', 'C', 'B', 'A'];
var option = {
    backgroundColor: '#070b1c',
    tooltip: {
        show: true,
        formatter: "{b}:{c}"
    },
    yAxis: {
        data: dimensions,
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#1d356f'
            }
        },
        axisLabel: {
            textStyle: {
                color: '#FFF'
            },
            margin: 20,
        },
    },
    xAxis: {
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#1d356f'
            }
        },
        axisLabel: {
            textStyle: {
                color: '#bcfff7'
            },
        }
    },
    series: [{
        name: '本月',
        type: 'pictorialBar',
        label: {
            normal: {
                show: true,
                position: 'right',
                formatter: '{c}',
                textStyle: {
                    color: '#fff'
                }
            }
        },
        barGap: 0,
        barWidth:20,
        symbolSize: ['100%', '100%'],
        data: [{
            value: 40,
            symbol: imgDatUrl,
        }, {
            value: 30,
            symbol: imgDatUr2,
        }, {
            value: 45,
            symbol: imgDatUr3,
        }, {
            value: 56,
            symbol: imgDatUr4,
        }, {
            value: 38,
            symbol: imgDatUr5,
        }, {
            value: 49,
            symbol: imgDatUr6,
        }, {
            value: 32,
            symbol: imgDatUr7,
        }, {
            value: 38,
            symbol: imgDatUr8,
        }, {
            value: 42,
            symbol: imgDatUr9,
        }, {
            value: 32,
            symbol: imgDatUr10,
        }]
    }]
};