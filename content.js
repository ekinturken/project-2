
muppets= ["Kermit", "Miss Piggy", "Gonzo", "Fozzie", "Elmo"];
chrome.storage.sync.get({muppetOrder:""}, function(result) {
  var html = document.querySelector('html');
  var walker = document.createTreeWalker(html, NodeFilter.SHOW_TEXT);
  var node;
  while (node = walker.nextNode()) {
    node.nodeValue = node.nodeValue.replace(/Biden/gi, muppets[result.muppetOrder[0]])
    node.nodeValue = node.nodeValue.replace(/Pelosi/gi, muppets[result.muppetOrder[1]])
    node.nodeValue = node.nodeValue.replace(/Trump/gi, muppets[result.muppetOrder[2]])
    node.nodeValue = node.nodeValue.replace(/Schumer/gi, muppets[result.muppetOrder[3]])
    node.nodeValue = node.nodeValue.replace(/AOC/gi, muppets[result.muppetOrder[4]])

  }
});
