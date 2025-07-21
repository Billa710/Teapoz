let Cart = [];
    function addToCart(productName, price) {
      Cart.push({ name: productName, price: price });
      alert(`${productName} has been added to your cart!`);
      console.log('Current Cart:', Cart);
    }   
    document.querySelectorAll('.nav-links a').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const sectionId = this.getAttribute('href').substring(1);
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      });
    });

