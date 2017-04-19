 Stripe.setPublishableKey('pk_test_22OAlC8uoy6onuNXatxqFUkx');

    var $btn = $('#submit');
    $btn.on('click', function() {
        $btn.prop('disabled', true);
        $btn.button('progress');

        var cardNum = $('#card-num').val();
        var cardExp = $('#card-exp').val().split('/');
        var cardCVC = $('#card-cvc').val();

        // First submit the card information to Stripe to get back a token
        Stripe.card.createToken({
            number: cardNum,
            exp_month: cardExp[0],
            exp_year: cardExp[1],
            cvc: cardCVC
        }, function(status, response) {
            var $form = $('#form');
            var token = response.id;

            // Save the token into a hidden input field
            $form.append($('<input type="hidden" name="stripeToken" />').val(token));

            // Now submit the form to our server so it can make the charge against the token
            $form.get(0).submit();

            // All done!
            $btn.addClass('btn-success').removeClass('btn-primary');
            $btn.button('success');
            setTimeout(function() {
                $('#checkout').modal('hide');
            }, 250);
        });

        return false;
    });
