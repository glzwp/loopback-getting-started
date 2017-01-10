module.exports = function (app) {
    var router = app.loopback.Router();
    //var coffee = app.models.CoffeeShop;
    var reviewer = app.models.Reviewer;
    router.get('/ping', function (req, res) {
        reviewer.find({ where: { email: "jane@doe.com" }},function (err, instance) {
            var response = "Password of JaneDoe is  " + instance[0].password;
            res.send(response);
            console.log(response);
        });
        //coffee.status(function (d, response) {
        //    res.send(response);
        //});
        //res.send('pongaroo');
    });
    app.use(router);
}