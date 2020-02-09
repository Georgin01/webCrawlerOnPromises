//Експортируемая функция для перевода callbackBasedApi на использовние объектов Promise.

module.exports.promisify = function(callbackBasedApi) {
    return function promisified() {
        let args = [].slice.call(arguments);

        return new Promise((resolve, reject) => {
            //Добавляем в список аргументов возвращаемой функции callback
            args.push((err, result) => {
                if(err) {
                    return reject(err);
                }
                if(arguments.length <= 2) {
                    resolve(result);
                } else {
                    resolve([].slice.call(arguments, 1));
                }
            });
            //Вызываем callbackBasedApi с созданным списком аргументов
            callbackBasedApi.apply(null, args);
        });
    }
};