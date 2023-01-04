const  { Seeder } = require('mongoose-data-seed');
const Todo = require('./todo');

const data = [  {
    name: "accent chair",
    userId : "63b552827c8ea614c0e87f9d",
    content: "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge"
  },
  {
    name: "albany sectional",
    userId : "63b552827c8ea614c0e87f9d",
    content: "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge"
  }];

class UsersSeeder extends Seeder {

  async shouldRun() {
    const todoCount =  await Todo.count().exec();

    return todoCount === 0;
  }

  async run() {
    return Todo.create(data);
  }
}
const seed = new UsersSeeder()
seed.run()
module.exports = UsersSeeder;