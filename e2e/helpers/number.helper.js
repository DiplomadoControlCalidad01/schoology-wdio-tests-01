
class NumberHelper{
    /**
     * Returns a random number between min (inclusive) and max (exclusive)
     */
    static getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }

    /**
     * Returns a double random number of 16 digits
     */
    static getRandomNumber() {
        return this.getRandomArbitrary(100,999);
    }
}
module.exports = NumberHelper;