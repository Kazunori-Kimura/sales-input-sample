export type ScreenMode = 'sales' | 'slip' | 'signature';

export type DetailMode = 'list' | 'form';

export type FormMode = 'add' | 'edit';

/*
    商品コード
    商品名
    納品日
    単位（ケース/バラ）
    ケース数
    バラ数
    総数
    単価
    小売
    原価
    粗利
    売上
*/
export type ProductUnit = 'ケース' | 'バラ';

export interface SalesDetailAttributes {
    id: number;
    // 商品コード
    productCode: string;
    // 商品名
    productName: string;
    // 納品日
    dueDate: string;
    // 単位
    unit: ProductUnit;
    // 入数
    perbox: number;
    // ケース数
    boxes: number;
    // バラ数
    pieces: number;
    // 総数
    total: number;
    // 単価
    unitPrice: number;
    // 小売
    retailPrice: number;
    // 原価
    cost: number;
    // 粗利
    grossProfit: number;
    // 売上
    sales: number;
}
