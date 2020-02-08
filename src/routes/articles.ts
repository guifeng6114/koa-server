import * as Router from 'koa-router';

import readFile from '../lib/read-file';

const router = new Router();

router.get('/', async (ctx) => {
    const articleList = await readFile('./assets/data/article-list.json');
    ctx.body = {
        status: 'SUCCESS',
        data: JSON.parse(articleList.toString()),
        error: null
    };
    console.log('complete');
});

export default router.routes();