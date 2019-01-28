
class NumberHelper{
    /**
     * Returns a random number between min (inclusive) and max (exclusive)
     */
    static getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }

    /**
     * Returns a double random number of 17 digits, 3 integers and 14 decimal
     * example: 231.62189826887374
     *
     */
    static getRandomNumber() {
        return this.getRandomArbitrary(100,999);
    }
}
module.exports = NumberHelper;