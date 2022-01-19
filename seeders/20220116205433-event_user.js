'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert(
      'event_users',
      [
        {
          eventId: 5,
          attendeeId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          eventId: 5,
          attendeeId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          eventId: 6,
          attendeeId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('event_users', null, {});
  }
};
