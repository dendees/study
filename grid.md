# grid布局

## grid布局和flex布局的区别

> flex布局是轴线布局，可以针对项目对轴线的位置。可以看做是一维布局
> grid布局是把容器分为行和列，根据行列产生单元格，指定项目所在单元格。可以看做是二维布局

## 基本概念

### 容器container和项目item
使用网格布局的区域，成为容器。容器内部采用网格定位的子元素，称为项目。而子元素的子元素，不能称为项目

### 行row和列column
容器内部水平区域成为行，垂直区域称为列

### 单元格 cell
行和列交叉的区域，称为单元格。正常 n行和m列会产生 m*n个单元格

### 网格线 grid Line
划分网格的线，称为网格线。n行有n+1条网格线。m列有m+1 条网格线

### 属性
grid有两种属性，一种是定义在容器上，成为容器属性。另一种是定义在项目上，称为项目属性

## 容器属性

1. display: grid - 此容器内部采用grid布局，默认容器是块元素。容器元素的子元素的 float属性、display： inline-block、display: table-cell、vertical-align 等全部失效。
2. display; inline-grid - 容器为行内元素
3. grid-template-rows: 定义每一行的行高
4. grid-template-columns: 定义每一列的列宽

### grid-template-rows、grid-template-columns属性
1. grid-template-rows: 100px 100px 100px;
2. grid-template-rows: 25% 50% 30%
3. grid-template-rows: repeat(3, 33.33%),grid-template-rows: repeat(3, 33.33% 10% 15%)
4. grid-template-columns: repeat(auto-fill, 100px) 自动填充满
5. grid-template-columns: 150px 1fr 2fr fr（friction的缩写）表示比例关系




