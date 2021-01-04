import React, { useState, useEffect } from 'react';
import { ImageBackground, StyleSheet, View, ScrollView } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';

import AppHeader from '../components/AppHeader';
import Button from '../components/AppFormButton';
import colors from '../config/colors';
import Input from '../components/AppFormInput';
import Text from '../components/AppText';
import { getSeat } from '../redux/actions/seatActions';

const validationSchema = Yup.object().shape({
  reg: Yup.string().min(16).required().label('Registration Number'),
});

const WelcomeScreen = () => {
  const dispatch = useDispatch();
  const seat = useSelector((state) => state.seats.seat);
  const error = useSelector(
    (state) => state.errors.msg.error || state.errors.msg.msg
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [newReg, setNewReg] = useState({});
  const [backErr, setBackErr] = useState('');
  useEffect(() => {
    setBackErr(error);
    setTimeout(() => {
      setBackErr('');
    }, 15000);
  }, [error]);
  const submitReg = (reg) => {
    setIsSubmitting(true);
    setNewReg(reg);
  };
  useEffect(() => {
    if (isSubmitting) {
      dispatch(getSeat(newReg));
      setTimeout(() => {
        setIsSubmitting(false);
      }, 15000);
    }
  }, [isSubmitting]);

  return (
    <>
      <AppHeader />
      <View style={styles.container}>
        <View style={styles.logo}>
          <ImageBackground
            source={require('../assets/home.png')}
            style={styles.image}
          />
        </View>
        <ScrollView style={styles.seat}>
          <Text style={styles.title}>
            Enter Your Registration Number To View Seat
          </Text>
          <Formik
            initialValues={{ reg: '' }}
            onSubmit={submitReg}
            validationSchema={validationSchema}
          >
            {({ handleSubmit, handleChange, errors }) => (
              <>
                <Input
                  label='Registration Number'
                  placeholder='eg: D/BCS/17/09/6177'
                  onChangeText={handleChange('reg')}
                />
                {errors ? <Text style={styles.danger}>{errors.reg}</Text> : ''}
                <Button
                  title='View Seat'
                  style={styles.btn}
                  onPress={handleSubmit}
                />
              </>
            )}
          </Formik>
          {isSubmitting && Object.keys(seat).length > 0 ? (
            <View style={styles.seatView}>
              <Text style={styles.seatText}>Name:{seat.name}</Text>
              <Text style={styles.seatText}>RegNo: {seat.regNo}</Text>
              <Text style={styles.seatText}>Level: {seat.level}</Text>
              <Text style={styles.seatText}>Course: {seat.course.name}</Text>
              <Text style={styles.seatText}>
                Seat: {seat.seat.seatNumber}-{seat.seat.room}
              </Text>
            </View>
          ) : null}
          {backErr ? (
            <View style={styles.seatError}>
              <Text style={styles.seatText}>{backErr}</Text>
            </View>
          ) : null}
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  btn: {
    textTransform: 'uppercase',
  },
  container: {
    flex: 1,
  },
  danger: {
    marginLeft: 10,
    color: colors.danger,
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  logo: {
    flex: 1 / 2,
  },
  seat: {
    flex: 1 / 2,
    backgroundColor: colors.background,
  },
  seatError: {
    margin: 20,
    padding: 20,
    backgroundColor: colors.danger,
  },
  seatText: {
    color: colors.text,
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
    textTransform: 'uppercase',
  },
  seatView: {
    margin: 20,
    padding: 20,
    backgroundColor: colors.success,
  },
  title: {
    borderBottomColor: colors.text,
    borderBottomWidth: 1,
    color: colors.text,
    fontSize: 20,
    fontWeight: '400',
    textAlign: 'center',
    marginVertical: 10,
  },
});

export default WelcomeScreen;
