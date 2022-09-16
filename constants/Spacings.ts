const RATIO = 1.5;
const BASE_SIZE = 16;

const Spacings = {
    none: 0,
    _s3: BASE_SIZE / RATIO / RATIO / RATIO,
    _s2: BASE_SIZE / RATIO / RATIO ,
    _s1: BASE_SIZE / RATIO ,
    s0: BASE_SIZE ,
    s1: BASE_SIZE * RATIO ,
    s2: BASE_SIZE * RATIO * RATIO ,
    s3: BASE_SIZE * RATIO * RATIO * RATIO,
};

export default Spacings