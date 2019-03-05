import React,{Component} from 'react';


class SearchHero extends Component{

    render(){
        return(
            <section class="dzsparallaxer auto-init height-is-based-on-content use-loading" data-options='{direction: "reverse", settings_mode_oneelement_max_offset: "150"}'>
              <div class="divimage dzsparallaxer--target w-100 g-bg-cover g-bg-white-gradient-opacity-v3--after" style={{height:'140%',backgroundImage: 'url(../../assets/img-temp/1920x800/img10.jpg)'}}></div>
        
              <div class="container text-center g-py-100--md g-py-80">
                <h2 class="h1 text-uppercase g-font-weight-300 g-mb-30">Search Results</h2>
        
                <form class="g-width-60x--md mx-auto">
                  <div class="form-group g-mb-20">
                    <div class="input-group u-shadow-v21 rounded g-mb-15">
                      <input class="form-control form-control-md g-brd-white g-font-size-16 border-right-0 pr-0 g-py-15" type="text" placeholder="Where can I download some freebies?"/>
                      <div class="input-group-addon d-flex align-items-center g-bg-white g-brd-white g-color-gray-light-v1 g-pa-2">
                        <button class="btn u-btn-primary g-font-size-16 g-py-15 g-px-20" type="submit">
                          <i class="icon-magnifier g-pos-rel g-top-1"></i>
                        </button>
                      </div>
                    </div>
                    <small class="form-text g-opacity-0_8 g-font-size-default">Search any words, questions and so on here.</small>
                  </div>
                </form>
              </div>
            </section>
        )
    }
}

export default SearchHero;