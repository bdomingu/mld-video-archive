import { DataTypes, Model } from 'sequelize';
import sequelize from '../database';
import User from '../models/User'


class Video extends Model {
  public user_id!: string; 
  public video_id!: string;
  public name!: string; 
  public watched!: boolean;
  public completed!: boolean; 
}

Video.init(
  {
    user_id: {
      type: DataTypes.STRING,
      references: {model: 'users', key:'user_id'}
    
    },
    video_id: {
      type: DataTypes.STRING, 
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    watched: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    completed: {
      type: DataTypes.BOOLEAN, 
      allowNull: false,
    },
   
  },
  {
    sequelize,
    tableName: 'videos',
    timestamps: true,
    underscored: true,
  }
);

Video.belongsTo(User, { foreignKey: 'user_id'});


export default Video;