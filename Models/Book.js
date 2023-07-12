module.exports = (sequelize, Sequelize) => {
    const Tutorial = sequelize.define("book", {
        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        published: {
            type: Sequelize.BOOLEAN
        }
    });

    return Tutorial;
};