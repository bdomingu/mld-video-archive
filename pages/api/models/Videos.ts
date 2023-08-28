import { DataTypes, Model } from 'sequelize';
import sequelize from '../database';
import Member from './Member';


class Video extends Model {
  public member_id!: string; 
  public video_id!: string;
  public name!: string; 
  public watched!: boolean;
  public completed!: boolean; 
}

Video.init(
  {
    member_id: {
      type: DataTypes.STRING,
      references: {model: 'members', key:'member_id'}
    
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

Video.belongsTo(Member, { foreignKey: 'member_id'});


export default Video;