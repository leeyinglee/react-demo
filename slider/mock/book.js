const Mock = require('mockjs');

const { mock } = Mock;

const images = [
  'http://img3m9.ddimg.cn/6/11/29144319-4_u_3.jpg',
  'http://img3m0.ddimg.cn/79/6/23692660-2_u_6.jpg',
  'http://img3m5.ddimg.cn/88/7/29199445-1_u_11.jpg',
  'http://img3m7.ddimg.cn/80/23/25301807-2_u_6.jpg',
  'http://img3m3.ddimg.cn/71/1/23730173-3_u_4.jpg',
  'http://img3m2.ddimg.cn/14/15/25300652-4_u_3.jpg',
  'http://img3m6.ddimg.cn/16/30/24157996-2_u_2.jpg',
  'http://img3m9.ddimg.cn/72/28/23338629-2_u_1.jpg',
  'http://img3m6.ddimg.cn/57/27/1763113926-1_u_5.jpg',
  'http://img3m4.ddimg.cn/49/29/24041704-2_u_9.jpg',
  'http://img3m3.ddimg.cn/18/20/23762493-3_u_1.jpg',
  'http://img3m5.ddimg.cn/90/4/24036795-2_u_15.jpg',
  'http://img3m2.ddimg.cn/12/15/25213332-2_u_3.jpg',
  'http://img3m1.ddimg.cn/29/31/23612321-3_u_1.jpg',
  'http://img3m3.ddimg.cn/39/28/29216523-5_u_8.jpg',
];

export default [
  {
    url: /\/api\/v1\/books/,
    method: 'get',
    response: () => {
      return {
        code: 0,
        data: mock({
          'list|4-20': [
            {
              'id|+1': 1,
              author: '@cname',
              price: '@float(0, 50, 2, 2)',
              title: '@ctitle(4, 12)',
              cover: `@pick(${images})`,
              label: '@pick([1, 2, 3])',
            },
          ],
        }),
      };
    },
  },
];
