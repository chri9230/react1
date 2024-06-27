import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';

function FormExample() {
  const { Formik } = formik;

  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    username: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    zip: yup.string().required(),
    file: yup.mixed().required(),
    terms: yup.bool().required().oneOf([true], 'terms must be accepted'),
  });

  return (
    <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        firstName: 'Mark',
        lastName: 'Otto',
        username: '',
        city: '',
        state: '',
        zip: '',
        file: null,
        terms: false,
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Row className="mb-3">
            <h3 className='text-center p-3'>INSERIMENTO NUOVO ARTICOLO</h3>

            {/* CODICE ARTICOLO */}

            <Form.Group
              as={Col}
              md="4"
              controlId="validationFormik101"
              className="position-relative"
            >
              <Form.Label>CODICE ARTICOLO</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                isValid={touched.firstName && !errors.firstName}
              />
              <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
            </Form.Group>

            {/* CODICE ARTICOLO FORNITORE */}

            <Form.Group
              as={Col}
              md="4"
              controlId="validationFormik103"
              className="position-relative"
            >
              <Form.Label>CODICE ARTICOLO FORNITORE</Form.Label>
              <Form.Control
                type="text"
                placeholder="City"
                name="city"
                value={values.city}
                onChange={handleChange}
                isInvalid={!!errors.city}
              />

              <Form.Control.Feedback type="invalid" tooltip>
                {errors.city}
              </Form.Control.Feedback>
            </Form.Group>

            {/* CODICE EAN */}

            <Form.Group
              as={Col}
              md="4"
              controlId="validationFormik102"
              className="position-relative"
            >
              <Form.Label>CODICE EAN</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                isValid={touched.lastName && !errors.lastName}
              />

              <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
            </Form.Group>

            {/* DESCRIZIONE ARTICOLO */}

            <Form.Group as={Col} md="12" controlId="validationFormikUsername2">
              <Form.Label>DESCRIZIONE ARTICOLO</Form.Label>
              <InputGroup hasValidation>

                <Form.Control
                  type="text"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  isInvalid={!!errors.username}
                />
                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.username}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>



          <Row className="mb-3">





            {/* PRIMO */}

            <Form.Group
              as={Col}
              md="3"
              controlId="validationFormik104"
              className="position-relative"
            >
              <Form.Label>Seleziona l'unità di misura di vendita</Form.Label>
              <Form.Select aria-label="Default select example">

                <option value="1">Pz</option>
                <option value="2">Kg</option>
                <option value="3">Mq</option>
                <option value="4">Ml</option>
                <option value="5">Mc</option>
              </Form.Select>

              <Form.Control.Feedback type="invalid" tooltip>
                {errors.state}
              </Form.Control.Feedback>
            </Form.Group>

            {/* SECONDO */}

            <Form.Group
              as={Col}
              md="3"
              controlId="validationFormik104"
              className="position-relative"
            >
              <Form.Label>Seleziona il Brand</Form.Label>
              <Form.Select aria-label="Default select example">

                <option value="1">Makita</option>
                <option value="2">DeWalt</option>
                <option value="3">Milwaukee</option>
                <option value="4">Leica</option>
                <option value="5">Festool</option>
              </Form.Select>

              <Form.Control.Feedback type="invalid" tooltip>
                {errors.state}
              </Form.Control.Feedback>
            </Form.Group>

            {/* CATEGORIA */}

            <Form.Group
              as={Col}
              md="3"
              controlId="validationFormik104"
              className="position-relative"
            >
              <Form.Label>Categoria Prodotto</Form.Label>
              <Form.Select aria-label="Default select example">

                <option value="1">Elettroutensili</option>
                <option value="2">Ferramenta</option>
                <option value="3">Isolanti</option>
                <option value="4">Porte</option>
                <option value="5">Abbigliamento</option>
              </Form.Select>

              <Form.Control.Feedback type="invalid" tooltip>
                {errors.state}
              </Form.Control.Feedback>
            </Form.Group>

            {/* PESO */}

            <Form.Group
              as={Col}
              md="3"
              controlId="validationFormik104"
              className="position-relative"
            >
              <Form.Label>Peso (Kg)</Form.Label>
              <Form.Control
                type="number"
                name="productCategory"
                id="productCategory"
                value={values.productCategory}
                onChange={handleChange}
                min="1"   
                step="5"
              />
            </Form.Group>



          </Row>

          <Row>

          <Form.Group
              as={Col}
              md="3"
              controlId="validationFormik104"
              className="position-relative"
            >
              <Form.Label>Prezzo d'acquisto (€)</Form.Label>
              <Form.Control
                type="number"
                name="productCategory"
                id="productCategory"
                value={values.productCategory}
                onChange={handleChange}
                min="1"   
                step="1"
              />
            </Form.Group>

            <Form.Group
              as={Col}
              md="3"
              controlId="validationFormik104"
              className="position-relative"
            >
              <Form.Label>Prezzo d'acquisto Medio (€)</Form.Label>
              <Form.Control
                type="number"
                name="productCategory"
                id="productCategory"
                value={values.productCategory}
                onChange={handleChange}
                min="1"   
                step="1"
              />
            </Form.Group>
          </Row>



          <Form.Group className="position-relative mb-3">
            <Form.Label>Aggiungi un immagine prodotto</Form.Label>
            <Form.Control
              type="file"
              required
              name="file"
              onChange={handleChange}
              // isInvalid={!!errors.file}
            />
            <Form.Control.Feedback type="invalid" tooltip>
              {errors.file}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="position-relative mb-3">
            <Form.Check
              required
              name="terms"
              label="Agree to terms and conditions"
              onChange={handleChange}
              isInvalid={!!errors.terms}
              feedback={errors.terms}
              feedbackType="invalid"
              id="validationFormik106"
              feedbackTooltip
            />
          </Form.Group>
          <Button type="submit">Submit form</Button>
        </Form>
      )}
    </Formik>
  );
}

export default FormExample;