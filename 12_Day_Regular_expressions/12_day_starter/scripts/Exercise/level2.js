  paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`
console.log(tenMostFrequentWords(paragraph))
function tenMostFrequentWords(text) {
    const words = text.toLowerCase().match(/\b\w+\b/g);
    const frequency = {};
    words.forEach(word => {
        frequency[word] = (frequency[word] || 0) + 1;
    });
    return Object.entries(frequency).sort((a, b) => b[1] - a[1]).slice(0, 10).map(([word, count]) => ({ word, count }));
}
console.log(tenMostFrequentWords(paragraph, 10))