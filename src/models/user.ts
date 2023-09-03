import db from "../config/db.ts";

import { DataTypes } from "sequelize";

const User = db.define('User', {
    userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    userName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userArrivalDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    userThemeGoal: {
        type: DataTypes.STRING
    },
    userDetailGoal: {
        type: DataTypes.STRING
    }
},{
    timestamps: false
})

export default User