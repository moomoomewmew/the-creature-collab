'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert(
      'events',
      [
        {
          name: "Bilbo's 111th Birthday Party!",
          city: 'The Shire',
          ownerId: 2,
          time: '17:00:00',
          date: '2022-09-22',
          online: false,
          address: 'Bag End',
          state: 'Hobbiton',
          description:
            'Come celebrate with feasting, firework wizardry, and an epic speech!',
          picture:
            'https://i0.wp.com/www.feastofstarlight.com/wp-content/uploads/2015/09/the-lord-of-the-rings-bilbos-birthday-main-ori_fotor.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('events', null, {});
  }
};
