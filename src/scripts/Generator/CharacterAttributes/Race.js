/**
 * Simple character attribute class representation.
 * Sends in the corresponding table name to its
 * parent class so it pulls the correct data.
 *
 * @class
 * @extends CharacterAttribute
 * @author  Ryan Burst <ryanburst@gmail.com>
 * @version 0.1.0
 */
class Race extends CharacterAttribute {
  /**
   * Passes table name to super class
   *
   * @constructs Race
   */
  constructor(options) {
    options = Object.assign({tableName: 'race'},options);


    if( options.fetch !== 'random' ) {
      options.tableName = 'race-full';

      // Randomly select from the full race list instead of the
      // truncated race tables in the book.
      if( options.fetch === 'random-full' ) {
        options.fetch = 'random';
      }
    }

    super(options);
  }
}
