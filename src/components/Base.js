import Header from './Header';
import Article from './Article';
import Sidebar from './Sidebar';
import Pricing from './Pricing';
import Footer from './Footer';

function Base() {
    return (
        <>
            <div class="container">
                <Header />
                <Article />
                <Sidebar />
            </div>
            <div class="container">
                <Pricing />
            </div>
            <Footer />
        </>
    );
}  
export default Base;