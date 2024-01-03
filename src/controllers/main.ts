import { NextFunction, Request, Response } from 'express';
import { Controller } from '../decorators/controller';
import { Route } from '../decorators/route';

@Controller('/main')
class MainController {
    @Route('get', '/healthcheck')
    getHealthCheck(req: Request, res: Response, next: NextFunction) {
        logging.info('Healthcheck route called successfully!');
        return res.status(200).json({ hello: 'world!' });
    }
}

export default MainController;
