var contentView;

var images_dir = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, 'images', 'loRes');
if(images_dir.exists()) {

    var one = '/images/loRes/one.jpg';
    var two = '/images/loRes/two.jpg';
    var three = '/images/loRes/three.jpg';
    var four = '/images/loRes/four.jpg';
    var five = '/images/loRes/five.jpg';
    var six = '/images/loRes/six.jpg';
    var seven = '/images/loRes/seven.jpg';
    var eight = '/images/loRes/eight.jpg';
    var nine = '/images/loRes/nine.jpg';
    var ten = '/images/loRes/ten.jpg';

    var allImagesArr = [one,two,three,four,five,six,seven,eight,nine,ten];
}

var curMedia;

function load() {
    contentView = Alloy.createController('media/slideshow').getView();
    contentView.updateToolbar = function(e) {  
        if (curMedia != slides[e.currentPage].media) {
            curMedia = slides[e.currentPage].media;
        }    
    };
    
    var slides = [];
    
    allImagesArr.forEach(function(doc) {
        slides.push(Alloy.createController('media/slide', doc).getView());
    })
        
    contentView.views = slides;
    // contentView.scrollToView(allImagesArr.index);
    $.content.add(contentView);
}

function close(e) {
    $.main.close({
        opacity: 0,
        duration: 200
    });
}


