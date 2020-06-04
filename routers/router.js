const ConsoleControllerClass =  require('../app/controllers/ConsoleController');
const ConsoleController      = new ConsoleControllerClass();

Router.group('/get-console', (Router) => {
    Router.post('/', ConsoleController.index);
});

module.exports = Router;