import Baobab from 'baobab';

const tree = new Baobab({
    views: {
        table: ['yellow', 'blue', 'orange'],
        list: [
            {
                name: '苹果',
                code: '0101',
                desc: '又脆又甜',
                isSale: 1,            
                shopList: [
                    {
                        shopId: '101',
                        shopName: '一号店',
                        price: 5,
                        unit: '斤',
                    }
                ]
            },
            {
                name: '橘子',
                code: '0102',
                desc: '很甜',
                isSale: 0,            
                shopList: [
                    {
                        shopId: '101',
                        shopName: '一号店',
                        price: 3,
                        unit: '斤',
                    }
                ]
            },
            {
                name: '梨',
                code: '0103',
                desc: '个大，脆，甜',
                isSale: 1,            
                shopList: [
                    {
                        shopId: '101',
                        shopName: '一号店',
                        price: 4,
                        unit: '斤',
                    }
                ]
            },
            {
                name: '香蕉',
                code: '0104',
                desc: '海南特产',
                isSale: 1,            
                shopList: [
                    {
                        shopId: '101',
                        shopName: '一号店',
                        price: 3,
                        unit: '斤',
                    },
                    {
                        shopId: '103',
                        shopName: '三号店',
                        price: 4,
                        unit: '斤',
                    },
                ]
            },
            {
                name: '甘蔗',
                code: '0105',
                desc: '水多，很甜',
                isSale: 0,            
                shopList: [
                    {
                        shopId: '101',
                        shopName: '一号店',
                        price: 10,
                        unit: '棵',
                    },
                    {
                        shopId: '102',
                        shopName: '二号店',
                        price: 9,
                        unit: '棵',
                    }
                ]
            }
        ]
    },
    searchArea: {}
});

export default tree;