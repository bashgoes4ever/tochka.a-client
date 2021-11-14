<template>
  <div>
    <Breadcrumbs>
      <template v-slot:links>
        <NuxtLink to="/">Главная</NuxtLink>
        /
        <span>Корзина</span>
      </template>
    </Breadcrumbs>

    <section class="basket">
      <div class="container">
        <div class="basket-flex flex-between align-start">
          <div class="left">
            <div class="head">{{ productsString }} в корзине</div>
            <div class="products">
              <ProductInBasket
                v-for='product in $store.getters["basket/basket"]'
                :key="product.id"
                :data="product"
              />
            </div>
            <div class="basket-total">
              <div v-if='totalDiscount' class="total-discount flex-between">
                <span>Сумма скидки</span>
                <span>{{ totalDiscount - totalPrice }} руб.</span>
              </div>
              <div class="total-price flex-between" v-if="totalPrice">
                <span>Итого</span>
                <div class="flex-start align-end">
                  <div class="old-price" v-if='$store.getters["basket/totalDiscount"]'>
                    {{ totalDiscount }} руб.
                  </div>
                  <span>{{ totalPrice }} руб.</span>
                </div>
              </div>
            </div>
          </div>
          <form class="right">
            <div class="title">Оформить заказ</div>
            <date-picker
              valueType="timestamp"
              @change="$store.dispatch('basket/checkAvailability', {
                from: form.date[0],
                to: form.date[1]
              })"
              v-model="form.date"
              input-class="date-picker"
              :disabled-date="disableDate"
              format="DD MMMM"
              range-separator=" - "
              type="date"
              range
              placeholder="Даты бронирования"
            ></date-picker>
            <input type="text" placeholder="Имя" v-model="form.name">
            <input type="text" placeholder="Телефон*" v-model="form.phone">
            <input type="text" placeholder="Email*" v-model="form.email">
            <textarea placeholder="Комментарий к заказу" v-model="form.comment"></textarea>
            <div class="title payment-title">Выберите способ оплаты</div>
            <FilterCheckbox :group="payment" v-model="payment.bank_card">Банковская карта</FilterCheckbox>
            <FilterCheckbox :group="payment" v-model="payment.cash_courier">Наличными курьеру</FilterCheckbox>
            <FilterCheckbox :group="payment" v-model="payment.cash_shop">Наличными в магазине</FilterCheckbox>
            <div class="payment-icons">
              <div class="grid">
                <div class="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 120">
                    <!-- Generator: Sketch 60.1 (88133) - https://sketch.com -->
                    <title>mir-logo</title>
                    <desc>Created with Sketch.</desc>
                    <defs>
                      <linearGradient x1="100%" y1="62.9043048%" x2="0%" y2="62.9043048%" id="linearGradient-1">
                        <stop stop-color="#1F5CD7" offset="0%"/>
                        <stop stop-color="#02AEFF" offset="100%"/>
                      </linearGradient>
                    </defs>
                    <g id="sim" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <g id="mir-logo" transform="translate(31.000000, 13.000000)">
                        <g id="Group-5">
                          <path
                            d="M32.5505663,0.0163847792 C35.6952917,-0.00242815539 45.0412371,-0.844175419 49,12.5166493 C51.6666667,21.5166493 55.9145075,36.259066 61.7435225,56.7438993 L61.7435225,56.7438993 L64.1174373,56.7438993 C70.3685427,35.1473512 74.6627303,20.4049345 77,12.5166493 C81,-0.983350676 91,0.0166493236 95,0.0166493236 L125.86096,0.0166878181 L125.86096,96.0164413 L94.4066344,96.0164413 L94.4066344,39.4421872 L92.2973975,39.4421872 L74.7631716,96.0164413 L51.0977882,96.0164413 L33.5635623,39.4002658 L31.4543254,39.4002658 L31.4543254,96.0164413 L0,96.0164413 L0,0.0166878181 Z M171.028726,0.0166878181 L171.028726,56.6330713 L173.537996,56.6330713 L194.866787,10.0778192 C199.007082,0.813194049 207.831347,0.0166878181 207.831347,0.0166878181 L207.831347,0.0166878181 L238.269736,0.0166878181 L238.269736,96.0166493 L206.158501,96.0166493 L206.158501,39.4002658 L203.649231,39.4002658 L182.738651,85.955518 C178.598356,95.1782217 169.35588,96.0166493 169.35588,96.0166493 L138.917491,96.0166493 L138.917491,0.0166878181 L171.028726,0.0166878181 Z M349.260509,45.6365042 C344.781335,58.3294446 330.714922,67.4197682 315.141489,67.4197682 L315.141489,67.4197682 L281.466507,67.4197682 L281.466507,96.0166493 L250.930615,96.0166493 L250.930615,45.6365042 Z"
                            id="Combined-Shape" fill="#0F754E"/>
                          <path
                            d="M316.614216,0.0166878181 L249.329298,0.0166878181 C250.930615,21.3895399 269.336373,39.6860934 288.390129,39.6860934 L351.3823,39.6860934 C355.0174,21.922741 342.503442,0.0166878181 316.614216,0.0166878181 Z"
                            id="path24" fill="url(#linearGradient-1)"/>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <div class="icon">
                  <svg viewBox="0 0 1000.046 323.653">
                    <metadata id="metadata23">
                      <rdf:RDF>
                        <cc:Work rdf:about="">
                          <dc:format>image/svg+xml</dc:format>
                          <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/>
                          <dc:title/>
                        </cc:Work>
                      </rdf:RDF>
                    </metadata>
                    <defs id="defs21">


                    </defs>
                    <sodipodi:namedview pagecolor="#ffffff" bordercolor="#666666" borderopacity="1" objecttolerance="10"
                                        gridtolerance="10" guidetolerance="10" inkscape:pageopacity="0"
                                        inkscape:pageshadow="2" inkscape:window-width="1366"
                                        inkscape:window-height="705" id="namedview19" showgrid="false"
                                        inkscape:zoom="0.35355339" inkscape:cx="34.690897" inkscape:cy="131.15483"
                                        inkscape:window-x="-8" inkscape:window-y="-8" inkscape:window-maximized="1"
                                        inkscape:current-layer="Layer_1"/>
                    <g id="g4158" transform="matrix(4.4299631,0,0,4.4299631,-81.165783,-105.04783)">
                      <polygon points="116.145,95.719 97.858,95.719 109.296,24.995 127.582,24.995 " id="polygon9"
                               style="fill:#00579f"/>
                      <path
                        d="m 182.437,26.724 c -3.607,-1.431 -9.328,-3.011 -16.402,-3.011 -18.059,0 -30.776,9.63 -30.854,23.398 -0.15,10.158 9.105,15.8 16.027,19.187 7.075,3.461 9.48,5.72 9.48,8.805 -0.072,4.738 -5.717,6.922 -10.982,6.922 -7.301,0 -11.213,-1.126 -17.158,-3.762 l -2.408,-1.13 -2.559,15.876 c 4.289,1.954 12.191,3.688 20.395,3.764 19.188,0 31.68,-9.481 31.828,-24.153 0.073,-8.051 -4.814,-14.22 -15.35,-19.261 -6.396,-3.236 -10.313,-5.418 -10.313,-8.729 0.075,-3.01 3.313,-6.093 10.533,-6.093 5.945,-0.151 10.313,1.278 13.622,2.708 l 1.654,0.751 2.487,-15.272 0,0 z"
                        id="path11" inkscape:connector-curvature="0" style="fill:#00579f"/>
                      <path
                        d="m 206.742,70.664 c 1.506,-4.063 7.301,-19.788 7.301,-19.788 -0.076,0.151 1.503,-4.138 2.406,-6.771 l 1.278,6.094 c 0,0 3.463,16.929 4.215,20.465 -2.858,0 -11.588,0 -15.2,0 l 0,0 z m 22.573,-45.669 -14.145,0 c -4.362,0 -7.676,1.278 -9.558,5.868 l -27.163,64.855 19.188,0 c 0,0 3.159,-8.729 3.838,-10.609 2.105,0 20.771,0 23.479,0 0.525,2.483 2.182,10.609 2.182,10.609 l 16.932,0 -14.753,-70.723 0,0 z"
                        id="path13" inkscape:connector-curvature="0" style="fill:#00579f"/>
                      <path
                        d="M 82.584,24.995 64.675,73.222 62.718,63.441 C 59.407,52.155 49.023,39.893 37.435,33.796 l 16.404,61.848 19.338,0 28.744,-70.649 -19.337,0 0,0 z"
                        id="path15" inkscape:connector-curvature="0" style="fill:#00579f"/>
                      <path
                        d="m 48.045,24.995 -29.422,0 -0.301,1.429 c 22.951,5.869 38.151,20.016 44.396,37.02 L 56.322,30.94 c -1.053,-4.517 -4.289,-5.796 -8.277,-5.945 l 0,0 z"
                        id="path17" inkscape:connector-curvature="0" style="fill:#faa61a"/>
                    </g>
                  </svg>
                </div>
                <div class="icon">
                  <svg viewBox="0 0 999.2 776">
                    <path id="XMLID_1775_" inkscape:connector-curvature="0"
                          d="M181.1,774.3v-51.5c0-19.7-12-32.6-32.6-32.6  c-10.3,0-21.5,3.4-29.2,14.6c-6-9.4-14.6-14.6-27.5-14.6c-8.6,0-17.2,2.6-24,12v-10.3h-18v82.4h18v-45.5c0-14.6,7.7-21.5,19.7-21.5  s18,7.7,18,21.5v45.5h18v-45.5c0-14.6,8.6-21.5,19.7-21.5c12,0,18,7.7,18,21.5v45.5H181.1z M448.1,691.9h-29.2V667h-18v24.9h-16.3  v16.3h16.3v37.8c0,18.9,7.7,30,28.3,30c7.7,0,16.3-2.6,22.3-6l-5.2-15.5c-5.2,3.4-11.2,4.3-15.5,4.3c-8.6,0-12-5.2-12-13.7v-36.9  h29.2V691.9z M600.9,690.1c-10.3,0-17.2,5.2-21.5,12v-10.3h-18v82.4h18v-46.4c0-13.7,6-21.5,17.2-21.5c3.4,0,7.7,0.9,11.2,1.7  l5.2-17.2C609.4,690.1,604.3,690.1,600.9,690.1L600.9,690.1z M370,698.7c-8.6-6-20.6-8.6-33.5-8.6c-20.6,0-34.3,10.3-34.3,26.6  c0,13.7,10.3,21.5,28.3,24l8.6,0.9c9.4,1.7,14.6,4.3,14.6,8.6c0,6-6.9,10.3-18.9,10.3c-12,0-21.5-4.3-27.5-8.6l-8.6,13.7  c9.4,6.9,22.3,10.3,35.2,10.3c24,0,37.8-11.2,37.8-26.6c0-14.6-11.2-22.3-28.3-24.9l-8.6-0.9c-7.7-0.9-13.7-2.6-13.7-7.7  c0-6,6-9.4,15.5-9.4c10.3,0,20.6,4.3,25.8,6.9L370,698.7L370,698.7z M848.9,690.1c-10.3,0-17.2,5.2-21.5,12v-10.3h-18v82.4h18v-46.4  c0-13.7,6-21.5,17.2-21.5c3.4,0,7.7,0.9,11.2,1.7L861,691C857.5,690.1,852.4,690.1,848.9,690.1L848.9,690.1z M618.9,733.1  c0,24.9,17.2,42.9,43.8,42.9c12,0,20.6-2.6,29.2-9.4l-8.6-14.6c-6.9,5.2-13.7,7.7-21.5,7.7c-14.6,0-24.9-10.3-24.9-26.6  c0-15.5,10.3-25.8,24.9-26.6c7.7,0,14.6,2.6,21.5,7.7l8.6-14.6c-8.6-6.9-17.2-9.4-29.2-9.4C636.1,690.1,618.9,708.2,618.9,733.1  L618.9,733.1L618.9,733.1z M785.4,733.1v-41.2h-18v10.3c-6-7.7-14.6-12-25.8-12c-23.2,0-41.2,18-41.2,42.9c0,24.9,18,42.9,41.2,42.9  c12,0,20.6-4.3,25.8-12v10.3h18V733.1L785.4,733.1z M719.3,733.1c0-14.6,9.4-26.6,24.9-26.6c14.6,0,24.9,11.2,24.9,26.6  c0,14.6-10.3,26.6-24.9,26.6C728.8,758.8,719.3,747.6,719.3,733.1L719.3,733.1z M503.9,690.1c-24,0-41.2,17.2-41.2,42.9  c0,25.8,17.2,42.9,42.1,42.9c12,0,24-3.4,33.5-11.2l-8.6-12.9c-6.9,5.2-15.5,8.6-24,8.6c-11.2,0-22.3-5.2-24.9-19.7h60.9  c0-2.6,0-4.3,0-6.9C542.5,707.3,527,690.1,503.9,690.1L503.9,690.1L503.9,690.1z M503.9,705.6c11.2,0,18.9,6.9,20.6,19.7h-42.9  C483.3,714.2,491,705.6,503.9,705.6L503.9,705.6z M951.1,733.1v-73.8h-18v42.9c-6-7.7-14.6-12-25.8-12c-23.2,0-41.2,18-41.2,42.9  c0,24.9,18,42.9,41.2,42.9c12,0,20.6-4.3,25.8-12v10.3h18V733.1L951.1,733.1z M885,733.1c0-14.6,9.4-26.6,24.9-26.6  c14.6,0,24.9,11.2,24.9,26.6c0,14.6-10.3,26.6-24.9,26.6C894.4,758.8,885,747.6,885,733.1L885,733.1z M282.4,733.1v-41.2h-18v10.3  c-6-7.7-14.6-12-25.8-12c-23.2,0-41.2,18-41.2,42.9c0,24.9,18,42.9,41.2,42.9c12,0,20.6-4.3,25.8-12v10.3h18V733.1L282.4,733.1z   M215.5,733.1c0-14.6,9.4-26.6,24.9-26.6c14.6,0,24.9,11.2,24.9,26.6c0,14.6-10.3,26.6-24.9,26.6  C224.9,758.8,215.5,747.6,215.5,733.1z"/>
                    <g>
                      <rect id="rect19" x="364" y="66.1" fill="#FF5A00" width="270.4" height="485.8"/>
                      <path id="XMLID_330_" inkscape:connector-curvature="0" fill="#EB001B"
                            d="M382,309c0-98.7,46.4-186.3,117.6-242.9   C447.2,24.9,381.1,0,309,0C138.2,0,0,138.2,0,309s138.2,309,309,309c72.1,0,138.2-24.9,190.6-66.1C428.3,496.1,382,407.7,382,309z"/>
                      <path id="path22" inkscape:connector-curvature="0" fill="#F79E1B"
                            d="M999.2,309c0,170.8-138.2,309-309,309   c-72.1,0-138.2-24.9-190.6-66.1c72.1-56.7,117.6-144.2,117.6-242.9S570.8,122.7,499.6,66.1C551.9,24.9,618,0,690.1,0   C861,0,999.2,139.1,999.2,309z"/>
                    </g>
                  </svg>
                </div>
                <div class="icon">
                  <svg viewBox="0 0 300.00001 231.511">
                    <metadata id="metadata6424">
                      <rdf:RDF>
                        <cc:Work rdf:about="">
                          <dc:format>image/svg+xml</dc:format>
                          <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/>
                          <dc:title/>
                        </cc:Work>
                      </rdf:RDF>
                    </metadata>
                    <defs id="defs6422"/>
                    <style id="style6319" type="text/css">
                      .st0 {
                        fill: #FFFFFF;
                      }

                      .st1 {
                        fill: url(#SVGID_1_);
                      }

                      .st2 {
                        fill: url(#SVGID_2_);
                      }

                      .st3 {
                        fill: url(#SVGID_3_);
                      }

                      .st4 {
                        fill: url(#SVGID_4_);
                      }

                      .st5 {
                        fill: url(#SVGID_5_);
                      }
                    </style>
                    <g transform="translate(-9.4000001,96.810998)" id="g6321">
                      <g transform="matrix(1.8215159,0,0,1.8215159,-8.5437653,-109.83667)" id="g6323">
                        <path style="fill:#ffffff" id="path6325"
                              d="m 174,108.3 c 0,14 -11.4,25.4 -25.4,25.4 l -138.2,0 0,-100.6 c 0,-14 11.4,-25.4 25.4,-25.4 l 138.2,0 0,100.6 z"
                              class="st0"/>
                        <g id="g6327">
                          <linearGradient gradientTransform="matrix(1.125,0,0,1.125,-11.9755,-13.8615)" y2="81.398598"
                                          x2="157.3299" y1="81.398598" x1="117.3856" gradientUnits="userSpaceOnUse"
                                          id="SVGID_1_">
                            <stop id="stop6330" style="stop-color:#007940" offset="0"/>
                            <stop id="stop6332" style="stop-color:#00873F" offset="0.2285"/>
                            <stop id="stop6334" style="stop-color:#40A737" offset="0.7433"/>
                            <stop id="stop6336" style="stop-color:#5CB531" offset="1"/>
                          </linearGradient>
                          <path style="fill:url(#SVGID_1_)" id="path6338"
                                d="m 129,82.5 10.5,0 c 0.3,0 1,-0.1 1.3,-0.1 2,-0.4 3.7,-2.2 3.7,-4.7 0,-2.4 -1.7,-4.2 -3.7,-4.7 -0.3,-0.1 -0.9,-0.1 -1.3,-0.1 l -10.5,0 0,9.6 z"
                                class="st1"/>
                          <linearGradient gradientTransform="matrix(1.125,0,0,1.125,-11.9755,-13.8615)" y2="75.171402"
                                          x2="157.3318" y1="75.171402" x1="117.3844" gradientUnits="userSpaceOnUse"
                                          id="SVGID_2_">
                            <stop id="stop6341" style="stop-color:#007940" offset="0"/>
                            <stop id="stop6343" style="stop-color:#00873F" offset="0.2285"/>
                            <stop id="stop6345" style="stop-color:#40A737" offset="0.7433"/>
                            <stop id="stop6347" style="stop-color:#5CB531" offset="1"/>
                          </linearGradient>
                          <path style="fill:url(#SVGID_2_)" id="path6349"
                                d="m 138.3,16.2 c -10,0 -18.2,8.1 -18.2,18.2 l 0,18.9 25.7,0 c 0.6,0 1.3,0 1.8,0.1 5.8,0.3 10.1,3.3 10.1,8.5 0,4.1 -2.9,7.6 -8.3,8.3 l 0,0.2 c 5.9,0.4 10.4,3.7 10.4,8.8 0,5.5 -5,9.1 -11.6,9.1 l -28.2,0 0,37 26.7,0 c 10,0 18.2,-8.1 18.2,-18.2 l 0,-90.9 -26.6,0 z"
                                class="st2"/>
                          <linearGradient gradientTransform="matrix(1.125,0,0,1.125,-11.9755,-13.8615)" y2="68.399101"
                                          x2="157.33051" y1="68.399101" x1="117.3846" gradientUnits="userSpaceOnUse"
                                          id="SVGID_3_">
                            <stop id="stop6352" style="stop-color:#007940" offset="0"/>
                            <stop id="stop6354" style="stop-color:#00873F" offset="0.2285"/>
                            <stop id="stop6356" style="stop-color:#40A737" offset="0.7433"/>
                            <stop id="stop6358" style="stop-color:#5CB531" offset="1"/>
                          </linearGradient>
                          <path style="fill:url(#SVGID_3_)" id="path6360"
                                d="m 143.2,63.1 c 0,-2.4 -1.7,-4 -3.7,-4.3 -0.2,0 -0.7,-0.1 -1,-0.1 l -9.5,0 0,8.8 9.5,0 c 0.3,0 0.9,0 1,-0.1 2,-0.3 3.7,-1.9 3.7,-4.3 z"
                                class="st3"/>
                        </g>
                        <linearGradient gradientTransform="matrix(1.125,0,0,1.125,-11.9755,-13.8615)" y2="75.171402"
                                        x2="68.522102" y1="75.171402" x1="27.9594" gradientUnits="userSpaceOnUse"
                                        id="SVGID_4_">
                          <stop id="stop6363" style="stop-color:#1F286F" offset="0"/>
                          <stop id="stop6365" style="stop-color:#004E94" offset="0.4751"/>
                          <stop id="stop6367" style="stop-color:#0066B1" offset="0.8261"/>
                          <stop id="stop6369" style="stop-color:#006FBC" offset="1"/>
                        </linearGradient>
                        <path style="fill:url(#SVGID_4_)" id="path6371"
                              d="m 37.7,16.2 c -10,0 -18.2,8.1 -18.2,18.2 l 0,44.9 c 5.1,2.5 10.4,4.1 15.7,4.1 6.3,0 9.7,-3.8 9.7,-9 l 0,-21.2 15.6,0 0,21.1 c 0,8.2 -5.1,14.9 -22.4,14.9 -10.5,0 -18.7,-2.3 -18.7,-2.3 l 0,38.3 26.7,0 c 10,0 18.2,-8.1 18.2,-18.2 l 0,-90.8 -26.6,0 z"
                              class="st4"/>
                        <linearGradient gradientTransform="matrix(1.125,0,0,1.125,-11.9755,-13.8615)" y2="75.171402"
                                        x2="111.8553" y1="75.171402" x1="72.459503" gradientUnits="userSpaceOnUse"
                                        id="SVGID_5_">
                          <stop id="stop6374" style="stop-color:#6C2C2F" offset="0"/>
                          <stop id="stop6376" style="stop-color:#882730" offset="0.1735"/>
                          <stop id="stop6378" style="stop-color:#BE1833" offset="0.5731"/>
                          <stop id="stop6380" style="stop-color:#DC0436" offset="0.8585"/>
                          <stop id="stop6382" style="stop-color:#E60039" offset="1"/>
                        </linearGradient>
                        <path style="fill:url(#SVGID_5_)" id="path6384"
                              d="m 88,16.2 c -10,0 -18.2,8.1 -18.2,18.2 l 0,23.8 c 4.6,-3.9 12.6,-6.4 25.5,-5.8 6.9,0.3 14.3,2.2 14.3,2.2 l 0,7.7 c -3.7,-1.9 -8.1,-3.6 -13.8,-4 -9.8,-0.7 -15.7,4.1 -15.7,12.5 0,8.5 5.9,13.3 15.7,12.5 5.7,-0.4 10.1,-2.2 13.8,-4 l 0,7.7 c 0,0 -7.3,1.9 -14.3,2.2 -12.9,0.6 -20.9,-1.9 -25.5,-5.8 l 0,42 26.7,0 c 10,0 18.2,-8.1 18.2,-18.2 l 0,-91 -26.7,0 z"
                              class="st5"/>
                      </g>
                      <g id="g6386"/>
                    </g>
                  </svg>
                </div>
              </div>
              <div class="form-postscript">МИР, VISA International, Mastercard Worldwide, JCB</div>
            </div>
            <button @click="createOrder" class="btn">оформить заказ</button>
            <div class="form-postscript">Нажимая на кнопку выше, вы даете свое согласие на <a
              href="/static/personal-data.pdf" target="_blank">обработку
              персональных данных</a><br><a href="/static/politics.pdf">Политика обработки персональных данных</a></div>
          </form>
        </div>
        <div class="form-postscript ta-l">При отказе бронирования за 4 дня деньги возвращаются в полном размере, если
          позже
          деньги не возвращаются. <br><br>Возврат переведённых средств, производится на ваш банковский счёт в течении
          5-30 рабочих дней. ( срок зависит от банка, который выдал вашу банковскую карту).<br><br>Для оплаты (ввода
          реквизитов Вашей карты) вы будете перенаправлены на платежный шлюз ПАО СБЕРБАНК. Соединение с платежным шлюзом
          и передача информации осуществляется в защищённом режиме с использованием протокола шифрования SSL. В случае
          если ваш банк поддерживает технологию безопасного проведения интернет- платежей Verified By Visa, MasterCard
          SecureCode, MIR Accept, J-Secure для проведения платежа также может потребоваться ввод специального пароля.
          <br><br>Настоящий сайт поддерживает 256- битное шифрование. Конфиденциальность сообщаемой персональной
          информации
          обеспечивается ПАО СБЕРБАНК. Введённая информация не будет предоставлена третьим лицам за исключением случаев,
          предусмотренных законодательством РФ. <br>Проведение платежей по банковским картам осуществляется в строгом
          соответсвии с требованиями платежных систем
          МИР, Visa int, MasterCard Europe Sprl, JCB.
        </div>
      </div>
    </section>

    <section class="similar-products" v-if="$store.getters['products/products'].length > 0">
      <div class="container">
        <h2 class="section__title">Возможно вам понравятся другие товары</h2>
        <div class="grid">
          <ProductCard
            v-for="product in $store.getters['products/products']"
            :key="product.id"
            :data="product"
          ></ProductCard>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
import 'vue2-datepicker/locale/ru';
import Breadcrumbs from "@/components/Breadcrumbs";
import ProductCard from "@/components/Shop/ProductCard";
import ProductInBasket from "@/components/Basket/ProductInBasket";
import FilterCheckbox from "@/components/Shop/FilterCheckbox";

export default {
  name: "basket",
  components: {Breadcrumbs, ProductCard, ProductInBasket, FilterCheckbox, DatePicker},
  computed: {
    productsString() {
      if (this.$store.getters["basket/totalProducts"] === 1) {
        return '1 товар'
      }
      if (this.$store.getters["basket/totalProducts"] > 1 && this.$store.getters["basket/totalProducts"] < 5) {
        return `${this.$store.getters["basket/totalProducts"]} товара`
      }
      return `${this.$store.getters["basket/totalProducts"]} товаров`
    },
    totalPrice() {
      if (this.form.date) {
        return this.$store.getters["basket/totalPrice"] * (this.form.date[1] - this.form.date[0]) / 1000 / 60 / 60 / 24
      }
      return null
    },
    totalDiscount() {
      if (this.form.date) {
        return (this.$store.getters["basket/totalPrice"] + this.$store.getters["basket/totalDiscount"]) * (this.form.date[1] - this.form.date[0]) / 1000 / 60 / 60 / 24
      }
      return null
    }
  },
  methods: {
    disableDate(date) {
      const today = new Date()
      return date < today.setDate(today.getDate() - 1);
    },
    async createOrder(e) {
      e.preventDefault()
      const payment = Object.keys(this.payment).find(k => this.payment[k] === true)
      await this.$store.dispatch('popup/enableLoading')
      const data = await this.$store.dispatch("basket/createOrder", {
        form: this.form,
        payment
      })
      if ('payment_data' in data) {
        const url = data['payment_data']['formUrl']
        window.location.href = url
      } else {
        await this.$store.dispatch('popup/disableLoading')
        await this.$store.dispatch('notifications/createNotification', 'Заказ успешно создан!')
        await this.$router.push('/')
      }
    }
  },
  data: () => ({
    form: {
      date: null,
      name: '',
      phone: '',
      email: '',
      city: '',
      address: '',
      comment: ''
    },
    payment: {
      bank_card: false,
      cash_courier: false,
      cash_shop: false
    },
  }),
  async fetch() {
    await this.$store.dispatch("products/getProducts", {
      baseCategory: 'inventory',
      subCategory: this.$route.params.slug || null
    })
  }
}
</script>

<style scoped>

</style>
