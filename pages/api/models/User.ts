import { DataTypes, Model } from 'sequelize';
import sequelize from '../database';

class User extends Model {
  public user_id!: string; 
  public name!: string; 
  public email!: string;
  public password!: string; 
  public admin!: boolean;

}

User.init(
  {
    user_id: {
      type: DataTypes.STRING, 
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
        type: DataTypes.STRING, 
        allowNull: false,
    },
    admin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
    }
  },
  {
    sequelize,
    tableName: 'users',
    timestamps: true,
    underscored: true,
  }
);


export default User;