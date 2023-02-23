import React from 'react'
import Card from '../Card/Card';

const Content = () => {
    return <main>
        <h3 className='Header'>Техника в наличии</h3>
        <hr></hr>
        <div class="album py-5 bg-light">
            <div class="container">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <Card title='Беззеркальная камера Sony ZV-1 черная'
                        image='photo1.jpg'
                        description='20.1 Мп, 13.2 x 8.8 мм, CMOS, диафрагма: f/1.8-2.8, 100-12800 ISO, 24 кадр./сек, экран - поворотный'
                        price='59 999' />
                    <Card title='Беззеркальная камера Canon EOS M200 Kit 15-45mm IS STM черная'
                        image='photo2.jpg'
                        description='25.8 Мп, 22.3 х 14.9 мм, CMOS, диафрагма: f/3.5-6.3, 100-25600 ISO, 6.1 кадр./сек, экран - поворотный, сенсорный'
                        price='43 999' />
                    <Card title='Беззеркальная камера Canon EOS R10 Body черная'
                        image='photo3.jpg'
                        description='25.5 Мп, 22.3 х 14.9 мм, CMOS, 100-32000 ISO, 23 кадр./сек'
                        price='67 999' />
                    <Card title='Беззеркальная камера Sony Alpha (ILCE-6400LB) Kit 16-50mm черная'
                        image='photo4.jpg'
                        description='25 Мп, 23.5 x 15.6 мм, CMOS, диафрагма: f/3.5-5.6, 100-32000 ISO, 11 кадр./сек, экран - поворотный, сенсорный'
                        price='89 999' />
                </div>
            </div>
        </div>
    </main>
}
export default Content;