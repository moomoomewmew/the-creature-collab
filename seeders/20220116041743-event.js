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
        },
        {
          name: 'Mission: Keep it Secret, Keep it Safe',
          city: 'The Shire',
          ownerId: 1,
          time: '06:00:00',
          date: '2022-09-23T00:00:00.000Z',
          online: false,
          outdoor: true,
          address: 'Bag End',
          state: 'Hobbiton',
          description:
            'No one was really invited to this ... but 8 are coming along.',
          picture:
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP._PCSEbndYs2GR2AZrBQNHQHaEm%26pid%3DApi&f=1',
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
