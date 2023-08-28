import { DataTypes, Model } from 'sequelize';
import sequelize from '../database';

class Member extends Model {
  public member_id!: string; 
  public name!: string; 
  public email!: string;
  public password!: string; 
  public admin!: boolean;

}

Member.init(
  {
    member_id: {
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
    tableName: 'members',
    timestamps: true,
    underscored: true,
  }
);


export default Member;