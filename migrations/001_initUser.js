module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('user', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            user_name: {
                allowNull: true,
                type: Sequelize.STRING,
            },
            gender: {
                allowNull: true,
                type: Sequelize.ENUM('MALE', 'FEMALE'),
            },
            role: {
                allowNull: false,
                type: Sequelize.ENUM('ADMIN', 'USER')
            },
            password: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            created_at: {
                allowNull: false,
                type: Sequelize.DATE(3),
                defaultValue: Sequelize.literal("CURRENT_TIMESTAMP(3)")
            },
            update_at: {
                allowNull: false,
                type: Sequelize.DATE(3),
                defaultValue: Sequelize.literal("CURRENT_TIMESTAMP(3)")
            }
        })
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('user')
    }
}