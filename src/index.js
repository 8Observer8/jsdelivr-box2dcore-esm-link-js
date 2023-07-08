import box2d from "@box2d/core";

function init() {
    const {
        b2Vec2
    } = box2d;

    const vec = new b2Vec2(1, 2);
    console.log(`vec = (x: ${vec.x}, y: ${vec.y})`);
}

init();
