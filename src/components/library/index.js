import XtxSkeleton from './xtx-skeleton.vue'
import XtxCarousel from './xtx-carousel.vue'
import XtxMore from './xtx-more.vue'
import { defineDirective } from '@/utils/lazyImg'
import XtxBread from './xtx-bread.vue'

export default {
    install(app) {
        app.component(XtxBread.name, XtxBread)
        app.component(XtxSkeleton.name, XtxSkeleton)
        app.component(XtxCarousel.name, XtxCarousel)
        app.component(XtxMore.name, XtxMore)
        defineDirective(app)
    }
}
